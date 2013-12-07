'use strict'

angular.module('percival')
	.factory('years', ['$http', ($http) ->
		_val = value: []
		$http.get(Config.apiPath('years')).success (years) ->
			_val.value = years.data

		return _val
	])
	.controller('years', ['$scope', 'years', ($scope, years) ->
		$scope.$watch (-> years.value), (_) ->
			$scope.years = years.value
			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'
	])
	.controller('player', ['$scope', '$rootScope', '$timeout', ($scope, $rootScope, $timeout) ->
		$scope.audioPlayer = null
		$scope.audioPlaylist = []
		$scope.show = null

		window.iguanaScope = $rootScope

		$rootScope.$on 'seek', (e, data) ->
			[percent] = data

			if not isNaN $scope.audioPlayer.duration
				$scope.audioPlayer._audioTag.currentTime = percent * $scope.audioPlayer.duration
			else
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
			, 1
	])
	.controller('search', ['$scope', '$location', ($scope, $location) ->
		$scope.q = $location.search().q || ""
		$scope.search = ->
			$location.path('/search').search(q: encodeURIComponent $scope.q)
	])
	.controller('MainCtrl', ['$scope', 'years', '$http', ($scope, years, $http) ->
		$http.get(Config.apiPath('top_shows')).success (top_shows) ->
			$scope.top_shows = top_shows.data
			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'

		$scope.$watch (-> years.value), (_) ->
			$scope.years = years.value
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


