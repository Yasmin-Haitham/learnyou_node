const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback)=>{
ext = '.'+ext;

fs.readdir(dir, (err,data)=>{
    if (err) return callback(err);//??

    const filtered = data.filter(file=> path.extname(file)=== ext);//foreach?
    
    return callback(null,filtered);//callback gat menen

});
}
