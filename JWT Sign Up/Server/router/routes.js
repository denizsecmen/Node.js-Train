var express=require('express');
var auth=require('../middleware/auth');
var router=express.Router();
var controller=require('../controller/cont');
router.post('/sign',controller.signup);
router.post('/login',controller.login);
router.post('/auth',auth.auth,controller.auth)
module.exports=router;