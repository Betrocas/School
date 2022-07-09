let service = require('../services/AdministrativoService');
const acronimos = require("../config/acronimos").Administrativo;
let setAcronimos = require("../helpers/setAcronimos");
const { response } = require('express');

async function crear(req,res){
    console.log(req.query);
    let params = setAcronimos(req.query,acronimos);
    let respuesta = await service.crear(params);
    let resp = setRespuesta(respuesta);
    res.json(resp);
}
async function eliminar(req,res){
    let respuesta = await service.eliminar(req.params);
    res.json(setRespuesta(respuesta));
}
async function editar(req,res){
    let params = setAcronimos(req.query,acronimos);
    params.id = req.params.id;
    let resp = await service.editar(params);
    res.json(setRespuesta(resp));
}
async function leer(req,res){    
    let respuesta;
    if(req.params.id==undefined){
        respuesta = await service.leerTodos();
    }else{
        respuesta = await service.leer(req.params);    
    }
    res.json(setRespuesta(respuesta,true));
}
function setRespuesta(resp,data = false){
    let respuesta = {
        success : resp.success
    };
    if(!resp.success){
        respuesta.msg = resp.msg;
    }
    if(data && resp.success){
        respuesta.data = resp.data;
    }
    return respuesta;
}
module.exports = {
    crear,
    editar,
    eliminar,
    leer
}
