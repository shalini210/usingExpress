var mongoose = require('mongoose')
var schema = new mongoose.Schema(
    {
        studentname:{type:String},
        email:{type:String},
        age:{type:String}
    }
);
 var student = new mongoose.model('Student123',schema);
 module.exports= student;