'use strict';

var authApp = angular.module('AuthApp');

userApp.factory('AuthService', ['$http', '$timeout',
    function ($http, $timeout) {
        const service = {};

        service.loginUser = function (credentials, callback) {

            $timeout(function () {

                var response = {success: credentials.username === 'test' && credentials.password === 'test'};
                if (credentials.username == 'test' && credentials.password == 'test') {
                    console.log('in');
                    response.status = 200;
                }

                if (!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
            }, 1000);
        };

        return {
            // get: () => $http.get('http://localhost:8081/users').then(response => response.data),

            service
        }
    }
]);