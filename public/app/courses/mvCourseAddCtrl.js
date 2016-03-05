var myApp = angular.module('app');

myApp.controller('mvCourseAddCtrl', function($scope, mvCourseMgmt, mvNotifier, $location) {

    $scope.addcourse = function() {

        /* parse date */
        var dateobj = new Date();
        var datestring = (dateobj.getMonth()+1) + '/' + dateobj.getDate().toString() + '/' + dateobj.getFullYear().toString();
        var currentdate = new Date(datestring);

        /* parse tags */
        var tagsArray = [];
        var tags = $scope.course.tags;
        for(var i = 0; i < tags.length; i++) {
            var obj = tags[i];
            tagsArray[i] = obj.text;
        }

        var newCourseData = {
            title: $scope.course.title,
            featured: true,
            shortdescription: $scope.course.shortdescription,
            longdescription: $scope.course.longdescription,
            tags: tagsArray,
            imageurl: '/images/default/placeholder-750x500.png',
            published: currentdate
        };

        console.log($scope.course.shortdescription);
        console.log($scope.course.longdescription);

       /* mvCourseMgmt.createCourse(newCourseData).then(
            function() {
                mvNotifier.notify('Course added succcessfully','success');
                $location.path('/');
            }, function(reason) {
                mvNotifier.notify(reason,'error');
            }
        ); */

    };

});
