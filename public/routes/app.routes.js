'use strict';

var mainApp = angular.module('MainApp');

mainApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'UserController'
            })

            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'AuthController'
            })

            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'UserController'
            })

    }
]);