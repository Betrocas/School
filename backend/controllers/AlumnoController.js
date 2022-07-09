let service = require('../services/AlumnoService');
const setAcronimos = require("../helpers/setAcronimos");
const acronimos = require("../config/acronimos").Alumno;

async function crear(req,res){
    let params = setAcronimos(req.body.data,acronimos);
    let resp = await service.crear(params);
    res.json({
        success : resp
    });
}
async function editar(req,res){
    let params=setAcronimos(req.body.data,acronimos);
    params.id = req.params.id;
    let resp = await service.editar(params);
    res.json({
        success : resp
    });
}
async function leer(req,res){
    let respuesta;
    if(req.params.id==undefined){
        respuesta = await service.leerTodos();
    }else{
        respuesta = await service.leer(req.params);    
    }
    /*if (respuesta.data.fecha_nacimiento){
        respuesta.data.fecha_nacimiento = respuesta.fecha_nacimiento.toISOString().subString(0,10);
    }*/    
    res.json(respuesta);
}
async function eliminar(req,res){
    let resp = await service.eliminar(req.params);
    res.json({
        success : resp
    });
}
module.exports = {
    crear,
    editar,
    eliminar,
    leer
}
