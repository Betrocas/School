const mysql = require("../utils/mysql");
const query = mysql.query;
const tableName  = "Alumno";

async function crear(data){
    let nombre = data.nombre;
    let apellido_paterno = data.apellido_paterno;
    let apellido_materno = data.apellido_materno ? data.apellido_materno : ""
    let fecha_nacimiento = data.fecha_nacimiento;
    let anio_ingreso = data.anio_ingreso;
    
    let sql = `Insert into ${tableName} (nombre,apellido_paterno,apellido_materno,fecha_nacimiento,anio_ingreso) Values (
        '${nombre}',
        '${apellido_paterno}',
        '${apellido_materno}',
        '${fecha_nacimiento}',
        ${anio_ingreso}
    )`;
    const resp =  await query(sql);
    console.log("Respuesta: ", resp);
    return resp!=null;
}

async function eliminar(data){
    const id = data.id;
    const sql = `delete from ${tableName} where id = ${data.id}`;    
    const resp = await query(sql);
    return !(resp==null || resp.affectedRows<=0);
}

async function leer(data){
    const id = data.id;
    let sql = `
        select * from ${tableName} where id = ${id};
    `;
    let result = await query(sql);
    return result;
}

async function editar(data){
    const id = data.id;
    let params= {
        table : tableName,
        id : id        
    };
    delete data.id;
    params.campos = data;
    let sql = mysql.editar(params);
    let resp = await query(sql);
    return !(resp==null || resp.affectedRows<=0);
}

module.exports = {
    crear,
    eliminar,
    editar,
    leer
}