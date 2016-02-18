angular.module('app', ['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    var routeRoleChecks = {
        admin: {
                auth: function(mvAuth) {
                           return mvAuth.authorizeCurrentUserForRoute('admin');
                        }
                }
    };

    $routeProvider  //routeProvider has two callbacks when() method - for a matched pattern or otherwise()
        .when('/', //root of the app, opens up main.jade and mvMainCtrl provides data for display
                {
                    templateUrl: '/partials/main/main',
                    controller: 'mvMainCtrl'
                }
        )
        .when('/admin/users',
                {
                    templateUrl: '/partials/admin/user-list',
                    controller: 'mvUserListCtrl',
                    resolve: routeRoleChecks.admin //takes a function which returns a promise
                }
        )
        .when('/signup',
                {
                    templateUrl: 'partials/account/signup',
                    controller: 'mvSignupCtrl'
                }
        );
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});