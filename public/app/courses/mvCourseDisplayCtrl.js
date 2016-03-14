var myApp = angular.module('app');

myApp.controller('mvCourseDisplayCtrl', function($scope, mvCourse, mvUserMgmt, mvCourseMgmt, mvNotifier, mvIdentity, $location, ngDialog) {
    var courseId = $location.path().replace('/course/','');
    mvCourse.get({_id: courseId}, function(courseData) {
        $scope.course = {
            title : courseData.title,
            shortdescription : courseData.shortdescription,
            longdescription : courseData.longdescription,
            imageurl : courseData.imageurl,
            tags : courseData.tags
        };
    });

    $scope.addToMyCourse = function() {
        if(mvIdentity.isAuthenticated()) {
            if(mvCourseMgmt.isCourseUndertaken(courseId)) {
                ngDialog.open({
                    plain: true,
                    template: '<div><p>You have already undertaken this course!</p><button ng-click="closeThisDialog()" class="btn btn-primary">OK</button></div>'
                });
            } else { //
                ngDialog.open({
                    template: '/partials/dialogs/confirm-course-add',
                    controller: ['$scope', function($scope) {
                        $scope.confirmAddCourse = function() {
                            mvUserMgmt.addCourseToUser(courseId).then(function() {
                                mvNotifier.notify('You have now purchased this course. You can start learning it by going to "MyCourses" section', 'success');
                            },
                            function(reason) {
                                mvNotifier.notify(reason, 'error');
                            });
                            ngDialog.close();
                        }
                    }]
                });
            }
        } else {
            ngDialog.open({
                plain: true,
                template: '<div><p>You need to be logged in for this operation!</p><button ng-click="closeThisDialog()" class="btn btn-primary">OK</button></div>'
            });
        }
    };

    $scope.checkCourseAdd = function() {
        return true;
    }
});