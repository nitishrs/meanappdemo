var myApp = angular.module('app');

myApp.factory('mvCourseMgmt', function($http, $q, mvCourse) {
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
        }
    }
});