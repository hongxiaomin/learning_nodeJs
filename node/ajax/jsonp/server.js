let http = require('http');
let fs = require('fs');
let url = require('url');
http.createServer(function(req,res){
    if(req.url==='/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url==='/login'){
        console.log(req.data);
        let buffers=[];
        req.on('data',function(data){
            buffers.push(data);
        });
        req.on('end',function(){
            res.setHeader('Access-Control-Allow-Origin','*');
             res.end(Buffer.concat(buffers).toString()) ;
        })
    }

}).listen(8085);