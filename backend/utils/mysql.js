const connection = require('../config/database');

/*function query(sql){
    return new Promise((resolve,reject)=>{
        connection.connect(err =>{ 
            if(!err){
                band = await connection.query(sql, (error,results)=>{
                    return error ? null : results;
                });
            }
            return band;
        });
    });
    console.log("Fuera "+ band);
}*/

async function query(sql){
    let promise = new Promise((resolve,reject)=>{
        let text = "nada";
        let resp =  connection.query(sql,(err,results)=>{
            if(err){
               reject("No listo");
            }else{
                resolve("Listo");
            }
        });
    });
    try {    
        console.log(await promise);
    } catch (error) {
       console.log(error); 
    }
}

module.exports = {
    query
}