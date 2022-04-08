const express = require("express");
const routes = express.Router();
const controller = require("../controllers/InscritoController");
routes
    .post('/inscrito',controller.crear)
    .delete("/inscrito",controller.eliminar)
    .get("/inscrito",controller.leer)
module.exports = routes;