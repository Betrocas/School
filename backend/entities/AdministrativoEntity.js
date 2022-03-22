let persona = require("./Persona").Persona;

class Administrativo extends persona{

    constructor({
        id,
        nombre,
        apellido_paterno,
        fecha_nacimiento,
        apellido_materno = ""
        }
    ){        
        super(nombre,apellido_paterno,fecha_nacimiento,apellido_materno);
        this.id = id===undefined?-1:id;
    }

}
module.exports = Administrativo;