
models 				= require '../models'
importer 			= require '../data/importer'
setlist_importer 	= require '../data/setlist_importer'
winston 			= require 'winston'
async 				= require 'async'

exports.rebuild_index = (req, res) ->
	res.set 'Cache-Control', 'no-cache'
	res.json success: true

	models.Artist.
			find(where: slug: req.param('artist')).
			catch((err) -> throw err if err).
			then (artist) ->
				importer.refreshData artist, (err) ->
					throw err if err

					winston.info "Done rebuilding index for #{artist.name}"

exports.rebuild_show = (req, res) ->
	res.set 'Cache-Control', 'no-cache'
	res.json success: true

	models.Artist.
			find(where: slug: req.param('artist')).
			catch((err) -> throw err if err).
			then (artist) ->
				importer.refreshShow artist, req.param('archive_id'), (err) ->
					throw err if err

					winston.info "Done rebuilding index for #{artist.name}: #{req.param('archive_id')}"

exports.rebuild_all = (req, res) ->
	res.set 'Cache-Control', 'no-cache'
	res.json success: true

	models.Artist.
			findAll().
			catch((err) -> throw err if err).
			then (artists) ->
				async.eachSeries artists, (artist, cb) ->
					importer.refreshData artist, (err) ->
						winston.info "Done rebuilding index for #{artist.name}"
						return cb(err)
				, (err) ->
					throw err if err

					windston.info "Done rebuilding all indexes"

exports.reslug = (req, res) ->
	res.set 'Cache-Control', 'no-cache'
	res.json success: true

	importer.reslug (err) ->
		throw err if err

		winston.info "Done resluging"

exports.reweigh = (req, res) ->
	res.set 'Cache-Control', 'no-cache'
	res.json success: true

	models.Artist.
		findAll().
		catch((err) -> throw err if err).
		then (artists) ->
			for artist in artists
				importer.refresh_weighted_avg artist, (err) ->
					throw err if err

					winston.info "Done reweighing"

exports.rebuild_setlists = (req, res) ->
	res.set 'Cache-Control', 'no-cache'
	res.json success: true

	models.Artist.
			find(where: slug: req.param('artist')).
			catch((err) -> throw err if err).
			then (artist) ->
				setlist_importer.refreshSetlists artist, (err) ->
					throw err if err

					winston.info "Done rebuilding setlists for #{artist.name}"
