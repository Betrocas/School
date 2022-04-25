const express = require("express");
const routes = express.Router();
const controller = require('../controllers/UsuarioController');
routes    
    .post('/docente/:id',(req,res)=>controller.crear(req,res,"docente"))
    .post('/alumno/:id',(req,res)=>controller.crear(req,res,"alumno"))
    .post('/administrativo/:id',(req,res)=>controller.crear(req,res,"administrativo"))
    .put('/administrativo/contrasena/:id',(req,res)=>controller.editarContrasena(req,res,"administrativo"))
    .put('/docente/contrasena/:id',(req,res)=>controller.editarContrasena(req,res,"docente"))
    .put('/alumno/contrasena/:id',(req,res)=>controller.editarContrasena(req,res,"alumno"))
    .put('/administrativo/administrativo/restablecerContrasena/:id',(req,res)=>controller.restablecerContrasena(req,res,"administrativo"))
    .put('/alumno/restablecerContrasena/:id',(req,res)=>controller.restablecerContrasena(req,res,"alumno"))
    .put('/docente/restablecerContrasena/:id',(req,res)=>controller.restablecerContrasena(req,res,"docente"))
    .get("/:id",controller.leer);
module.exports = routes;