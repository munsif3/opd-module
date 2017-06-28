/**
 * Created by Neruppuda on 6/28/2017.
 */

myOPDApp.controller('AddToQueCtrl',['$scope','$location','AddToQueueMessageService',function ($scope,$location,AddToQueueMessageService) {

    $scope.go=function (path) {
        $location.path(path);
    }

    $scope.passToQueuq=function(patient){
        AddToQueueMessageService.setToQueue(patient);
    }
    $scope.getToQueue=function(){
        // var patientToQueue=AddToQueueMessageService.getToQueue();//
        $scope.patient={name:"S.Sudheesan",gender:"male",age:22,status:"single",id:"12340000087",DOB:"1989-09-27  "};
        $scope.doctors=[{doctorName:"wasantha",patientcount:2,queueStatus:"OPEN"},{doctorName:"rasangi",patientcount:2,queueStatus:"OPEN"}];
        //get doctors online from database and and their patient cont in the queue
    }
    $scope.setToQueue=function(patientToQueue){//post to queue with patient id doctor id date andn time and ststus
       AddToQueueMessageService.setToQueue(patientToQueue);

    }
    $scope.getToToken=function () {
       $scope.patient= AddToQueueMessageService.getToQueue();
    }

}])
