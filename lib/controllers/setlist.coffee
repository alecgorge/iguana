
models 		= require '../models'
async 		= require 'async'

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

exports.setlist = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		artist.getSetlists().error(error(res)).success (setlists) ->
			res.json success setlists.map (v) -> v.toJSON()

exports.show_id = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		models.Setlist.find(where: id: req.param('setlist_id')).error(error(res)).success (setlist) ->
			setlist.getSetlistSets().error(error(res)).success (sets) ->
				setlist_json = setlist.toJSON()
				setlist_json.sets = []
				async.eachLimit sets, 1, (set, cb) ->
					set_json = set.toJSON()
					set.getSetlistTracks().error(error(res)).success (tracks) ->
						set_json.tracks = tracks.map (v) -> v.toJSON()

						setlist_json.sets.push set_json

						cb()
				, (err) ->
					setlist.getSetlistVenue().error(error(res)).success (venue) ->
						setlist_json.venue = venue.toJSON()

						res.json success setlist_json


exports.on_date = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		models.Setlist.find(where: display_date: req.param('show_date')).error(error(res)).success (setlist) ->
			setlist.getSetlistSets().error(error(res)).success (sets) ->
				setlist_json = setlist.toJSON()
				setlist_json.sets = []
				async.eachLimit sets, 1, (set, cb) ->
					set_json = set.toJSON()
					set.getSetlistTracks().error(error(res)).success (tracks) ->
						set_json.tracks = tracks.map (v) -> v.toJSON()

						setlist_json.sets.push set_json

						cb()
				, (err) ->
					setlist.getSetlistVenue().error(error(res)).success (venue) ->
						setlist_json.venue = venue.toJSON()

						res.json success setlist_json

exports.song_stats = (req, res) ->
	models.Artist.find(where: slug: req.param('artist_slug')).error(error(res)).success (artist) ->
		return not_found(res) if not artist

		models.sequelize.query("""
								SELECT COUNT(*) as play_count,
									   SetlistTracks.title, MIN(SetlistSets.`SetlistId`) as last_show_played,
									   MAX(SetlistSets.`SetlistId`) as first_show_played,
									   MIN(SetlistSets.`SetlistId`) - 1 as gap
								FROM SetlistTracks, SetlistSets
								WHERE SetlistSets.id = SetlistTracks.`SetlistSetId` AND `SetlistSets`.`SetlistId` IN (SELECT Setlists.`id` FROM Setlists WHERE Setlists.`ArtistId` = ?)
								GROUP BY title
								ORDER BY play_count DESC
								""", null, {raw: true}, [artist.id])
						.error(error(res))
						.success (track_stats) ->
							res.json success track_stats

