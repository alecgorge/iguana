'use strict'

angular.module('percival', [
  'ngSanitize',
  'ngRoute',
  'audioPlayer'
])
  .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
    $routeProvider
      .when '/',
        title: 'Home'
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/home',
        title: 'Home'
        templateUrl: 'views/home.html'
        controller: 'HomeCtrl'
      .when '/about',
        title: 'About'
        templateUrl: 'views/about.html'
      .when '/search',
        title: 'Search'
        templateUrl: 'views/search.html'
        controller: 'Search'
      .when '/venues',
        title: 'Venues'
        templateUrl: 'views/venues.html'
        controller: 'Venues'
      .when '/venues/:venue_id',
        title: 'Venue'
        templateUrl: 'views/venue.html'
        controller: 'Venue'
      .when '/years/:year',
        title: 'Year'
        templateUrl: 'views/year.html'
        controller: 'Year'
      .when '/years/:year/shows/:show_date',
        title: 'Show'
        templateUrl: 'views/show.html'
        controller: 'Show'
      .when '/years/:year/shows/:show_date/:track_id/:track_slug',
        title: 'Show'
        templateUrl: 'views/show.html'
        controller: 'Show'
      .otherwise
        redirectTo: '/'

    $locationProvider.html5Mode true
    $locationProvider.hashPrefix '!'
  ])
  .run(['$location', '$rootScope', ($location, $$rootScope) ->
    $$rootScope.config = window.app_config

    $$rootScope.isActive = (loc) ->
      if loc is '/' and ($location.path() is '/' or $location.path()[0...6] is '/years')
        return true
      else if loc isnt '/' and loc isnt $location.path() and $location.path()[0...loc.length] is loc
        return true

      return loc is $location.path()

    $$rootScope.$on '$routeChangeSuccess', (event, current, previous) ->
      if current.$$route?.title
        $$rootScope.title = current.$$route.title
  ])

angular.$externalBroadcast = (selector, event, message) ->
  scope = angular.element(selector).scope()

  scope.$apply -> scope.$broadcast event, message

$ ->
  $(document).on 'click', 'a.no-follow', (e) ->
    e.preventDefault()
    return false

