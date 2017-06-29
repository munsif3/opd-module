/**
 * Created by Neruppuda on 6/28/2017.
 */
myOPDApp.factory('AddToQueueMessageService', ['$window', '$rootScope', function ($window, $rootScope) {
    angular.element($window).on('storage', function(event) {
        if (event.key === 'my-storage') {
            $rootScope.$apply();
        }
    });
    return {
        setData: function(val) {
            $window.localStorage && $window.localStorage.setItem('my-storage', JSON.stringify(val));
            return this;
        },
        getData: function() {
            return $window.localStorage && $window.localStorage.getItem('my-storage');
        }
    };

}]);
