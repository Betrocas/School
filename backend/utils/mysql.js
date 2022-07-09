const connection = require('../config/database');

function crear(entidad,tabla){
    //La entidad debe ser un objeto plano sin metodos
    if(entidad.id!==undefined)delete entidad.id;
    Object.keys(entidad).forEach(key=>{
        if(entidad[key]===null)delete entidad[key];
    });
    let sql = `insert into ${tabla} (${Object.keys(entidad)}) values (${Object.keys(entidad).map(key=>{
        let value = entidad[key];
        if(typeof(value)==='number')return `${value}`;
        else if(value instanceof Date)return `'${value.toISOString().substring(0,10)}'`;
        else return `'${value}'`;
    })})`;
    return sql;
}
function editar(entidad,tabla){
    //La entidad debe ser un objeto plano sin metodos    
    let id = entidad.id;
    delete entidad.id;
    Object.keys(entidad).forEach(key=>{
        if(entidad[key]===null)delete entidad[key];
    });
    let sql = `
        update ${tabla}
        set
        ${
            Object.keys(entidad).map(value =>{
                //return `${value} = ${typeof(entidad[value])==='string' ? `'${entidad[value]}'` : entidad[value]}`;            
                let cad = `${value} = `;
                if(typeof(entidad[value])=="string")cad += `'${entidad[value]}'`;
                else if(entidad[value] instanceof Date) cad += `'${entidad[value].toISOString().substring(0,10)}'`;
                else cad += entidad[value];
                return cad;
            })
        }
        where id = ${id};
    `;
    return sql;
}
function eliminar(tabla,id){
    let sql = `delete from ${tabla} where id=${id}`;
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
       console.log("MYSQL ERROR: " + error); 
    }
    console.log("MYSQL: ",sql, respuesta);
    return respuesta;
}

module.exports = {
    query,
    editar,
    crear,
    eliminar
}