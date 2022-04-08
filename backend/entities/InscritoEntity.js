let setId = require("../helpers/id");
class Inscrito{

    constructor({id,id_curso,id_alumno}){
        this.id = id == undefined ? -1 : id;
        this.setAlumno(id_alumno);
        this.setCurso(id_curso);
    }
    setCurso(id){
        this.id_curso=setId(id,"Curso");
    }
    setAlumno(id){
        this.id_alumno=setId(id,"Alumno");
    }
}
module.exports = Inscrito;