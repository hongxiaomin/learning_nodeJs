// console.log(global);
// console.log(__filename);//当前模块的文件绝对路径
// console.log(__dirname);//当前模块的所在的目录的绝对路径

setTimeout(function(){
    console.log('setTimeout');
},100);

setImmediate(function(){
    console.log('setImmediate')
});
/*
* { rss: 25829376,常驻内存 25m
  heapTotal: 7864320,堆的总内存7m
  heapUsed: 4328200,堆已经使用的内存 4m
  external: 8224 }
*/
process.nextTick(function(){
    console.log('nextTick');
})
console.log(process.memoryUsage());














