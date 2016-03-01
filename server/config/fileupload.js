var multer = require('multer');
var crypto = require('crypto');
var done = false;

exports.multerupload = multer({ dest: './uploads/',
    rename: function (fieldname, filename){
        return filename;
    },
    onFileUploadStart: function(file){
        console.log("file size: " + file.size);
        console.log(file.originalname + ' is starting...');
    },
    onFileUploadComplete: function(file){
        console.log(file.fieldname + ' uploaded to ' + file.path);
        done = true;
    },
    onFileUploadData: function(file, data){
        console.log("data being received " + data);
    }
}).single('userPhoto');