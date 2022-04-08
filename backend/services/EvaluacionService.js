let Evaluacion = require("../entities/EvaluacionEntity");
const model = require("../models/EvaluacionModel");
let Parcial = require("../models/ParcialModel");
let Inscrito = require("../models/InscritoModel");
let Respuesta = require("../utils/respuesta");
let mapper = require("../utils/Mapper").entityToObject;

async function crear(data) {
    try{
        //Se valida la existencia de las entidades referenciadas
        if(Object.keys(await Parcial.leer({id:data.id_parcial})).length<=0)throw "No se ha encontrado el parcial con id: "+data.id_parcial;
        let inscrito = await Inscrito.leer({id_alumno:data.id_alumno,id_curso:data.id_curso});
        if(Object.keys(inscrito).length<=0)throw `No se tiene registro de ${data.id_alumno} inscrito en ${data.id_curso}`;
        //Se crea el objeto
        let evaluacion = new Evaluacion({
           id_parcial : data.id_parcial,
           id_inscrito : inscrito.id,
           calificacion : data.calificacion 
        });
        if( await model.crear(mapper(evaluacion)));
        return new Respuesta(true);
    }catch(err){
        console.log(err);
        return new Respuesta(false,err);
    }
}
async function eliminar(data){
    let respuesta = new Respuesta(false);
    try {
        let inscrito = await Inscrito.leer({
            id_alumno : data.id_alumno,
            id_curso : data.id_curso
        });
        if(Object.keys(inscrito).length<=0)throw `No se tiene registro de ${data.id_alumno} inscrito en ${data.id_curso}`;
        let resp = await model.eliminar({
            id_inscrito : inscrito.id,
            id_parcial : data.id_parcial
        });
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
        let inscrito = await Inscrito.leer({
            id_alumno : data.id_alumno,
            id_curso : data.id_curso
        });
        if(Object.keys(inscrito).length<=0)throw `No se tiene registro de ${data.id_alumno} inscrito en ${data.id_curso}`;
        let evaluacion = await model.leer({
            id_inscrito : inscrito.id,
            id_parcial : data.id_parcial
        });
        if(Object.keys(evaluacion).length){            
            evaluacion = new Evaluacion({
                id_parcial : evaluacion.id_parcial,
                id_inscrito : inscrito.id,
                calificacion : data.calificacion
            });
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
    console.log("data: ",data);
    try {
        let inscrito = await Inscrito.leer({
            id_alumno : data.id_alumno,
            id_curso : data.id_curso
        });
        if(Object.keys(inscrito).length<=0)throw `No se tiene registro de ${data.id_alumno} inscrito en ${data.id_curso}`;
        let evaluacion = await model.leer({
            id_inscrito : inscrito.id,
            id_parcial : data.id_parcial
        });
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
