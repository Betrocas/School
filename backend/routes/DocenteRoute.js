const express = require("express");
const routes = express.Router();
const controller = require('../controllers/DocenteController');
routes
    .post('/docente',controller.crear)
    .delete("/docente/:id",controller.eliminar)
    .get("/docente/:id",controller.leer)
    .put('/docente/:id',controller.editar);
module.exports = routes;