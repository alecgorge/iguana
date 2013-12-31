models 		= require '../models'
request 	= require 'request'
winston 	= require 'winston'
async 		= require 'async'
Sequelize 	= models.Sequelize

SEARCH_URL = (collection) -> "http://archive.org/advancedsearch.php?q=collection%3A#{collection}&fl%5B%5D=date&fl%5B%5D=identifier&fl%5B%5D=year&sort%5B%5D=year+asc&sort%5B%5D=&sort%5B%5D=&rows=9999999&page=1&output=json&save=yes"
SINGLE_URL = (identifier) -> "https://archive.org/details/#{identifier}?output=json"

parseTime = (str) -> str.split(':').reverse().map((v, k) -> Math.max(1, 60 * k) * parseInt(v)).reduce((x,y) -> x+y)

refreshData = (artist, done) ->
	winston.info 'requesting search url'
	request SEARCH_URL(artist.archive_collection), (err, httpres, body) ->
		throw err if err

		body = JSON.parse body

		winston.info 'got serach results'
		shows = body['response']['docs']

		async.mapLimit shows, 1, (small_show, cb) ->
			winston.info "requesting #{small_show.date}"
			loadShow artist, small_show, cb
		, done

slugify = (t) ->
	l = t.toLowerCase()

	if l[0...2] is "E:"
		l = l[2..]

	return l.trim().replace(/[^a-z0-9]+/g, '-')

reslug = (done) ->
	chainer = new Sequelize.Utils.QueryChainer
	models.Track.all().error(done).success (tracks) ->
		for track in tracks
			title = track.title.replace(/\\'/g, "'").replace(/\\>/g, ">").replace(/Â»/g, ">").replace(/\([0-9:]+\)/g, '').trim()
			chainer.add track.updateAttributes({
				"slug" : slugify(title)
				"title": title
			})

		chainer.run().error(done).success -> done()

###

-- Cache duration and track counts
INSERT INTO Years (ArtistId, year, show_count, duration, avg_duration, avg_rating,createdAt,updatedAt)
	SELECT ArtistId, year, COUNT(*), SUM(Shows.duration), AVG(Shows.duration), AVG(NULLIF(Shows.average_rating, 0)), NOW(), NOW()
	FROM Shows
	GROUP BY ArtistId, year

-- Cache year information
SELECT year, ArtistId, COUNT(*) FROM Shows GROUP BY ArtistId, year

###
cache_year_stats = (done) ->
	winston.info "Caching year information"
	models.sequelize.query("""
		TRUNCATE TABLE Years; 
		INSERT INTO Years (ArtistId, year, show_count, duration, avg_duration, avg_rating,createdAt,updatedAt)
			SELECT ArtistId, year, COUNT(*), SUM(Shows.duration), AVG(Shows.duration), AVG(Shows.average_rating), NOW(), NOW()
			FROM Shows
			GROUP BY ArtistId, year;
		""").error(done).success(done)

loadShow = (artist, small_show, cb) ->
	models.Show.find(where: archive_identifier: small_show.identifier).error(cb).success (pre_existing_show) ->
		return cb() if pre_existing_show isnt null 
	
		request SINGLE_URL(small_show.identifier), (err, httpres, body) ->
			body = JSON.parse body

			winston.info "GET " + SINGLE_URL(small_show.identifier)

			files = body.files
			mp3_tracks = Object.keys(files).
								filter (v) ->
									file = files[v]

									return false unless file.format is "VBR MP3"

									title = file.title || file.original

									# make sure all required props are there
									if not title or not file.bitrate or not file.size or not file.length or not file.md5
										return false

									return true

			winston.info "mp3 track count: #{mp3_tracks.length}"

			return cb() if mp3_tracks.length is 0

			d = new Date body.metadata.date[0]

			if isNaN(d.getTime())
				parts = body.metadata.date[0].split('-')
				d = new Date "#{parts[0]}-#{parts[2]}-#{parts[1]}"

			showProps =
				title				: body.metadata.title
				date 				: d
				year 				: parseInt body.metadata.year[0]
				source 				: if body.metadata.source then body.metadata.source[0] else "Unknown"
				lineage 			: if body.metadata.lineage then body.metadata.lineage[0] else "Unknown"
				taper 				: if body.metadata.taper then body.metadata.taper[0] else "Unknown"
				description 		: if body.metadata.description then body.metadata.description[0] else ""
				archive_identifier	: body.metadata.identifier[0]
				reviews 			: if body.reviews then JSON.stringify body.reviews.reviews else "[]"
				reviews_count 		: if body.reviews then body.reviews.info.num_reviews else 0
				average_rating 		: if body.reviews then body.reviews.info.avg_rating else 0.0

			showProps.is_soundboard = showProps.archive_identifier.indexOf('sbd') isnt -1 or
									  showProps.title.indexOf('sbd') isnt -1 or
									  showProps.source.indexOf('sbd') isnt -1 or
									  showProps.lineage.indexOf('sbd') isnt -1

			venueProps =
				name 				: if body.metadata.venue then body.metadata.venue[0] else "Unknown"
				city 				: if body.metadata.coverage then body.metadata.coverage[0] else "Unknown"

			track_i = 0
			total_duration = 0
			tracks = mp3_tracks.sort().
								map (v) ->
				file = files[v]

				if not file.track
					track_i += 1

				t = file.title || file.original

				total_duration += parseTime file.length

				t = t.replace(/\\'/g, "'").replace(/\\>/g, ">").replace(/Â»/g, ">").replace(/\([0-9:]+\)/g, '')

				return models.Track.build {
					title 	: t
					md5 	: file.md5
					track 	: if file.track then parseInt file.track else track_i
					bitrate : parseInt file.bitrate
					size 	: parseInt file.size
					length 	: parseTime file.length
					file 	: "https://archive.org/download/#{showProps.archive_identifier}#{v}"
					slug 	: slugify(t)
				}

			showProps.duration = total_duration
			showProps.track_count = tracks.length

			winston.info "looking for show in db"
			models.Show.findOrCreate(date: showProps.date, showProps).error(cb).success (show, created) ->
				return cb() unless created

				winston.info "show created! looking for venue"
				models.Venue.findOrCreate(venueProps, venueProps).error(cb).success (venue, created) ->
					winston.info "building tracks"

					winston.info "setting venue and tracks"
					show.setVenue venue
					show.setArtist artist

					chainer = new Sequelize.Utils.QueryChainer
					chainer.add show.save()

					for tr in tracks
						chainer.add tr.save()

					winston.info "saving!"
					chainer.run().error(cb).success ->
						console.log "done! relating tracks to shows"

						chainer = new Sequelize.Utils.QueryChainer

						for tr in tracks
							tr.setShow show

						chainer.run().error(cb).success ->
							console.log "related"
							cache_year_stats cb

module.exports = exports = refreshData: refreshData, reslug: reslug, slugify: slugify
