'use strict'

angular.module('percival')

	.controller('Show', ['$scope', '$http', '$routeParams', '$rootScope', ($scope, $http, $routeParams, $rootScope) ->
		$rootScope.title = [$routeParams.show_date, $routeParams.year].join(" – ")
		$http.get(Config.apiPath(['years', $routeParams.year, 'shows', $routeParams.show_date])).success (show) ->
			$scope.show = show.data
			$scope.line_broken_description = show.data.description.replace(/\n\r|\n|\r/g, "<br/>")
			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'

			if $routeParams.track_id
				for track, i in $scope.show.tracks
					if (track.id+"") is $routeParams.track_id
						$scope.playTrack null, i
						break

		$scope.playTrack = (e, index) ->
			e.preventDefault() if e

			$rootScope.$broadcast 'reset_playlist', [$scope.show, index]

			return false
	])
