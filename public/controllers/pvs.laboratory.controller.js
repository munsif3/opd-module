'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.controller('OLabController', ['$scope', '$location', 'OLabService',
    function ($scope, $location, OLabService) {

        function getPatientLaboratory() {
            OLabService.get().then(patientLaboratory => {
                $scope.patientLaboratory = patientLaboratory;
            })
        };

        //get a particular patient's record.
        function getOnePatientLaboratory() {
            OLabService.getById($stateParams.docId).then(patientLaboratories => {
                $scope.patientLaboratories = patientLaboratories;
            })
        };


        /*$scope.goToAdd = () =>{
         $location.path('/addPatientVisit');
         }*/

        //add lab req
        $scope.addPatientLaboratory = (patientLaboratory) =>{
            //console.log(patientLaboratory);
            OLabService.post(patientLaboratory).then(addedPatientLaboratory=>{
                $location.path('/laboratory');
                //getOnePatientLaboratory();

            })
        }


    }]);


