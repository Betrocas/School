const express = require("express");
const routes = express.Router();
const controller = require("../controllers/CursoController");
routes
    .post('/curso',controller.crear)
    .delete("/curso/:id",controller.eliminar)
    .get("/curso/:id",controller.leer)
    .get("/curso/",controller.leer)
    .put('/curso/:id',controller.editar);
module.exports = routes;
