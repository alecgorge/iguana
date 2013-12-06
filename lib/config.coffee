
nconf = require 'nconf'

nconf.argv()
	 .env()
	 .file file: 'config.json'

class Config
	constructor: () ->

	isProduction: nconf.get('env') is "production"
	isLocal: nconf.get('env') is "local"
	isTest: nconf.get('env') is "test"

	get: nconf.get.bind(nconf)
	env: () -> nconf.get nconf.get 'env'

module.exports = exports = new Config