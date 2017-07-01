/**
 * Created by Neruppuda on 6/30/2017.
 */
/**
 * Created by Neruppuda on 6/29/2017.
 */
myOPDApp.controller('PatientViewCtrl', ['$scope', '$state', '$window', 'AddToQueueMessageService', '$location', 'PatientService',
    function ($scope, $state, $window, AddToQueueMessageService, $location, PatientService) {

        $scope.getAllPatients = function () {

            PatientService.getAllPatient()
                .then(
                    function (d) {
                        $scope.patients = d;
                    },
                    function (errResponse) {
                        console.error('Error while deleting token');
                    }
                );
        }
        $scope.setPatient = function (data) {
            AddToQueueMessageService.setData(data);
        }
        $scope.go = function (path) {
            // $location.path(path);
            $state.go(path);
        }
        $scope.checkout = function (nic) {
            AddToQueueService.deleteToken(nic)
                .then(
                    function (d) {
                        console.log("Token Deleted");
                    },
                    function (errResponse) {
                        console.error('Error while deleting token');
                    }
                );
        }
    }
])
;