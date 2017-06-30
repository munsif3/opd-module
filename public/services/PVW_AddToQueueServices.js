/**
 * Created by Neruppuda on 6/30/2017.
 */
myOPDApp.factory('AddToQueueService',['$http','$q',function ($http,$q) {

    var factory={
        addToQueue:addToQueue,
        addToken:addToken,
        getToken:getToken,
        deleteToken:deleteToken,
        addPatientToQueue:addPatientToQueue,
        redirectQueue:redirectQueue,
        resumeQueue:resumeQueue


    }
    return factory;


    function addToQueue(queue) {
        var deferred = $q.defer();
        $http.post('http://localhost:8080/queue',queue)
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
    function addToken(id) {
        var deferred = $q.defer();
        $http.post('http://localhost:8080/token/'+id)
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
    function getToken(id) {
        var deferred = $q.defer();
        $http.get('http://localhost:8080/token/'+id)
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
    function deleteToken(id) {
        var deferred = $q.defer();
        $http.delete('http://localhost:8080/token/'+id)
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

    function addPatientToQueue(did,pid){
        var deferred = $q.defer();
        $http.put('http://localhost:8080/queue/'+did+'/'+pid)
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

    function redirectQueue(did){
        var deferred = $q.defer();
        $http.put('http://localhost:8080/redirect/'+did)
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
    function resumeQueue(did){
        var deferred = $q.defer();
        $http.put('http://localhost:8080/queue/'+did)
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
