"use strict";
var app = angular.module("highwayApp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/californiaHighway', {
            templateUrl: '../partials/californiaHighway.html',
            controller: 'californiaCtrl'
        })
        .when('/pchHighway', {
            templateUrl: '../partials/pchHighway.html',
            controller: 'pchCtrl'
        })
        .otherwise('/');
});
