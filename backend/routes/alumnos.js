const express = require("express");
const routes = express.Router();
const model = require("../models/Alumno");
routes.get('/',async (req,res)=>{
    let resp = await model.crear({
    nombre : "Roberto", 
    apellido_paterno : "Tellez",
    apellido_materno : "Cabanas",
    fecha_nacimiento : "2002-04-03",
    anio_ingreso : 2010
    });
    res.send(resp ? "Agregado" : "No se ha podido agregar");
});
routes.get("/eliminar/:id",(req,res)=>{
    let resp = model.eliminar({
        id: req.params.id
    });
    res.send(resp ? "Eliminado" : "No eliminado");
});
module.exports = routes;