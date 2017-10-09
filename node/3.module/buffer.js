var buf1=new Buffer(6);//指定buffer的长度
console.log(buf1);
buf1.fill(0);//把buffer中的所有元素置为0
console.log(buf1);

var buf2=new Buffer([16,15,12]);
console.log(buf2);//<Buffer 10 0f 0c> 16进制表示

var buf3=new Buffer([0x16,0x15,0x12]);
console.log(buf3);
//通过字符串来创建
var buf4=new Buffer('abc');
console.log(buf4.toLocaleString());

let s1 = '黄晓明';
// console.log(buffer1.length);
// console.log(Buffer.byteLength(buffer1));
let buffer1=new Buffer('黄晓明');
let buffer2=new Buffer('杨颖');
let result=new Buffer(15);
buffer1.copy(result,0,0,9);
buffer2.copy(result,9,0,6);
console.log(result.toLocaleString());