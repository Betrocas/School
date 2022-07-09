const express = require("express");
const routes = express.Router();
const controller = require('../controllers/AlumnoController');
routes
    .post('/alumno',controller.crear)
    .delete("/alumno/:id",controller.eliminar)
    .get("/alumno/:id",controller.leer)
    .get("/alumno/",controller.leer)
    .get("/alumno/:id/cursos",controller.leer)
    .put('/alumno/:id',controller.editar);
module.exports = routes;
