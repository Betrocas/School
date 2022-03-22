let Materia = require("../entities/MateriaEntity");
let model = require("../models/MateriaModel");
let materiaClasificacion = require("../models/MateriaClasificacionModel");
let mapper = require("../utils/Mapper").entityToObject;
let Respuesta = require("../utils/respuesta");
async function crear(data){
    let resp = new Respuesta(false);
    try {        
        data.clasificacion =parseInt(data.clasificacion);
        if(isNaN(data.clasificacion))throw "ID Clasificacion debe ser numerico";
        let MC = await materiaClasificacion.leer({id:data.clasificacion});
        console.log("ddsfdsds",MC);
        if(Object.keys(MC).length<=0)throw "No se ha encontrado la clasficacion con id: " + data.clasificacion;
        let materia = new Materia(data);
        if(await model.crear(mapper(materia))){
            resp.success = true;
        }else{
            resp.msg = "No se ha podido crear este elemento";
        }
    } catch (err) {
        console.log(err);
        resp.msg = err;
    } 
    return resp;
}
async function eliminar(data){
    let respuesta = new Respuesta(false);
    try {
        if(await model.eliminar({id : data.id})){
            respuesta.success = true;
        }else{
            respuesta.msg = "No se ha podido eliminar";
        }
    } catch (err) {
        respuesta.msg = err;
    }
    return respuesta;
}
async function editar(data){
    let respuesta = new Respuesta(false);
    try {
        let materia = await model.leer({id : data.id});
        if(Object.keys(materia).length>0){
            materia = new Materia(materia);
            materia.setNombre(data.nombre);
            materia.setDescripcion(data.descripcion);
            materia.setClasificacion(data.clasificacion);
            if(await model.editar(mapper(materia))){
                respuesta.success = true;
            }else{
                respuesta.msg = "No se ha podido editar";
            }
        }else{
            respuesta.msg = "No existe el elemento solicitado";
        }
    } catch (err) {
        respuesta.msg = err;
    }
    return respuesta;
}
async function leer(data){
    let respuesta = new Respuesta(false);
    try {
        let materia = await model.leer({id : data.id});
        respuesta.success = true;
        respuesta.data = materia;
    } catch (err) {
        respuesta.msg = err;
    }
    return respuesta;
}
module.exports = {
    leer,
    crear,
    editar,
    eliminar
}