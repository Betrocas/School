let Inscrito = require("../entities/InscritoEntity");
let model = require("../models/InscritoModel");
let Curso = require("../models/CursoModel");
let Alumno = require("../models/AlumnoModel");
let mapper = require("../utils/Mapper").entityToObject;
let Respuesta = require("../utils/respuesta");

async function crear(data){
    let resp = new Respuesta(false);
    try {
        //Se comprueba la existencia de las entidades referenciadas
        let curso = parseInt(data.id_curso);
        if(isNaN(curso))throw "Id Curso debe ser numerico";
        let alumno = parseInt(data.id_alumno);
        if(isNaN(alumno))throw "Id Alumno debe ser numerico";

        curso = await Curso.leer({id:curso});
        if(Object.keys(curso).length<=0)throw "No se ha encontrado el curso con id: " + data.id_curso;
        alumno = await Alumno.leer({id:alumno});
        if(Object.keys(alumno).length<=0)throw "No se ha encontrado al alumno con id: " + data.id_alumno;
    
        let inscrito = new Inscrito(data);
        if(await model.crear(mapper(inscrito))){
            resp.success = true;
        }else{
            resp.msg = "No se ha podido crear este elemento";
        }
    } catch (err) {
        console.log(err);
        resp.msg = err;
    } 
    return resp;
}
async function eliminar(data){
    let respuesta = new Respuesta(false);
    try {
        if(await model.eliminar({
            id_alumno : data.id_alumno,
            id_curso : data.id_curso
        })){
            respuesta.success = true;
        }else{
            respuesta.msg = "No se ha podido eliminar";
        }
    } catch (err) {
        respuesta.msg = err;
    }
    return respuesta;
}
/*async function editar(data){
    let respuesta = new Respuesta(false);
    try {
        let inscrito = await model.leer({
            id_curso : data.id_curso,
            id_alumno : data.id_alumno
        });
        if(Object.keys(inscrito).length>0){//Se comprueba la existencia
            inscrito = new Inscrito(inscrito);
            inscrito.setCurso(data.id_curso);
            inscrito.setAlumno(data.id_alumno);
            if(await model.editar(mapper(inscrito))){
                respuesta.success = true;
            }else{
                respuesta.msg = "No se ha podido editar";
            }
        }else{
            respuesta.msg = "No existe el elemento solicitado";
        }
    } catch (err) {
        respuesta.msg = err;
    }
    return respuesta;
}*/
async function leer(data){
    let respuesta = new Respuesta(false);
    try {
        let inscrito = await model.leer({
            id_curso : data.id_curso,
            id_alumno : data.id_alumno
        });
        respuesta.success = true;
        respuesta.data = inscrito;
    } catch (err) {
        respuesta.msg = err;
    }
    return respuesta;
}
module.exports = {
    leer,
    crear,
    eliminar
}