let Usuario  = require("../entities/UsuarioEntity");
let model = require("../models/UsuarioModel");
let mapper = require("../utils/Mapper").entityToObject;
let Respuesta = require("../utils/respuesta");
const roles = require("../config/roles");
const hashContrasena = require("../helpers/auth/hashContrasena");
const validarContrasena = require("../helpers/auth/validarContrasena");
const { Persona } = require("../entities/Persona");

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
async function crear(data){
    /*
    Datos de quien se le creara la cuenta
        id
        tipo_entidad        
    */
    let resp = new Respuesta(false);
    try {
        let modelEntidad = getTipo(data.tipo_entidad);
        if(modelEntidad===null)throw "No se reconoce la entidad: " + data.tipo_entidad;
        let entidad =await modelEntidad.leer({id:data.id});
        if(entidad.id_usuario!=null)throw "Este usuario ya posee una cuenta";
        if(Object.keys(entidad).length<=0)throw "No se ha encontrado al usuario con id: "+data.id;
        let id = await guardar(entidad,data.tipo_entidad);
        //Se inserta el id nuevo de la cuenta usuario en la la tabla del usuario
        if(!await modelEntidad.editar({
            id:data.id,
            id_usuario : id
        })){
            throw "No se pudo agregar la cuenta al usuario";
        }
        resp.success = true;
    } catch (error) {
        console.log(error);
        resp.msg = error;
    }
    return resp;
}
async function guardar(entidad,_rol){
    /*@params
        entidad: a la que se le creara la cuenta, previamente escaneada
        rol  : {alumno,estudiante,administrativo}
    */
    //Se crea correo y se verifica que no este repetido
        let correo = crearCorreo(entidad);
        let i = 0;
        while(await Object.keys(model.leerCorreo(correo)).length){
            i++;
            correo=crearCorreo(entidad,i);
        }
        if(entidad.fecha_nacimiento instanceof Date)entidad.fecha_nacimiento =  entidad.fecha_nacimiento.toISOString().substring(0,10);
        let contrasena = hashContrasena(entidad.fecha_nacimiento);
        let rol = roles[_rol];
        let usuario = new Usuario({
            correo,
            rol,
            contrasena
        });
        let resp =await model.crear(mapper(usuario)); 
        if(resp.insertId===undefined)throw "No se pudo crear la cuenta";
        return resp.insertId;
}
async function restablecerContrasena({id,tipo_entidad}){
    /*@params
        id: id del usuario a editar
        tipo: entidad a la que pertenece        
    */
    let resp = new Respuesta(false);
    try {
        //Se obtiene el tipo
        let modeloEntidad = getTipo(tipo_entidad);
        if(modeloEntidad===null)throw "Tipo de entidad no reconocida: " + tipo_entidad;
        //Se busca al usuario en su tabla
        let entidad  = await modeloEntidad.leer({id});
        if(Object.keys(entidad).length<=0)throw "No se encontro al usuario con id: " + id;
        entidad = new Persona(entidad);
        //Se valida que el usuario tenga una cuenta vinculada
        if(entidad.id_usuario===null)throw "Este usuario aun no tiene una cuenta creada";
        //Se busca al usuario con el id_usr dentro de su tabla de Usuario
        let usr = await model.leer({id:entidad.id_usuario});
        if(Object.keys(usr).length<=0)throw "No se pudo encontrar al usuario con el id: " + id + " entidad: " + tipo_entidad;
        usr = new Usuario(usr);
        usr.setContrasena(hashContrasena(entidad.fecha_nacimiento));        
        console.log("La fecha: " + entidad.fecha_nacimiento+hashContrasena(entidad.fecha_nacimiento));
        if(!await model.editar(mapper(usr)))throw "No se pudo restablecer la contrasena";
        resp.success = true;
        resp.msg = "Contrasena restablecida";
    } catch (error) {
        console.log(error);
        resp.msg=error;
    }
    return resp;
}
async function editarContrasena({id,contrasena,tipo_entidad}){
    let resp = new Respuesta(false);
    try {
        if(!validarContrasena(contrasena))throw "Formato de contrasena incorrecto";
        //Se obtiene el tipo
        let modeloEntidad = getTipo(tipo_entidad);
        if(modeloEntidad===null)throw "Tipo de entidad no reconocida: " + tipo_entidad;
        //Se busca al usuario en su tabla
        let entidad  = await modeloEntidad.leer({id});
        if(Object.keys(entidad).length<=0)throw "No se encontro al usuario con id: " + id;
        //Se valida que el usuario tenga una cuenta vinculada
        if(entidad.id_usuario===null)throw "Este usuario aun no tiene una cuenta creada";
        //Se busca al usuario con el id_usr dentro de su tabla de Usuario
        let usr = await model.leer({id:entidad.id_usuario});
        if(Object.keys(usr).length<=0)throw "No se pudo encontrar al usuario con el id: " + id + " entidad: " + tipo_entidad;
        usr = new Usuario(usr);
        usr.setContrasena(hashContrasena(contrasena));
        if(!model.editar(mapper(usr)))throw "No se pudo editar la contrasena";
        resp.success = true;        
    } catch (error) {
        resp.msg =  error;
    }
    return resp;
}
async function leer(data){
    let respuesta = new Respuesta(false);
    try {
        let usuario = await model.leer({id : data.id});
        if (usuario.contrasena!=undefined)delete usuario.contrasena;
        respuesta.success = true;        
        respuesta.data = usuario;
    } catch (err) {
        respuesta.msg = err;
    }
   return respuesta;
}
function crearCorreo(entidad,num){
    /*@params
        nombre
        apellido paterno
    */
    let correo = "";
    correo += entidad.nombre.toLowerCase()+".";
    correo += entidad.apellido_paterno.toLowerCase();
    if(num!=undefined)correo+="."+num;
    correo += "@escuela.mx";
    return correo;
}
module.exports = {
    leer,
    crear,
    editarContrasena,
    restablecerContrasena
}