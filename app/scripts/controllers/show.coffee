'use strict'

angular.module('percival')
	.controller('Show', ['$scope', '$http', '$routeParams', '$rootScope', ($scope, $http, $routeParams, $rootScope) ->
		$rootScope.title = [$routeParams.show_date, $routeParams.year].join(" – ")

		$scope.startedLoading()
		$http.get(Config.apiPath(['years', $routeParams.year, 'shows', $routeParams.show_date])).success (show) ->
			$scope.finishedLoading()
			
			$scope.shows = show.data
			$scope.current_show = show.data[0]
			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'

			if $routeParams.show_id
				for show in $scope.shows
					if ""+show.id is $routeParams.show_id
						$scope.current_show = show

			if $routeParams.track_id
				for show in $scope.shows
					for track, i in show.tracks
						if (track.id+"") is $routeParams.track_id
							$scope.playTrack null, i
							break

		$scope.playTrack = (e, index) ->
			e.preventDefault() if e

			$rootScope.$broadcast 'reset_playlist', [$scope.current_show, index]

			return false

		$scope.changeSource = (e, index) ->
			e.preventDefault() if e

			$scope.current_show = $scope.shows[index]

			# manually hide the dropdown
			$(this).dropdown 'toggle'

			return false
	])
