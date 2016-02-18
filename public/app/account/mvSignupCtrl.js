var myApp = angular.module('app');

myApp.controller('mvSignupCtrl', function($scope, $location, mvNotifier, mvAuth, mvUser) {

    $scope.signup = function() {
        var newUserData = {
            username : $scope.email,
            password : $scope.password,
            firstName : $scope.fname,
            lastName : $scope.lname
        };

        mvAuth.createUser(newUserData).then(
            function() {    //success function of the promise
                mvNotifier.notify('Your account has been created!','info');
                $location.path('/');
            },
            function(reason) {
                mvNotifier.notify(reason,'error');
            }
        );
    }
})