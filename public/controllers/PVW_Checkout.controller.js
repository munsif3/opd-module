/**
 * Created by Neruppuda on 6/29/2017.
 */
myOPDApp.controller('ChechkoutcCtrl',['$scope','$window','AddToQueueMessageService','$location','AddToQueueService',function ($scope,$window,AddToQueueMessageService,$location,AddToQueueService) {
       $scope.patient=JSON.parse(AddToQueueMessageService.getData());
       $scope.go=function (path) {
           $location.path(path);
       }
       $scope.checkout=function (nic) {
           AddToQueueService.deleteToken(nic)
               .then(
                   function(d) {
                       console.log("Token Deleted");
                   },
                   function(errResponse){
                       console.error('Error while deleting token');
                   }
               );
       }
}]);