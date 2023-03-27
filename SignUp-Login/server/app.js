var express=require('express');
var router=require('./router/routes');
var bodyparser=require('body-parser');
var JWT=require('jsonwebtoken');
var dotenv=require('dotenv');
dotenv.config();
var cors=require('cors');
var app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());
app.use('/',router);
app.listen(7000,()=>{
    console.log('Server run at port 7000.')
})