'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.controller('OLabController', ['$scope', '$location', 'OLabService',
    function ($scope, $location, OLabService) {
<<<<<<< HEAD

        function getPatientLaboratory() {
            OLabService.get().then(patientLaboratory => {
                $scope.patientLaboratory = patientLaboratory;
            })
        };

        //get a particular patient's record.
        function getOnePatientLaboratory() {
            OLabService.getById($stateParams.docId).then(patientLaboratories => {
                $scope.patientLaboratories = patientLaboratories;
=======
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
>>>>>>> master
            })
        };


        /*$scope.goToAdd = () =>{
         $location.path('/addPatientVisit');
         }*/

<<<<<<< HEAD
        //add lab req
        $scope.addPatientLaboratory = (patientLaboratory) =>{
            //console.log(patientLaboratory);
            OLabService.post(patientLaboratory).then(addedPatientLaboratory=>{
                $location.path('/laboratory');
                //getOnePatientLaboratory();

            })
        }


=======
        $scope.addPatientLaboratory = (patientLaboratory) =>{
            console.log(patientLaboratory);
            OLabService.post(patientLaboratory).then(addedPatientLaboratory=>{
                $location.path('/laboratory');
            })
        }
>>>>>>> master
    }]);


