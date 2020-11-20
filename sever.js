var express = require("express");
sever = express();
sever.use(express.static('Exercise1'));
sever.get("/submitForm",function(req,res){

});
sever.get("/",function(req,res){
    res,send ("Hello,World!");
});
sever.get("/md2020",function(req,res){
    res,send ("Hello,MD2020");
});
sever.get("*",function(req,res){
    res,send ("Page not found",404);
});
sever.listen(8080);
console.log("Express run on port:8080");