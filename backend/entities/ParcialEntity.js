let validaciones = require("../helpers/validaciones");
let fecha = require("../helpers/fecha");
class Parcial {

    constructor ({id,fecha_inicio,fecha_final}){
       this.id = id == undefined ? -1 : id;
       this.setFI(fecha_inicio);
       this.setFF(fecha_final);
       if(!validaciones.fecha(this.fecha_inicio,this.fecha_final))throw "Fecha final menor que fecha inicio";
    }
    setFI(f){
        if(f instanceof Date){
            if(isNaN(f.getTime()))throw "Fecha invalida";
            this.fecha_inicio = f;
        }else{
            this.fecha_inicio = fecha(f);
        }
    }
    setFF(f){
        if(f instanceof Date){
            if(isNaN(f.getTime()))throw "Fecha invalida";
            this.fecha_final = f;
        }else{
            this.fecha_final = fecha(f);
        }
    }

}
module.exports = Parcial;