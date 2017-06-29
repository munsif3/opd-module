'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.controller('OController', ['$scope', '$location', 'OService',
    function ($scope, $location, OService) {
        // function getPatientVisit() {
        //     OpdService.get().then(patientDiagnosis=>{
        //         $scope.patientDiagnosis = patientDiagnosis;
        //     });
        // }
        //
        // getPatientVisit();

        console.log('from controller');
        $scope.getPatient = function () {
            OService.get().then(patientVi => {
                $scope.patientVi = patientVi;
            })
        };

        /*$scope.goToAdd = () =>{
         $location.path('/addPatientVisit');
         }*/


    }]);
