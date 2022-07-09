const express = require("express");
const routes = express.Router();
const controller = require("../controllers/ParcialController");
routes
    .post('/parcial',controller.crear)
    .delete("/parcial/:id",controller.eliminar)
    .get("/parcial/:id",controller.leer)
    .get("/parcial/",controller.leer)
    .put('/parcial/:id',controller.editar);
module.exports = routes;
