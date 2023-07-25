const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.post('/student/add',(req,res)=>{
    let formdata = req.body;
    console.log(formdata)
    let a = formdata.a;
    let b = formdata.b;
    let c = parseInt(a)+parseInt(b)
    res.write("data is : " + JSON.stringify(formdata));
    res.end("sum is "+c);   
}
)
app.listen(8080,()=>console.log("app running on 8080"));