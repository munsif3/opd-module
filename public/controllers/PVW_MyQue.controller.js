 /**
 * Created by Neruppuda on 6/28/2017.
 */

myOPDApp.controller('MyQueueCtrl', ['$scope', '$location','$state','$window','AddToQueueMessageService','AddToQueueService','PatientService',function ($scope, $location,$state,$window,AddToQueueMessageService,AddToQueueService,PatientService) {
    $scope.doctor = {doctorid:"doc_101",name: "Dr.Udhayashankar", noOfPatient: 2, queueStatus: "active", noOfTreatedPatients: 3};


     $scope.getPatient=function () {
         var patients=[];
         AddToQueueService.getPatients("doc_102")
             .then(
                 function(d) {
                     for(var i=0;i<d.length;i++){
                         PatientService.getPatient(d[i])
                             .then(
                                 function(d) {
                                     patients.push(d);
                                 },
                                 function(errResponse){
                                     console.error('error while adding patient to array');
                                 }
                             );
                     }

                 },
                 function(errResponse){
                     console.error('Error while Redirecting');
                 }
             );
         $scope.patients=patients;
    }

  /*  $scope.patients = [{
        id:"12340700038",
        nic:"953621671v",
        title: "Ms",
        firstName: "Kiru",
        lastName: "Bala",
        queueNo: 1,
        gender:"female",
        civilStataus:"lankan",
        dob:"05-04-2017",
        age:22,
        phone:"0778236146s",
        address:"abcd"

    },
        {
            id:"12340000038",
            nic:"953621672v",
            title: "Mrs",
            firstName: "Jane",
            lastName: "Peter",
            queueNo: 2,
            gender:"male",
            civilStataus:"lankan",
            dob:"05-04-2017",
            age:22,
            phone:"0778236146s",
            address:"abcd"

        },
        {
            id:"12348800038",
            nic:"953621673v",
            title: "Rev",
            firstName: "Chandhani",
            lastName: "Jayasooriya",
            queueNo: 3,
            gender:"male",
            civilStataus:"lankan",
            dob:"05-04-2017",
            age:"0Yrs 2Mths 24Dys",
            phone:"0778236146",
            address:"abcd"


        },
        {
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
            address:"abcd"

        }];*/
    $scope.go=function (path) {
        // $location.path(path);
        $state.go(path);
    }

    $scope.showMoreDetail=function (patient) {
        AddToQueueMessageService.setData(patient);

    }
    $scope.redirect=function (id) {
        AddToQueueService.redirectQueue(id)
            .then(
                function(d) {
                    console.log("Redirected Successfully");
                },
                function(errResponse){
                    console.error('Error while Redirecting');
                }
            );
    }
    $scope.resume=function (id) {
        AddToQueueService.resumeQueue(id)
            .then(
                function(d) {
                    console.log("Hold Successfull");
                },
                function(errResponse){
                    console.error('Error while Holding');
                }
            );
    }
}]);
