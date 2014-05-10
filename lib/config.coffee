
nconf = require 'nconf'

nconf.argv()
	 .env()
	 .file file: 'config.json'

class Config
	constructor: () ->

	isProduction: nconf.get('env') is "production"
	isLocal: nconf.get('env') is "local"
	isTest: nconf.get('env') is "test"

	googleAnalyticsCode: (id) ->
		"""(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='//www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','#{id}', '#{domain}');"""

	get: nconf.get.bind(nconf)
	env: () -> nconf.get nconf.get 'env'

module.exports = exports = new Config