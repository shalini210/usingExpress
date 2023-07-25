const express = require('express')
const router = express.Router();
const teacherController = require('../controller/teacher')
router.get('/',(req,res)=>teacherController.getAll(req,res))
router.post('/',(req,res)=>teacherController.add(req,res))
router.put('/:id',(req,res)=>teacherController.update(req,res))
router.delete('/:id',(req,res)=>teacherController.delete(req,res))

module.exports = router;