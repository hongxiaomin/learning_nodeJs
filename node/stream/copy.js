const fs = require('fs');
function copy(file1,file2){
    var rs=fs.createReadStream(file1);
    var ws=fs.createWriteStream(file2,{
        flags:'a'
    });
    rs.on('data',function(data){
        var flag=ws.write(data);
        if(!flag){
            rs.pause();
        }
    });
    ws.on('drain',function(){
        rs.resume()
    });
    rs.on('end',function(){
        ws.end();//当读完文件的时候也要关闭写文件
    })
}

copy('../text/2.txt','../text/3.txt');


