const express = require("express");
const routes = express.Router();
const controller = require("../controllers/MateriaController");
routes
    .post('/materia',controller.crear)
    .delete("/materia/:id",controller.eliminar)
    .get("/materia/:id",controller.leer)
    .get("/materia/",controller.leer)
    .put('/materia/:id',controller.editar);
module.exports = routes;
