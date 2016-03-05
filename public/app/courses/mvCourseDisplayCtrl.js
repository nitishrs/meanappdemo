var myApp = angular.module('app');

myApp.controller('mvCourseDisplayCtrl', function($scope, mvCourse, $location) {
    var courseId = $location.path().replace('/course/','');
    console.log(courseId);
    mvCourse.get({_id: courseId}, function(courseData) {
        $scope.course = {
            title : courseData.title,
            shortdescription : courseData.shortdescription,
            longdescription : courseData.longdescription,
            imageurl : courseData.imageurl,
            tags : courseData.tags
        };
    });
});