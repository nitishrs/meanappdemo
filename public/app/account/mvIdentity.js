var myApp = angular.module('app');

myApp.factory('mvIdentity',function($window, mvUser) {
    var currentUser;
    if(!!$window.bootstrappedUserObject) {
        currentUser = new mvUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return {
        currentUser : currentUser,
        isAuthenticated : function() {
            return !!this.currentUser;
        }
    }
});