'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.controller('OPrescriptionController', ['$scope', '$location', 'OPrescriptionService',
    function ($scope, $location, OPrescriptionService) {
        // function getPatientVisit() {
        //     OpdService.get().then(patientDiagnosis=>{
        //         $scope.patientDiagnosis = patientDiagnosis;
        //     });
        // }
        //
        // getPatientVisit();

        //console.log('from controller');
        function getPatientPres () {
            OPrescriptionService.get().then(patientPrescriptions => {
                $scope.patientPrescriptions =patientPrescriptions;
            })
        };
        //getPatientPres();
        $scope.addPatientPres = (patientPrescription) =>{
           // console.log(patientPrescription);
            OPrescriptionService.post(patientPrescription).then(addedPatientPres=>{
                $location.path('/prescription');
                //getPatientPres();
            })
        }

        function addRow() {
            $scope.patientPrescriptions.push[
                {
                'nameOfMedicine': $scope.nameOfMedicine,
                'strength': $scope.strength,
                'frequency': $scope.frequency,
                'duration':$scope.duration
                }
            ];
            $scope.nameOfMedicine = '';
            $scope.strength = '';
            $scope.frequency = '';
            $scope.duration = '';
        }
        //addRow();
        /* <td>{{patientPrescription.nameOfMedicine}}</td>
         <td>{{patientPrescription.strength}}</td>
         <td>{{patientPrescription.frequency}}</td>
         <td>{{patientPrescription.duration}}</td>*/
    }]);


