//create a server//we don't ... we use http.get WHY THO??
//listen on port//don't
//register a listener for data
//register a listener for end to print values
//push data from request 
//count charecters being pushed 
//join all charecters in a string 
//print the 2 lines to the console 
const http = require('http');
const myUrl = process.argv[2];
http.get(myUrl,(res)=>{
    let buff = [];

    res.on('error', err =>console.error(err));

    res.on('data',data=>buff.push(data.toString()));

    res.on('end',()=>{
        const char = buff.join('');
        //console.log(buff);//to test why can't use buff because the program wants to count spaces
        console.log(char.length);
        console.log(char);
    });
    
});
/*
const http = require('http')
    const bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
    learnyounode answer for refrence 
*/ 