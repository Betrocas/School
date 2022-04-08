const mysql = require("../utils/mysql");
const tableName  = "Evaluacion";

async function crear(data){
    let resp = await mysql.query(mysql.crear(data,tableName));
    return resp.affectedRows > 0;
}
async function editar(data){
    let sql = `update  ${tableName}
    set
    calificacion = ${data.calificacion}
    where 
    id_parcial = ${data.id_parcial} and
    id_inscrito = ${data.id_inscrito}`;
    let resp = await mysql.query(sql);
    return resp.affectedRows>0;
}
async function leer(data){
   let sql = `select 
   Inscrito.id_curso,
   Inscrito.id_alumno,
   Evaluacion.id_parcial,
   Evaluacion.calificacion
   from Inscrito
   inner join Evaluacion
   on Evaluacion.id_inscrito = Inscrito.id
   where id_inscrito = ${data.id_inscrito}
   and id_parcial = ${data.id_parcial}
   `;
   let resp =  await mysql.query(sql);
   return resp[0];
}
async function eliminar(data){
    let sql = `delete from ${tableName} where 
    id_inscrito = ${data.id_inscrito}
    and id_parcial = ${data.id_parcial}`;
   let resp =await mysql.query(sql);
   return resp.affectedRows>0;
}
module.exports = {
    crear,
    eliminar,
    editar,
    leer
}