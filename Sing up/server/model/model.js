var mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/mydb");
var schema=mongoose.Schema({
    Nickname:{
        type:String,
        unique:true
    },
    Password:{
        type:String,
    },
    email:{
        type:String,
    },
    Itemlist:[]
})
var itemschema=mongoose.Schema({
    Name:{
        type:String
    },
    Price:{
        type:Number
    }
    ,Amount:
    {
        type:Number
    }
    ,
    image:
    {
        data: Buffer,
        contentType: String
    }
})
module.exports.shps=mongoose.model('shps',schema);
module.exports.item=mongoose.model('itemset',itemschema);