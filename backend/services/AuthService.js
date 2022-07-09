let modelUsuario = require("../models/UsuarioModel");
let Respuesta = require("../utils/respuesta");
const generarToken = require("../helpers/auth/generarToken");
const validarToken = require("../helpers/auth/validarToken");
const validarPermiso = require("../helpers/auth/validarPermiso");
const validarCorreo = require("../helpers/auth/validarCorreo");
const hashContrasena = require("../helpers/auth/hashContrasena");
const roles = require("../config/roles");
function getTipo(tipo){
    if(Object.keys(roles).indexOf(tipo)==-1)throw "Tipo entidad no registrado: "+tipo;
    let modelEntidad;
    switch (tipo) {
        case "alumno":
            modelEntidad = require("../models/AlumnoModel");
            break;
        case "docente":
            modelEntidad = require("../models/DocenteModel");
            break;
        case "administrativo":
            modelEntidad = require("../models/AdministrativoModel");
            break;
        default:
            modelEntidad = null;
            break;
    }
    return modelEntidad;
}
async function getToken(data){
    /*@params
    correo
    contrasena
    */
    let resp = new Respuesta(false);
    try {
        if(!validarCorreo(data.correo))throw "Formato de correo incorrecto" + data.correo;
        let usr = await modelUsuario.leerCorreo(data.correo);
        //Se busca al usuario con el correo proporcionado
        if(Object.keys(usr).length<=0)throw "Correo incorrectos";
        //Se verifica la contrasena
        if(hashContrasena(data.contrasena) !== usr.contrasena)throw "Contrasena incorrectos";
        //Se busca la informacion de la entidad 
        let rol;
        Object.keys(roles).forEach(key=>{
            if(roles[key]==usr.rol)rol = key;
        });
        let modeloEntidad = getTipo(rol);
        let entidad = await modeloEntidad.leerUsuario({id:usr.id});
        let token = await generarToken({
            id: entidad.id,
            rol : roles[rol]
        });
        resp.success = true;
        resp.data = {
            token,
            id : entidad.id,
            rol
        };
    } catch (error) {
       console.log(error);        
    }
    return resp;
}

module.exports = {
    getToken
}
