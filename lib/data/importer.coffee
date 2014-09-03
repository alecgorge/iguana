models    = require '../models'
request   = require 'request'
winston   = require 'winston'
async     = require 'async'
slugsA    = require 'slugs'
_         = require 'underscore'
Sequelize   = models.Sequelize

SEARCH_URL = (collection) -> "http://archive.org/advancedsearch.php?q=collection%3A#{collection}&fl%5B%5D=date&fl%5B%5D=identifier&fl%5B%5D=year&sort%5B%5D=year+asc&sort%5B%5D=&sort%5B%5D=&rows=9999999&page=1&output=json&save=yes"
SINGLE_URL = (identifier) -> "https://archive.org/details/#{identifier}?output=json"
PHISH_URL = (date) -> "http://phish.in/api/v1/show-on-date/#{date}.json"

parseTime = (str) -> str.split(':').reverse().map((v, k) -> Math.max(1, 60 * k) * parseInt(v)).reduce((x,y) -> x+y)

sum = (arr) ->
  _.reduce(arr, (memo, num) ->
    memo + num
  , 0)

average = (arr) -> sum(arr) / arr.length

refreshPhishData = (artist, done) ->
  winston.info 'requesting phish search url'
  request "http://phish.in/api/v1/shows.json?per_page=2000", (err, httpres, body) ->
    throw err if err

    body = JSON.parse body

    winston.info 'got search results'
    shows = body.data

    async.mapLimit shows, 1, (small_show, cb) ->
      winston.info "requesting #{small_show.date}"
      loadPhishShow artist, small_show, cb
    , done

refreshData = (artist, done) ->
  return refreshPhishData(artist, done) if artist.slug == 'phish'

  winston.info 'requesting search url'
  request SEARCH_URL(artist.archive_collection), (err, httpres, body) ->
    throw err if err

    body = JSON.parse body

    winston.info 'got search results'
    shows = body['response']['docs']

    async.mapLimit shows, 1, (small_show, cb) ->
      winston.info "requesting #{small_show.date}"
      loadShow artist, small_show, cb
    , done

refreshShow = (artist, id, done) ->
  winston.info 'requesting search url'
  request SINGLE_URL(id), (err, httpres, body) ->
    throw err if err

    show = JSON.parse body

    winston.info 'got search results'

    winston.info "requesting #{show.metadata.indentifier?[0]}"
    loadShow artist, identifier: show.metadata.identifier[0], done

refresh_weighted_avg = (artist, done) ->
  models.Show.findAll(group: 'display_date', where: { artistId: artist.id }).error(done).success (dates) ->
    dates.map (date) ->
      models.Show.findAll(where: { display_date: date.display_date, artistId: artist.id }).error(done).success (tapes) ->
        averages = _.pluck tapes, 'average_rating'
        ratings = _.pluck tapes, 'reviews_count'

        avgAll = average averages
        ratingAll = average ratings

        output = []

        tapes.map (tape) ->
          if tape.reviews_count == 0
            weighted_avg = 0
          else
            weighted_avg = (ratingAll * avgAll) + (tape.reviews_count * tape.average_rating) / (ratingAll + tape.reviews_count)

          tape.updateAttributes { weighted_avg }
            .success -> 0
            .error (err) -> throw err

slugify = (t, slugs) ->
  l = t.toLowerCase()

  if l[0...2] is "E:"
    l = l[2..]

  slug = slugsA(l.trim())
           .slice(0, 254)
           .replace /-{2,100}/, '-'
           .replace /^-+|-+$/, ''

  # If we want unique slugs, keep track of the slugs we've used
  if slugs
    i = 1
    while slugs[slug]
      slug = slug.replace(/-[0-9]+$/, '') + '-' + i++

    slugs[slug] = true
  return slug

venue_slugify = (t) -> t.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '')

reslug = (done) ->
  chainer = new Sequelize.Utils.QueryChainer
  models.Show.findAll().error(done).success (shows) ->
    for show in shows
      show.getTracks().error(done).success (tracks) ->
        slugObj = {}
        i = 1
        for track in tracks
          title = track.title.trim()
          slug = slugs(title).replace /-{2,100}/, '-'
                             .replace /-+$/, ''

          while slugObj[slug]
            slug = slug.replace(/-[0-9]+$/, '') + '-' + i++

          slugObj[slug] = true

          track.updateAttributes slug: slug, title: title
               .success -> 0#console.log arguments[0].dataValues.slug
               .error -> 0#console.log arguments[0].dataValues.slug
  ###
  models.Venue.findAll().error(done).success (venues) ->
    for venue in venues
      venue.updateAttributes slug: slugs(venue.name)
           .success -> console.log arguments[0].dataValues.slug
           .error -> console.log arguments[0].dataValues.slug
  ###


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
  models.sequelize.query("TRUNCATE TABLE Years").error(done).success () ->
    models.sequelize.query("""
      INSERT INTO Years (ArtistId, year, show_count, recording_count, duration, avg_duration, avg_rating,createdAt,updatedAt)
        SELECT ArtistId, year, COUNT(DISTINCT Shows.`display_date`), COUNT(*), SUM(Shows.duration),
            AVG(Shows.duration), AVG(NULLIF(Shows.average_rating, 0)), NOW(), NOW()
        FROM Shows
        GROUP BY ArtistId, year
      """).error(done).success () ->
      models.sequelize.query("""
        UPDATE Years SET avg_rating = 0 WHERE avg_rating IS NULL
        """).error(done).success(done)

loadPhishShow = (artist, small_show, cb) ->
  small_show.identifier = 'phish-' + small_show.id
  models.Show.find(where: archive_identifier: small_show.identifier).error(cb).success (pre_existing_show) ->
    if pre_existing_show isnt null
      winston.info "this archive identifier is already in the db"

    request PHISH_URL(small_show.date), (err, httpres, body) ->

      try
        body = JSON.parse(body).data
      catch e
        # invalid json
        console.log e
        return cb()

      winston.info "GET " + PHISH_URL(body.date)

      files = body.tracks

      winston.info "mp3 track count: #{files.length}"

      return cb() if files.length is 0

      d = new Date body.date

      if isNaN(d.getTime())
        parts = body.date[0].split('-')
        parts[1] = '01' if parts[1] == '00'
        parts[2] = '01' if parts[2] == '00'

        if parseInt(parts[2], 10) > 31
          parts[2] = '31'
        if parseInt(parts[1], 10) > 12
          parts[2] = '12'

        d = new Date "#{parts[0]}-#{parts[2]}-#{parts[1]}"

        if isNaN(d.getTime())
          d = new Date 0

      showProps =
        title       : "Phish Live at #{body.venue.name} on #{body.date}"
        date        : d
        display_date    : body.date
        year        : new Date(body.date).getFullYear()
        source        : ""
        lineage       : ""
        taper         : ""
        transferer    : ""
        description     : if body.taper_notes then body.taper_notes else ""
        archive_identifier  : "phish-#{body.id}"
        reviews       : "[]"
        reviews_count     : 0
        average_rating    : 0.0
        is_soundboard: body.sbd

      venueProps =
        name        : if body.venue?.name then body.venue.name else "Unknown"
        city        : if body.location then body.location else "Unknown"

      venueProps.slug = slugify venueProps.name

      track_i = 0
      total_duration = 0
      slugs = {}
      tracks = files.map (file) ->

        t = file.title

        duration = Math.ceil file.duration / 1000
        total_duration += duration

        t = t.replace(/\\'/g, "'").replace(/\\>/g, ">").replace(/Â»/g, ">").replace(/\([0-9:]+\)/g, '')

        return models.Track.build {
          title   : t.slice(0, 254)
          md5   : ''
          track   : ++track_i
          bitrate : 0
          size  : 0
          length  : duration
          file  : file.mp3
          slug  : slugify(t, slugs)
        }

      showProps.duration = total_duration
      showProps.track_count = tracks.length

      showCreated = (show, created) ->
        unless created
          winston.info "this show is already in the db"
          return cb()
        else
          winston.info "show created! looking for venue"

        models.Venue.findOrCreate({slug: venueProps.slug}, venueProps).error(cb).success (venue, created) ->
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

      winston.info "looking for show in db"
      models.Show.findOrCreate({date: showProps.date, ArtistId: artist.id, archive_identifier: showProps.archive_identifier}, showProps).error(showCreated).success showCreated

loadShow = (artist, small_show, cb) ->
  models.Show.find(where: archive_identifier: small_show.identifier).error(cb).success (pre_existing_show) ->
    if pre_existing_show isnt null
      winston.info "this archive identifier is already in the db"

    request SINGLE_URL(small_show.identifier), (err, httpres, body) ->
      winston.info "GET " + SINGLE_URL(small_show.identifier)

      try
        body = JSON.parse body
      catch e
        # invalid json
        console.log e
        return cb()

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

      unless body.metadata.date
        winston.info 'no date:', body.metadata.title
        return cb()

      d = new Date body.metadata.date[0]

      if isNaN(d.getTime())
        parts = body.metadata.date[0].split('-')
        parts[1] = '01' if parts[1] == '00'
        parts[2] = '01' if parts[2] == '00'

        if parseInt(parts[2], 10) > 31
          parts[2] = '31'
        if parseInt(parts[1], 10) > 12
          parts[2] = '12'

        d = new Date "#{parts[0]}-#{parts[2]}-#{parts[1]}"

        if isNaN(d.getTime())
          d = new Date 0

      showProps =
        title       : body.metadata.title
        date        : d
        display_date    : body.metadata.date[0]
        year        : if body.metadata.year then parseInt body.metadata.year[0] else new Date(body.metadata.date[0]).getFullYear()
        source        : if body.metadata.source then body.metadata.source[0] else "Unknown"
        lineage       : if body.metadata.lineage then body.metadata.lineage[0] else "Unknown"
        taper         : if body.metadata.taper then body.metadata.taper[0] else "Unknown"
        transferer    : if body.metadata.transferer then body.metadata.transferer[0] else "Unknown"
        description     : if body.metadata.description then body.metadata.description[0] else ""
        archive_identifier  : body.metadata.identifier[0]
        reviews       : if body.reviews then JSON.stringify body.reviews.reviews.slice(0, 30) else "[]"
        reviews_count     : if body.reviews then body.reviews.info.num_reviews else 0
        average_rating    : if body.reviews then body.reviews.info.avg_rating else 0.0

      showProps.is_soundboard = showProps.archive_identifier.toString().toLowerCase().indexOf('sbd') isnt -1 or
                    showProps.title.toString().toLowerCase().indexOf('sbd') isnt -1 or
                    showProps.source.toString().toLowerCase().indexOf('sbd') isnt -1 or
                    showProps.lineage.toString().toLowerCase().indexOf('sbd') isnt -1

      venueProps =
        name        : if body.metadata.venue then body.metadata.venue[0] else "Unknown"
        city        : if body.metadata.coverage then body.metadata.coverage[0] else "Unknown"

      venueProps.slug = slugify venueProps.name

      track_i = 0
      total_duration = 0
      slugs = {}
      tracks = files.sort().
                map (v) ->
        file = files[v]

        t = file.title

        total_duration += parseTime file.duration

        t = t.replace(/\\'/g, "'").replace(/\\>/g, ">").replace(/Â»/g, ">").replace(/\([0-9:]+\)/g, '')

        parsed_track = if file.track then parseInt file.track.replace(/[^0-9]+/, '')

        return models.Track.build {
          title   : t.slice(0, 254)
          md5   : file.md5
          track   : ++track_i
          bitrate : parseInt file.bitrate
          size  : parseInt file.size
          length  : parseTime file.length
          file  : "https://archive.org/download/#{showProps.archive_identifier}#{v}"
          slug  : slugify(t, slugs)
        }

      showProps.duration = total_duration
      showProps.track_count = tracks.length

      showCreated = (show, created) ->
        unless created
          winston.info "this show is already in the db"
          return cb()
        else
          winston.info "show created! looking for venue"

        models.Venue.findOrCreate({slug: venueProps.slug}, venueProps).error(cb).success (venue, created) ->
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

      winston.info "looking for show in db"
      models.Show.findOrCreate({date: showProps.date, ArtistId: artist.id, archive_identifier: showProps.archive_identifier}, showProps).error(showCreated).success showCreated

module.exports = exports = { refreshData, reslug, slugify, refreshShow, refresh_weighted_avg }
