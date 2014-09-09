'use strict'

angular.module('percival')
	.controller('Search', ['$scope', '$http', '$location', '$rootScope', ($scope, $http, $location, $rootScope) ->
		$scope.search_term = $location.search().q
		$rootScope.title = '“' + $scope.search_term + '”'

		$scope.startedLoading()
		$http.get(Config.apiPath(['search']) + "?q=" + encodeURIComponent($scope.search_term)).success (results) ->
			$scope.finishedLoading()
			$scope.results = results.data
			$scope.$evalAsync -> $.bootstrapSortable false, 'reversed'
	])
