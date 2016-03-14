var myApp = angular.module('app');

myApp.factory('mvUserMgmt', function($q, mvUser, mvIdentity) {
    return {
        addCourseToUser: function (courseId) {
            var courses_undertaken = mvIdentity.currentUser.courses_undertaken;
            courses_undertaken.push(courseId);
            var newUserData = {
                courses_undertaken: courses_undertaken
            };
            var dfd = $q.defer();
            var cloneUser = angular.copy(mvIdentity.currentUser);
            angular.extend(cloneUser, newUserData);
            cloneUser.$update().then(function () {
                mvIdentity.currentUser = cloneUser;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },

        removeCourseFromUser: function(courseId) {
            var courses_undertaken = mvIdentity.currentUser.courses_undertaken;
            var courseIndex = courses_undertaken.indexOf(courseId);
            courses_undertaken.splice(courseIndex, 1);
            var newUserData = {
                courses_undertaken : courses_undertaken
            };

            var dfd = $q.defer();
            var cloneUser = angular.copy(mvIdentity.currentUser);
            angular.extend(cloneUser, newUserData);
            cloneUser.$update().then(function () {
                mvIdentity.currentUser = cloneUser;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        }
    }
});