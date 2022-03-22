let validator = require("../helpers/ValidacionString");
class Materia{
    constructor({id,nombre,descripcion,clasificacion}){
        this.id = id===undefined ? -1 : id;
        this.setNombre(nombre);
        this.setDescripcion(descripcion);
        this.setClasificacion(clasificacion);
    }    
    setId(id){
        if(!(typeof(id)=='number' && id>0)){
            throw "Id invalido";            
        }
        this.id = id;
    }
    setNombre(nombre){
        let maxLength = 30;
        let minLength =5;
        if(nombre===undefined)throw "Nombre indefinido";
        if(!(validator.stringName(nombre) && this.#checkLength(nombre,maxLength,minLength) )){
            throw "Nombre invalido";
        }
        this.nombre = nombre;
    }
    setDescripcion(desc){
        let maxLength = 200;
        let minLength = 0;
        if(desc===undefined)throw "Descripcion indefinido";
        if(!(/*validator.stringName(desc) &&*/ this.#checkLength(desc,maxLength,minLength) )){
            throw "Descripcion invalida";
        }
        this.descripcion = desc;
    }
    setClasificacion(id){
        if(id===undefined)throw "Clasificacion indefinida";
        if(typeof(id)!="number"){
            id = parseInt(id);
        }
        if(!id>0){
            throw "Id clasificacion invalido";
        }
        this.clasificacion =  id;
    }    
    #checkLength(cad,max,min=0){
        return cad.length <= max && cad.length >= min; 
    }
}
module.exports = Materia;