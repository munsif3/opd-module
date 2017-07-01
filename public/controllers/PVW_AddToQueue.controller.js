/**
 * Created by Neruppuda on 6/28/2017.
 */

myOPDApp.controller('AddToQueCtrl',['$scope','$location','$state','AddToQueueMessageService','AddToQueueService','$window',function ($scope,$location,$state,AddToQueueMessageService,AddToQueueService,$window) {

    $scope.getRelevantPatients=function(){
        $scope.patient=JSON.parse(AddToQueueMessageService.getData());
    }

    $scope.getToQueue=function(){
        $scope.doctors=[{doctorid:"doc_101",doctorName:"wasantha",patientcount:2,queueStatus:"active"},{doctorid:"doc_102",doctorName:"rasangi",patientcount:2,queueStatus:"active"}];
        $scope.queuePatient=JSON.parse(AddToQueueMessageService.getData());
    }
    $scope.setToQueue=function(patientToQueue){
       AddToQueueMessageService.setData(patientToQueue);
    }
    $scope.getToToken=function () {

        $scope.patient= JSON.parse(AddToQueueMessageService.getData());
        AddToQueueService.getToken( $scope.patient._id)
            .then(
                function(d) {
                    console.log('TokenSet');
                    $scope.patient.token=d;
                },
                function(errResponse){
                    console.error('Error while adding token');
                }
            );

    }
    $scope.go=function (path) {
        // $location.path(path);

        $state.go(path);
    }

    $scope.addToQueue=function(dID,PId){

        console.log(dID);
        console.log(PId);

        AddToQueueService.addPatientToQueue(dID,PId)
            .then(
                function(d) {
                   console.log("added To Queue");

                    AddToQueueService.addToken(PId)
                        .then(
                            function(d) {
                                console.log("Token Added");
                            },
                            function(errResponse){
                                console.error('Error while adding token');
                            }
                        );
                },
                function(errResponse){
                    console.error('Error while adding to queue Seats');
                }
            );


    }




}])
