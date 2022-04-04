class Evaluacion{
    constructor({id,parcial,alumno,curso,calificacion}){
        this.id = id===undefined ? -1:id;
        this.setParcial(parcial);
        this.setCurso(curso);
        this.setAlumno(alumno);
        this.setCalificacion(calificacion);
    }
    setParcial(id){
        if(!(typeof(id=="number") && id>0))throw "Formato id parcial invalido";
        this.parcial = id;
    }
    setCurso(id){
        if(!(typeof(id=="number") && id>0))throw "Formato id curso invalido";
        this.curso = id;
    }
    setAlumno(id){
        if(!(typeof(id=="number") && id>0))throw "Formato id alumno invalido";
        this.alumno = id;
    }
    setCalificacion(calificacion){
        if(!(typeof(calificacion)=="number"))throw "Formato calificacion invalido";
        if(calificacion>10&&calificacion<0)throw "Calificacion fuera de rango";
        this.calificacion = calificacion;
    }
}
module.exports = Evaluacion;