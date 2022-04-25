const mysql = require("../utils/mysql");
const tableName  = "Usuario";

async function crear(data){
    let resp = await mysql.query(mysql.crear(data,tableName));
    return Object.keys(resp).length>0?resp:{};
}
async function editar(data){
    let resp = await mysql.query(mysql.editar(data,tableName));
    return resp.affectedRows>0;
}
async function leer(data){
   let sql = `select * from ${tableName} where id=${data.id}`;
   let resp =  await mysql.query(sql);
   return resp[0];
}
async function leerCorreo(correo){
   let sql = `select * from ${tableName} where correo='${correo}'`;
   let resp =  await mysql.query(sql);
   return resp[0]!=undefined;
}
async function eliminar(data){
   let resp =await mysql.query(mysql.eliminar(tableName,data.id));
   return resp.affectedRows>0;
}
module.exports = {
    crear,
    eliminar,
    editar,
    leer,
    leerCorreo
}