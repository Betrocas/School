const mysql = require("../utils/mysql");
const tableName  = "Inscrito";

async function crear(data){
    let resp = await mysql.query(mysql.crear(data,tableName));
    return resp.affectedRows > 0;
}
async function leer(data){
    if(data.id!=undefined)delete data.id;
   let sql  = `select * from ${tableName} where `;
   Object.keys(data).forEach((key,i,arr)=>{
        sql += `${key} = ${data[key]}`
        if(i!=arr.length-1) sql += " and ";
   });
   let resp =  await mysql.query(sql);
   return resp[0]!=undefined?resp[0]:{};
}
async function eliminar(data){
    if(data.id!=undefined)delete data.id;
    let sql = `delete from ${tableName} where `;
    Object.keys(data).forEach((key,i,arr)=>{
        sql += `${key} = ${data[key]}`
        if(i!=arr.length-1) sql += " and ";
   });
    let resp =await mysql.query(sql);
   return resp.affectedRows>0;
}
module.exports = {
    crear,
    eliminar,
    leer
}