var socketio = require('socket.io');
var io;
var guestNumber=1;
var nickNames={};
var namesUsed=[];
var currentRoom={};

exports.listen=function(server){
    io=socketio.listen(server);//启动Socket.Io服务器，允许他搭载已有的HTTP服务器上
    // io.set('log level',1);
    io.sockets.on('connection',function(socket){//定义每个用户连接的处理逻辑
        guestNumber=assignGuestName(socket,guestNumber,nickNames,namesUsed);//在用户连接上来时赋予其一个访客名
        joinRoom(socket,'Lobby');//在用户连接上来时把它放入聊天室Lobby里
        //处理用户的消息，更名，以及聊天室的创建和变更
        handleMessageBroadcasting (socket,nickNames);
        handleNameChangeAttempts(socket,nickNames,namesUsed);
        handleRoomJoining(socket);

        socket.on('rooms',function(){//用户发出请求时，向其提供已经被占用的聊天室的列表
            socket.emit('rooms',io.sockets.manager.rooms);
        });

        handleClientDisconnection(socket,nickNames,namesUsed);//定义用户断开连接后的清除逻辑
    })
};

//处理新用户的昵称。当用户第一次连到聊天服务器上时，用户会被放到一个叫做Lobby的聊天室中，并调用assignGuestName给他们分配一个昵称。程序分配的昵称基本上都是在Guest后面加上数字，有新用户连进来时这个数字就会往上增长。用户昵称存在变量NickNames中以便引用，并且会跟一个内部socket ID关联。昵称还会被添加到namesUsed中，这个变量中保存的是已经被占用的昵称。
function assignGuestName(socket,guestNumber,nickNames,namesUsed){
    var name='Guest'+guestNumber;//生成新昵称
    nickNames[socket.id]=name;//把用户昵称跟客户端ID关联上
    socket.emit('nameResult',{//让用户知道他们的昵称
        success:true,
        name:name
    });
    namesUsed.push(name);//存放已经被占用的昵称
    return guestNumber;//增加用来生成昵称的计数器
}

//加入聊天室
function joinRoom(socket,room){
    socket.join(room);//让用户进入房间
    currentRoom[socket.id]=room;//记录用户的当前房间
    socket.emit('joinResult',{room:room});//让用户知道他们进入了新的房间
    socket.broadcast.to(room).emit('message',{//让房间里的其他用户知道有新用户进入了房间
        text:nickNames[socket.id]+' has joined '+room+'.'
    });
    var usersInRoom=io.sockets.clients(room);//确定有哪些用户在这个房间里
    if(usersInRoom.length>1){//如果不止一个用户在这个房间里，汇总下都是谁
        var usersInRoomSummary='Users currently in '+room+':';
        for(var index in usersInRoom){
            var userSocketId=usersInRoom[index].id;
            if(userSocketId!==socket.id){
                if(index>0){
                    usersInRoomSummary+=', ';
                }
                usersInRoomSummary+=nickNames[userSocketId];
            }
        }
        usersInRoomSummary+='.';
        socket.emit('message',{text:usersInRoomSummary});//将房间里其他用户的汇总发送给这个用户

    }
}
//处理用户更名请求，用户不能将昵称改成以Guest开头，或改成其他已经被占用的昵称
function handleNameChangeAttempts(socket,nickNames,namesUsed){
    socket.on('nameAttempt',function(name){//添加nameAttempt事件的监听器
        if(name.indexOf('Guest')===0){//昵称不能以Guest开头
            socket.emit('nameResult',{
                success:false,
                message:'Name cannot begin with "Guest" .'
            });
        }else{
            if(namesUsed.indexOf(name)===-1){//如果昵称还没注册就注册上
                var previousName=nickNames[socket.id];
                var previousNameIndex=namesUsed.indexOf(previousName);
                namesUsed.push(name);
                nickNames[socket.id]=name;
                delete namesUsed[previousNameIndex];//删掉之前用的昵称，让其他用户可以使用
                socket.emit('nameResult',{
                    success:true,
                    name:name
                });
                socket.broadcast.to(currentRoom[socket.id]).emit('message',{
                    text:previousName+' is now known as '+name+'.'
                });
            }else{//如果昵称已经被占用，给客户端发送错误消息
                socket.emit('nameResult',{
                    success:false,
                    message:'That name is already in use'
                })
            }
        }
    })
}

function handleMessageBroadcasting (socket,nickNames){
    socket.on('message',function(message){
        socket.broadcast.to(message.room).emit('message',{
            text:nickNames[socket.id]+': '+message.text
        })
    })
}

//更换房间
function handleRoomJoining(socket){
    socket.on('join',function(room){
        socket.leave(currentRoom[socket.id]);
        joinRoom(socket,room.newRoom);
    })
}

//用户断开连接 当用户离开聊天程序时，从NickNames和namesUsed中移除用户的昵称
function handleClientDisconnection(socket,nickNames,namesUsed){
    socket.on('disconnect',function(){
        var nameIndex=namesUsed.indexOf(nickNames[socket.id]);
        delete namesUsed[nameIndex];
        delete nickNames[socket.id];
    })
}
