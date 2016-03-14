var myApp = angular.module('app');

myApp.controller('mvProfileViewCtrl', function($scope, $location, mvUser) {
    var queryStrings = $location.search();
    mvUser.get({_id: queryStrings.id}, function(userData) {
        $scope.user = {
            username : userData.username,
            firstName : userData.firstName,
            lastName: userData.lastName,
            _id: userData._id
        };
    });
});