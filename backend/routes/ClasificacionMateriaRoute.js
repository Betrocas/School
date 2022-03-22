const express = require("express");
const routes = express.Router();
const controller = require('../controllers/ClasificacionMateriaController');
routes
    .post('/clasificacionMateria',controller.crear)
    .delete("/clasificacionMateria/:id",controller.eliminar)
    .get("/clasificacionMateria/:id",controller.leer)
    .put('/clasificacionMateria/:id',controller.editar);
module.exports = routes;