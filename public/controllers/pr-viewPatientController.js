angular.module('viewPatientController',['viewPatientService'])
.controller('viewPatientCtrl',['$scope', '$location', 'viewPatientService',
    function ($scope, $location, patientService){
    	console.log("viewPatientController Activated");
        function getPatients() {
        	console.log("getPatients method initiated");
            patientService.getPatientDetails().then(patients => {
                $scope.patients = patients;
            });
        }

        getPatients();

        // $scope.goToAdd = () => {
        //     $location.path('/addCustomer');
        // }

        // $scope.addCustomer = (customer) => {
        //     CustomerService.post(customer).then(addedCustomer=>{
        //         $location.path('/');
        //     })
        // }
    }]);