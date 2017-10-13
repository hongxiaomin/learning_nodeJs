let EventEmitter = require('events');

let events=new EventEmitter();
//给对象events注册click事件
//当click事件发生的时候执行对应的回掉函数
// events.addListener('click',function(){
//     console.log('Click');
// });
// events.on('click',function(){
//     console.log('Click');
// });
events.once('click',function(){
    console.log('Click');
});

//发射click事件
events.emit('click');
events.emit('click');
events.emit('click');