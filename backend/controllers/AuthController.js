let service = require("../services/AuthService");
let acronimos = require("../config/acronimos").Usuario;
let setAcronimos = require("../helpers/setAcronimos");
let setRespuesta = require("../helpers/setRespuesta");

async function login (req,res){
    console.log("Parameters: " , req.body)
    console.log("Parameters: " , req.query)
    let params = setAcronimos(req.body,acronimos);
    delete params.rol;
    let respuesta = await service.getToken(params);
    let resp = setRespuesta(respuesta,true);
    res.json(resp);
}
module.exports = {
    login
}
