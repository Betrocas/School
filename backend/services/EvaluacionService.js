let Evaluacion = require("../entities/EvaluacionEntity");
const model = require("../models/EvaluacionModel");
let Parcial = require("../models/ParcialModel");
let Curso = require("../models/CursoModel");
let Alumno = require("../models/AlumnoModel");
let Respuesta = require("../utils/respuesta");
let mapper = require("../utils/Mapper").entityToObject;
async function crear(data) {
    try{
        //Se valida la existencia de las entidades referenciadas
        if(Object.keys(await Parcial.leer({id:data.parcial})).length<=0)throw "No se ha encontrado el parcial con id: "+data.parcial;
        if(Object.keys(await Curso.leer({id:data.id})).length<=0)throw "No se ha encontrado el curso con id: "+data.curso;
        if(Object.keys(await Alumno.leer({id:data.Alumno})).length<=0)throw "No se ha encontrado el alumno con id: "+data.alumno;
        //Se crea el objeto
        let evaluacion = new Evaluacion(data);
        if( await model.crear(mapper(evaluacion)));
        return new Respuesta(true);
    }catch(err){
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
        let evaluacion = await model.leer({id : data.id});
        if(Object.keys(evaluacion).length){
            //Se valida la existencia de las entidades referenciadas
            if(Object.keys(await Parcial.leer({id:data.parcial})).length<=0)throw "No se ha encontrado el parcial con id: "+data.parcial;
            if(Object.keys(await Curso.leer({id:data.id})).length<=0)throw "No se ha encontrado el curso con id: "+data.curso;
            if(Object.keys(await Alumno.leer({id:data.Alumno})).length<=0)throw "No se ha encontrado el alumno con id: "+data.alumno;
            evaluacion = new Evaluacion(evaluacion);
            evaluacion.setParcial(data.parcial);
            evaluacion.setAlumno(data.alumno);
            evaluacion.setCurso(data.curso);
            evaluacion.setCalificacion(data.calificacion);
            if(await model.editar(mapper(evaluacion))){
                resp.success = true;
            }else{
                resp.msg = "No se ha podido editar el elemento";
            }
        }else{
            resp.msg = "No existe el elemento a editar";
        }
    } catch (err) {
        console.log(err);
        resp.msg = err;
    }
    return resp;
}
async function leer(data){
    try {
        let evaluacion = await model.leer({id : data.id});
        return new Respuesta(true,"",evaluacion);
    } catch (err) {
        return new Respuesta(false,err);
    }
}
module.exports = {
    crear,
    editar,
    eliminar,
    leer
}
