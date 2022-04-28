const express = require("express");
const routes = express.Router();
const controller = require('../controllers/SalonController');
const validarToken = require("../helpers/auth/validarToken");
const validarPermiso = require("../helpers/auth/validarPermiso");
const roles = require("../config/roles");
routes
    .post('/salon',validarToken,validarPermiso([roles.administrativo]),controller.crear)
    .delete("/salon/:id",validarToken,validarPermiso([roles.administrativo]),controller.eliminar)
    .get("/salon/:id",validarToken,validarPermiso([roles.general]),controller.leer)
    .put('/salon/:id',validarToken,validarPermiso([roles.administrativo]),controller.editar);
module.exports = routes;