var mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
var t=mongoose.Schema({
    email:String,
    Nickname:{type:String,unique:true},
    password:String,

}, { versionKey: false });
module.exports=mongoose.model('singuplogins',t);