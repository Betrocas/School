class Salon{
    constructor({capacidad,id}){
        this.id = id ? id : -1;
        this.setCapacidad(capacidad);
    }
    setId(id){        
        if(!(typeof(id)=='number' && id>0)){
            throw "Id invalido";            
        }
        this.id = id;
    }
    setCapacidad(capacidad){        
        if(capacidad=== undefined)throw "Capacidad indefinida";
        if(typeof(capacidad)!="number"){
            capacidad=parseInt(capacidad);
        }
        if(!(capacidad <= 40 && capacidad >= 0)){
            throw "Salon invalido";
        }
        this.capacidad = capacidad;
    }
}
module.exports = Salon;