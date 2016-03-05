var auth = require('./auth');
//var fileupload = require('./fileupload');
var users = require('../controllers/users');
var courses = require('../controllers/courses');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var path = require('path');

module.exports = function(app) {

    //app.use(fileupload.multerupload);

    app.post('/api/photo', function(req,res) {
        console.log(req.files);
        res.end("File uploaded");
    });

    app.get('/api/users', auth.requiresRole('admin'), users.getUsers); //display user route
    app.post('/api/users', users.createUser); //new user route
    app.put('/api/users', users.updateUser); //edit user route

    app.get('/api/courses', courses.getCourses); //display courses route
    app.get('/api/courses/:id', courses.getCourseById); //display by id route
    app.post('/api/courses', courses.createCourse); //add new course route

    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]); //req.params[0] matches the * in /partials/* route
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res) {
        req.logout();
        res.end();   //something
    });

    app.all('/api/*', function(req, res) {
        res.sendStatus(404); //res.send(number) deprecated
    });

    app.get('*', function (req, res) {
        res.render('index', {
            bootstrappedUser : req.user
        });
    });
};