const express = require("express");
const routes = express.Router();
const controller = require('../controllers/AlumnoController');
const { eliminar } = require("../models/AlumnoModel");
routes.post('/alumno',controller.crear)
    .delete("/alumno/:id",controller.eliminar)
    .get("/alumno/",controller.leer)
    .put('/alumno',controller.editar);
module.exports = routes;