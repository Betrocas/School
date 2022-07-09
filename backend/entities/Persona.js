let validator = require("../helpers/ValidacionString");
let validarId= require("../helpers/validaciones").id;
const roles = require("../config/roles");

//Clase que almacena información general de los actores involucrados
class Persona{
    //Edades minimas y maxima al momento de registro
    #minEdad = 6;
    #maxEdad = 60; 
    constructor( 
        {
        nombre,
        apellido_paterno,
        fecha_nacimiento,
        apellido_materno = "",
        CURP,
        id_usuario
        }
    ){        
        this.id = -1;
        this.setNombre(nombre);
        this.setAP(apellido_paterno);        
        this.setAM(apellido_materno);
        this.setFN(fecha_nacimiento);
        this.setUsuario(id_usuario);
        this.setCurp(CURP);
    }
    setNombre(nombre){
        /*
            Debe tener un maximo de  30 caracteres y un minimo de 5
            Solo se admiten caracteres alfabeticos
        */
        let maxLength = 30;
        let minLength = 3;
        if(nombre  === undefined)throw "Nombre indefinido";
        if(!validator.stringName(nombre) || !this.#checkLength(nombre,maxLength,minLength)){
            console.log(this.#checkLength(nombre,maxLength,minLength));
            let err = new Error("Formato invalido");
            throw err;
        }
        this.nombre = nombre;
    }
    setAP(ap){
        //Debe tener al menos 5 caracteres y maximo 25
        //Solo se admiten caracteres alfabeticos         
        let maxLength = 25;
        let minLength = 4;
        if(ap=== undefined)throw "Apellido paterno indefinido";
        if(!(validator.stringName(ap) && this.#checkLength(ap,maxLength,minLength))){
            throw "Apellido paterno invalido";
        }
        this.apellido_paterno = ap;
    }
    setAM(am){
        //Debe tener al menos 5 caracteres y maximo 25
        //Solo se admiten caracteres alfabeticos         
        let maxLength = 25;
        let minLength = 5;        
        if(am=== undefined)throw "Apellido materno indefinido";
        if(!(validator.stringName(am) && (this.#checkLength(am,maxLength,minLength)||am.length===0))){
            throw "Apellido materno invalido";
        }
        this.apellido_materno= am;
    }
    setFN(fn){
        if(fn=== undefined)throw "Fecha nacimiento indefinida";
        let fecha =  new Date(fn);
        if(isNaN(fecha.getDate()))throw "Fecha formato incorrecto";
        let min = (new Date()).getFullYear() - this.#maxEdad; 
        let max = (new Date()).getFullYear() - this.#minEdad; 
        if(!(fecha.getFullYear()>=min && fecha.getFullYear()<=max)){
            throw "Fecha fuera de rango";
        }
        this.fecha_nacimiento = fecha.toISOString().substring(0,10);
    }
    setCurp(curp){
        if(curp===undefined)throw"CURP indefinido";
        if(typeof(curp)!='string')throw"CURP debe ser tipo string";
        if(curp.length<10)throw "Tamaño CURP incorrecto";
        this.CURP = curp.toUpperCase();
    }
    setUsuario(usr) {        
        if(!validarId(usr)&&usr!=undefined)throw "Formato id_usuario invalido";
        if(usr==undefined)usr = null;
        this.id_usuario = usr;
    }
    #checkLength(cad,max,min=0){
        return cad.length <= max && cad.length >= min; 
    }
}
module.exports = {
    Persona
}
