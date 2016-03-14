var myApp = angular.module('app');

myApp.controller('mvAdminProfileEditCtrl', function($scope, $location, mvUser, mvAuth, mvNotifier) {
    var queryStrings = $location.search();
    var userId = queryStrings.id;

    mvUser.get({_id: userId}, function(userData) {
        $scope.email = userData.username;
        $scope.fname = userData.firstName;
        $scope.lname = userData.lastName;
    });

    $scope.update = function() {
        var newUserData = {
            username : $scope.email,
            firstName : $scope.fname,
            lastName : $scope.lname
        };

        if($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        }

        console.log('updating user id - ' + userId);
        mvAuth.updateUserById(userId, newUserData).then(function() {
                mvNotifier.notify('The user account has been updated', 'success');
            },
            function(reason) {
                mvNotifier.notify(reason, 'error');
            }
        );
    };
});