const { urlencoded } = require("express");
const model = require("../models/AlumnoModel");

async function crear(req,res){
    let resp = await model.crear({
    nombre : req.query.nombre, 
    apellido_paterno : req.query.apellido_paterno,
    apellido_materno : "Cabanas",
    fecha_nacimiento : "2002-04-03",
    anio_ingreso : 2010
    });
    res.send(resp ? "Agregado" : "No se ha podido agregar");
}
async function editar(req,res){
    console.log(req.query);
    let resp = await model.editar(req.query);
    res.json({
        success : resp
    });
}
async function leer(req,res){
    let resp = await model.leer({
        id : req.query.id
    });
    let respuesta = {};
    respuesta.data =  resp.length ? resp : [];
    /*if (respuesta.data.fecha_nacimiento){
        respuesta.data.fecha_nacimiento = respuesta.fecha_nacimiento.toISOString().subString(0,10);
    }*/
    res.json(respuesta);
}
async function eliminar(req,res){
    let resp = await model.eliminar({
        id: req.params.id
    });
    res.send(resp ? "Eliminado" : "No eliminado");
}
module.exports = {
    crear,
    editar,
    eliminar,
    leer
}