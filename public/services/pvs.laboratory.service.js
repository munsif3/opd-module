'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.factory('OLabService',['$http',
    function ($http)
    {
        console.log('from service');
        return{
            get: () => $http.get('/patientLaboratory').then(response =>response.data),
            post:(patientLaboratory) => $http.post('/patientLaboratory', patientLaboratory).then(response=>response.data)


        };
    }]);
