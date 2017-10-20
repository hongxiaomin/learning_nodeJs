let http = require('http');
//也可以作为客户端
// let options={
//   host:'baijia.baidu.com',
//   port:80,
//   path:'/'
// };
// let client=http.request(options,function(response){
//     console.log(response);
// });
//
// client.end();

http.get("http://huaban.com/",function(res){
    var str='';
    res.on('data',function(data){
        str+=data.toString();
    });
    res.on('end',function(){
        console.log(str);
        http.createServer(function(req,res){
            if(req.url==='/'){
                res.end(str);
            }
        }).listen(8084);
    })
}).on('error',function(e){
    console.log('错误：'+e.message);
});


