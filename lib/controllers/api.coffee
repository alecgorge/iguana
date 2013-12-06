
models 		= require '../models'
winston 	= require 'winston'

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

success = (data) ->
	res = is_success: true

	if Array.isArray data
		res.length = data.length

	res.data = data

	return res

cleanup_shows = (shows) ->
	if not Array.isArray shows
		shows.reviews = JSON.parse shows.reviews
		return shows

	return shows.map (v) ->
				v.reviews = JSON.parse(v.reviews)
				return v

exports.artists = (req, res) ->
	models.Artist.findAll().error(error(res)).success (artists) ->
		res.json success artists

exports.single_artist = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		res.json success artist

exports.artist_shows = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		artist.getShows().error(error(res)).success (shows) ->
			res.json success cleanup_shows shows

exports.artist_years = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		artist.getYears().error(error(res)).success (years) ->
			res.json success years

exports.artist_year_shows = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		artist.getYears(where: year: req.param('year')).error(error(res)).success (years) ->
			year = years[0].toJSON()
			artist.getShows(
				where: year: req.param('year')
				order: 'date ASC'
			).error(error(res)).success (shows) ->
				year.shows = cleanup_shows shows
				res.json success year

exports.top_shows = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		artist.getShows(order: 'average_rating DESC', limit: 15, where: ['reviews_count > ?', 1]).error(error(res)).success (top_shows) ->
			res.json success cleanup_shows top_shows

exports.single_show = (req, res) ->
	models.Show.find(where: id: req.param('show_id')).error(error(res)).success (show) ->
		show.getTracks().error(error(res)).success (tracks) ->
			show.getVenue().error(error(res)).success (venue) ->
				show = show.toJSON()
				show.tracks = tracks

				delete show.VenueId
				show.venue = venue

				res.json success cleanup_shows show

exports.artist_show_by_date = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		artist.getShows(
			where: ['date = ?', new Date req.param 'show_date']
		).error(error(res)).success (shows) ->
			show = shows[0]
			show.getTracks().error(error(res)).success (tracks) ->
				show.getVenue().error(error(res)).success (venue) ->
					show = show.toJSON()
					show.tracks = tracks

					delete show.VenueId
					show.venue = venue

					res.json success cleanup_shows show

exports.artist_mp3 = (req, res) ->
	models.Track.find(where: id: req.param('track_id')).error(error(res)).success (track) ->
		res.redirect track.file
	
