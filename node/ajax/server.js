let http =require('http');
let fs = require('fs');

http.createServer(function(req,res){
    req.setEncoding('utf8');
    if(req.url==='/'){
        fs.createReadStream('./get.html').pipe(res);
    }else if(req.url==='/user'){
        fs.createReadStream('./user.json').pipe(res);
    }
}).listen(8070);