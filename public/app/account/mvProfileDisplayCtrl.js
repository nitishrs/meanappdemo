var myApp = angular.module('app');

myApp.controller('mvProfileDisplayCtrl', function($scope, mvIdentity) {
    console.log('logging out user details for my profile');
    $scope.identity = mvIdentity;
});