var myApp = angular.module('app');

myApp.controller('mvDashboardDisplayCtrl', function($scope, mvUser, mvCourse) {
    var courses = mvCourse.query(function() {
        $scope.coursesCount = courses.length;
    });
    var users = mvUser.query(function() {
        $scope.usersCount = users.length;
    });
});