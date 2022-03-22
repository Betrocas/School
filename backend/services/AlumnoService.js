let Alumno = require('../entities/AlumnoEntity');
const model = require("../models/AlumnoModel");
const Respuesta = require('../utils/respuesta');

async function crear(data){
    try {
        console.log(data);
        let alumno = new Alumno(data);
        let resp = await model.crear(alumno);        
        return true;
    } catch (err) {        
        console.log("Service Alumno crear : ",err);
        return false;
    }
}
async function editar(data){    
    let respuesta = new Respuesta(false);
    try {
        let alumno = await model.leer({id : data.id});
        if(Object.keys(alumno).length){//Se comprueba que exista el alumno        
            alumno = new Alumno(alumno);
            alumno.setId(data.id);
            alumno.setNombre(data.nombre);
            alumno.setAP(data.apellido_paterno);
            alumno.setAM(data.apellido_materno);
            alumno.setFN(data.fecha_nacimiento);
            alumno.setAI(data.anio_ingreso);
            if(await model.editar()){
                respuesta.success = true;
            }else{
                respuesta.msg = "No existe el elemento a editar";
            }
        }
    } catch (error) {
       respuesta.msg = error; 
    }
    return respuesta;
}
async function eliminar(data){
    let resp = await model.eliminar(data);
    return resp;
}
async function leer(data){
    let resp = await model.leer({
        id : data.id
    });
    let respuesta = {};
    respuesta.data =  resp ? resp : [];
    return respuesta;
}
module.exports = {
    crear,
    editar,
    eliminar,
    leer
}