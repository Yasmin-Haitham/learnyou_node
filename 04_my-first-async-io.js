const fs = require('fs');

// function callback(err,data){
//     if (err)return console.error(err);
//     const result = buff.split('\n').length -1;
//     console.log(result);
// };

fs.readFile(process.argv[2],'utf8',(err,data)=>{
    if (err)return console.error(err);
    const result = data.split('\n').length -1;
    console.log(result);
});

// const result = buff.split('\n').length -1;

// console.log(result);