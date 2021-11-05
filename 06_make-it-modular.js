const mymodule = require('./mymodule.js');

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir, ext, (err, filteredlist)=>{
    if (err) return console.error(err);
    filteredlist.forEach(file => {
        console.log(file);
    });
})