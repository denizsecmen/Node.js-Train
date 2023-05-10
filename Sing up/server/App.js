var express=require('express');
var router=require('./router/router');
var bodyParser=require('body-parser');
var dotenv=require('dotenv');
var multer=require('multer');
dotenv.config();
var cors=require('cors');
var app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',router);
app.listen(3333,(err)=>{
    if(err)
    {
        throw err;
    }
    console.log('Listening port 3333.')
})