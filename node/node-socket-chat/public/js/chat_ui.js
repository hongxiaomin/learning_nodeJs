//显示可疑的文本
function divEscapedContentElement(message){
    return $('<div></div>').text(message);
}
//显示系统创建的受信文本
function divSystemContentElement(message){
    return $('<div></div>').html('<i>'+message+'</i>');
}

//处理用户输入 如果用户输入的内容以斜杠（/）开头，将会作为聊天命令处理。如果不是，就作为聊天信息发送给服务器并广播给其他用户，并添加到用户所在聊天室的聊天文本中
function processUserInput(chatApp,socket){
    var message=$('#send-message').val();
    var systemMessage;
    if(message.charAt(0)==='/'){
        systemMessage=chatApp.processCommand(message);
        if(systemMessage){
            $('#message').append(divSystemContentElement(systemMessage));
        }
    }else{
        chatApp.sendMessage($('#room').text(),message);
        $('#message').append(divEscapedContentElement(message));
        $('#message').scrollTop($('#message').prop('scrollHeight'));
    }
    $('#send-message').val('');
}

var socket=io.connect();
$(function(){
    var chatApp=new Chat(socket);
    socket.on('nameResult',function(result){
        var message;
        if(result.success){
            message='You are now know as '+result.name+'.';
        }else{
            message=result.message;
        }
        $('#message').append(divSystemContentElement(message));
    })

    socket.on('joinResult',function(result){
        $('#room').text(result.room);
        $('#message').append(divSystemContentElement('Room changed.'))
    })

    socket.on('message',function(message){
        var newElement=$('<div></div>').text(message.text);
        $('#message').append(newElement);
    });

    socket.on('rooms',function(rooms){
        $('#room-list').empty();
        for(var room in rooms){
            room=room.substring(1,room.length);
            if(room!==''){
                $('#room-list').append(divEscapedContentElement(room));
            }
        }
        $('#room-list div').click(function () {
            chatApp.processCommand('/join'+$(this).text());
            $('#send-message').focus();
        })
    })

    setInterval(function(){
        socket.emit('rooms');
    },1000);
    $('#send-message').focus();
    $('#send-form').submit(function(){
        processUserInput(chatApp,socket);
        return false;
    })
})