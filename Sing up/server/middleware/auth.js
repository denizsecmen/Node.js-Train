var jwt=require('jsonwebtoken');
module.exports.verify=(req,res)=>{
    var data=jwt.verify(req.body.sign,process.env.secret_key);
    req.body={verify:data};
}