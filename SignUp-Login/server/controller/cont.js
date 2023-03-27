var model=require('../model/model');
var bycr=require('bcrypt');
const jwt=require('jsonwebtoken');
var dotenv=require('dotenv');
dotenv.config();
module.exports.signup= async (req,res)=>{
    var b=await bycr.hash(req.body.password,5);
    model.create({email:req.body.email,Nickname:req.body.nickname,password:b}).then(
        (resu)=>{res.status(100).send('Succesfully Appened')}
    ).catch((err)=>{res.status(500).send('Error Happened');});
}
module.exports.login=(req,res)=>{
model.find({Nickname:req.body.nickname}).then((resu)=>{
    bycr.compare(req.body.password,resu[0].password,(err,resu)=>{
        if(resu)
        {
            console.log('Access Granted!');
            var t=jwt.sign(req.body.nickname,process.env.ACCESS_TOKEN_SING);
            res.status(200).send({acctoken:t});
        }
        else
        {
            console.log('Access Denied');
            res.status(500).send({acctoken:t});
        }
    })
})
}
