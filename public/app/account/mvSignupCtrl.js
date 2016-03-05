var myApp = angular.module('app');

myApp.controller('mvSignupCtrl', function($scope, $location, mvNotifier, mvAuth) {
    var signupType = $location.path().replace('/signup-','').toLowerCase();
    console.log('signup type - ' + signupType);

    $scope.signup = function() {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname,
            roles: []
        };
        if(signupType === 'user') {
            newUserData.roles = ['subscriber'];
        } else if(signupType === 'teacher') {
            newUserData.roles = ['subscriber','teacher'];
        }
        mvAuth.createUser(newUserData).then(
            function() {    //success function of the promise
                mvNotifier.notify('Your account has been created!','info');
                $location.path('/');
            },
            function(reason) {
                mvNotifier.notify(reason,'error');
            }
        );
    };
});