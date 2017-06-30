'use strict';
<<<<<<< HEAD
=======

>>>>>>> master
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
<<<<<<< HEAD
j
        //console.log('from controller');
=======

        console.log('from controller');
>>>>>>> master
        $scope.getPatient = function () {
            OService.get().then(patientVi => {
                $scope.patientVi = patientVi;
            })
        };

<<<<<<< HEAD

        $scope.goToDiagnosis = (patientId) =>{
         // $location.path('/');
        $state.go('visitList.diagnose', {patientId:patientId}) ;
        }
=======
        /*$scope.goToAdd = () =>{
         $location.path('/addPatientVisit');
         }*/
>>>>>>> master


    }]);
