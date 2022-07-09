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
async function leerAlumnos(data){
    //Retorna alumnos inscrito del curso dado
    let sql = `select Alumno.id,Alumno.nombre,Alumno.apellido_paterno,Alumno.apellido_materno
    from Alumno
    inner join Inscrito on Alumno.id=Inscrito.id_alumno
    where Inscrito.id_curso = ${data.id}`;
    let resp = await mysql.query(sql);
    return resp;
}
async function leerCursos(data){    
    //Retorna cursos al que el alumno esta inscrito
    let sql = `select Curso.id, Curso.id_materia, Materia.nombre
    from Curso
    inner join Inscrito on Curso.id=Inscrito.id_curso
    inner join Materia on Materia.id=Curso.id_materia
    where Inscrito.id_alumno=${data.id};`;
    let resp = await mysql.query(sql);
    return resp;
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
    leer,
    leerAlumnos,
    leerCursos
}