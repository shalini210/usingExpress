var express = require('express');
var app = express();
var student = require('./studentroutes.js');

app.use('/student',student)   // /student
app.get('/',function(req,res){
res.send("home page of ap p")}
)
app.listen(8080,()=>console.log("running on 8080"));