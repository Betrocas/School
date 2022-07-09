let persona = require('./Persona').Persona;

class Alumno extends persona{
    constructor({
        id,
        nombre,
        apellido_paterno,
        fecha_nacimiento,
        anio_ingreso,
        CURP,
        apellido_materno = ""
        }
    ){        
        super({nombre,apellido_paterno,fecha_nacimiento,apellido_materno,CURP});
        this.setAI(anio_ingreso);
        this.id = id===undefined?-1:id;
    }
    setId(id){
        id = parseInt(id);
        if(!(typeof(id)=='number' && id>0)){
            throw "Id invalido";            
        }
        this.id = id;
    }
    setAI(data){
        let anio;
        if(data===undefined){
            anio = new Date();
            anio = anio.getFullYear();
        }else{
            anio = parseInt(data);
            let max = (new Date()).getFullYear();
            if(!(typeof(anio)=="number" && anio<= max)){
                throw "Anio incorrecto";
            }
        }
        this.anio_ingreso = anio;
    }
}
module.exports = Alumno;
