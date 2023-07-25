
var mongoose = require('mongoose');
var schema = new mongoose.Schema(
    {
        tname:String,
        tage:Number,
        tcity:String
    }
);
module.exports = new mongoose.model('teachers',schema)
