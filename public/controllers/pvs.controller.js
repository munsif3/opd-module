'use strict';

var pvsModule = angular.module('pvsApp');

<<<<<<< HEAD
pvsModule.controller('OpdController', ['$scope', '$stateParams', '$location', 'OpdService',
    function ($scope, $stateParams, $location, OpdService) {

        function getPatientVisit() {
=======
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
>>>>>>> master
            OpdService.get().then(patientDiagnosis => {
                $scope.patientDiagnosis = patientDiagnosis;
            })
        };
<<<<<<< HEAD
        getPatientVisit();

        function getOnePatient() {
            OpdService.getById($stateParams.docId).then(patientDiagnosis => {
                $scope.patientDiagnosis = patientDiagnosis;
            })
        };
        //getOnePatient();

        $scope.goToHistory = () => {
            $location.path('/history/:id');
        }

        $scope.addPatientVisit = (patientDiagnosis) => {
            console.log(patientDiagnosis);
            OpdService.post(patientDiagnosis).then(addedPatientVisit => {
                $location.path('/diagnose/:id');
            })
        }

        $scope.goToDiagnosis = (docId) => {
            $state.go('visitList.diagnose', {docId : docId});
        }
=======


        /*$scope.goToAdd = () =>{
         $location.path('/addPatientVisit');
         }*/

         $scope.addPatientVisit = (patientDiagnosis) =>{
         console.log(patientDiagnosis);
         OpdService.post(patientDiagnosis).then(addedPatientVisit=>{
         $location.path('/diagnose');
         })
         }
>>>>>>> master
    }]);


