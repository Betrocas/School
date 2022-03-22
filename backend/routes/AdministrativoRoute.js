const express = require("express");
const routes = express.Router();
const controller = require('../controllers/AdministrativoController');
routes
    .post('/administrativo',controller.crear)
    .delete("/administrativo/:id",controller.eliminar)
    .get("/administrativo/:id",controller.leer)
    .put('/administrativo/:id',controller.editar);
module.exports = routes;