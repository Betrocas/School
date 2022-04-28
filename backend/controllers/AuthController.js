let service = require("../services/AuthService");
let acronimos = require("../config/acronimos").Usuario;
let setAcronimos = require("../helpers/setAcronimos");
let setRespuesta = require("../helpers/setRespuesta");

async function login (req,res){
    let params = setAcronimos(req.query,acronimos);
    delete params.rol;
    let respuesta = await service.getToken(params);
    let resp = setRespuesta(respuesta,true);
    res.json(resp);
}
module.exports = {
    login
}