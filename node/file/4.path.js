const path = require('path');
console.log(path.join(__dirname,'4.path.js'));
console.log(path.resolve('4.path.js'));
console.log(path.basename(__filename,'.js'));
console.log(path.extname(__filename));
console.log(path.sep);
console.log(path.delimiter)