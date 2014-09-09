class window.Config
	@ARTIST_SLUG: window.app_config.api_slug

	@mp3: (id) ->
		return Config.apiPath(['mp3', id])

	@apiPath: (url) =>
		url = [].concat url

		url = url.join "/"

		return "/api/artists/" + @ARTIST_SLUG + "/" + url
