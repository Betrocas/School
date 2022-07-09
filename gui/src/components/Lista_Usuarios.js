import React from "react";
import { Link } from "react-router-dom";

const Lista_Usuarios = (props)=>{

    function alumno(){
        return props.users.map(alumno=>{
            return(
                <tr key={alumno.id} id={`alm_${alumno.id}`}>
                  <td scope="row"><Link rol="alumno" to={`${alumno.id}`} className="text-reset">{alumno.CURP}</Link></td>
                  <td scope="row">{alumno.nombre}</td>
                  <td>{alumno.apellido_paterno}</td>
                  <td>{alumno.apellido_materno}</td>
                  <td>{alumno.fecha_nacimiento.substring(0,10)}</td>
                  <td>{alumno.anio_ingreso}</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button id={`btnEdit_${alumno.id}`} className="btn btn-primary me-3"onClick={(e)=>editar(e)}>Editar</button>
                      <button id={`btnDelete_${alumno.id}`} className="btn btn-danger" onClick={e=>eliminar(e)}>Eliminar</button>
                    </div>
                  </td>
                </tr>
            );
        });
    }
    function noAlumno(rol){
        return props.users.map(usuario=>{
            return(
                <tr key={usuario.id} id={`usr_${usuario.id}`}>
                  <td scope="row"><Link rol={rol} to={`${usuario.id}`} className="text-reset">{usuario.CURP}</Link></td>
                  <td scope="row">{usuario.nombre}</td>
                  <td>{usuario.apellido_paterno}</td>
                  <td>{usuario.apellido_materno}</td>
                  <td>{usuario.fecha_nacimiento.substring(0,10)}</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button id={`btnEdit_${usuario.id}`} className="btn btn-primary me-3"onClick={(e)=>editar(e)}>Editar</button>
                      <button id={`btnDelete_${usuario.id}`} className="btn btn-danger" onClick={e=>eliminar(e)}>Eliminar</button>
                    </div>
                  </td>
                </tr>
            );
        });
    }

    function eliminar(e){
        let id = e.target.id.split("_")[1];
        props.deleteHandler(id);
    }
    function editar(e){
        let id = e.target.id.split("_")[1];
        props.editHandler(id);
    }
    let tabla;
    if(props.rol==="alumnos"){
        tabla = alumno();
    }else{
        tabla = noAlumno(props.rol);
    }
    return tabla;

};


export default Lista_Usuarios;