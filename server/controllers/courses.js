var Course = require('mongoose').model('Course');

exports.getCourses = function(req, res) {
    Course.find({}).exec(function(err, collection) {
        res.send(collection);
    });
};

exports.getCourseById = function(req, res) {
    Course.findOne({_id: req.params.id}, function(err, collection) {
        res.send(collection);
    });
};

exports.createCourse = function(req, res) {
    var courseData = req.body;
    Course.create(courseData, function(err, course) {
        if(err) {
            res.status(400);
            return res.send({reason: err.toString()});
        }
        res.send(course);
    });
};