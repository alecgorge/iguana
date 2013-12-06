class window.Config
	@ARTIST_SLUG: "lotus"

	@mp3: (id) ->
		return Config.apiPath(['mp3', id])

	@apiPath: (url) =>
		url = [].concat url

		url = url.join "/"

		return "/api/artists/" + @ARTIST_SLUG + "/" + url
