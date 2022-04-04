const express = require("express");
const routes = express.Router();
const controller = require("../controllers/EvaluacionController");
routes
    .post('/evaluacion',controller.crear)
    .delete("/evaluacion/:id",controller.eliminar)
    .get("/evaluacion/:id",controller.leer)
    .put('/evaluacion/:id',controller.editar);
module.exports = routes;