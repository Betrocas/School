const express = require("express");
const routes = express.Router();
const controller = require('../controllers/SalonController');
routes
    .post('/salon',controller.crear)
    .delete("/salon/:id",controller.eliminar)
    .get("/salon/:id",controller.leer)
    .put('/salon/:id',controller.editar);
module.exports = routes;