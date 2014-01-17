id3 	= require 'id3js'
async 	= require 'async'
glob 	= require 'glob'

mp3s = glob.sync '*/*/*.mp3'

async.eachLimit mp3s, 10, (mp3_path, cb) ->
	console.log mp3_path
