var mongoose = require('mongoose');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('Multivision DB Opened...');
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String
    });

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            User.create({firstName: 'Nitish', lastName: 'Shiggaon', username: 'nitishrs'});
            User.create({firstName: 'Kantesh', lastName: 'Kulkarni', username: 'kanteshyk'});
            User.create({firstName: 'Sunith', lastName: 'K S', username: 'sunithks'});
        }
    })
};