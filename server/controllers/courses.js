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

exports.deleteCourse = function(req, res) {
    var id=req.params.id;
    console.log('Delete course at server side, id - ' + id);
    Course.findOneAndRemove({_id: id}, function(err, docs) {
        if(err) {
            console.log('ERROR in deleting');
        }
        res.json(docs);
    })
};