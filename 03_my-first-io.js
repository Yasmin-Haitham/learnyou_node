const fs = require('fs');

const buff = fs.readFileSync(process.argv[2], 'utf8' );

const result = buff.toString().split('\n').length -1;

console.log(result);