'use strict'
var fs = require('fs');
var path = require('path');

let folder = process.argv[2], ext = process.argv[3];

fs.readdir(folder, function(err, files) {
    files.forEach(function(file) {
        if (path.extname(file) === `.${ext}`) console.log(file);
    });
});