var User = require('mongoose').model('User');
var encrypt = require('../utilities/encryption');

exports.getUsers = function(req, res) {
    User.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};

exports.getCurrentUserData = function(req, res) {
    var currentUserData = req.user;
    res.send(currentUserData);
};

exports.createUser = function(req, res, next) {
    var userData = req.body;
    userData.username = userData.username.toLowerCase();
    userData.salt = encrypt.createSalt();
    userData.hashed_pwd = encrypt.hashPwd(userData.salt, userData.password);
    User.create(userData, function(err, user) {
        if(err) {
            if(err.toString().indexOf('E11000') > -1) { //E11000 is the mongodb error code for duplicate user
                err = new Error('Duplicate Username'); //Re-instantiate with the friendly msg
            }
            res.status(400);
            return res.send({reason: err.toString()}); //Send reason to the client for notification
        }
        req.logIn(user, function(err) {
            if(err) {
                return next(err);
            }
            res.send(user);
        });
    });
};

exports.updateUser = function(req, res) {
    var userUpdates = req.body;

    if(req.user._id != userUpdates._id) {
        res.status(403);
        return res.end();
    }

    if(userUpdates.firstName.length > 0 && userUpdates.lastName.length > 0 && userUpdates.username.length > 0) {
        req.user.firstName = userUpdates.firstName;
        req.user.lastName = userUpdates.lastName;
        req.user.username = userUpdates.username;
    }

    req.user.courses_undertaken = userUpdates.courses_undertaken;
    req.user.courses_taught = userUpdates.courses_taught;

    if(userUpdates.password && userUpdates.password.length > 0) {
        req.user.salt = encrypt.createSalt();
        req.user.hashed_pwd = encrypt.hashPwd(req.user.salt, userUpdates.password);
    }

    req.user.save(function(err) {
        if(err) {
            res.status(400);
            return res.send({reason: err.toString()});
        }
        res.send(req.user);
    });
};

exports.updateUserById = function(req, res) {
    console.log('in updateUserById function');
    console.log('id to be updated - ' + req.body._id);
    User.findOneAndUpdate({_id : req.body._id}, {$set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }}, {new:true},
    function(err, docs) {
        res.send(docs);
    });
};

exports.getUserById = function(req, res) {
    console.log('req.params.id - ' + req.params.id);
    console.log('req.body._id - ' + req.body._id);
    User.findOne({_id: req.params.id}, function(err, collection) {
        res.send(collection);
    });
};

exports.deleteUser = function(req, res) {
    var id = req.params.id;
    User.findOneAndRemove({_id: id}, function(err, docs) {
        if(err) {
            console.log('ERROR in deleting');
        }
        res.send(docs);
    });
};