const http = require('http');
const fs = require('fs');
http.createServer(function(req,res){
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    console.log(req.httpVersion);
    // if(req.url==='/'){
    //     fs.createReadStream('./login.html',{encoding:'utf8'}).pipe(res);
    // }else if( req.url==='/login'){
    //     var buffers=[];
    //     req.on('data',function(data){
    //         buffers.push(data);
    //     })
    //     req.on('end',function(){
    //         let result=Buffer.concat(buffers);
    //         res.end(result.toString());
    //     })
    // }
}).listen(8050);

