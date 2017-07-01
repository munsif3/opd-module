/**
 * Created by Neruppuda on 6/30/2017.
 */
/**
 * Created by Neruppuda on 6/30/2017.
 */
myOPDApp.factory('PatientService',['$http','$q',function ($http,$q) {

    var factory={
        getPatient:getPatient,
        getAllPatient:getAllPatient
    }
    return factory;


    function getPatient(id) {
        var deferred = $q.defer();
        $http.get('http://localhost:7070/api/patients/'+id)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }
    function getAllPatient() {
        var deferred = $q.defer();
        $http.get('http://localhost:7070/api/patients')
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

}]);
