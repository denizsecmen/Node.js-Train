var jwt=require('jsonwebtoken');
module.exports.auth=(req,res,next)=>{
    try{
    req.verified=jwt.verify(req.body.acckey,process.env.ACCESS_TOKEN_SING);
    }catch{
        res.status(401).json({err:'Invalid key.'});
    }
    next();
}