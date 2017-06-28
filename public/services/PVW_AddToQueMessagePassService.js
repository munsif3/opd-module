/**
 * Created by Neruppuda on 6/28/2017.
 */
myOPDApp.factory('AddToQueueMessageService', ['$window', '$rootScope', function ($window, $rootScope) {
    return {
        get: function (key) {
            return localStorage.getItem(key);
        },
        set: function (key, data) {
            localStorage.setItem(key, data);
        }
    };

}]);
