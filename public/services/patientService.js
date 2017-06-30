'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.factory('OService',['$http',
    function ($http)
    {
        //console.log('from service');
        return{
            get: () => $http.get('http://localhost:7070/api/visitList').then(response =>response.data),
            getById:id=>$http.get('http://localhost:7070/api/diagnose/'+id).then(response=>response.data),
            post:(patientVi) => $http.post('http://localhost:7070/api/visitList', patientVi).then(response=>response.data)


        };
    }]);
