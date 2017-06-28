angular.module('patientService',[])
.factory('patient', function ($http) {
    patientFactory = {};
    console.log("service initiated!!");
    patientFactory.create = function (regData) {
    	console.log(regData);
        return $http.post('http://localhost:7070/api/patients',regData);
    }
    return patientFactory;
})