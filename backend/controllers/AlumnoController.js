let service = require('../services/AlumnoService');
const acronimos = require("../config/acronimos").Alumno;

async function crear(req,res){
    let params = setAcronimos(req.query,acronimos);
    let resp = await service.crear(params);
    res.json({
        success : resp
    });
}
async function editar(req,res){
    let params = setAcronimos(req.query,acronimos);
    params.id = req.params.id;
    console.log(params);
    //let resp = await service.editar(params);
    res.json({
        success : false//resp
    });
}
async function leer(req,res){
    let resp = await service.leer(req.params);
    /*if (respuesta.data.fecha_nacimiento){
        respuesta.data.fecha_nacimiento = respuesta.fecha_nacimiento.toISOString().subString(0,10);
    }*/    
    res.json(resp);
}
async function eliminar(req,res){
    let resp = await service.eliminar(req.params);
    res.json({
        success : resp
    });
}
function setAcronimos(params,acronimos){
    //Funcion que transforma los parametros acortados desde el usuario 
    //a sus correspondientes de la entidad
    /*
        params{
            n : "Luis"
        }
        acronominos{
            n : "nombre"
        }
        data{
            nombre : "Luis"
        }
    */
    let data = {};
    console.log(params);
    Object.keys(params).forEach(key =>{
        let acroValor = acronimos[key];
        if(acroValor){
            data[acroValor] = params[key];
            delete params[key];
        }
    });
    return data;
}
module.exports = {
    crear,
    editar,
    eliminar,
    leer
}