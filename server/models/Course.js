var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required'},
    featured: {type: Boolean, required: '{PATH} is required'},
    published: {type: Date, required: '{PATH} is required'},
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Course.create({title: 'C# for Sociopaths', featured: true, published: new Date('1/2/2015'), tags: ['C#']});
            Course.create({title: 'ASP.NET Dynamic Data', featured: true, published: new Date('6/25/2015'), tags: ['ASP', '.net']});
            Course.create({title: 'Base One Foundation Component Library (BFC)', featured: true, published: new Date('2/1/2013'), tags: ['Libraries']});
            Course.create({title: 'COBOL on Wheelchair', featured: true, published: new Date('5/23/2015'), tags: ['Cobol']});
            Course.create({title: 'ColdBox Platform', featured: false, published: new Date('12/21/2015'), tags: ['Coldbox']});
            Course.create({title: 'JavaServer Faces (Mojarra)', featured: true, published: new Date('2/15/2012'), tags: ['JSF','Java']});
            Course.create({title: 'Ember.js 2.0.2', featured: true, published: new Date('3/15/2015'), tags: ['Ember','Js']});
            Course.create({title: 'Ruby on Rails', featured: true, published: new Date('12/13/2015'), tags: ['Ruby','Rails']});
            Course.create({title: 'AngularJS', featured: true, published: new Date('7/12/2014'), tags: ['AngularJS','Js']});
            Course.create({title: 'MEAN (software bundle)', featured: true, published: new Date('12/29/2015'), tags: ['Stack','MEAN']});
            Course.create({title: 'Twitter Bootstrap', featured: true, published: new Date('3/21/2015'), tags: ['Bootstrap','CSS']});
            Course.create({title: 'Models of Database Management Systems', featured: false, published: new Date('4/30/2015'), tags: ['Database']});
            Course.create({title: 'HTML, XHTML, XML, CSS & JavaScript', featured: false, published: new Date('11/6/2013'), tags: ['Basics','HTML']});
            Course.create({title: 'Transaction Processing Systems (TPS)', featured: true, published: new Date('5/11/2012'), tags: ['Database']});
            Course.create({title: 'MongoDB with Mongoose', featured: true, published: new Date('1/11/2015'), tags: ['MongoDB']});
            Course.create({title: 'MongoDB with MongoJS', featured: true, published: new Date('9/23/2015'), tags: ['MongoDB']});
            Course.create({title: 'CoffeeScript to keep you awake', featured: true, published: new Date('1/10/2016'), tags: ['Coffeescript']});
            Course.create({title: 'Object Oriented Programming with C++', featured: false, published: new Date('7/22/2015'), tags: ['C++']});
            Course.create({title: 'Foundation 5', featured: true, published: new Date('11/1/2016'), tags: ['Foundation','CSS']});
            Course.create({title: 'LESS vs SASS vs SCSS', featured: true, published: new Date('12/31/2015'), tags: ['CSS']});
            Course.create({title: 'Templating with JADE', featured: true, published: new Date('1/1/2016'), tags: ['Templating','JADE']});
        }
    })
}

exports.createDefaultCourses = createDefaultCourses;