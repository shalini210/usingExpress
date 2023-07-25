const express = require("express");
const dbconfig = require("./dbconfig");
const bodyparser = require("body-parser")
const studentModel = require('./models/student')
const mongoose = require('mongoose');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(dbconfig.url,{})
.then(()=>
{
    console.log("connected");
})
.catch(err =>
    {
        console.log("not connected"+ err)
    })
app.get("/",async function(req,res)
{
    // res.send("welcome to mongo with express");
    const students =await studentModel.find();
    res.json(students);
})
app.post("/",function(req,res)
{
    const student = new studentModel({
        studentname:req.body.sname,
        email:req.body.semail,
        age:req.body.sage
    })
    student.save().then(data=>
        {
    res.send("data inserted");
        })
        .catch(err=>
        {
            res.send("error : " +err )
        })
})
app.delete("/:id",async function(req,res){
    // studentModel.remove({id:req.params.id})
    await studentModel.findByIdAndRemove(req.params.id).then(
        data=>
        {
            if(data)
            {
                console.log(data)
                res.send("deleted");
            }
            else
            {
                res.send("student not found")
            }

        })
        .catch(err=>res.send(err))
})

app.put("/:id",async function(req,res)
{
    await studentModel.findByIdAndUpdate(req.params.id,req.body,{useFindandModify:false}).then(
        data=>
        {
            if(data)
            {
                res.send("updated")
            }
            else
            {
                res.send("not found/ update")
            }
        })
        .catch(err=>
            res.send("error occured "+ err))
})
app.listen(8080,()=>console.log("running on 8080"));