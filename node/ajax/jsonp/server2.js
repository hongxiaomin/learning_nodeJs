let http = require('http');
let fs = require('fs');
let url = require('url');
http.createServer(function(req,res){
    if(req.url==='/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url==='/login'){
        // res.setHeader('Access-Control-Allow-Origin','*');
        res.end('Hello World');
    }else if(req.url==='/user'){
        console.log('user');
        res.end('load('+JSON.stringify([{"name":"Joyn","age":23},{"name":"Lily","age":15}])+')');
    }

}).listen(8086);