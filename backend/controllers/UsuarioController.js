let service = require("../services/UsuarioService");
let acronimos = require("../config/acronimos").Usuario;
let setAcronimos = require("../helpers/setAcronimos");
let setRespuesta = require("../helpers/setRespuesta");

async function crear (req,res,tipo){
    console.log("tipo: " +tipo);
    let params = setAcronimos(req.query,acronimos);
    params.tipo_entidad = tipo;
    params.id = req.params.id;
    let respuesta = await service.crear(params);
    let resp = setRespuesta(respuesta);
    res.json(resp);
}
async function eliminar (req,res){
    let respuesta = await service.eliminar(req.params);
    res.json(setRespuesta(respuesta));
}
async function editarContrasena (req,res,tipo){
    let params = setAcronimos(req.query,acronimos);
    params.id = req.params.id;
    params.tipo_entidad = tipo;
    let resp = await service.editarContrasena(params);
    res.json(setRespuesta(resp));
}
async function restablecerContrasena (req,res,tipo){
    let params = setAcronimos(req.query,acronimos);
    params.id = req.params.id;
    params.tipo_entidad = tipo;
    let resp = await service.restablecerContrasena(params);
    res.json(setRespuesta(resp));
}
async function leer (req,res){
    let respuesta = await service.leer(req.params);    
    console.log(respuesta);
    res.json(setRespuesta(respuesta,true));
}
module.exports = {
    crear,
    editarContrasena,
    restablecerContrasena,
    leer
}