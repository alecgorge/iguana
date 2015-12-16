# defaults to production
environment = process.env.NODE_ENV

if environment is "production"
  require 'newrelic'

# Module dependencies.
express     = require "express"
path        = require "path"
app         = express()

# db
models      = require './lib/models'
config      = require './lib/config'

console.log JSON.stringify(process.env)

basicAuth = require('basic-auth')
auth = (req, res, next) ->

  unauthorized = (res) ->
    res.set 'WWW-Authenticate', 'Basic realm=Authorization Required'
    res.send 401

  user = basicAuth(req)
  if !user or !user.name or !user.pass
    return unauthorized(res)
  if user.name == 'iguana' and user.pass == process.env.ADMIN_PASSWORD
    next()
  else
    unauthorized res


models.sync(force: false).
  then( ->
    console.log 'synced'
  ).
  catch((err) ->
    console.log err
    throw err
  )

# Controllers
api         = require "./lib/controllers/api"
importer    = require "./lib/controllers/importer"

# Express Configuration
app.use require('morgan')("dev")

# Allow access control origin
app.use (req, res, next) ->
  res.set
    'Access-Control-Allow-Origin': '*'
    'Access-Control-Allow-Methods': 'POST, GET'
    'Access-Control-Allow-Headers': req.get('Access-Control-Request-Headers')

  next()

bodyParser = require 'body-parser'

app.use bodyParser.urlencoded({ extended: false })
app.use bodyParser.json()

app.set 'trust proxy', true
app.use require('errorhandler')()

# Routes
app.get "/importer/:artist/rebuild_index", auth, importer.rebuild_index
#app.get "/importer/:artist/:archive_id/rebuild_index", importer.rebuild_show
#app.get "/importer/:artist/rebuild_setlists", importer.rebuild_setlists
app.get "/importer/rebuild-all", auth, importer.rebuild_all
#app.get "/importer/reslug", importer.reslug
app.get "/importer/rebuild-weighted-avg", auth, importer.reweigh
# app.get "/importer/search_data", api.search_data

#app.get '/views/:name.html', (req, res) -> res.renderView req.param('name')

app.get '/api/status', api.status

app.get '/api/artists', api.artists
app.get '/api/artists/:artist_slug', api.fix_artist_slug, api.single_artist
app.get '/api/artists/:artist_slug/years', api.fix_artist_slug, api.artist_years
app.get '/api/artists/:artist_slug/years/:year', api.fix_artist_slug, api.artist_year_shows
app.get '/api/artists/:artist_slug/years/:year/shows/:show_date', api.fix_artist_slug, api.artist_show_by_date
app.get '/api/artists/:artist_slug/top_shows', api.fix_artist_slug, api.top_shows
app.get '/api/artists/:artist_slug/random_show', api.fix_artist_slug, api.random_show
app.get '/api/artists/:artist_slug/random_date', api.fix_artist_slug, api.random_date
app.get '/api/artists/:artist_slug/shows', api.fix_artist_slug, api.artist_shows
app.get '/api/artists/:artist_slug/shows/:show_id', api.fix_artist_slug, api.single_show
app.get '/api/artists/:artist_slug/mp3/:track_id', api.fix_artist_slug, api.artist_mp3
app.get '/api/artists/:artist_slug/venues', api.fix_artist_slug, api.artist_venues
app.get '/api/artists/:artist_slug/venues/:venue_id', api.fix_artist_slug, api.single_venue
app.get '/api/artists/:artist_slug/search', api.fix_artist_slug, api.search

# app.get '/api/artists/:artist_slug/setlists', api.setlist.setlist
# app.get '/api/artists/:artist_slug/setlists/:setlist_id', api.setlist.show_id
# app.get '/api/artists/:artist_slug/setlists/on-date/:show_date', api.setlist.on_date
# app.get '/api/artists/:artist_slug/song_stats', api.setlist.song_stats

app.get '/api/today', api.today
app.get '/api/poll', api.poll
app.post '/api/play', api.live

# Start server
console.log "Attempting to listen on port %d", (process.env.PORT or 9000)
port = process.env.PORT or 9000
app.listen port, ->
  console.log "Express server listening on port %d in %s mode", port, app.get("env")
