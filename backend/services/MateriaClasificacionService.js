let MateriaClasificacion = require("../entities/MateriaClasificacionEntity");
let model = require("../models/MateriaClasificacionModel");
let mapper = require("../utils/Mapper").entityToObject;
let Respuesta = require("../utils/respuesta");
async function crear(data){
    let resp = new Respuesta(false);
    try {
        let MC = new MateriaClasificacion(data);
        if(await model.crear(mapper(MC))){
            resp.success = true;
        }else{
            resp.msg = "No se ha podido crear este elemento";
        }
    } catch (err) {
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
        let MC = await model.leer({id : data.id});
        if(Object.keys(MC).length>0){
            MC = new MateriaClasificacion(MC);
            MC.setNombre(data.nombre);
            MC.setDescripcion(data.descripcion);
            if(await model.editar(mapper(MC))){
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
        let MC = await model.leer({id : data.id});
        respuesta.success = true;
        respuesta.data = MC;
    } catch (err) {
        respuesta.msg = err;
    }
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
    eliminar,
    editar,
    leer,
    leerTodos
}
