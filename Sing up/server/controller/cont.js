var totalmodel=require('../model/model');
var bcrypt=require('bcrypt');
var dotenv=require('dotenv');
var multer=require('multer');
var path=require('path');
var upload=multer();
var fs=require('fs');
const { request } = require('express');
var formidable=require('formidable');
dotenv.config();
var jwt=require('jsonwebtoken');
var user=totalmodel.shps;
var item=totalmodel.item;
module.exports.sign=(req,res)=>{
    if(req.body.password!=req.body.passworda)
    {
        res.status(500).send({err:"Passwords don't match!"});
    }
    if(req.body.nickname=='')
    {
        res.status(500).send({err:"Nickname cannot be empty!"});
    }
    if(req.body.password=='')
    {
        res.status(500).send({err:"Password cannot be empty!"});
    }
    if(req.body.email=='')
    {
        res.status(500).send({err:"Email cannot be empty!"});
    }
    if(!req.body.email.includes('@'))
    {
        res.status(500).send({err:"Wrong email type!"});
    }
    else{
    bcrypt.hash(req.body.password,10).then(
        (resu)=>{
            user.create({Nickname:req.body.nickname,Password:resu,email:req.body.email}).catch((e)=>{res.status(500).send({err:e.message})});
        }
    )
}
}
module.exports.login=(req,res)=>{
    console.log(req.body);
    user.findOne({'Nickname':req.body.Nickname}).then((result)=>{
        if(!result)
        {
            res.status(500).send({err:'User does not found!'});
        }
        else
        {
            bcrypt.compare(req.body.Password,result.Password).then((resu)=>{
                console.log(resu);
                if(resu)
                {
                    console.log('Access Granted!');
                    const payload = { nickname: req.body.Nickname,email:req.body.email};
                    const options = { expiresIn: '10m' };
                    var sign=jwt.sign(payload,process.env.secret_key,options);
                    var refresh=jwt.sign(payload,process.env.refresh_key);
                    res.status(200).send({signup:sign,refresh1:refresh,nickname:req.body.Nickname,email:req.body.email});
                }
                else
                {
                    res.status(500).send({err:'User does not found!'});
                }

            });
        }
        });
}
module.exports.dashboard=(req,res)=>{
    try{
    var value=jwt.verify(req.body.sign,process.env.secret_key);
    if(Date.now()-parseInt(value.exp)>0)
    {
        res.status(200).json({err:'No error.!'});
    }
    else
    {
        res.status(405).json({err:'No error!'});
    }
    }
    catch(err){
        res.status(505).json({err:'Malformed key!'})
    }
    console.log(value);
}
module.exports.item=(req,res)=>{
    const form =new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        var data=fs.readFileSync(files.file.filepath);
        data=Buffer.from(data,'binary');
        item.create({Name:fields.item,Price:parseInt(fields.price),Amount:parseInt(fields.amount),image:data}).catch((err)=>{console.log(err)});
      });
    res.sendStatus(200);
}