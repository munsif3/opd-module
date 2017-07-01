angular.module('viewPatientController',['viewPatientService'])
.controller('viewPatientCtrl',['$scope', '$location', 'viewPatientService',
    function ($scope, $location, patientService){
        function getPatients() {
            patientService.getPatientDetails().then(patients => {
                $scope.patients = patients;
            });
        }

        getPatients();
        
       // $scope.generatePatientCard = (id) => {
       //      $location.path('/generateCard');
       // }

        function getPatientDetails(){
            //console.log(Id);
                patientService.getPatientDetailsById("59562f2a6516b70b9c3f82ca").then(patientDetails => {
                $scope.patientDetails = patientDetails;
                console.log("got details");
            });
        }

        getPatientDetails();
        
        // $scope.deletePatient = (patientId) => {
        //     patientService.deletePatient(patientId).then(deletedPatient => {
        //         console.log("deleted");
        //         $location.path('/viewPatients');
        //     })

        // }
    }]);