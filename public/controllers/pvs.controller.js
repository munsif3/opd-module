'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.controller('OpdController', ['$scope', '$stateParams', '$location', 'OpdService',
    function ($scope, $stateParams, $location, OpdService) {

        function getPatientVisit() {
            OpdService.get().then(patientDiagnosis => {
                $scope.patientDiagnosis = patientDiagnosis;
            })
        };
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
    }]);


