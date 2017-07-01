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

mainApp.config(function ($stateProvider, $urlRouterProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.when('', '/login');
    $urlRouterProvider.when('/', '/login');
    $urlRouterProvider.when('/home', '/home');
    $urlRouterProvider.when('/dashboard', 'dashboard-admin');
    $urlRouterProvider.when('/patient', 'patient');
    // $urlRouterProvider.otherwise('/login');

    $stateProvider

    // DB

        .state('login', {
            url: '/login',
            templateUrl: 'views/db-login.html',
            controller: 'AuthController'
        })

        .state('dashboard-admin', {
            url: '/dashboard/admin',
            controller: 'DashboardController',
            templateUrl: 'views/db-admin.home.html'
        })

        .state('dashboard-doctor', {
            url: '/dashboard/doctor',
            controller: 'DashboardController',
            templateUrl: 'views/db-doctor.home.html'
        })

        .state('dashboard-nurse', {
            url: '/dashboard/nurse',
            controller: 'DashboardController',
            templateUrl: 'views/db-nurse.home.html'
        })

        .state('dashboard-admin.users-view', {
            url: '/users/view',
            controller: 'UserController',
            templateUrl: 'views/db-users.view.html'
        })

        .state('dashboard-admin.users-add', {
            url: '/users/add',
            controller: 'UserController',
            templateUrl: 'views/db-users.add.html'
        })

        .state('dashboard-admin.users-view-one', {
            url: '/users/add/{userId}',
            controller: 'UserController',
            templateUrl: 'views/db-users.one.html'
        })

        .state('dashboard-doctor.question-add', {
            url: '/questionnaire/add',
            templateUrl: 'views/db-questionnaire.add.html',
            controller: 'DashboardController'
        })

        .state('dashboard-doctor.question-view', {
            url: '/questionnaire/view',
            templateUrl: 'views/db-questionnaire.view.html',
            controller: 'DashboardController'
        })

        .state('dashboard-admin.dash', {
            url: '/dash',
            controller: 'UserController',
            templateUrl: 'views/db-dash-admin.html'
        })


        // PVS

        .state('dashboard-doctor.prescription', {
            url: '/prescription',
            templateUrl: 'views/pvs-prescription.html',
            controller: 'OPrescriptionController'
        })

        .state('dashboard-doctor.history', {
            url: '/history',
            templateUrl: 'views/pvs-diagnose.list.html',
            controller: 'OpdController'
        })

        .state('dashboard-doctor.visit', {
            url: '/visit',
            templateUrl: 'views/pvs-diagnose.html',
            controller: 'OpdController'
        })

        .state('dashboard-doctor.visitList', {
            url: '/visitList',
            templateUrl: 'views/pvs-visitList.html',
            controller: 'OpdController'
        })
        .state('dashboard-doctor.visitList.diagnose', {
            url: '/diagnose/{docId}',
            templateUrl: 'views/pvs-diagnose.html',
            controller: 'OpdController'
        })
        .state('dashboard-doctor.laboratory', {
            url: '/laboratory',
            templateUrl: 'views/pvs-laboratory.html',
            controller: 'OLabController'
        })


        // PR

        .state('dashboard-nurse.patient-register', {
            url: '/patientRegister',
            templateUrl: 'views/pr-patientRegistration.html',
            controller: 'registrationController',
            controllerAs: 'register'
        })

        .state('dashboard-nurse.patient-view', {
            url: '/patientView',
            templateUrl: 'views/pr-viewPatients.html',
            controller: 'viewPatientCtrl'
        })

        // PVW

        .state('dashboard-doctor.myQueue', {
            url: '/myQueue',
            controller: 'MyQueueCtrl',
            templateUrl: 'views/PVW_MyQueue.html'
        })

        .state('dashboard-doctor.patientInfo', {
            url: '/patientInfo',
            controller: 'ChechkoutcCtrl',
            templateUrl: 'views/PVW_PatientMoreInfo.html'
        })

        .state('dashboard-nurse.addToQueue', {
            url: '/addToQueue',
            templateUrl: 'views/PVW_AddToQueue.html'
        })

        .state('dashboard-nurse.token', {
            url: '/token',
            templateUrl: 'views/PVW_TokenView.html'
        })

        .state('dashboard-nurse.patientOverView', {
            url: '/patientOverView',
            templateUrl: 'views/PVW_ViewPatients.html'
        })

        .state('dashboard-nurse.patientToQueue', {
            url: '/patientToQueue',
            templateUrl: 'views/PVW_PatientToAdd.html'
        })


});

