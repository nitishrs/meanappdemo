angular.module('app', ['ngResource','ngRoute','ngMessages','ngTagsInput','ngDialog']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    var routeRoleChecks = {
        isAdmin: {
                auth: function(mvAuth) {
                    return mvAuth.authorizeCurrentUserForRoute('admin');
                }
        },
        isLoggedIn: {
                auth: function(mvAuth) {
                    return mvAuth.isLoggedIn();
                }
        },
        isTeacher: {
                auth: function(mvAuth) {
                    return mvAuth.authorizeCurrentUserForRoute('teacher');
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
        .when('/course/:id',
            {
                templateUrl: '/partials/courses/course',
                controller: 'mvCourseDisplayCtrl'
            }
         )
        .when('/myprofile',
            {
                templateUrl : '/partials/account/myprofile',
                controller: 'mvProfileDisplayCtrl',
                resolve: routeRoleChecks.isLoggedIn
            }
        )
        .when('/courses/mycourses',
            {
                templateUrl: '/partials/account/mycourses',
                controller: 'mvUserCoursesListCtrl',
                resolve: routeRoleChecks.isLoggedIn
            }
        )
        .when('/editprofile',
            {
                templateUrl : '/partials/account/editprofile',
                controller: 'mvEditProfileCtrl',
                resolve: routeRoleChecks.isLoggedIn
            }
        )
        .when('/admin/users',
            {
                templateUrl: '/partials/admin/user-list',
                controller: 'mvUserListCtrl',
                resolve: routeRoleChecks.isAdmin //takes a function which returns a promise
            }
        )
        .when('/admin/courses',
            {
                templateUrl: '/partials/admin/course-list',
                controller: 'mvCourseListAdminCtrl',
                resolve: routeRoleChecks.isAdmin
            }
        )
        .when('/admin/viewprofile',
            {
                templateUrl: 'partials/admin/viewprofile',
                controller: 'mvProfileViewCtrl',
                resolve: routeRoleChecks.isAdmin
            }
        )
        .when('/admin/editprofile',
            {
                templateUrl: 'partials/admin/editprofile',
                controller: 'mvAdminProfileEditCtrl',
                resolve: routeRoleChecks.isAdmin
            }
        )
        .when('/403',
            {
                templateUrl: 'partials/error/403'
            }
        )
        .when('/404',
            {
                templateUrl: 'partials/error/404'
            }
        )
        .when('/signup-user',
            {
                templateUrl: 'partials/account/signup-user',
                controller: 'mvSignupCtrl'
            }
        )
        .when('/signup-teacher',
            {
                templateUrl: 'partials/account/signup-teacher',
                controller: 'mvSignupCtrl'
            }
        )
        .when('/signup',
            {
                templateUrl: 'partials/account/signup'
            }
        )
        .when('/courses',
            {
                templateUrl: 'partials/courses/course-list',
                controller: 'mvCourseListCtrl'
            }
        )
        .when('/courses/addcourse',
            {
                templateUrl: 'partials/courses/addcourse',
                controller: 'mvCourseAddCtrl',
                resolve: routeRoleChecks.isTeacher
            }
        )
        .when('/admin/dashboard',
            {
                templateUrl: 'partials/admin/dashboard',
                controller: 'mvDashboardDisplayCtrl',
                resolve: routeRoleChecks.isAdmin
            }
        );
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/403');
        } else if(rejection === 'not found') {
            $location.path('/404');
        }
    });
});