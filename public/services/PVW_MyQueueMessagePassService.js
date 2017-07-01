/**
 * Created by Neruppuda on 6/29/2017.
 */
myOPDApp.factory('MyQueuePassService',['$q',function ($q) {

    var patient={};

    var factory={
        setPatient:setPatient,
        getPatient:getPatient
    }
    return factory;
    function setPatient(patient) {
        patient=patient;
    }

    function getPatient() {
        return patient;
    }
}]);
