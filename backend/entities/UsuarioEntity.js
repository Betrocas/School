let validator = require("../helpers/ValidacionString")
let validarCorreo = require('validator').isEmail;
const roles = require("../config/roles");
class Usuario{
    constructor({
        id,
        correo,
        contrasena,
        rol
    }){
        this.id = id===undefined? -1 : id;
        this.setCorreo(correo);
        this.setContrasena(contrasena);
        this.setRol(rol);
    }
    setCorreo(correo){
        if(!validarCorreo(correo))throw "Formato de correo incorrecto";
        this.correo = correo;
    }
    setRol(rol){//Debe ser numerico
        if(typeof(rol)!='number')throw "El valor de rol debe ser numerico";
        if(Object.values(roles).indexOf(rol)==-1)throw "Este rol no esta definido: " + rol ;
        this.rol = rol;
    }
    setContrasena(contrasena){
        if(contrasena==undefined || contrasena.length<7)throw "Contraseña incorrecta";
        this.contrasena = contrasena;
    }
    setUsuario(rol){
        if(rol==undefined)rol = roles.invitado;
        if(!Object.values(roles).indexOf(rol))throw "Rol desconocido";
        this.rol=rol;
    }
}
module.exports = Usuario;