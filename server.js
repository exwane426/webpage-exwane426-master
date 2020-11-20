// var http = require('http');
// http.createServer(function(req, res){
//     res.write("Hello World!");
//     res.end();
// }).listen(8080)

var express = require("express");
server = express();


var bodyParser = require("body-parser");
var formidable = require("formidable");
var fs = require("fs");

server.use(express.static('Exercise1'));
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.text({ type: 'text/html' }));
server.use(bodyParser.json({ type: 'application/*+json' }));



server.get("/submitForm", function(req, res){

});

server.post("/add",function(req,res){
   var form = formidable.IncomingForm();
   form.maxFileSize =  200*1024; 
   form.parse(req, function(err, fields, files){
    if(err){
      console.log("File size too large!");
      //res.redirct("")
    }else{
      var gotFields = fields;
      var fileExt = files.poster.name.split(".")[1];
      gotFields.poster = gotFields.id + "."+fileExt;
      var posterPath = "Exercise1/uploads/"+gotFields.poster;
      fs.renameSync(files.poster.path, posterPath);
    }
   })
});


server.get("/", function(req, res){
  res.send("Hello World!");
});

server.get("/md2020", function(req, res){
    res.send("Hello MD2020!");
});

server.get("*", function(req, res){
    res.send("Page not found",404);
})

server.listen(8080);
console.log("Server running on port: 8080")
