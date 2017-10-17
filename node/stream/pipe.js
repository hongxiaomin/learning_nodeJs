const fs = require('fs');
function copy(file1,file2){
    let rs = fs.createReadStream(file1);
    let ws = fs.createWriteStream(file2);
    rs.pipe(ws);
}

copy('../text/2.txt','../text/4.txt');