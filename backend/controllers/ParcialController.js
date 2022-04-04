let service = require("../services/ParcialService");
let acronimos = require("../config/acronimos").Parcial;
let setAcronimos = require("../helpers/setAcronimos");
let setRespuesta = require("../helpers/setRespuesta");

async function crear (req,res){
    let params = setAcronimos(req.query,acronimos);
    let respuesta = await service.crear(params);
    let resp = setRespuesta(respuesta);
    res.json(resp);
}
async function eliminar (req,res){
    let respuesta = await service.eliminar(req.params);
    res.json(setRespuesta(respuesta));
}
async function editar (req,res){
    let params = setAcronimos(req.query,acronimos);
    params.id = req.params.id;
    let resp = await service.editar(params);
    res.json(setRespuesta(resp));
}
async function leer (req,res){
    let respuesta = await service.leer(req.params);    
    console.log(respuesta);
    res.json(setRespuesta(respuesta,true));
}
module.exports = {
    crear,
    eliminar,
    editar,
    leer
}