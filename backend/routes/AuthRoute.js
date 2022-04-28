const express = require("express");
const routes = express.Router();
const controller = require('../controllers/AuthController');
routes
    .post("/auth",controller.login)
module.exports = routes;