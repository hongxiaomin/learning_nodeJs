const fs=require('fs');
let rs=fs.createReadStream('../text/1.txt',{
    highWaterMark:3
});
rs.setEncoding('utf8');
rs.on('data',function(data){
    console.log(data);
    rs.pause();//暂停触发data事件
});
setTimeout(function(){
    rs.resume();//重新开始触发data事件
},1000)
rs.on('end',function(){
    console.log('读取完毕');
})