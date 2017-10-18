let querystring=require('querystring');
let input='username=hxm&password=123';
let input2='username==hxm@password==123';
console.log(querystring.parse(input));//{ username: 'hxm', password: '123' }
console.log(querystring.parse(input2,'@','=='));//{ username: 'hxm', password: '123' }
let inputObj={ username: 'hxm', password: '123' };
console.log(querystring.stringify(inputObj));//username=hxm&password=123
console.log(querystring.stringify(inputObj,'@','=='));//username==hxm@password==123
