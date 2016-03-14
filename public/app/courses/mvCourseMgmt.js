var myApp = angular.module('app');

myApp.factory('mvCourseMgmt', function($http, $q, mvCourse, mvIdentity) {
    return {
        createCourse: function(newCourseData) {
            var newCourse = new mvCourse(newCourseData);
            var dfd = $q.defer();

            newCourse.$save().then(function() {
                dfd.resolve();
            }, function(response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

        isCourseUndertaken: function(courseId) {
            var user = mvIdentity;
            console.log('receieved course id - ' + courseId);
            console.log('comparing courses - ' + user.currentUser.courses_undertaken);
            return user.currentUser.courses_undertaken.indexOf(courseId) > -1;
        }
    }
});