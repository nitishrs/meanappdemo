angular.module('app').controller('mvUserListCtrl', function($scope, mvUser) {
    $scope.users = mvUser.query(function(){
        console.log("received users list from server"); //a simple callback that logs out to console once the server sends all data
    }); // The function query() issues a GET request to /api/users
});