models 		= require '../models'
redis     = models.redis
winston 	= require 'winston'
async 		= require 'async'

_ = require 'underscore'

exports.setlist = require './setlist'

error = (res) ->
	return (err) ->
		res.json is_success: false, data: err

not_found = (res) ->
	res.json 404, is_success: false, data: null

success = (data) ->
	res = is_success: true

	if Array.isArray data
		res.length = data.length

	res.data = data

	return res

cleanup_shows = (shows, removeReviews = false) ->
	if not Array.isArray shows
		if removeReviews
			shows.reviews = undefined
		else if shows.reviews
			shows.reviews = JSON.parse shows.reviews
		return shows

	return shows.map (v) ->
		if removeReviews
			v.reviews = undefined
		else if v.reviews
			v.reviews = JSON.parse(v.reviews)
		return v

exports.status = (req, res) ->
	res.json success: true

exports.artists = (req, res) ->
	models.sequelize.query("""SELECT *, (SELECT COUNT(id) FROM Shows WHERE ArtistId = Artists.id) as recording_count
								FROM Artists
								""")
					.catch(error(res))
					.spread (artists) ->
						res.json success artists

exports.single_artist = (req, res) ->
	models.Artist.find(where: slug: req.params['artist_slug']).catch(error(res)).then (artist) ->
		return not_found(res) if not artist

		res.json success artist

exports.artist_shows = (req, res) ->
	models.Artist.find(where: slug: req.params['artist_slug']).catch(error(res)).then (artist) ->
		return not_found(res) if not artist

		artist.getShows().catch(error(res)).then (shows) ->
			res.json success cleanup_shows shows

exports.artist_years = (req, res) ->
	models.Artist.find(where: slug: req.params['artist_slug']).catch(error(res)).then (artist) ->
		return not_found(res) if not artist

		artist.getYears().catch(error(res)).then (years) ->
			res.json success years

exports.artist_year_shows = (req, res) ->
	models.Artist.find(where: slug: req.params['artist_slug']).catch(error(res)).then (artist) ->
		return not_found(res) if not artist

		artist.getYears(where: year: req.params['year']).catch(error(res)).then (years) ->
			return not_found(res) if not years or years.length is 0

			year = years[0].toJSON()
			models.sequelize.query("""SELECT COUNT(`Shows`.`display_date`) as recording_count, `Shows`.title, Shows.date, Shows.display_date,
													Shows.year,
													Shows.archive_identifier, Shows.id, Shows.VenueId, Shows.ArtistId, Shows.is_soundboard,
											   AVG(Shows.duration) as duration,
											   SUM(Shows.reviews_count) as reviews_count, MAX(Shows.average_rating) as average_rating,
											   `Venues`.`city` as venue_city, `Venues`.`name` as venue_name
										FROM `Shows`
											INNER JOIN `Venues` on `Shows`.`VenueId` = `Venues`.`id`
										WHERE `ArtistId` = ? AND `year` = ?
										GROUP BY `Shows`.`display_date`
										ORDER BY date ASC
										""", {replacements: [artist.id, year.year]})
							.catch(error(res))
							.spread (shows) ->
								year.shows = cleanup_shows shows
								res.json success year

exports.top_shows = (req, res) ->
	models.Artist.find(where: slug: req.params['artist_slug']).catch(error(res)).then (artist) ->
		return not_found(res) if not artist

		models.sequelize.query("""SELECT COUNT(`Shows`.`display_date`) as recording_count, `Shows`.title, Shows.date, Shows.display_date,
												Shows.year,
												Shows.archive_identifier, Shows.id, Shows.VenueId, Shows.ArtistId, Shows.is_soundboard,
										   AVG(Shows.duration) as duration,
										   SUM(Shows.reviews_count) as reviews_count, MAX(Shows.average_rating) as average_rating,
										   `Venues`.`city` as venue_city, `Venues`.`name` as venue_name
									FROM `Shows`
										INNER JOIN `Venues` on `Shows`.`VenueId` = `Venues`.`id`
									WHERE `ArtistId` = ? AND reviews_count > ?
									GROUP BY `Shows`.`display_date`
									ORDER BY average_rating DESC, reviews_count DESC
									LIMIT 30
									""", {replacements: [artist.id, 1]})
						.catch(error(res))
						.spread (shows) ->
							res.json success cleanup_shows shows, true

exports.random_show = (req, res) ->
	models.Artist.find(where: slug: req.params['artist_slug']).catch(error(res)).then (artist) ->
		return not_found(res) if not artist

		artist.getShows(
			group: 'display_date'
			order: [
				{raw: 'RAND()'}
			]
			limit: 1
		).catch(error(res)).then (shows) ->
			return not_found(res) if not shows or shows.length is 0

			artist.getShows(where: display_date: shows[0].display_date)
				.catch(error(res))
				.then (shows) ->
					json = []
					async.each shows, (show, cb) ->
						show.getTracks(order: 'track ASC').catch((err) -> cb(err)).then (tracks) ->
							show.getVenue().catch((err) -> cb(err)).then (venue) ->
								show = show.toJSON()
								show.tracks = tracks

								delete show.VenueId
								show.venue = venue

								json.push cleanup_shows show

								cb null
					, (err) ->
						return error(res)(err) if err

						json = json.sort (a, b) ->
							diff = b.average_rating - a.average_rating
							return b.reviews_count - a.reviews_count if diff is 0
							return diff

						res.set 'Cache-Control', 'no-cache'
						res.json success json

exports.random_date = (req, res) ->
	models.Artist.find(where: slug: req.params['artist_slug']).catch(error(res)).then (artist) ->
		return not_found(res) if not artist

		artist.getShows(
			group: 'display_date'
			order: [
				{raw: 'RAND()'}
			]
			limit: 1
		).catch(error(res)).then (shows) ->
			return not_found(res) if not shows or shows.length is 0

			res.set 'Cache-Control', 'no-cache'
			res.json success shows[0].display_date

exports.single_show = (req, res) ->
	models.Show.find(where: id: req.params['show_id']).catch(error(res)).then (show) ->
		return not_found(res) if not show

		show.getTracks().catch(error(res)).then (tracks) ->
			show.getVenue().catch(error(res)).then (venue) ->
				show = show.toJSON()
				show.tracks = tracks

				delete show.VenueId
				show.venue = venue

				res.json success cleanup_shows show

exports.artist_show_by_date = (req, res) ->
	models.Artist.find(where: slug: req.params['artist_slug']).catch(error(res)).then (artist) ->
		return not_found(res) if not artist

		artist.getShows(
			where: ['display_date = ?', req.param 'show_date']
			order: 'weighted_avg DESC'
		).catch(error(res)).then (shows) ->
			return not_found(res) if not shows or shows.length is 0

			json = []
			async.each shows, (show, cb) ->
				show.getTracks(order: 'track ASC').catch((err) -> cb(err)).then (tracks) ->
					show.getVenue().catch((err) -> cb(err)).then (venue) ->
						show = show.toJSON()
						show.tracks = tracks

						delete show.VenueId
						show.venue = venue

						json.push cleanup_shows show

						cb null
			, (err) ->
				return error(res)(err) if err

				res.json success json

exports.artist_venues = (req, res) ->
	models.Artist.find(where: slug: req.params['artist_slug']).catch(error(res)).then (artist) ->
		return not_found(res) if not artist

		models.sequelize.query("SELECT *, (select count(DISTINCT display_date) FROM Shows WHERE VenueId = v.id AND ArtistId = ?) as show_count
									FROM `Venues` as v
								ORDER BY show_count DESC", {replacements: [artist.id]})
			.catch(error(res))
			.spread (venues) ->
				res.json success venues.filter((v) -> v.show_count > 0)

exports.single_venue = (req, res) ->
	models.Artist.find(where: slug: req.params['artist_slug']).catch(error(res)).then (artist) ->
		return not_found(res) if not artist

		models.Venue.findById(req.params['venue_id']).catch(error(res)).then (venue) ->
			return not_found(res) if not venue

			models.sequelize.query("""SELECT COUNT(`Shows`.`display_date`) as recording_count, `Shows`.title, Shows.date, Shows.display_date,
													Shows.year,
													Shows.archive_identifier, Shows.id, Shows.VenueId, Shows.ArtistId, Shows.is_soundboard,
											   AVG(Shows.duration) as duration,
											   SUM(Shows.reviews_count) as reviews_count, MAX(Shows.average_rating) as average_rating,
											   `Venues`.`city` as venue_city, `Venues`.`name` as venue_name
										FROM `Shows`
											INNER JOIN `Venues` on `Shows`.`VenueId` = `Venues`.`id`
										WHERE `ArtistId` = ? AND `VenueId` = ?
										GROUP BY `Shows`.`display_date`
										ORDER BY date ASC
										""", { replacements: [artist.id, venue.id] })
							.catch(error(res))
							.spread (shows) ->
								venue = venue.toJSON()
								venue.shows = cleanup_shows shows
								res.json success venue

exports.artist_mp3 = (req, res) ->
	models.Track.find(where: id: req.params['track_id']).catch(error(res)).then (track) ->
		return not_found(res) if not track

		res.redirect track.file

exports.search = (req, res) ->
	q = req.query.q

	res.send(404) if not q

	models.Artist.find(where: slug: req.params['artist_slug']).catch(error(res)).then (artist) ->
		return not_found(res) if not artist

		q = '%' + q + '%'

		# search Shows, Tracks, Venues

		async.parallel([
			(cb) ->
				models.sequelize.query("""SELECT * FROM Shows WHERE ArtistId = :artist AND (
												title LIKE :query OR date LIKE :query OR year LIKE :query OR
												source LIKE :query OR lineage LIKE :query OR taper LIKE :query OR
												description LIKE :query OR archive_identifier LIKE :query OR
												reviews LIKE :query) LIMIT 15""", {replacements: {'artist': artist.id, 'query': q}})
								.catch(error(res))
								.spread (shows) ->
									cb null, {type: "shows", data: shows}
			,
			(cb) ->
				models.sequelize.query("""SELECT Tracks.length, Tracks.title, Tracks.track, Tracks.slug, Tracks.id, Shows.year, Shows.date, Shows.ArtistId
											FROM Tracks
												INNER JOIN `Shows` on Shows.id = Tracks.ShowId
										  	WHERE Shows.ArtistId = :artist AND Tracks.title LIKE :query LIMIT 15""", {replacements: {'artist': artist.id, 'query': q}})
								.catch(error(res))
								.spread (tracks) ->
									cb null, {type: "tracks", data: tracks}
			,
			(cb) ->
				models.sequelize.query("SELECT * FROM Venues WHERE name LIKE :query OR city LIKE :query LIMIT 15", {replacements: {'query': q}})
								.catch(error(res))
								.spread (venues) ->
									cb null, {type: "venues", data: venues}
			,
		], (err, results) ->
			return error(res) if err

			final = shows: [], tracks: [], venues: []

			for search_result in results
				final.shows = final.shows.concat(search_result.data) if search_result.type is "shows"
				final.tracks = final.tracks.concat(search_result.data) if search_result.type is "tracks"
				final.venues = final.venues.concat(search_result.data) if search_result.type is "venues"

			final.shows = cleanup_shows final.shows

			res.json success final
		)

exports.search_data = (req, res) ->
	oup = []
	models.Show.findAll().catch(error(res)).then (shows) ->
		shows = cleanup_shows shows

		oup = oup.concat shows.map (v) ->
			v = v.toJSON()
			v._index = 'search'
			v._type = 'show'
			v._id = v.id

			delete v.id
			return v

		models.Venue.findAll().catch(error(res)).then (venues) ->
			oup = oup.concat venues.map (v) ->
				v = v.toJSON()
				v._index = 'search'
				v._type = 'venue'
				v._id = v.id

				delete v.id
				return v

			models.Track.findAll().catch(error(res)).then (venues) ->
				oup = oup.concat venues.map (v) ->
					v = v.toJSON()
					v._index = 'search'
					v._type = 'track'
					v._id = v.id

					delete v.id
					return v

				final = []
				oup.forEach (v) ->
					final.push JSON.stringify index: {_index: v._index, _type: v._type, _id: v._id}
					final.push JSON.stringify v

				res.send final.join("\n")

exports.today = (req, res) ->
	now = new Date()
	month = now.getMonth() + 1
	day = now.getDate()
	month = "0#{month}" if month < 10
	day = "0#{day}" if day < 10
	DATE_REGEX = new RegExp("#{month}-#{day}$");

	redis.get "tih-#{month}-#{day}", (err, response) ->
		return res.json tih: JSON.parse response if !err && response

		models.sequelize.query("""
			SELECT `id`,`title`,`display_date`,`date`,`ArtistId`,`year`
			FROM Shows
			WHERE display_date LIKE :string
			GROUP BY display_date
			ORDER BY ArtistId
		""", {replacements: 'string': "%#{month}-#{day}"})
						.catch(error(res))
						.spread (shows) ->
							models.sequelize.query("SELECT * FROM Artists ORDER BY name")
								.catch(error(res))
								.spread (artists) ->
									shows = shows.filter (show) -> DATE_REGEX.test show.display_date
									             .map (show) ->
										             	[year, month, day] = show.display_date.split('-')
										             	show.month = month
										             	show.day = day
										             	show

									grouped = _.groupBy shows, 'ArtistId'

									gd = {}
									phish = {}

									output = artists.map((artist) ->
										obj = shows: grouped[artist.id], name: artist.name, slug: artist.slug
										gd = obj if artist.slug == "grateful-dead"
										phish = obj if artist.slug == "phish"
										obj
									).filter (artist) ->
										artist.shows && !/(phish)|(grateful\-dead)/.test(artist.slug)

									output.unshift phish if phish.shows?.length
									output.unshift gd if gd.shows?.length

									redis.set "tih-#{month}-#{day}", JSON.stringify output
									redis.expire "tih-#{month}-#{day}", 86400

									res.json tih: output

exports.poll = (req, res) ->
	##{ since } = req.query
	now = Math.floor(Date.now() / 1000)

	handlePlays = (err, plays) ->
		output = plays.map (play) ->
			song = JSON.parse play
			{ title, slug, band, year, month, day, showVersion, id } = song

			return { title, slug, band, year, month, day, showVersion, id }

		res.json plays: output.reverse(), now: now

	#if since
	#	redis.zrangebyscore ['played', since, now], handlePlays
	#else
	redis.zrange 'played', -26, -1, handlePlays

exports.live = (req, res) ->
	{ song } = req.body
	song.showVersion ||= ""

	now = Math.floor(Date.now() / 1000)
	redis.zadd 'played', now, JSON.stringify(song), (length) ->
		res.json song: song, length: length
