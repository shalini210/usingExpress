const express = require('express')
const TeacherRouter =  require('./routes/teacherroute')
const bodyparser=require('body-parser')
const app = express();
const cors = require('cors')
app.use(cors())              //cors is now enables for unknown origin like "localhost:3000" or any one 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use("/teacher",TeacherRouter);
app.get('/',(req,res)=>
{
    res.send("use /teacher for teacher")
}   
  )
  app.listen(8080,()=>console.log("app is running on port 8080"));
  