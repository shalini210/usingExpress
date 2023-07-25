var express =require('express');
var router = express.Router();
router.get('/add',function(req,res)
{
    res.send("student add called");
})
router.get('/delete',function(req,res)
{
    res.send("student dewletr called");
})
module.exports = router;