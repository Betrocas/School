let Salon = require("../entities/SalonEntity");
let model = require("../models/SalonModel");
let Respuesta = require("../utils/respuesta");
let mapper = require("../utils/Mapper").entityToObject;

async function crear(data){
    console.log(data);
    let resp =new Respuesta(false);
    try {
        let salon = new Salon(data);
        if(await model.crear(mapper(salon))){
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
async function editar(data){
    let respuesta = new Respuesta(false);
    try {
        let salon = await model.leer({id : data.id});
        if(Object.keys(salon).length){
            salon = new Salon(salon);
            salon.setCapacidad(data.capacidad);
            if(await model.editar(mapper(salon))){
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
async function leer(data){
    let respuesta = new Respuesta(false);
    try {
        let salon = await model.leer({id : data.id});
        respuesta.success = true;
        respuesta.data = salon;
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
    leer,
    eliminar,
    editar,
    leerTodos
}
