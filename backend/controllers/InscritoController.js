let service = require("../services/InscritoService");
let acronimos = require("../config/acronimos").Inscrito;
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
async function leer (req,res){
    let params = setAcronimos(req.query,acronimos);
    let respuesta = await service.leer(params);    
    res.json(setRespuesta(respuesta,true));
}
module.exports = {
    crear,
    eliminar,
    leer
}