###
This is heavily influenced by https://github.com/steeve/angular-seo/blob/master/angular-seo.js

This version adds the ability to call $scope.startedLoading() and $scope.finishedLoading() many times,
in the event that you have multiple controllers making seperate HTTP requests.
###
((window, document) ->
    getModule = (angular) ->
        angular.module("seo", [])
               .run ["$rootScope", ($rootScope) ->
                    thingsLoading = 0

                    $rootScope.startedLoading = ->
                        thingsLoading += 1

                    $rootScope.finishedLoading = ->
                        thingsLoading -= 1

                        if thingsLoading < 1
                            $rootScope.htmlReady()

                    $rootScope.htmlReady = ->

                        # fire after $digest
                        $rootScope.$evalAsync ->

                            # fire after DOM rendering
                            setTimeout ->
                                if typeof window.callPhantom is "function"
                                    window.callPhantom rendered: document.documentElement.outerHTML
                            , 0
                ]

    if typeof define is "function" and define.amd
        define ["angular"], getModule
    else
        getModule angular
)(window, document)
