const util=require('util');
function Parent(){
    this.name='parent';
};
Parent.prototype.say=function(){
    console.log(this.name);
};
function Child(){
    this.name='child';
};
util.inherits(Child,Parent);

let child=new Child();
child.say();

let obj=new Object();
obj.name='小明';
Object.defineProperty(obj,'age',{
    enumerable:false,//可枚举的
    value:20,
    configurable:false,//可配置
    writable:false//值可以改变
});
delete obj.age;
obj.age=50;
console.log(util.inspect(obj,{
    showHidden:true
}));

console.log(util.isArray(""));
console.log(util.isRegExp(/\d+/));
console.log(util.isDate(new Date()));
console.log(util.isError(new Error()));