/*
* Watcher 类来处理放在某个目录下的文件。创建一个工具，该工具可以监视目录（将放到里面的文件名都改成小写），并将文件复制到一个单独目录中
* 扩展事件发射器需要三步
* 1）创建类的构造器
* 2）继承事件发射器的行为
* 3）扩展这些行为*/
function Watcher(watchDir,processedDir){
    this.watchDir = watchDir;
    this.processedDir=processedDir;
}
var events = require('events');
var util = require('util');
util.inherits(Watcher,events.EventEmitter);

var fs = require('fs');
var watchDir = './watch';
var processedDir = './done';

Watcher.prototype.watch=function(){
    var watcher=this;
    fs.readdir(this.watchDir,function(err,files){
        if(err){
            throw err;
        }
        for(var index in files){
            watcher.emit('process',files[index]);
        }
    })
};

Watcher.prototype.start=function(){
    var watcher=this;
    fs.watchFile(watchDir,function(){
        watcher.watch();
    })
};

var watcher=new Watcher(watchDir,processedDir);
watcher.on('process',function process(file){
    var watchFile=this.watchDir+'/'+file;
    var processedFile=this.processedDir+'/'+file.toLowerCase();
    fs.readFile(watchFile,{},function(err,data){
        if(err){
            throw err;
        }
        fs.writeFile(processedFile,data,function(err,data){
            if(err){
                throw err;
            }
        })
    })
});

watcher.start();