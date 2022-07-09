let service = require("../services/DocenteService");
let acronimos = require("../config/acronimos").Docente;
let setAcronimos = require("../helpers/setAcronimos");
let setRespuesta = require("../helpers/setRespuesta");

async function crear (req,res){
    let params = setAcronimos(req.body.data,acronimos);
    console.log(params);
    let respuesta = await service.crear(params);
    let resp = setRespuesta(respuesta);
    res.json(resp);
}
async function eliminar (req,res){
    let respuesta = await service.eliminar(req.params);
    res.json(setRespuesta(respuesta));
}
async function editar (req,res){
    let params = setAcronimos(req.body.data,acronimos);
    params.id = req.params.id;
    console.log(params);
    let resp = await service.editar(params);
    res.json(setRespuesta(resp));
}
async function leer (req,res){
    let respuesta;
    if(req.params.id==undefined){
        respuesta = await service.leerTodos();
    }else{
        respuesta = await service.leer(req.params);    
    }
    res.json(setRespuesta(respuesta,true));
}
module.exports = {
    crear,
    eliminar,
    editar,
    leer
}
