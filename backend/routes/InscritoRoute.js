const express = require("express");
const routes = express.Router();
const controller = require("../controllers/InscritoController");
routes
    .post('/inscrito',controller.crear)
    .delete("/inscrito",controller.eliminar)
    .get("/inscrito/alumnos/:id",controller.leerAlumnos)
    .get("/inscrito/cursos/:id",controller.leerCursos)
module.exports = routes;