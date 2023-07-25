var express = require('express');
var app = express();

app.get('/',function(req,res)
{
    console.log(req.query)
    // let c = parseInt(req.query.a)+  parseInt(req.query.b);
    res.send("sum is " +c)
    res.send("welcome to Express with post");
})
app.get('/home',function(req,res)
{    
    // res.send('<h1>this is home page </h1>')
    res.sendFile(__dirname+"/home.html");
})
app.get('/add',function(req,res)
{
    res.sendFile(__dirname+"/pages/add.html")
})
app.get('/showsum',function(req,res)
{  let c = parseInt(req.query.a)+  parseInt(req.query.b);
    res.send("sum is "+c )
    res.send("hello")
    // res.sendFile(__dirname+"/pages/add.html")
    
})

app.listen(8080,()=>console.log("server running on 8080"));
