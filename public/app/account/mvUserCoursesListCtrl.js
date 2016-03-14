var myApp = angular.module('app');

myApp.controller('mvUserCoursesListCtrl', function($scope, mvIdentity, mvNotifier, mvCourse, mvUserMgmt, ngDialog) {
    var courses_undertaken = mvIdentity.currentUser.courses_undertaken;

    var courses = new Array();

    for(i = 0; i < courses_undertaken.length; i++) {
        mvCourse.get({_id: courses_undertaken[i]}, function(data){
            courses.push({title: data.title,
                          _id: data._id});
        });
    }

    $scope.courses_undertaken = courses;

    $scope.learnCourse = function() {
        ngDialog.open({
            plain: true,
            template: '<div><p>This feature will start soon</p><button ng-click="closeThisDialog()" class="btn btn-primary">OK</button></div>'
        });
    };

    $scope.removeCoursesUndertaken = function(courseId) {
        console.log('course id to remove - ' + courseId);
        ngDialog.open({
            template: '/partials/dialogs/confirm-course-delete',
            controller: ['$scope', function($scope) {
                $scope.confirmDeleteCourse = function() {
                    mvUserMgmt.removeCourseFromUser(courseId).then(
                        function() {
                            mvNotifier.notify('Course removed from your subscriptions', 'success');
                        }, function(reason) {
                            mvNotifier.notify(reason, 'error');
                        }
                    );
                    refresh(courseId);
                    ngDialog.close();
                };
            }]
        });
    };
});