var events =require('events');
var net =require('net');
var chanel=new events.EventEmitter();
chanel.clients={};
chanel.subscriptions={};
chanel.setMaxListeners(5);
chanel.on('join',function(id,client){
    var welcome='Welcome!\n'+'Guests online: '+this.listeners('broadcast').length;
    client.write(welcome+'\n');
    this.clients[id]=client;
    this.subscriptions[id]=function(senderId,message){
        if(id!==senderId){
            this.clients[id].write(message);
        }
    };
    this.on('broadcast',this.subscriptions[id]);
});
chanel.on('leave',function(id){
    chanel.emit('broadcast',id,id+' has left the chat.\n');
    chanel.removeListener('broadcast',this.subscriptions[id]);
});

chanel.on('shutdown',function(){
    chanel.emit('broadcast','',"Chat has shut down.\n");
    chanel.removeAllListeners('broadcast');
});

var server = net.createServer(function(client){
    var id=client.remoteAddress+':'+client.remotePort;
    chanel.emit('join',id,client);
    client.on('data',function(data){
        data=data.toString();
        if(data==='shutdown\r\n'){
            chanel.emit('shutdown');
        }
        chanel.emit('broadcast',id,data);
    })
    client.on('close',function(){
        chanel.emit('leave',id);
    })
});
server.listen(8080);