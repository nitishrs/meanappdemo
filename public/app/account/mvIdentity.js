var myApp = angular.module('app');

myApp.factory('mvIdentity',function($window, $q, mvUser) {
    var currentUser;
    if(!!$window.bootstrappedUserObject) {
        currentUser = new mvUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        },
        isLoggedIn: function() {
            if(!!this.currentUser) {
                return true;
            } else {
                return $q.reject('not found');
            }
        },
        isAuthorized: function(role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
});