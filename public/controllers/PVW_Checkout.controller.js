/**
 * Created by Neruppuda on 6/29/2017.
 */
myOPDApp.controller('ChechkoutcCtrl', ['$scope', '$window', '$state', 'AddToQueueMessageService', '$location', 'AddToQueueService', 'PatientService',
    function ($scope, $window, $state, AddToQueueMessageService, $location, AddToQueueService, PatientService) {
        $scope.patient = JSON.parse(AddToQueueMessageService.getData());
        $scope.go = function (path) {
            // $location.path(path);
            $state.go(path);
        };
        $scope.checkout = function (pid) {
            AddToQueueService.deleteToken(pid)
                .then(
                    function (d) {
                        AddToQueueService.removePatient("doc_102", pid)
                            .then(
                                function (d) {

                                    console.log("Patient Removed from Doctor");
                                },
                                function (errResponse) {
                                    console.error('Error while removing patient');
                                }
                            );
                        console.log("Token Deleted");
                    },
                    function (errResponse) {
                        console.error('Error while deleting token');
                    }
                );
        }
    }]);