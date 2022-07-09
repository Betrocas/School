let Curso = require('../entities/CursoEntity');
const model = require("../models/CursoModel");
let Docente = require("../models/DocenteModel");
let Materia = require("../models/MateriaModel");
let Salon = require("../models/SalonModel");
let Respuesta = require("../utils/respuesta");
let mapper = require("../utils/Mapper").entityToObject;
async function crear(data){
    try{
        //Validacion de parametros
        data.id_docente = parseInt(data.id_docente);
        if(isNaN(data.id_docente))throw "Id docente invalido";
        data.id_materia = parseInt(data.id_materia);
        if(isNaN(data.id_materia))throw "Id materia invalido";
        data.id_salon = parseInt(data.id_salon);
        if(isNaN(data.id_salon))throw "Id salon invalido";
        //Se comprueba que existan los objetos a los que se hace referencia
        let docente = await Docente.leer({id:data.id_docente});
        if(Object.keys(docente).length<=0)throw "No se ha encontrado el docente  con id: " + data.docente;
        let materia = await Materia.leer({id:data.id_materia});
        if(Object.keys(materia).length<=0)throw "No se ha encontrado la materia  con id: " + data.materia;
        let salon = await Salon.leer({id:data.id_salon});
        if(Object.keys(salon).length<=0)throw "No se ha encontrado el salon con id: " + data.salon;    
        //Se crea el curso        
        let curso = new Curso(data);
        if(await model.crear(mapper(curso)));
        return new Respuesta(true);
    }catch(err){
        console.log("error: "+err);
        return new Respuesta(false,err);
    }
}
async function eliminar(data){
    let respuesta = new Respuesta(false);
    try {
        let resp = await model.eliminar({id : data.id});
        if (resp){
            respuesta.success = true;            
        }else{
            respuesta.msg = "No se ha podido eliminar el elemento";
        }
    } catch (err) {
       respuesta.msg = err;
    }
    return respuesta;
}
async function editar(data){
    let resp = new Respuesta(false);
    try {
        let curso  = await model.leer({id : data.id});
        if(Object.keys(curso).length){
            curso = new Curso(curso);
            //Se comprueba que existan los objetos a los que se hace referencia
            let docente = await Docente.leer({id:data.id_docente});
            if(Object.keys(docente).length<=0)throw "No se ha encontrado el docente  con id: " + data.docente;
            let materia = await Materia.leer({id:data.id_materia});
            if(Object.keys(materia).length<=0)throw "No se ha encontrado la materia  con id: " + data.materia;
            let salon = await Salon.leer({id:data.id_salon});
            if(Object.keys(salon).length<=0)throw "No se ha encontrado el salon con id: " + data.salon;    
            //Se realizan los cambios
            curso.setDocente(data.id_docente);
            curso.setSalon(data.id_salon);
            curso.setMateria(data.id_materia);
            if(await model.editar(mapper(curso))){
                resp.success = true;
            }else{
                resp.msg = "No se ha podido editar el elemento";
            }
        }else{
            resp.msg = "No existe el elemento a editar";
        }
    } catch (err) {
        resp.msg = err;
    }
    return resp;
}
async function leer(data){
    try {
        let curso = await model.leer({id : data.id});
        return new Respuesta(true,"",curso);
    } catch (err) {
        return new Respuesta(false,err);
    }
}
async function leerTodos(){
    try {
        let admin = await model.leerTodos();        
        return new Respuesta(true,"",admin);
    } catch (err) {
        return new Respuesta(false,err);
    }
}
module.exports = {
    crear,
    editar,
    eliminar,
    leer,
    leerTodos
}
