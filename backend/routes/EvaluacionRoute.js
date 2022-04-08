const express = require("express");
const routes = express.Router();
const controller = require("../controllers/EvaluacionController");
routes
    .post('/evaluacion',controller.crear)
    .delete("/evaluacion",controller.eliminar)
    .get("/evaluacion",controller.leer)
    .put('/evaluacion',controller.editar);
module.exports = routes;