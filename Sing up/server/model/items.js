var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/mydb");
var admin=mongoose.Schema({
    Nickname:{type:String,
        unique:true
    },
    Password:{
        type:String
    }
})
mongoose.model('shps-Admin',admin);