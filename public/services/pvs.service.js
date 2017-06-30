'use strict';

var pvsModule = angular.module('pvsApp');

<<<<<<< HEAD
pvsModule.factory('OpdService', ['$http',
    function ($http) {
        //console.log('from service');
        return {
            get: () => $http.get('http://localhost:7070/api/visitList').then(response => response.data),
            getById: (id) => $http.get('http://localhost:7070/api/visitList/' + id).then(response => response.data),
            post: (patientDiagnosis) => $http.post('http://localhost:7070/api/visitList', patientDiagnosis).then(response => response.data)
=======
pvsModule.factory('OpdService',['$http',
    function ($http)
    {
        console.log('from service');
        return{
            get: () => $http.get('/patientDiagnosis').then(response =>response.data),
            post:(patientDiagnosis) => $http.post('/patientDiagnosis', patientDiagnosis).then(response=>response.data),

>>>>>>> master

        };
    }]);
