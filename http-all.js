var http = require("http");
http.get(process.argv[2], function(response) {
   var buffers = [];
   response
   .on('data', function(data) {
      buffers.push(data); 
   })
   .on('end', function() {
      var res = Buffer.concat(buffers).toString();
      console.log(res.length);
      console.log(res);
   });
});