var fs = require('fs') 
var fileName = process.argv[2];
console.log(fs.readFileSync(fileName).toString().split('\n').length - 1)