let validator = require("../helpers/ValidacionString");
class MateriaClasificacion{

    constructor({id,nombre,descripcion}){        
        this.id = id ? id : -1;
        this.setNombre(nombre);
        this.setDescripcion(descripcion);
    }
    setId(id){
        if(!(typeof(id)=='number' && id>0)){
            throw "Id invalido";           
        }
        this.id = id;
    }
    setNombre(nombre){
        if(!nombre)throw "Argumento nombre indefinido";
        let maxLength = 20;
        let minLength = 6;
        if(!(validator.stringName(nombre) && this.#checkLength(nombre,maxLength,minLength))){
            throw "Nombre invalido";
        }
        this.nombre = nombre;
    }
    setDescripcion(desc){
        if(desc===undefined)throw "Argumento descripcion indefinido";
        let maxLength = 200;
        let minLength = 0;
        if(!(/*validator.stringName(desc) &&*/ this.#checkLength(desc,maxLength,minLength) )){
            throw "Descripcion invalida";
        }
        this.descripcion = desc; 
    }

    #checkLength(cad,max,min=0){
        return cad.length <= max && cad.length >= min; 
    }

}
module.exports = MateriaClasificacion;