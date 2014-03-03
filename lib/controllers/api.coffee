
models 		= require '../models'
winston 	= require 'winston'
async 		= require 'async'

exports.setlist = require './setlist'

exports.awesomeThings = (req, res) ->
	res.json [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma',
		'Express',
		"lolz"
	]

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

cleanup_shows = (shows) ->
	if not Array.isArray shows
		if shows.reviews
			shows.reviews = JSON.parse shows.reviews
		return shows

	return shows.map (v) ->
				if v.reviews
					v.reviews = JSON.parse(v.reviews)
				return v

exports.artists = (req, res) ->
	models.Artist.findAll().error(error(res)).success (artists) ->
		res.json success artists

exports.single_artist = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		res.json success artist

exports.artist_shows = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		artist.getShows().error(error(res)).success (shows) ->
			res.json success cleanup_shows shows

exports.artist_years = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		artist.getYears().error(error(res)).success (years) ->
			res.json success years

exports.artist_year_shows = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		artist.getYears(where: year: req.param('year')).error(error(res)).success (years) ->
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
										""", null, {raw: true}, [artist.id, year.year])
							.error(error(res))
							.success (shows) ->
								year.shows = cleanup_shows shows
								res.json success year

exports.top_shows = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		models.sequelize.query("""SELECT `Shows`.*, `Venues`.`city` as venue_city, `Venues`.`name` as venue_name
									FROM `Shows`
										INNER JOIN `Venues` on `Shows`.`VenueId` = `Venues`.`id`
									WHERE `ArtistId` = ? AND reviews_count > ?
									ORDER BY average_rating DESC, reviews_count DESC
									LIMIT 20
									""", null, {raw: true}, [artist.id, 1])
						.error(error(res))
						.success (shows) ->
							res.json success shows

exports.single_show = (req, res) ->
	models.Show.find(where: id: req.param('show_id')).error(error(res)).success (show) ->
		return not_found(res) if not show

		show.getTracks().error(error(res)).success (tracks) ->
			show.getVenue().error(error(res)).success (venue) ->
				show = show.toJSON()
				show.tracks = tracks

				delete show.VenueId
				show.venue = venue

				res.json success cleanup_shows show

exports.artist_show_by_date = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		artist.getShows(
			where: ['display_date = ?', req.param 'show_date']
		).error(error(res)).success (shows) ->
			return not_found(res) if not shows or shows.length is 0

			json = []
			async.each shows, (show, cb) ->
				show.getTracks(order: 'track ASC').error((err) -> cb(err)).success (tracks) ->
					show.getVenue().error((err) -> cb(err)).success (venue) ->
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

				res.json success json

exports.artist_venues = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		models.sequelize.query("SELECT *, (select count(*) from Shows where VenueId = v.id AND ArtistId = ?) as show_count FROM `Venues` as v ORDER BY show_count DESC", models.Venue, null, [artist.id])
			.error(error(res))
			.success (venues) ->
				res.json success venues.filter((v) -> v.show_count > 0).map (v) ->
					n = v.toJSON()
					n.show_count = v.show_count

					return n

exports.single_venue = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		models.Venue.find(req.param 'venue_id').error(error(res)).success (venue) ->
			return not_found(res) if not venue

			artist.getShows(where: VenueId: req.param 'venue_id').error(error(res)).success (shows) ->
				v = venue.toJSON()
				v.shows = cleanup_shows shows

				res.json success v

exports.artist_mp3 = (req, res) ->
	models.Track.find(where: id: req.param('track_id')).error(error(res)).success (track) ->
		return not_found(res) if not track

		res.redirect track.file

exports.search = (req, res) ->
	q = req.query.q

	res.send(404) if not q

	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		q = '%' + q + '%'

		# search Shows, Tracks, Venues

		async.parallel([
			(cb) ->
				models.sequelize.query("""SELECT * FROM Shows WHERE ArtistId = :artist AND (
												title LIKE :query OR date LIKE :query OR year LIKE :query OR
												source LIKE :query OR lineage LIKE :query OR taper LIKE :query OR
												description LIKE :query OR archive_identifier LIKE :query OR
												reviews LIKE :query) LIMIT 15""", models.Show, null, {'artist': artist.id, 'query': q})
								.error(error(res))
								.success (shows) ->
									cb null, {type: "shows", data: shows}
			,
			(cb) ->
				models.sequelize.query("""SELECT Tracks.length, Tracks.title, Tracks.track, Tracks.slug, Tracks.id, Shows.year, Shows.date, Shows.ArtistId
											FROM Tracks
												INNER JOIN `Shows` on Shows.id = Tracks.ShowId
										  	WHERE Shows.ArtistId = :artist AND Tracks.title LIKE :query LIMIT 15""", null, {raw: true}, {'artist': artist.id, 'query': q})
								.error(error(res))
								.success (tracks) ->
									cb null, {type: "tracks", data: tracks}
			,
			(cb) ->
				models.sequelize.query("SELECT * FROM Venues WHERE name LIKE :query OR city LIKE :query LIMIT 15", models.Venue, null, 'query': q)
								.error(error(res))
								.success (venues) ->
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
			final.venues = final.venues.map (v) -> v.toJSON()

			res.json success final
		)

exports.search_data = (req, res) ->
	oup = []
	models.Show.findAll().error(error(res)).success (shows) ->
		shows = cleanup_shows shows

		oup = oup.concat shows.map (v) ->
			v = v.toJSON()
			v._index = 'search'
			v._type = 'show'
			v._id = v.id

			delete v.id
			return v

		models.Venue.findAll().error(error(res)).success (venues) ->
			oup = oup.concat venues.map (v) ->
				v = v.toJSON()
				v._index = 'search'
				v._type = 'venue'
				v._id = v.id

				delete v.id
				return v

			models.Track.findAll().error(error(res)).success (venues) ->
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


