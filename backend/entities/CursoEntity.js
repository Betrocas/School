let setId = require("../helpers/id");
let validaciones = require("../helpers/validaciones");
class Curso {

    constructor ({id,id_docente,id_materia,id_salon}){
        this.id = id!=undefined ? id : -1;
        this.setDocente(id_docente);
        this.setMateria(id_materia);
        this.setSalon(id_salon);
    }
    setDocente(id){
        this.id_docente=setId(id,"Docente");
    }
    setMateria(id){
        this.id_materia=setId(id,"Materia");
    }
    setSalon(id){
        this.id_salon=setId(id,"Salon");
    }

}
module.exports = Curso;