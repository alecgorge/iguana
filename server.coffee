# defaults to production
environment = process.env.NODE_ENV

# Module dependencies.
express     = require "express"
path        = require "path"
app         = express()

# db
models      = require './lib/models'
config      = require './lib/config'

models.sync(force: false).
       error((err) -> throw err if err).
       success () ->
        console.log 'synced'

# Controllers
api         = require "./lib/controllers/api"
importer    = require "./lib/controllers/importer"

# Express Configuration
app.configure ->
  app.use express.logger("dev")

  app.use (req, res, next) ->
    res.renderView = (viewName, viewModel) ->
      suffix = "" # if req.xhr then "" else "_full"
      res.render viewName + suffix, viewModel

    next()

  app.use express.bodyParser()
  app.use express.methodOverride()

  app.locals site: config.get 'site'
  app.set 'view engine', 'jade'
  app.set 'trust proxy', true

app.configure "development", ->
  app.use express.static(path.join(__dirname, ".tmp"))
  app.use express.static(path.join(__dirname, "app"))
  app.use express.errorHandler()

app.configure "production", ->
  app.use express.favicon(path.join(__dirname, "public/favicon.ico"))
  app.use express.static(path.join(__dirname, "public"), maxAge: 3600 * 1000)

app.use app.router

# Routes
app.get "/importer/:artist/rebuild_index", importer.rebuild_index
app.get "/importer/:artist/rebuild_setlists", importer.rebuild_setlists
app.get "/importer/reslug", importer.reslug
app.get "/importer/search_data", api.search_data

app.get '/views/:name.html', (req, res) -> res.renderView req.param('name')

app.get '/api/artists', api.artists
app.get '/api/artists/:artist_slug', api.single_artist
app.get '/api/artists/:artist_slug/years', api.artist_years
app.get '/api/artists/:artist_slug/years/:year', api.artist_year_shows
app.get '/api/artists/:artist_slug/years/:year/shows/:show_date', api.artist_show_by_date
app.get '/api/artists/:artist_slug/top_shows', api.top_shows
app.get '/api/artists/:artist_slug/random_show', api.random_show
app.get '/api/artists/:artist_slug/shows', api.artist_shows
app.get '/api/artists/:artist_slug/shows/:show_id', api.single_show
app.get '/api/artists/:artist_slug/mp3/:track_id', api.artist_mp3
app.get '/api/artists/:artist_slug/venues', api.artist_venues
app.get '/api/artists/:artist_slug/venues/:venue_id', api.single_venue
app.get '/api/artists/:artist_slug/search', api.search

app.get '/api/artists/:artist_slug/setlists', api.setlist.setlist
app.get '/api/artists/:artist_slug/setlists/:setlist_id', api.setlist.show_id
app.get '/api/artists/:artist_slug/setlists/on-date/:show_date', api.setlist.on_date
app.get '/api/artists/:artist_slug/song_stats', api.setlist.song_stats

app.get '/configure.js', (req, res) ->
  res.set 'Cache-Control', 'no-cache'
  res.set 'Content-Type', 'text/javascript'

  app_config = {}
  for single_config in config.get('site')
    if single_config.domain_names.filter((v) -> req.host.indexOf(v) isnt -1).length > 0
      app_config = single_config

  json = "window.app_config = " + JSON.stringify(app_config) + ";"
  res.send json + config.googleAnalyticsCode(app_config.google_analytics.id)

app.get '/', (req, res) -> res.render 'index'
app.get '*', (req, res) ->
  if environment is "production"
    res.sendfile __dirname + '/public/index.html'
  else
    res.render 'index'

# Start server
console.log "Attempting to listen on port %d", (process.env.PORT or 9000)
port = process.env.PORT or 9000
app.listen port, ->
  console.log "Express server listening on port %d in %s mode", port, app.get("env")
