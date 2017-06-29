/**
 * Created by Neruppuda on 6/28/2017.
 */

myOPDApp.controller('AddToQueCtrl',['$scope','$location','AddToQueueMessageService',function ($scope,$location,AddToQueueMessageService) {


    $scope.patient={
        id:"12348900038",
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
        $scope.doctors=[{doctorName:"wasantha",patientcount:2,queueStatus:"OPEN"},{doctorName:"rasangi",patientcount:2,queueStatus:"OPEN"}];
    }
    $scope.setToQueue=function(patientToQueue){
       AddToQueueMessageService.setData(patientToQueue);
    }
    $scope.getToToken=function () {
       $scope.patient= JSON.parse(AddToQueueMessageService.getData());
    }
    $scope.go=function (path) {
        $location.path(path);
    }


}])
