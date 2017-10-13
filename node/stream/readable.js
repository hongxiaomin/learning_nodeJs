const fs=require('fs');
let rs=fs.createReadStream('../text/1.txt',{
    flags:'r',//表示打开文件之后想干什么，默认为r =read；w = write
    encoding:null,//得到的数据是Buffer对象，如果指定编码，那么是字符串类型的
    start:12,
    end:19,
    highWaterMark:3
});
//可以在创建流之后指定编码
rs.setEncoding('utf8');
//流是EventEmitter的子类
rs.on('data',function(data){
    console.log(data);
});
//当读取文件出错的时候可以监听ERROR事件
rs.on('error',function(err){
    console.log(err);
});
//当读完文件的时候会触发end事件
rs.on('end',function(){
    console.log('读取完毕');
});

/*64kb
* 1、先从文件中读取64k，然后发射 rs.emit('data')
* 2、再从文件中读取64k，然后再发射 rs.emit('data')*/
