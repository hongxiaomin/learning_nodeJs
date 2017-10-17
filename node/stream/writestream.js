const fs=require('fs');
let ws=fs.createWriteStream('../text/1.txt',{
    flags:'a',//追加文件并写入 r =read w =write a = append
    start:3,//从第几个字节开始写入,
    highWaterMark:5
});
// let flag=ws.write('a');
// console.log(flag);//如果返回true就表示能继续写入
// ws.write('b');
// ws.end('c');

var i=0;
var max=1000;
function write(){
    var flag=true;
    while(i<max && flag){
        flag= ws.write(String(i));
        i++;
        console.log('go on write',i);
    }
}
write();
ws.on('drain',function(){
    console.log('go on drain')
    write();
});