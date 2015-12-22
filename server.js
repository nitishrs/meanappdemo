var port = 3030;
var express = require('express');
var stylus = require('stylus');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine','jade');

app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

app.use(express.static(__dirname + '/public'));

app.get('*',function(req, res) {
    res.render('index');
});

app.listen(port);
console.log('Listening on port - '+port);

