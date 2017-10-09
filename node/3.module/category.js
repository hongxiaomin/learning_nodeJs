var fs=require('fs');
fs.readFile('../text/1.txt',function (data) {
    console.log(data);
})
// console.log(module.paths);

var sum = 0;
for(var i = 0; i < 8; i++ ){
    sum+=Math.pow(2,i);
}
// console.log(sum);
// console.log(Math.pow(2,8)-1);
console.log(parseInt('11111111',2));
console.log(parseInt('77',8));
console.log(parseInt('e7',16));
console.log((255).toString(2));
console.log((255).toString(16));
console.log((255).toString(32));
console.log(15+16*15);
console.log(parseInt('4e25',16));
console.log(parseInt('4e25',16).toString(2));
let codeNum='珠'.charCodeAt();
console.log(codeNum.toString(2));
// 11100111 10001111 10100000
console.log('11100111 10001111 10100000'.toString(16));
console.log('11100100 10111000 10100101'.toString(16));
console.log(parseInt('11100100',2).toString(16));
console.log(parseInt('10111000',2).toString(16));
console.log(parseInt('10100101',2).toString(16));
let codeStr=parseInt('11100100',2).toString(16)+parseInt('10111000',2).toString(16)+parseInt('10100101',2).toString(16);
let codeStr2=parseInt('11100111',2).toString(16)+parseInt('10001111',2).toString(16)+parseInt('10100000',2).toString(16);
console.log(codeStr);//e4b8a5
console.log(codeStr2);//e78fa0