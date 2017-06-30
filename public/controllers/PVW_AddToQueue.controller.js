/**
 * Created by Neruppuda on 6/28/2017.
 */

myOPDApp.controller('AddToQueCtrl',['$scope','$location','AddToQueueMessageService','AddToQueueService',function ($scope,$location,AddToQueueMessageService,AddToQueueService) {


    $scope.patient={
        id:"12348900038",
        nic:"953621674v",
        title: "Mr",
        firstName: "Sam",
        lastName: "Anderson",
        queueNo: 4,
        gender:"male",
        civilStataus:"lankan",
        dob:"05-04-2017",
        age:"0Yrs 2Mths 24Dys",
        phone:"0778236146",
        address:"abcd",
        status:"single"
    };

    $scope.queuePatient=JSON.parse(AddToQueueMessageService.getData());
    $scope.getToQueue=function(){
        $scope.doctors=[{doctorid:"doc_101",doctorName:"wasantha",patientcount:2,queueStatus:"active"},{doctorid:"doc_102",doctorName:"rasangi",patientcount:2,queueStatus:"active"}];
    }
    $scope.setToQueue=function(patientToQueue){
       AddToQueueMessageService.setData(patientToQueue);
    }
    $scope.getToToken=function () {
       $scope.patient= JSON.parse(AddToQueueMessageService.getData());
        AddToQueueService.getToken( $scope.patient.nic)
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
        $location.path(path);
    }

    $scope.addToQueue=function(dID,PId){
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth();
        curr_month++;
        var curr_year = d.getFullYear();
        var newDate=(curr_year+"-"+curr_month+"-"+curr_date);
        var docstatus="active";
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
