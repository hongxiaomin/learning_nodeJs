# NodeJs 学习笔记
# node是什么
```
·Node.js是一个让JS可以运行在浏览器之外的服务器端的平台
·它实现了诸如文件系统、模块、包、操作系统API，网络通信等核心 JS没有或不完善的功能
·它摒弃传统平台依赖多线程来实现高并发的设计思路，而采用单线程，异步式I/O，事件驱动式的程序设计模型
·Node.js使用了来自Google ChromeV8引擎。V8是目前世界上最快的javascript引擎
```
# node.js的优点
```
·Nodejs基于Javascript语言
·统一公共类库，代码标准化
·Nodejs选择了目前最快的浏览器内核V8作为执行引擎
·Nodejs的社区非常活跃 www.npmjs.com
```
# 什么是回调
```
·异步编程基本的方法，需要异步处理的时候一般采用后续传递的方式
·将后续逻辑作为函数参数中作为起始函数的参数。
```
# 同步和异步
```
·同步是指发起调用之后主线程只能挂起，调用者主动等待这个调用的结果
·异步是指发起调用之后主线程可以做别的事情，被调用者通过通知来告知调用者结果
```
# 什么是阻塞/非阻塞
```
·针对内核来说，非阻塞是向内核发起请求的时候不会阻塞主线程的执行
·非阻塞是实现异步的前置条件
```

# 什么是IO
```
·Input（输入）从文件系统中读取文件
·Output（输出）向文件系统写入文件
```
# 什么是单线程/多线程
```
·单线程指程序按顺序执行，前面流程执行完毕之后后面的流程才能执行到
·多线程指同时可以执行多个任务，通过系统线程上下文切换来弥补同步式IO调用时的时间开销
·Node单线程指的是主线程是单线程的，所哟有阻塞的部分交给一个线程池处理，然后这个主线程通过一个队列跟线程池协作
```
# 什么是事件循环
```
·管理异步动作、定时器和回掉函数的机制叫事件循环
·异步的时候就会压入到这个队列，然后不停读取事件，事件发生后会把对应的回调加入队列
·队列按加入的顺序依次执行，由普通函数和回掉函数组成。
```
# Node.js中全局对象
```
·Node.js中有一个特殊的对象，称为全局对象Global，它及其所有属性都可以在程序的任何地方访问，即全局变量
·在浏览器Javascript中，通常window是全局对象，而Node.js中的全局对象global
·console  console.log  console.info  console.error  console.warn  console.time  console.timeEnd
·__filename 当前模块的文件绝对路径
·__dirname 当前模块的所在的目录的绝对路径
·setTimeout
·setImmediate
```
# process对象
```
·cwd 当前工作目录
·chdir process.chdir('..')切换到上级目录
·memoryUsage 内存使用量
·nextTick 放在当前任务列的末尾

```

# util
```
·inherits(child,parent) 继承父类原型上的属性
·inspect(object[,options])不可枚举
·isArray 判断一个值是否是数组
·isRegExp 判断一个值是否是正则
·isDate 判断一个值是否是日期
·isError 判断一个值是否是错误
```
# commonjs 规范
```
·一个node.js由大量模块组成，每个JS文件都是一个模块
·实现了require方法，npm基于commonjs实现了自动加载和安装依赖
```
# 模块化优点
```
·增加内聚性，有助于分工协作
·方便重构
·提高代码质量
```
# 模块使用
```
·定义模块
·导出模块
·使用模块
```
# require
```
·加载模块后会缓存，多次加载后得到同一对象 require('http');
·查看模块缓存 console.log(require.cache);
·查询模块绝对路径 require.resolve('./test.js');
·查看单个模块缓存 require.cache[require.resolve('./test.js')];
·删除模块缓存 delete require.cache[require.resolve('./test.js')]
·同步方法

```
# 包和npm
```
·多个模块可以封装成一个包
·npm是node.js默认的模块管理器，用来安装和管理node模块
·可以用包的方式通过npm安装、卸载、发布包
```
# 组织和管理模块
```
放置多个模块的文件夹称为包，可以通过包来对一组具有相互依赖的有关系模块进行管理。初始化一个项目 npm init
{
  "name": "learning_nodejs",包的名称
  "version": "1.0.0",版本号
  "description": "node description",包的简要说明
  "main": "index.js",入口文件
  "scripts": {执行命令
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {仓库地址
    "type": "git",
    "url": "git+https://github.com/hongxiaomin/learning_nodeJs.git"
  },
  "author": "",作者
  "license": "ISC",许可证
  "bugs": {
    "url": "https://github.com/hongxiaomin/learning_nodeJs/issues"
  },
  "homepage": "https://github.com/hongxiaomin/learning_nodeJs#readme",
  "dependencies":"包的依赖，一个关联数组，由包名称和版本组成"
}
```
# 发布全局项目
```
创建并进入项目 mkdir hongxiaomin && cd hongxiaomin
初始化项目 npm init hongxiaomin
编写命令行工具 app.js
在package.json中添加 "bin":{"hongxiaomin":"./app.js"}
注册用户 npm adduser
发布项目 npm publish

```
# gulp 安装
```
npm install gulp -g
npm install gulp
gulpfile.js
gulp
```
# 模块分类
```
·内置模块
·文件模块
·第三方模块
```
# 模块查找规则
```
·当没有以'/'或者'./'来指向一个文件时，这个模块要么是核心模块，要么就是从node_modules 文件夹加载的
·内置模块
·第三方模块
1、从module.paths取出第一个目录开始。
2、直接从目录中查找，存在结束，不存在下一条
3、尝试添加.js、.json查找
4、尝试将require的参数作为一个包来查找，读取package.json，取得main配置项指定的文件查找，不存在进行3
5、继续失败查看下一个目录
```
# Buffer
```
·缓冲区Buffer是暂时存放输入输出数据的一段内存。
·JS语言自身只有字符串数据类型，没有二进制数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据。
·NodeJS 提供了一个Buffer对象来提供对二进制数据的操作
·是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定。
·Buffer好比由一个八位字节元素组成的数组，可以有效的在javascript中表示二进制数据
```
# 字节
```
·字节（Byte）是计算机存储时的一种计量单位，一个字节等于8位二进制数
·一个位就代表一个0或1，每8个位（bit）组成一个字节（Byte）
·字节是通过网络传输信息的单位
·一个字节最大值十进制数是255
var sum = 0;
for(var i = 0; i < 8; i++ ){
    sum+=Math.pow(2,i);
}
console.log(sum);255
console.log(Math.pow(2,8)-1);
```
# 进制转换
```
·将任意进制字符串转换为十进制
-parseInt("11",2); //3 2进制转10进制
-parseInt("77",8); //63 8进制转10进制
-parseInt("e7",16); //231 16进制转10进制

·将10进制转换为其他进制字符串 Object.toString(n) n表示进制
-(3).toString(2);//11 十进制转2进制
-(17).toString(16);//11 十进制转16进制
-(33).toString(32);//11 十进制转32进制
```
# 定义Buffer
```
·new Buffer(size);//指定Buffer的长度
·数组创建 new Buffer(array);
·字符串创建 new Buffer(str,[encoding])默认utf8编码
```
# 字符集和字符编码
```
·字符集是多个字符的集合，常见字符集名称：ASCII字符集、GB2312字符集和Unicode字符集等。
·ASCII码使用指定的7位或8位二进制数组合来表示128或256种可能的字符
·Unicode源于一个很简单的想法：将全世界所有的字符包含在一个集合里
·字符编码是字符集在计算机中存储方式，定义如何存储字符集
·UTF-8是Unicode的实现方式之一。
·UTF-8是一种变长的编码方式。它可以使用1-4个字节表示一个符号，根据不同的符号而变化字节长度
```
# UTF-8的编码规则
```
· 对于单字节的符号，字节的第一位设为0，后面7位为这个符号的unicode码。因此对于英语字母，UTF-8编码和ASCII码是相同的
· 对于n字节的符号（n>1）,第一个字节的前n位都设为1，第n+1位设为0，后面字节的前两位一律为10.剩下的没有提及的二进制位，全部为这个符号的unicode码。

```
# Buffer 常用方法
```
·合并Buffer Buffer.concat([buf1,buf2],length)
·复制Buffer Buffer.copy(targetBuffer,targetStart,sourceStart,sourceEnd)
·判断是否是Buffer Buffer.isBuffer
·获取字节长度 Buffer.byteLength
```
# File
```
回掉函数第一个参数大部分是ERROR对象
·读文件
  异步读取文件 readFile
  同步读取文件 readFileSync
·写文件
  异步写入文件 writeFile
  同步写入文件 writeFileSync
·目录操作 参考node/file/path.js
  创建目录： fs.mkdir(name,callback)  fs.mkdirSync(name)
  读取目录下所有的文件 fs.readdir(path,callbcak)
  查看文件目录信息 fs.stat(path,callbcak) 判断文件是否是文件 stat.isFile() 判断文件是否是目录 stat.isDirectory()
  判断一个文件是否存在  fs.exists(path.callback) //callback 参数只有一个exists，如果文件存在返回true，不存在则返回false。
```

# 路径处理
```
·join 将多个参数值字符串结合为一个路径字符串
  const path = require('path');
  path.join(__dirname,'4.path.js')//G:\node project\learning_nodeJs\node\file\4.path.js
·resolve 取得绝对路径
  path.resolve();  console.log(path.resolve('4.path.js'));//G:\node project\learning_nodeJs\node\file\4.path.js
·basename 获取一个路径中的文件名
  path.basename(__filename,'.js')//4.path
·extname 获取文件的扩展名
  path.extname(__filename)//.js
·path.sep 操作系统提定的文件分隔符  console.log(path.sep);// \
·path.delimiter 属性值为系统指定的环境变量路径分隔符 console.log(path.delimiter)// ;

```
# 事件
```
·有时被称作发布/订阅模式，观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。
·这个主题对象在状态发生变化时，会通知所有观察者对象，使它们能够自动更新自己。
·EventEmitter方法
    addListener(event,listener)对指定事件绑定
    on(event,listener)对指定事件绑定
    once(event,listener);绑定一次
    removeListener(event);解除监听
    removeAllListeners(event);接触所有的处理
    emit(event,arg1);触发事件
    setMaxListeners(n);最大监听数量
    listeners(event)所有事件处理函数
    listenerCount(emitter,event)获取某个对象指定处理函数
```
# Node.js中的流
```
·流的概念
流是一组有序的，有起点和终点的字节数据传输手段
不关心文件的整体内容，只关注是否从文件中读到了数据，以及读到数据之后的处理
流是一个抽象接口，被Node中的很多对象所实现。比如对一个HTTP服务器的请求对象request是一个流，stdout也是一个流
·stream.Readable可读流
使用实现了stream.Readable接口的对象来将对象数据取为流数据，在您表明您准备好接受之前，Readable流并不会开始发射数据。

·ReadStream 文件可读流
fs.createReadStream(path,[options]);
    path 读取的文件路径
    options
      -flags 对文件采取何种操作，默认为‘r'
      -encoding 指定编码，默认为null
      -start 用整数表示文件开始读取的字节数的索引位置
      -end 用整数表示文件结束读取的字节数的索引位置（包括end位置）
      -highWaterMark 最高水位线，停止从底层资源读取前内部缓冲区最多能存放的字节数。缺省为64kb
·可读流触发的事件
    data 绑定一个data事件监听器到会将流切换到流动模式，数据会被尽可能快的读出。
    end 该事件会在读完数据后被触发
    error 当数据接收时发生错误时触发
    setEncoding 指定编码
    pause 通知对象停止触发data事件
    resume 通知对象恢复触发data事件
    pipe 设置管道，将可读流里的内容导入到参数指定的可写流里


·Writable可写流
 使用各种实现stream.Writable接口的对象来将流数据写入到对象中
 可写流的方法
    write 写入数据
    end 结束写入数据时触发。迫使缓存区中的数据立即写入目标对象，调用后不能再写入。
·WriteStream
在fs模块中使用createWriteStream方法创建一个将流数据写入文件中的writeStream对象
fs.createWriteStream(path,[options]);
    ·path 写的文件路径
    ·options
        -flags 对文件采取何种操作，默认为‘w'
        -encoding 指定编码，默认为null
        -start 用整数表示文件开始自结束的写入位置
        -highWaterMark 最高水位线，write()开始返回false的缓冲大小，缺省为16kb

write方法
writable.write(chunk,[encoding],[callback]);
    ·参数
        -chunk 要写入的数据，Buffer或字符串对象，必须指定
        -encoding 写入编码，chunk为字符串时有用，可选
        -callback 写入成功后的回调
    ·返回值为布尔值，系统缓存区定满时为false，未满时为true
end方法
在写入文件时，当不再需要写入数据时可调用该方法关闭文件。迫使系统缓存区的数据立即写入文件中。
writable.end(chunk,[encoding],[callback]);

pipe readStream.pipe(writeStream,[options]);
```

# 服务器
```
·服务器可以使专业服务器也可以是个人电脑
·能在特定（IP）服务器的特定端口上监听客户端的请求，并根据请求的路径返回相应结果都叫服务器；
```
# 客户端
```
·只要能向特定（IP）服务器的特定端口发起请求并接受响应的都叫客户端
```

# 数据在服务器和客户端之间传递
```
·可以把服务器硬盘上已经有的静态文件发送给客户端
·也可以有服务器经过逻辑处理生成的动态内容返回给客户端，比如当前时间
·一个http事务由一条（从客户端发往服务器的）请求命令和一个（从服务器发回客户端的）响应结果组成
```
# ajax 四步曲
```
第一步 创建ajax对象
var XHR = new XMLHTTPRequest();

第二步 打开请求
xhr.open(method,url,async,user,password);
参数解析
    -method http方法，
    -url 请求的URL地址，可以为绝对地址也可以为相对地址
    -async 布尔值，指定此请求是否为异步方式，默认为true。
    -user 如果服务器需要验证，此处指定用户名，默认为undefined
    -password 验证信息中的密码部分，默认是undefined

第三步 指定接受响应的回调函数
当XMLHTTPRequest对象的readyState属性改变时调用回调函数
xhr.onreadystatechange=function(){}
readyState状态的值
    0（未初始化）对象已建立，但是尚未初始化
    1（初始化）对象已建立，尚未调用send方法
    2（发送数据）send方法已调用，但是当前的状态及HTTP头未知
    3（数据传送中）已接收部分数据，因为响应及HTTP头不全，这时通过responseBody和responseText获取部分数据会出现错误
    4（完成）数据接收完毕，此时可以通过responseBody和responseText获取完整的回应数据

第四部 发送请求 xhr.send();
    send方法会把参数放到请求体里
    所有get系不能传参数，而post可能需要
    当使用同步的时候，send方法后都会阻塞，一直等到服务器响应，所以send方法需要放在最后。
    xhr.abort()//失败时强行退出
    xhr 对象的属性
        -onreadystatechange 一个当readyState属性改变时会调用的回调函数对象
        -response  响应内容，响应实体类型由responseType指定
        -responseType 修改响应类型
        -responseText 响应为文本
        -status  响应状态码
        -statusText  响应状态码 描述信息
jQuery的ajax请求
    $.ajax({
        method:'get',//请求的方法
        url:'/ajax',//请求的url
        data:{name:"hxm"},//发送的数据
        processData:true,//是否处理数据，是否把对象转成查询字符串
        dataType:'json',//返回的数据类型
        cache:false,//是否缓存
        async:true,//是否异步
        username:'hxm',//用户名
        password:'123456',//密码
        timeout:0,//超时毫秒数
        headers:{name:'hot'},//自定义头
        context:document.querySelector('#content'),//上下文 success error 执行时中的this指向
    })
```
# URL
```
let url=require('url');
console.log(url.parse('https://hxm:123@www.jetbrains.com/webstorm/download/download-thanks.html?platform=windows&username=111',true));

Url {
    protocol: 'https:',协议
    slashes: true,
    auth: 'hxm:123',权限
    host: 'www.jetbrains.com',主机
    port: null,端口
    hostname: 'www.jetbrains.com',主机名
    hash: null,哈希值
    search: '?platform=windows',查询字符串
    query: 'platform=windows',查询条件
    query: { platform: 'windows', username: '111' },如果方法后面加参数true，查询字符串以json格式展示
    pathname: '/webstorm/download/download-thanks.html',路径 端口号和问号中间那部分
    path: '/webstorm/download/download-thanks.html?platform=windows',路径+查询字符串
    href: 'https://www.jetbrains.com/webstorm/download/download-thanks.html?platform=windows' }

let urlObj=url.parse('https://hxm:123@www.jetbrains.com/webstorm/download/download-thanks.html?platform=windows&username=111',true);
console.log(url.format(urlObj));// https://hxm:123@www.jetbrains.com/webstorm/download/download-thanks.html?platform=windows&username=111
```

# querystring
```
let querystring=require('querystring');
let input='username=hxm&password=123';
let input2='username==hxm@password==123';
console.log(querystring.parse(input));//{ username: 'hxm', password: '123' }
console.log(querystring.parse(input2,'@','=='));//{ username: 'hxm', password: '123' }
let inputObj={ username: 'hxm', password: '123' };
console.log(querystring.stringify(inputObj));//username=hxm&password=123
console.log(querystring.stringify(inputObj,'@','=='));//username==hxm@password==123
```
# form 标签的enctype属性
```
application/x-www-form-urlencoded  在发送前编码所有字符（默认）
multipart/form-data  不对字符编码，在使用包含文件上传控件的表单时，必须使用该值
text/plain 空格转换为'+'加号，但不对特殊字符编码。
```

# JSONP
```
·同源策略
    同源策略就是规定了JavaScript可以操作那些web内容的一个完整的安全限制。
    什么是同源？
        同源就是规定多个web资源的url中scheme（协议）、hostname(域名或IP)、port（端口）必须相同，只要有一项不同那么这个web资源就不是同源的。
    什么是跨域？
        当请求的资源的url与当前页面的url中的scheme（协议）、hostname(域名或IP)、port（端口）有一个不同的时候就算是跨域操作。
    JSONP
        ·script元素可以作为一种ajax传输协议
        ·只需设置script元素的src属性并且插入到DOM中，浏览器就会发出一个HTTP请求到src属性所指向的URL。
        ·script不受同源策略的影响
        ·script元素会自动下载并执行下载的数据
        ·使用这种script元素来进行ajax数据的传输的技术就叫做JSONP，也就是JSON-Passing。
```
# Express
```
路由控制
·get方法 -- 根据请求路径来处理客户端发出的GET请求
app.get(path,function(request,response));
·app.all()函数可以匹配所有的HTTP动词，也就是说它可以匹配所有路径的请求。

中间件
·中间件就是处理HTTP请求的函数，用来完成各种特定的任务，比如检查用户是否登录、添加公共方法。
```