models 		= require '../models'
request 	= require 'request'
winston 	= require 'winston'
async 		= require 'async'
moment 		= require 'moment'

Sequelize 	= models.Sequelize

setlistsJson = (mbid, page = 1) -> "http://api.setlist.fm/rest/0.1/artist/#{mbid}/setlists.json?p=#{page}"

refreshSetlists = (artist, done) ->
	request url: setlistsJson(artist.musicbrainz_id), json: true, (err, res, json) ->
		return done(err) if err

		processSetlists artist, json.setlists.setlist, (err) ->
			return done(err) if err

			pages = Math.ceil parseInt(json.setlists['@total']) / parseInt(json.setlists['@itemsPerPage'])

			async.eachLimit [2..pages], 1, (page, cb) ->
				request url: setlistsJson(artist.musicbrainz_id, page), json: true, (err, res, json) ->
					return cb(err) if err

					processSetlists artist, json.setlists.setlist, cb
			, (err) ->
				return done(err) if err
				done()

processSetlists = (artist, setlist, cb) ->
	async.eachLimit setlist, 1, (s, mcb) ->
		date = moment(s['@eventDate'], 'DD-MM-YYYY')
		formatted_date = date.format('YYYY-MM-DD')
		date = date.utc().toDate()

		winston.info "looking for setlist in db: #{formatted_date}"
		setlistProps = {setlistfm_setlist_id: s['@id'], setlistfm_version_id: s['@versionId'], date: date, display_date: formatted_date}
		models.Setlist.findOrCreate(setlistProps, setlistProps).
			error(mcb).
			success (setlist, created) ->
				winston.info "setlist created: #{created}"
				unless created
					return mcb()

				venue = s.venue
				venueProps =
					setlistfm_venue_id 	: venue['@id']
					name 				: venue['@name']
					city_name 			: venue.city['@name']
					city_state 			: venue.city['@state']
					city_state_code 	: venue.city['@stateCode']
					city_lat 			: parseFloat(venue.city.coords['@lat'])
					city_long 			: parseFloat(venue.city.coords['@long'])
					country_code 		: venue.city.country['@code']
					country_name 		: venue.city.country['@name']

				models.SetlistVenue.findOrCreate(setlistfm_venue_id: venueProps.setlistfm_venue_id,  venueProps).
					error(mcb).
					success (venue, created) ->
						setlist.setArtist artist
						setlist.setSetlistVenue venue

						chainer = new Sequelize.Utils.QueryChainer
						chainer.add setlist.save()

						sets = []

						if s.sets is ""
							s.sets = set: []

						if not s.sets.set.length?
							s.sets.set = [s.sets.set]

						for set, i in s.sets.set
							sets.push models.SetlistSet.build set_index: i, title: set['@name'], is_encore: (set['@encore'] is '1')

						for set in sets
							chainer.add set.save()

						winston.info "saving!"
						chainer.run().error(mcb).success ->
							console.log "done! creating tracks and related sets to show"

							chainer = new Sequelize.Utils.QueryChainer

							for set in sets
								chainer.add set.setSetlist setlist

							for set, j in s.sets.set
								is_prev_normal_seque = false
								is_prev_true_seque = false

								if not set.song.length?
									set.song = [set.song]

								for track, i in set.song
									is_normal_seque = track['info'] is '>'
									is_true_seque = track['info'] is '->'

									t = models.SetlistTrack.build {
										track_position			: i
										title					: track['@name']
										is_normal_seque 		: is_normal_seque
										is_true_seque			: is_true_seque
										is_prev_normal_seque	: is_prev_normal_seque
										is_prev_true_seque 		: is_prev_true_seque
										info 					: track['info']
										SetlistSetId 			: sets[j].id
									}

									chainer.add t.save()

									is_prev_true_seque = is_true_seque
									is_normal_seque = is_normal_seque

							chainer.run().error(mcb).success ->
								console.log "related"
								mcb()

	, (err) ->
		return cb(err) if err
		cb()

module.exports = exports = refreshSetlists: refreshSetlists
