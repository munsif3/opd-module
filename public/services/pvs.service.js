'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.factory('OpdService',['$http',
    function ($http)
    {
        console.log('from service');
        return{
            get: () => $http.get('/patientDiagnosis').then(response =>response.data),
            post:(patientDiagnosis) => $http.post('/patientDiagnosis', patientDiagnosis).then(response=>response.data),


        };
    }]);
