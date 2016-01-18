angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.courses = [
        {name: 'C# for Sociopaths', featured: true, published: new Date('1/2/2015')},
        {name: 'ASP.NET Dynamic Data', featured: true, published: new Date('6/25/2015')},
        {name: 'Base One Foundation Component Library (BFC)', featured: true, published: new Date('2/1/2013')},
        {name: 'COBOL on Wheelchair', featured: true, published: new Date('5/23/2015')},
        {name: 'ColdBox Platform', featured: false, published: new Date('12/21/2015')},
        {name: 'JavaServer Faces (Mojarra)', featured: true, published: new Date('2/15/2012')},
        {name: 'Ember.js 2.0.2', featured: true, published: new Date('3/15/2015')},
        {name: 'Ruby on Rails', featured: true, published: new Date('12/13/2015')},
        {name: 'AngularJS', featured: true, published: new Date('7/12/2014')},
        {name: 'MEAN (software bundle)', featured: true, published: new Date('12/29/2015')},
        {name: 'Twitter Bootstrap', featured: true, published: new Date('3/21/2015')},
        {name: 'Models of Database Management Systems', featured: false, published: new Date('4/30/2015')},
        {name: 'HTML, XHTML, XML, CSS & JavaScript', featured: false, published: new Date('11/6/2013')},
        {name: 'Transaction Processing Systems (TPS)', featured: true, published: new Date('5/11/2012')},
        {name: 'MongoDB with Mongoose', featured: true, published: new Date('1/11/2015')},
        {name: 'MongoDB with MongoJS', featured: true, published: new Date('9/23/2015')},
        {name: 'CoffeeScript to keep you awake', featured: true, published: new Date('1/10/2016')},
        {name: 'Programming Languages: C++, Java, Python and Others', featured: false, published: new Date('7/22/2015')},
        {name: 'Foundation 5', featured: true, published: new Date('11/1/2016')},
        {name: 'LESS vs SASS vs SCSS', featured: true, published: new Date('12/31/2015')},
        {name: 'Templating with JADE', featured: true, published: new Date('1/1/2016')}
    ]
});