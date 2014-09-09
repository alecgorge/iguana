'use strict'

angular.module('percival')
	.controller('player', ['$scope', '$rootScope', '$timeout', '$http', ($scope, $rootScope, $timeout, $http) ->
		$scope.audioPlayer = null
		$scope.audioPlaylist = []
		$scope.show = null

		window.iguanaScope = $rootScope

		saveProgress = () ->
			localStorage["playing"] = $scope.audioPlayer.playing
			localStorage["show_id"] = $scope.show?.id
			localStorage["track_index"] = $scope.audioPlayer.currentTrack - 1
			localStorage["percent"] = $scope.audioPlayer.currentTime / $scope.audioPlayer.duration

			$timeout saveProgress, 500

		hydrateFromProgress = () ->
			if localStorage["show_id"] and localStorage["show_id"] isnt "undefined"
				$http.get(Config.apiPath(['shows', localStorage["show_id"]])).success (show) ->
					$rootScope.$broadcast 'reset_playlist', [show.data, parseInt(localStorage["track_index"])]

					if localStorage["playing"] is "false"
						$scope.audioPlayer.pause()

		# hydrateFromProgress()

		$rootScope.$on 'seek', (e, data) ->
			[percent] = data

			if not isNaN $scope.audioPlayer.duration
				$scope.audioPlayer._audioTag.currentTime = percent * $scope.audioPlayer.duration
			else
				console.log $scope, $scope.show, $scope.audioPlayer
				$scope.audioPlayer._audioTag.currentTime = percent * $scope.show.tracks[$scope.audioPlayer.currentTrack - 1].length

		$rootScope.$on 'reset_playlist', (e, data) ->
			[show, index] = data

			$scope.show = show
			$scope.audioPlaylist.length = 0

			for track in show.tracks
				$scope.audioPlaylist.push src: track.file, type: 'audio/mp3'

			window.asdf = $scope.audioPlayer

			$timeout ->
				$scope.audioPlayer.play index
				# saveProgress()
			, 1
	])
	.controller('search', ['$scope', '$location', ($scope, $location) ->
		$scope.q = $location.search().q || ""
		$scope.search = ->
			$location.path('/search').search(q: $scope.q)
	])
	.controller('MainCtrl', ['$scope', '$http', ($scope, $http) ->
		$scope.startedLoading()
		$http.get(Config.apiPath('top_shows')).success (top_shows) ->
			$scope.finishedLoading()

			$scope.top_shows = top_shows.data
			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'

		$scope.startedLoading()
		$http.get(Config.apiPath('years')).success (years) ->
			$scope.finishedLoading()

			$scope.years = years.data
			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'
	])

$ ->
	$playHead = $('#playhead')
	$progress = $('.progress')

	$progress.hover (e) ->
		$playHead.show()
	, (e) ->
		$playHead.hide()

	$progress.mousemove (e) ->
		$playHead.css 'left', e.pageX - $(this).offset().left + parseInt($(this).css('margin-left').slice(0,-2)) - 2

	$playHead.click (e) ->
		pos = e.pageX - $(this).parent().offset().left
		width = $(this).parent().width()

		per = pos / width

		window.iguanaScope.$broadcast 'seek', [per]


