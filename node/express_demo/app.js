const express = require('express');
let app = express();//构建一个express实例
let fs =require('fs');
//use表示使用一个中间件
//next 是继续下一个函数的意思 next是一个由express提供的函数
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    next();
});
//处理get请求
app.get('/index',(req,res)=>{
    fs.createReadStream('../text/2.txt').pipe(res);
});
app.get('/home',(req,res)=>{
    fs.createReadStream('../text/3.txt').pipe(res);
});
app.get('*',(req,res)=>{
    res.send('404')
})
app.listen(8060);