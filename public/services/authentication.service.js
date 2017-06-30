'use strict';

var authApp = angular.module('AuthApp');

userApp.factory('AuthService', ['$http', '$timeout',
    function ($http, $timeout) {

        const service = {};

        service.loginUser = function (credentials, callback) {

            $timeout(function () {

                    var response = [
                        {success: credentials.username === 'munsif1' && credentials.password === 'munsif1' && credentials.role === 'Administrator'},
                        {success: credentials.username === 'munsif2' && credentials.password === 'munsif2' && credentials.role === 'Doctor'},
                        {success: credentials.username === 'munsif3' && credentials.password === 'munsif3' && credentials.role === 'Nurse'}];

                    
                    console.log(response);

                    if (credentials == response) {
                        console.log('in');
                        console.log(credentials);
                        response.status = 200;
                    }

                    if (!response.success) {
                        response.message = 'Username or password is incorrect';
                    }
                    callback(response);
                },
                1000
            );
        };

        // setUser()

        return {
            // get: () => $http.get('http://localhost:8081/users').then(response => response.data),

            service
        }
    }
]);