'use strict';

var mainApp = angular.module('MainApp');

/*mainApp.config(['$routeProvider', '$locationProvider',
 function ($routeProvider, $locationProvider) {
 $routeProvider
 // Dashboard Management
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


 // Patient Visit Handling
 .when('/prescription',{
 templateUrl: 'views/pvs-prescription.html',
 controller: 'OPrescriptionController'
 })

 .when('/laboratory',{
 templateUrl: 'views/pvs-laboratory.html',
 controller: 'OLabController'
 })

 .when('/diagnose/:id',{
 templateUrl: 'views/pvs-diagnose.html',
 controller: 'OpdController'
 })

 .when('/visitList',{
 templateUrl: 'views/pvs-visitList.html',
 controller: 'OController'
 })

 .when('/history/:id',{
 templateUrl: 'views/pvs-diagnose.list.html',
 controller: 'OpdController'
 })
 }
 ]);*/

mainApp.config(function ($stateProvider, $urlRouterProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.when('', '/login');
    $urlRouterProvider.when('/', '/login');
    $urlRouterProvider.when('/home', '/home');
    $urlRouterProvider.when('/dashboard', '/dashboard');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'AuthController'
        })

        .state('prescription', {
            url: '/prescription',
            templateUrl: 'views/pvs-prescription.html',
            controller: 'OPrescriptionController'
        })

        .state('visitList', {
            url: '/visitList',
            templateUrl: 'views/pvs-visitList.html',
            controller: 'OpdController'
        })
        .state('visitList.diagnose', {
            url: '/diagnose/{docId}',
            templateUrl: 'views/pvs-diagnose.html',
            controller: 'OpdController'
        })
        .state('laboratory', {
            url: '/laboratory',
            templateUrl: 'views/pvs-laboratory.html',
            controller: 'OLabController'
        })

});