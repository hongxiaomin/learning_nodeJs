function copy(src,target){
    const fs=require('fs');
    fs.readFile(src,{},(err,data)=>{
        fs.writeFile(target,data,{},(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log('写入成功');
            }
        })
    })
};
exports.copy=copy;

