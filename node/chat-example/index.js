var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('./public'));

app.get('/',function(req,res){
   res.sendFile('/index.html')
})

io.on('connection',function(socket){
    console.log('a user connected');
    socket.on('chat message',function(msg){
        io.emit('chat message',msg);
    });
    socket.on('disconnect',function(){
        console.log('User disconnected');
    });
});

io.emit('some event',{for:'everyone'});

http.listen(3000,function(){
    console.log('listening on :3000');
})
