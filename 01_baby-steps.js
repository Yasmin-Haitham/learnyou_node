// const { stdout } = require("process");

// console.log(process.argv)
var sum = 0;

for(i=2; i < process.argv.length; i++){

    sum += +process.argv[i]; 

}

console.log(sum);
// console.log(stdout);