'use strict';

var authApp = angular.module('AuthApp');

authApp.controller('AuthController', ['$scope', 'AuthService', '$location', '$state',
    function ($scope, AuthService, $location, $state) {

        $scope.credentials = {
            username: '',
            password: '',
            role: ''
        };

        $scope.approved = false;

        $scope.loggedUsers = localStorage.__user = [];



        $scope.login = function (credentials) {
            console.log($scope.credentials);

            AuthService.service.loginUser($scope.credentials, function (response) {
                if (response.status === 200) {

                    console.log('ok');

                    if (credentials.role === "Doctor") {
                        $state.go('dashboard-doctor');
                    }
                    else if (credentials.role === "Nurse") {
                        $state.go('dashboard-nurse');
                    }
                    else if (credentials.role === "Administrator") {
                        $state.go('dashboard-admin');
                    }
                    else {
                        $state.go('/');
                    }

                    $scope.approved = true;
                } else {
                    console.log('no');
                    $scope.error = response.message;
                    console.log(response.message);
                }
            });
        };


    }
]);