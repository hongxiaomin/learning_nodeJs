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