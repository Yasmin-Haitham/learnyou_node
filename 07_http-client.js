// handle a http get request //get isn't meant to change in the data  
//GET request should not have side effects (i.e. changing data)
//create a server //don't do that why tho?
//handle data coming in the request

const http = require ('http');
// const url = require('url');
// const server = http.createServer(responseHandler)
// const responseHandler = (req,res)=>{
//     const myUrl = process.argv[2];

// }
const myUrl = process.argv[2];
http.get(myUrl,(response)=>{
    response.on('error',err=>console.error(err));
    //response.setEncoding('utf8');
    response.on('data', data=>{
        console.log(data.toString());
    } );
});