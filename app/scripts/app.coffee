'use strict'

app = angular.module('percival', [
  'ngSanitize',
  'ngRoute',
  'audioPlayer',
  'angulartics',
  'angulartics.google.analytics',
  'seo'
])

app
  .config(['$routeProvider', '$locationProvider', '$httpProvider', ($routeProvider, $locationProvider, $httpProvider) ->
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
      .when '/years/:year/shows/:show_date/sources/:show_id',
        title: 'Show'
        templateUrl: 'views/show.html'
        controller: 'Show'
      .when '/years/:year/shows/:show_date/sources/:show_id/tracks/:track_id/:track_slug',
        title: 'Show'
        templateUrl: 'views/show.html'
        controller: 'Show'
      .otherwise
        redirectTo: '/'

    $locationProvider.html5Mode false
    $locationProvider.hashPrefix '!'

    $http = undefined
    interceptor = ["$q", "$injector", ($q, $injector) ->
      success = (response) ->
        
        # get $http via $injector because of circular dependency problem
        $http = $http or $injector.get("$http")
        
        # don't send notification until all requests are complete
        if $http.pendingRequests.length < 1
          
          # get requestNotificationChannel via $injector because of circular dependency problem
          notificationChannel = notificationChannel or $injector.get("requestNotificationChannel")
          
          # send a notification requests are complete
          notificationChannel.requestEnded()
        response
      error = (response) ->
        
        # get $http via $injector because of circular dependency problem
        $http = $http or $injector.get("$http")
        
        # don't send notification until all requests are complete
        if $http.pendingRequests.length < 1
          
          # get requestNotificationChannel via $injector because of circular dependency problem
          notificationChannel = notificationChannel or $injector.get("requestNotificationChannel")
          
          # send a notification requests are complete
          notificationChannel.requestEnded()
        $q.reject response
      notificationChannel = undefined
      (promise) ->
        
        # get requestNotificationChannel via $injector because of circular dependency problem
        notificationChannel = notificationChannel or $injector.get("requestNotificationChannel")
        
        # send a notification requests are complete
        notificationChannel.requestStarted()
        promise.then success, error
    ]
    $httpProvider.responseInterceptors.push interceptor
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

app.factory "requestNotificationChannel", ["$rootScope", ($rootScope) ->
  
  # private notification messages
  _START_REQUEST_ = "_START_REQUEST_"
  _END_REQUEST_ = "_END_REQUEST_"
  
  # publish start request notification
  requestStarted = ->
    $rootScope.$broadcast _START_REQUEST_

  
  # publish end request notification
  requestEnded = ->
    $rootScope.$broadcast _END_REQUEST_

  
  # subscribe to start request notification
  onRequestStarted = ($scope, handler) ->
    $scope.$on _START_REQUEST_, (event) ->
      handler()


  
  # subscribe to end request notification
  onRequestEnded = ($scope, handler) ->
    $scope.$on _END_REQUEST_, (event) ->
      handler()


  requestStarted: requestStarted
  requestEnded: requestEnded
  onRequestStarted: onRequestStarted
  onRequestEnded: onRequestEnded
]

app.directive "loadingWidget", ["requestNotificationChannel", (requestNotificationChannel) ->
  restrict: "A"
  link: (scope, element) ->
    
    # hide the element initially
    element.hide()
    startRequestHandler = ->
      
      # got the request start notification, show the element
      element.show()

    endRequestHandler = ->
      
      # got the request start notification, show the element
      element.hide()

    requestNotificationChannel.onRequestStarted scope, startRequestHandler
    requestNotificationChannel.onRequestEnded scope, endRequestHandler
]

app.filter "startFrom", ->
  (input, start) ->
    start = +start #parse to int
    input.slice start

angular.$externalBroadcast = (selector, event, message) ->
  scope = angular.element(selector).scope()

  scope.$apply -> scope.$broadcast event, message

$ ->
  $(document).on 'click', 'a.no-follow', (e) ->
    e.preventDefault()
    return false

