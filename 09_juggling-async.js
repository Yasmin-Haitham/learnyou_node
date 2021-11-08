const http = require('http');



const myUrl = process.argv.slice(2);


const asyncPrint = (myurl)=>{

    return new Promise ((resolve, reject)=>{
        http.get(myurl,(res)=>{
            let buff = []

            // res.on('error', err =>console.error(err));

            res.on('data',data=> buff.push(data.toString()));

            res.on('end',()=>{
                resolve( buff.join('') );
                
            });
        
        });
    });
};

async function result (){
        let message1 = await asyncPrint(myUrl[0]);
        try {
            console.log (message1);
        } catch (error) {
            console.error(err);
        }

        let message2 = await asyncPrint(myUrl[1]);
        try {
            console.log (message2);
        } catch (error) {
            console.error(err);
        }

        let message3 = await asyncPrint(myUrl[2]);
        try {
            console.log (message3);
        } catch (error) {
            console.error(err);
        }
};
result();

