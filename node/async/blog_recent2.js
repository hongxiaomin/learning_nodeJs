var http = require('http');
var fs = require('fs');
var server=http.createServer(function(req,res){
    getTitle(res);
}).listen(8000);
function getTitle(res){
    fs.readFile('./titles.json',function(err,data){
        if(err){
            hadError(err,res);
        }else{
            getTemplate(JSON.parse(data.toString()),res);
        }
    })
}

function getTemplate(titles,res){
    fs.readFile('./template.html',function(err,data){
        if(err){
            hadError(err,res);
        }else{
            formatHtml(titles,data.toString(),res);
        }
    })
}

function formatHtml(titles,tmpl,res){
    var html=tmpl.replace('%',titles.join('</li><li>'));
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(html);
}

function hadError(err,res){
    console.log(err);
    res.end('Server Error');
}