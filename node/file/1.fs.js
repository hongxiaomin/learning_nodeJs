//1. fs实现文件的读写操作
const fs = require('fs');
let content=fs.readFileSync('../text/1.txt',{encoding:'utf-8'});//返回的是Buffer
console.log(content);

fs.readFile('../text/1.txt',{encoding:'utf-8'},(err,data)=>{
    console.log(2);
    console.log(data);
    fs.writeFile('../text/2.txt',data,{},(err)=>{
        console.log('写入成功');
    })
});