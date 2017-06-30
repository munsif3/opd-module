'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.controller('OpdController', ['$scope', '$location', 'OpdService',
    function ($scope, $location, OpdService) {
        // function getPatientVisit() {
        //     OpdService.get().then(patientDiagnosis=>{
        //         $scope.patientDiagnosis = patientDiagnosis;
        //     });
        // }
        //
        // getPatientVisit();

        console.log('from controller');
        $scope.getPatientVisit = function () {
            OpdService.get().then(patientDiagnosis => {
                $scope.patientDiagnosis = patientDiagnosis;
            })
        };


        /*$scope.goToAdd = () =>{
         $location.path('/addPatientVisit');
         }*/

         $scope.addPatientVisit = (patientDiagnosis) =>{
         console.log(patientDiagnosis);
         OpdService.post(patientDiagnosis).then(addedPatientVisit=>{
         $location.path('/diagnose');
         })
         }
    }]);


