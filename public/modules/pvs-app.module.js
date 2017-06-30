'use strict';

var pvsModule = angular.module('pvsApp',['ngRoute']);
// console.log('from pvs module angular');
<<<<<<< HEAD
// pvsModule.config(function($routeProvider){
//
//     $routeProvider
//
//         .when('/prescription',{
//             templateUrl: 'views/pvs-prescription.html',
//             controller: 'OpdController'
//         })
//
//         .when('/laboratory',{
//             templateUrl: 'views/pvs-laboratory.html',
//             controller: 'OpdController'
//         })
//
//         .when('/diagnose',{
//             templateUrl: 'views/pvs-diagnose.html',
//             controller: 'OpdController'
//         })
//
//         .when('/visitList',{
//             templateUrl: 'views/pvs-visitList.html',
//             controller: 'OpdController'
//         })
//
// });
=======
pvsModule.config(function($routeProvider){

    $routeProvider

        .when('/prescription',{
            templateUrl: 'views/pvs-prescription.html',
            controller: 'OpdController'
        })

        .when('/laboratory',{
            templateUrl: 'views/pvs-laboratory.html',
            controller: 'OpdController'
        })

        .when('/diagnose',{
            templateUrl: 'views/pvs-diagnose.html',
            controller: 'OpdController'
        })

        .when('/visitList',{
            templateUrl: 'views/pvs-visitList.html',
            controller: 'OpdController'
        })

});
>>>>>>> master
