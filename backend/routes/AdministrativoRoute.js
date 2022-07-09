const express = require("express");
const routes = express.Router();
const controller = require('../controllers/AdministrativoController');
const validarToken = require("../helpers/auth/validarToken");
const validarPermiso = require("../helpers/auth/validarPermiso");
const roles = require("../config/roles");
routes
    .post('/administrativo',validarToken,validarPermiso([roles.administrativo]),controller.crear)
    .delete("/administrativo/:id",validarToken,validarPermiso([roles.administrativo]),controller.eliminar)
    .get("/administrativo/:id",validarToken,validarPermiso([roles.general]),controller.leer)
    .get("/administrativo/",validarToken,validarPermiso([roles.general]),controller.leer)
    .put('/administrativo/:id',validarToken,validarPermiso([roles.administrativo]),controller.editar);
module.exports = routes;