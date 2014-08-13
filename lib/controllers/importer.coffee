
models 				= require '../models'
importer 			= require '../data/importer'
setlist_importer 	= require '../data/setlist_importer'
winston 			= require 'winston'

exports.rebuild_index = (req, res) ->
	res.set 'Cache-Control', 'no-cache'
	res.json success: true

	models.Artist.
			find(where: slug: req.param('artist')).
			error((err) -> throw err if err).
			success (artist) ->
				importer.refreshData artist, (err) ->
					throw err if err

					winston.info "Done rebuilding index for #{artist.name}"

exports.rebuild_all = (req, res) ->
	res.set 'Cache-Control', 'no-cache'
	res.json success: true

	models.Artist.
			findAll().
			error((err) -> throw err if err).
			success (artists) ->
				for artist in artists
					importer.refreshData artist, (err) ->
						throw err if err

					winston.info "Done rebuilding index for #{artist.name}"

exports.reslug = (req, res) ->
	res.set 'Cache-Control', 'no-cache'
	res.json success: true

	importer.reslug (err) ->
		throw err if err

		winston.info "Done resluging"

exports.rebuild_setlists = (req, res) ->
	res.set 'Cache-Control', 'no-cache'
	res.json success: true

	models.Artist.
			find(where: slug: req.param('artist')).
			error((err) -> throw err if err).
			success (artist) ->
				setlist_importer.refreshSetlists artist, (err) ->
					throw err if err

					winston.info "Done rebuilding setlists for #{artist.name}"
