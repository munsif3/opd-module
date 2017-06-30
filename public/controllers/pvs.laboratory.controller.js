'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.controller('OLabController', ['$scope', '$location', 'OLabService',
    function ($scope, $location, OLabService) {
        // function getPatientVisit() {
        //     OpdService.get().then(patientDiagnosis=>{
        //         $scope.patientDiagnosis = patientDiagnosis;
        //     });
        // }
        //
        // getPatientVisit();

        console.log('from controller');
        $scope.getPatientLaboratory = function () {
            OLabService.get().then(patientLaboratory => {
                $scope.patientDiagnosis = patientLaboratory;
            })
        };


        /*$scope.goToAdd = () =>{
         $location.path('/addPatientVisit');
         }*/

        $scope.addPatientLaboratory = (patientLaboratory) =>{
            console.log(patientLaboratory);
            OLabService.post(patientLaboratory).then(addedPatientLaboratory=>{
                $location.path('/laboratory');
            })
        }
    }]);


