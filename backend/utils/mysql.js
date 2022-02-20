const connection = require('../config/database');

function editar(data){
    let table = data.table;
    let campos = data.campos;
    let id = data.id;
    /*
        {
            atributo : valor
        }
    */
    let sql = `
        update ${table}
        set
        ${
            Object.keys(campos).map(value =>{
                return `${value} = ${typeof(campos[value])==='string' ? `'${campos[value]}'` : arr[value]}`
            })
        }
        where id = ${id};
    `;
    return sql;
}

async function query(sql){
    let promise = new Promise((resolve,reject)=>{
        let resp =  connection.query(sql,(err,results)=>{
            if(err){
               reject(err);
            }else{
                resolve(results);
            }
        });
    });
    let respuesta = null;
    try {    
        respuesta =  await promise;
    }catch (error) {
       console.log(error); 
    }
    console.log("MYSQL: ", respuesta);
    return respuesta;
}

module.exports = {
    query,
    editar
}