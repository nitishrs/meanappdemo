var auth = require('./auth');
var users = require('../controllers/users');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(app) {

    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);

    app.post('/api/users', users.createUser);

    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]); //req.params[0] matches the * in /partials/* route
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res) {
        req.logout();
        res.end();   //something
    });

    app.get('*', function (req, res) {
        res.render('index', {
            bootstrappedUser : req.user
        });
    });
};