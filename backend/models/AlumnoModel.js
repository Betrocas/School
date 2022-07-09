const mysql = require("../utils/mysql");
const query = mysql.query;
const tableName  = "Alumno";

async function crear(data){
    let resp = await mysql.query(mysql.crear(data,tableName));
    return resp.affectedRows > 0;
}

async function eliminar(data){
    const id = data.id;
    console.log(data);
    const sql = `delete from ${tableName} where id = ${data.id}`;    
    const resp = await query(sql);
    return !(resp==null || resp.affectedRows<=0);
}

async function leer(data){
    //Retorna un objeto con los datos o vacio
    const id = data.id;
    let sql = `
        select * from ${tableName} where id = ${id};
    `;
    let result = await query(sql);
    return result[0]!=undefined ? result[0]:{};
}
async function leerTodos(){
   let query = `select * from ${tableName}`;
   let resp =  await mysql.query(query);
   return resp;
}
async function leerUsuario(data){
   let query = `select * from ${tableName} where id_usuario=${data.id}`;
   let resp =  await mysql.query(query);
   return resp[0]!=undefined ? resp[0] : {};
}

async function editar(data){
    let resp = await mysql.query(mysql.editar(data,tableName));
    return resp.affectedRows>0;
}

module.exports = {
    crear,
    eliminar,
    editar,
    leer,
    leerUsuario,
    leerTodos
}
