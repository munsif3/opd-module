'use strict';

var mainApp = angular.module('MainApp');

// mainApp.config(['$routeProvider', '$locationProvider',
//     function ($routeProvider, $locationProvider) {
//         $routeProvider
//
//             .when('/', {
//                 templateUrl: 'views/home.html',
//                 controller: 'UserController'
//             })
//
//             .when('/login', {
//                 templateUrl: 'views/db-login.html',
//                 controller: 'AuthController'
//             })
//
//             .when('/home', {
//                 templateUrl: 'views/home.html',
//                 controller: 'UserController'
//             })
//
//             .when('/question/add', {
//                 templateUrl: 'views/db-questionnaire.add.html'
//             })
//
//             .when('/question/view', {
//                 templateUrl: 'views/db-questionnaire.view.html'
//             })
//
//             .when('/users/add', {
//                 templateUrl: 'views/db-users.add.html'
//             })
//
//             .when('/users/view', {
//                 templateUrl: 'views/db-users.view.html'
//             })
//
//     }
// ]);

mainApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/login');
    $urlRouterProvider.when('/', '/login');
    $urlRouterProvider.when('/home', '/home');
    $urlRouterProvider.when('/dashboard', 'dashboard');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/db-login.html',
            controller: 'AuthController'
        })

        .state('dashboard', {
            url: '/dashboard',
            controller: 'DashboardController',
            templateUrl: 'views/db-home.html'
        })

        .state('dashboard.users-view', {
            url: '/users/view',
            controller: 'UserController',
            templateUrl: 'views/db-users.view.html'
        })

        .state('dashboard.users-add', {
            url: '/users/add',
            controller: 'UserController',
            templateUrl: 'views/db-users.add.html'
        })

        .state('dashboard.users-view-one', {
            url: '/users/add/{userId}',
            controller: 'UserController',
            templateUrl: 'views/db-users.one.html'
        })


});

