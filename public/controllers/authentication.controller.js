'use strict';

var authApp = angular.module('AuthApp');

authApp.controller('AuthController', ['$scope', 'AuthService', '$location','$state',
    function ($scope, AuthService,$location,$state) {

        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.approved = false;

        $scope.login = function (credentials) {
            AuthService.service.loginUser($scope.credentials, function (response) {
                if (response.status === 200) {
                    console.log('ok');
                    // $location.path('/home');
                    $state.go('dashboard');
                    $scope.approved = true;
                } else {
                    console.log('no');
                    $scope.error = response.message;
                }
            });
        };


    }
]);