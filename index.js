var express = require('express');
var app = express();


app.get('/',function(req,res)
{
    // console.log(req)
    res.send("welcome to Express");
})
app.get('/home',function(req,res)
{
    res.send('<h1>this is home page </h1>')
})

app.listen(8080,()=>console.log("server running on 8080"));
