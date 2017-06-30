'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.factory('OLabService',['$http',
    function ($http)
    {
        //console.log('from service');
        return{
            get: () => $http.get('http://localhost:7070/api/laboratory').then(response =>response.data),
            post:(patientLaboratory) => $http.post('http://localhost:7070/api/laboratory', patientLaboratory).then(response=>response.data),
            getById:id=>$http.get('http://localhost:7070/api/laboratory'+id).then(response=>response.data)


        };
    }]);
