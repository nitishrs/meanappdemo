var auth = require('./auth');
var users = require('../controllers/users');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var multer = require('multer');
var crypto = require('crypto');
var path = require('path');

module.exports = function(app) {


    var storage = multer.diskStorage({
        destination: './uploads',
        filename: function(req, file, callback) {
            crypto.pseudoRandomBytes(16, function (err, raw) {
                if (err) {
                    return callback(err);
                }
                callback(null, raw.toString('hex') + path.extname(file.originalname));
            });
        }
    });
    var upload = multer({storage: storage}).single('userPhoto');
    app.post('/api/photo', function(req,res) {
        upload(req, res, function(err) {
            if(err) {
                console.log(err.toString());
             //   return res.end("Error uploading file");
            }
            res.end("File is uploaded");
        });
    });

    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);

    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);

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

//    app.get('/myprofile', users.getCurrentUserData);
};