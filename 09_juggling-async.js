const http = require('http');



const myUrl = process.argv.slice(2);


const asyncPrint = (myurl)=>{

    return new Promise ((resolve, reject)=>{
        http.get(myurl,(res)=>{
            let buff = []

            // res.on('error', err =>console.error(err));

            res.on('data',data=> buff.push(data));

            res.on('end',()=>{
                resolve( buff.join('') );
                
            });
        
        });
    });
};

async function result (){
      
        for (let i = 0; i < process.argv.length - 2 ; i++ ){

            try {
                let message = await asyncPrint(myUrl[i]);
                console.log(message);
            } catch (error) {
                console.error(err);
            }

        }
};
result();

