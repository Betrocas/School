let setId = require("../helpers/id");
class Evaluacion{
    constructor({id,id_parcial,id_inscrito,calificacion}){
        this.id = id===undefined ? -1:id;
        this.setParcial(id_parcial);
        this.setInscrito(id_inscrito);
        this.setCalificacion(calificacion);
    }
    setParcial(id){
        this.id_parcial = setId(id,"Parcial");
    }
    setInscrito(id){
        this.id_inscrito = setId(id,"Inscrito");
    }
    setCalificacion(calificacion){
        calificacion = parseInt(calificacion);
        if(isNaN(calificacion))throw "Formato calificacion invalido";
        if(calificacion>10&&calificacion<0)throw "Calificacion fuera de rango";
        this.calificacion = calificacion;
    }
}
module.exports = Evaluacion;