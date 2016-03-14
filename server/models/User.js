var mongoose = require('mongoose');
var encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required!'},
    lastName: {type: String, required: '{PATH} is required!'},
    username: {type: String, required: '{PATH} is required!', unique: true},
    salt: {type: String, required: '{PATH} is required!'},
    hashed_pwd: {type: String, required: '{PATH} is required!'},
    courses_taught: [String],
    courses_undertaken: [String],
    roles: [String]
});

userSchema.methods = {
    authenticate : function(passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole : function(role) {
        return this.roles.indexOf(role) > -1;
    }
};

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, '123');
            User.create({
                firstName: 'Nitish',
                lastName: 'Shiggaon',
                username: 'nitishrs',
                salt: salt,
                hashed_pwd: hash,
                courses_taught: [],
                courses_undertaken: [],
                roles: ['subscriber','teacher','admin']
            });

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, '123');
            User.create({
                firstName: 'Kantesh',
                lastName: 'Kulkarni',
                username: 'kanteshyk',
                salt: salt,
                hashed_pwd: hash,
                courses_taught: ['56d3fb120d9749a023e8eac5','56d3fb120d9749a023e8eac7'],
                courses_undertaken: ['56d817a1f00b13a020766c36','56d817a1f00b13a020766c37','56d817a1f00b13a020766c38'],
                roles: ['subscriber','teacher']
            });

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, '123');
            User.create({
                firstName: 'Sunith',
                lastName: 'K S',
                username: 'sunithks',
                salt: salt,
                hashed_pwd: hash,
                courses_taught: ['56d3fb120d9749a023e8eace'],
                courses_undertaken: ['56d817a1f00b13a020766c39','56d817a1f00b13a020766c3a','56d817a1f00b13a020766c3b'],
                roles: ['subscriber','teacher']
            });

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, '123');
            User.create({
                firstName: 'Smitha',
                lastName: 'Bhandalkar',
                username: 'smithapb',
                salt: salt,
                hashed_pwd: hash,
                courses_taught: ['56d3fb120d9749a023e8ead0','56d3fb120d9749a023e8eacc'],
                courses_undertaken: ['56d3fb120d9749a023e8eac5','56d3fb120d9749a023e8eac7'],
                roles: ['subscriber','teacher']
            });

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, '123');
            User.create({
                firstName: 'Manoj',
                lastName: 'Deshpande',
                username: 'manojd',
                salt: salt,
                hashed_pwd: hash,
                courses_taught: [],
                courses_undertaken: ['56d3fb120d9749a023e8eac5','56d3fb120d9749a023e8eac7','56d3fb120d9749a023e8ead0','56d3fb120d9749a023e8eacc'],
                roles: ['subscriber']
            });
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;