const  mongoose  = require('mongoose')
const db = require('../dbconfig');
const con = mongoose.connect(db.url,{useNewUrlParser:true});
const teacherModel = require('../models/teacher')
exports.getAll =async (req,res) =>
{
    con.then(async ()=>
    {
        const teachers =await teacherModel.find();
        res.send({data:teachers})
    }
    )
}
exports.add=async(req,res)=>
{
    console.log(req.body)
    const teacher = new teacherModel(
        {
            tname:req.body.tname,
            tage:req.body.tage,
            tcity:req.body.tcity
        }
    )
    await teacher.save().then(data=>
        res.send({message:"teacher added",
    teacher:data}))
    .catch(err=>
        {
            res.send({message:"error occured",data:err})
        })
}

exports.delete=async (req,res)=>{
// app.delete("/:id",async function(req,res){
    // studentModel.remove({id:req.params.id})
    await teacherModel.findByIdAndRemove(req.params.id).then(
        data=>
        {
            if(data)
            {
                console.log(data)
                res.send("deleted");
            }
            else
            {
                res.send("teacher not found")
            }

        })
        .catch(err=>res.send(err))
}

exports.update=async (req,res)=>{
// app.put("/:id",async function(req,res)

    // await teacherModel.findByIdAndUpdate(req.params.id,req.body,{useFindandModify:false}).then(
        await teacherModel.updateOne({_id:req.params.id},{$set:{tname:req.body.name,
            tage:req.body.age,tcity:req.body.city}}).then(
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
}