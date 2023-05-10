var bcrypt=require('bcrypt');
var dotenv=require('dotenv');
var jwt=require('jsonwebtoken');
var multer=require('multer');

module.exports.adminentrance=(req,res)=>{
    console.log(req.body);
    if(req.body.Nickname=='Admin' && req.body.Password=='admin')
    {
        console.log('Access Granted!!');
        const payload = { nickname: req.body.Nickname};
        const options = { expiresIn: '20m' };
        var sign=jwt.sign(payload,process.env.secret_key,options);
        var refresh=jwt.sign(payload,process.env.refresh_key,options);
        res.status(200).json({Nickname:'Admin',Sign:sign,Refresh:refresh});
    }
    req.status(500)
}