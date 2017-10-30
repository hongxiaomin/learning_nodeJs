var flow = require('nimble');
flow.series([//给Nimble一个函数数组，让它一个接一个地执行
    function(callback){
    setTimeout(function(){
        console.log('I execute first.');
        callback();
    },2000)
    },
    function(callback){
        setTimeout(function(){
            console.log('I execute next.');
            callback();
        },1000);
    },
    function(callback){
        setTimeout(function(){
            console.log('I execute last.')
            callback();
        },500)
    }

])