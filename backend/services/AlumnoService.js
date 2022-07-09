let Alumno = require('../entities/AlumnoEntity');
const model = require("../models/AlumnoModel");
const Respuesta = require('../utils/respuesta');
const mapper = require("../utils/Mapper");

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
            if(await model.editar(mapper.entityToObject(alumno))){
                respuesta.success = true;
            }else{
                respuesta.msg = "No existe el elemento a editar";
            }
        }else{
        }
    } catch (error) {
        console.log(error);
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
async function leerTodos(){
    try {
        let admin = await model.leerTodos();        
        return new Respuesta(true,"",admin);
    } catch (err) {
        return new Respuesta(false,err);
    }
}
module.exports = {
    crear,
    editar,
    eliminar,
    leer,
    leerTodos
}
