/**
 * Created by Neruppuda on 6/29/2017.
 */
myOPDApp.controller('ChechkoutcCtrl',['$scope','$window','AddToQueueMessageService','$location',function ($scope,$window,AddToQueueMessageService,$location) {
       $scope.patient=JSON.parse(AddToQueueMessageService.getData());
       $scope.go=function (path) {
           $location.path(path);
       }
}]);