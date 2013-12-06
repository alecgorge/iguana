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
	.controller('player', ['$scope', '$rootScope', ($scope, $rootScope) ->
		$scope.audioPlayer = null
		$scope.audioPlaylist = []
		$scope.show = null

		$rootScope.$on 'reset_playlist', (e, data) ->
			[show, index] = data


			$scope.show = show
			$scope.audioPlaylist.length = 0

			for track in show.tracks
				$scope.audioPlaylist.push src: track.file, type: 'audio/mp3'

			window.asdf = $scope.audioPlayer

			$scope.audioPlayer.play(index)
	])
	.controller('MainCtrl', ['$scope', 'years', '$http', ($scope, years, $http) ->
		$http.get(Config.apiPath('top_shows')).success (top_shows) ->
			$scope.top_shows = top_shows.data
			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'

		$scope.$watch (-> years.value), (_) ->
			$scope.years = years.value
			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'
	])
