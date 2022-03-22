let Administrativo = require('../entities/AdministrativoEntity');
const model = require("../models/AdministrativoModel");
let Respuesta = require("../utils/respuesta");
let mapper = require("../utils/Mapper").entityToObject;
async function crear(data){
    console.log(data);
    try{
        let admin = new Administrativo(data);
        let resp = await model.crear(mapper(admin));
        return new Respuesta(true);
    }catch(err){
        return new Respuesta(false,err);
    }
}
async function eliminar(data){
    try {
        let resp = await model.eliminar({id : data.id});
        return new Respuesta(true);
    } catch (err) {
        return new Respuesta(false,err);
    }
}
async function editar(data){
    let resp = new Respuesta(false);
    try {
        let admin = await model.leer({id : data.id});
        if(Object.keys(admin).length){
            admin = new Administrativo(admin);
            admin.setNombre(data.nombre);
            admin.setAP(data.apellido_paterno);        
            admin.setAM(data.apellido_materno);
            admin.setFN(data.fecha_nacimiento);                
            model.editar(mapper(admin));
            resp.success = true;
        }else{
            resp.msg = "No existe el elemento a editar";
        }
    } catch (err) {
        resp.msg = err;
    }
    return resp;
}
async function leer(data){
    try {
        let admin = await model.leer({id : data.id});
        return new Respuesta(true,"",admin);
    } catch (err) {
        return new Respuesta(false,err);
    }
}
module.exports = {
    crear,
    editar,
    eliminar,
    leer
}