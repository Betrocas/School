let service = require("../services/EvaluacionService");
let acronimos = require("../config/acronimos").Evaluacion;
let setAcronimos = require("../helpers/setAcronimos");
let setRespuesta = require("../helpers/setRespuesta");

async function crear (req,res){
    let params = setAcronimos(req.query,acronimos);
    let respuesta = await service.crear(params);
    let resp = setRespuesta(respuesta);
    res.json(resp);
}
async function eliminar (req,res){
    let params = setAcronimos(req.query,acronimos);
    let respuesta = await service.eliminar(params);
    res.json(setRespuesta(respuesta));
}
async function editar (req,res){
    let params = setAcronimos(req.query,acronimos);
    let resp = await service.editar(params);
    res.json(setRespuesta(resp));
}
async function leer (req,res){
    let params = setAcronimos(req.query,acronimos);
    let respuesta = await service.leer(params);    
    console.log(respuesta);
    res.json(setRespuesta(respuesta,true));
}
module.exports = {
    crear,
    eliminar,
    editar,
    leer
}