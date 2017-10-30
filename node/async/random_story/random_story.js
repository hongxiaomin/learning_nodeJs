var fs = require('fs');
var request = require('request');
var htmlparser = require('htmlparser');
var configFilename='./rss_feeds.txt';
function checkForRSSFile(){
    fs.exists(configFilename,function(exists){
        console.log('exists',exists);
        if(!exists){
            return next(new Error('Missing RSS file: '+configFilename));
        }
        next(null,configFilename);
    })
}
function readRSSFile(configFilename){
    console.log('configFilename',configFilename);
    fs.readFile(configFilename,function(err,feedList){
        if(err){
            return next(err);
        }
        feedList=feedList.toString().replace(/^\s+|\s+$/g,'').split('\n');
        console.log('feedList',feedList);
        var random=Math.floor(Math.random()*feedList.length);
        next(null,feedList[random]);
    })
}
function downloadRSSFeed(feedUrl){
    console.log('feedUrl',feedUrl);
    // var uri=feedUrl.split('：')[1];
    var uri=feedUrl;
    console.log(uri);
    request({uri:uri},function(err,res,body){
        // console.log('err',err);
        console.log('res',res);
        if(err){
            return next(err);
        }
        if(res.statusCode!==200){
            return next(new Error('Abnormal response status code'))
        }
        next(null,body);
    })
}

function parseRSSFeed(rss){
    // console.log('rss',rss);
    var handler=new htmlparser.RssHandler();
    console.log('handler',handler);
    var parser=new htmlparser.Parser();
    parser.parseComplete(rss);
    if(!handler.dom.items.length){
        return next(new Error('No RSS items found'));
    }
    var item=handler.dom.items.shift();
    console.log(item);
    console.log(item.title);
    console.log(item.link);
}

var tasks=[
  checkForRSSFile,
  readRSSFile,
  downloadRSSFeed,
  parseRSSFeed
];
function next(err,result){
    console.log(err,result);
    if(err){
        throw err;
    }
    var currentTask=tasks.shift();
    if(currentTask){
        currentTask(result);
    }
}

next();
