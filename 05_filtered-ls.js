const fs = require ('fs');
const path = require('path');
// const { listenerCount } = require('process');

const dic = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(dic, (err,data)=>{
    if (err) return console.error(err);
    data.forEach((file)=>{
        if (path.extname(file)=== ext){
            console.log(file);
        }
    });
});