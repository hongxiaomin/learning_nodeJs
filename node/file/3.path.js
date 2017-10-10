const fs = require('fs');

// fs.mkdirSync('../text/a');
// fs.mkdir('../text/a/b',(err)=>{
//     console.log(err);
// });
// fs.readdir('../text',(err,files)=>{
//     console.log(files);
//     files.forEach((file)=>{
//         fs.readFile('../text/'+file,{encoding:'utf8'},(err,data)=>{
//             console.log(data.toString());
//         })
//     })
// })

// fs.stat('../text',(err,data)=>{
//     console.log(data);
// })
// Stats {
//     dev: 3027012835,
//     mode: 16822,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: undefined,
//     ino: 3096224744441764,
//     size: 0,
//     blocks: undefined,
//     atimeMs: 1507598468725.65,
//     mtimeMs: 1507598468725.65,
//     ctimeMs: 1507598468725.65,
//     birthtimeMs: 1507526098950.1536,
//     atime: 2017-10-10T01:21:08.726Z,访问时间
//     mtime: 2017-10-10T01:21:08.726Z,修改时间
//     ctime: 2017-10-10T01:21:08.726Z,改变时间
//     birthtime: 2017-10-09T05:14:58.950Z 创建时间}


// fs.exists('../text',(exists)=>{
//     console.log(exists);
// })


