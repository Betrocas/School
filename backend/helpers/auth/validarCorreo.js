let validator = require("validator");

function validarCorreo(correo){
    if(typeof(correo)!="string" || !validator.isEmail(correo))return false;
    if(correo.split("@")[1]!="escuela.mx") return false;
    return true;
}

module.exports = validarCorreo;