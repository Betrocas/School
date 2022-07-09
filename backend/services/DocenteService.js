let Docente = require('../entities/DocenteEntity');
const model = require("../models/DocenteModel");
let Respuesta = require("../utils/respuesta");
let mapper = require("../utils/Mapper").entityToObject;
async function crear(data) {
    try{
        let docente = new Docente(data);
        if( await model.crear(mapper(docente)));
        return new Respuesta(true);
    }catch(err){
        console.log("Servicio docente",err);
        return new Respuesta(false,err);
    }
}
async function eliminar(data){
    let respuesta = new Respuesta(false);
    try {
        let resp = await model.eliminar({id : data.id});
        if (resp){
            respuesta.success = true;            
        }else{
            respuesta.msg = "No se ha podido eliminar el elemento";
        }
    } catch (err) {
       respuesta.msg = err;
    }
    return respuesta;
}
async function editar(data){
    let resp = new Respuesta(false);
    try {
        data.id = parseInt(data.id);
        let docente = await model.leer({id : data.id});
        if(Object.keys(docente).length){
            docente = new Docente(docente);
            docente.setNombre(data.nombre);
            docente.setAP(data.apellido_paterno);        
            docente.setAM(data.apellido_materno);
            docente.setFN(data.fecha_nacimiento);                
            if(await model.editar(mapper(docente))){
                resp.success = true;
            }else{
                resp.msg = "No se ha podido editar el elemento";
            }
        }else{
            resp.msg = "No existe el elemento a editar";
        }
    } catch (err) {
        console.log(err);
        resp.msg = err;
    }
    return resp;
}
async function leer(data){
    try {
        let docente = await model.leer({id : data.id});
        return new Respuesta(true,"",docente);
    } catch (err) {
        return new Respuesta(false,err);
    }
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
