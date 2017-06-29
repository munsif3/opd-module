'use strict';

var userApp = angular.module('UserApp');

userApp.factory('UserService', ['$http',
    function () {
        return{
            get: () => $http.get('http://localhost:8081/theatres').then(response => response.data)
        }
    }

]);