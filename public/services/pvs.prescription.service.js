'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.factory('OPrescriptionService',['$http',
    function ($http)
    {
        //console.log('from service');
        return{
            get: () => $http.get('http://localhost:7070/api/prescription').then(response =>response.data),
            post:(patientPrescription) => $http.post('http://localhost:7070/api/prescription', patientPrescription).then(response=>response.data)
        };
    }]);
