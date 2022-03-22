class Evaluacion {    
    constructor({
        parcial,
        alumno,
        curso,
        calificacion
        }
    ){
        this.id_parcial = parcial;
        this.id_alumno =alumno;
        this.id_curso = curso;
        this.setCalificacion(calificacion)
    }
    setCalificacion(calificacion){
        if(calificacion=== undefined)throw "Calificacion indefinida";
        if(!(typeof(calificacion)=="number" && calificacion>=0 && calificacion<=10)){
            throw "Calificacion invalida";
        }
        this.calificacion = calificacion
    }


}