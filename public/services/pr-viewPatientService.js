var app = angular.module('viewPatientService',[])

app.factory('viewPatientService', ['$http',
    function($http){
    	console.log("viewPatientService initiated!!");
        return {
            getPatientDetails: () => $http.get('http://localhost:7070/api/patients').then(response => response.data)
        };
    }]);