const mysql = require("../utils/mysql");
const tableName  = "Curso";

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
   return resp[0]!=undefined ? resp[0] : {};
}
async function leerTodos(){
   let query = `Select Curso.*,Docente.nombre as docente,Materia.nombre as materia
   from Curso 
   inner join Docente on Docente.id=Curso.id_docente
   inner join Materia on Materia.id=Curso.id_materia;`;
   let resp =  await mysql.query(query);
   return resp;
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
    leerTodos
}
