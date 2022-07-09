let Parcial = require("../entities/ParcialEntity");
const model = require("../models/ParcialModel");
let Respuesta = require("../utils/respuesta");
let mapper = require("../utils/Mapper").entityToObject;
async function crear(data) {
    try{
        //Se crea el objeto
        let parcial = new Parcial(data);
        if( await model.crear(mapper(parcial)));
        return new Respuesta(true);
    }catch(err){
        console.log(err);
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
        let parcial = await model.leer({id : data.id});
        if(Object.keys(parcial).length){
            parcial = new Parcial(parcial);
            parcial.setFI(data.fecha_inicio);
            parcial.setFF(data.fecha_final);
            if(await model.editar(mapper(parcial))){
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
        let parcial = await model.leer({id : data.id});
        return new Respuesta(true,"",parcial);
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
