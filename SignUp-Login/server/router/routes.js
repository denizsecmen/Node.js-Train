var express=require('express');
var router=express.Router();
var controller=require('../controller/cont');
router.post('/sign',controller.signup);
router.post('/login',controller.login);
module.exports=router;