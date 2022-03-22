const mysql = require("../utils/mysql");
const tableName  = "MateriaClasificacion";

async function crear(data){
    let resp = await mysql.query(mysql.crear(data,tableName));
    return resp.affectedRows > 0;
}
async function editar(data){
    let resp = await mysql.query(mysql.editar(data,tableName));
    return resp.affectedRows>0;
}
async function leer(data){
       let sql  = `select * from ${tableName} where id=${data.id}`;
    let resp =  await mysql.query(sql);
    return resp[0] ? resp[0] : {};
}
async function eliminar(data){
   let resp = await mysql.query(mysql.eliminar(tableName,data.id));
   return resp.affectedRows>0;
}
module.exports = {
    crear,
    eliminar,
    editar,
    leer
}