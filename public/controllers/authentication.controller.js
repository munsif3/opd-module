'use strict';

var authApp = angular.module('AuthApp');

authApp.controller('AuthController', ['$scope', 'AuthService', '$location',
    function ($scope, AuthService,$location) {

        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.login = function (credentials) {

            AuthService.service.loginUser($scope.credentials, function (response) {
                if (response.status === 200) {
                    console.log('ok');
                    $location.path('/home');
                } else {
                    console.log('no');
                    $scope.error = response.message;
                }
            });
        };


    }
]);