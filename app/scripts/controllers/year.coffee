'use strict'

angular.module('percival')
	.controller('Year', ['$scope', '$http', '$routeParams', '$rootScope', ($scope, $http, $routeParams, $rootScope) ->
		$rootScope.title = [$routeParams.year].join(" – ")

		$scope.startedLoading()
		$http.get(Config.apiPath('years/' + $routeParams.year)).success (year) ->
			$scope.finishedLoading()
			$scope.year = year.data
			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'
	])
