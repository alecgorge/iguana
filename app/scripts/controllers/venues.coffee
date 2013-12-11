'use strict'

angular.module('percival')
	.controller('Venues', ['$scope', '$http', '$routeParams', '$rootScope', ($scope, $http, $routeParams, $rootScope) ->
		$rootScope.title = "Venues"

		$scope.startedLoading()
		$http.get(Config.apiPath(['venues'])).success (show) ->
			$scope.finishedLoading()

			$scope.venues = show.data
			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'
	])
	.controller('Venue', ['$scope', '$http', '$routeParams', '$rootScope', ($scope, $http, $routeParams, $rootScope) ->
		$rootScope.title = "Venues"

		$scope.startedLoading()
		$http.get(Config.apiPath(['venues', $routeParams.venue_id])).success (venue) ->
			$scope.finishedLoading()

			$scope.venue = venue.data

			$rootScope.title = [$scope.venue.name, "Venues"].join("–")

			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'
	])
