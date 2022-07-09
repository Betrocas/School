import React from "react";
import {useEffect,useState} from "react"
import {Link} from "react-router-dom";
let Curso= require("../model/Curso");

const Lista_Curso = (props)=>{
    let [cursos,setCursos] = useState([]);
    let [cursosSeleccionados,setCursosSeleccionados]=useState([]);
    useEffect(()=>{
        Curso.getAllCurso().then((data)=>{
            console.log("Cursos:" , data);
            setCursosSeleccionados(new Array(data.length).fill(false));
            let listaCursos = data?.map((curso,index)=>{
                return(
                    <tr key={curso.id} id={`curso_${curso.id}`}>
                      <th scope="row"><Link to={"/"} className="text-reset">{curso.id}</Link></th>
                      <td>{curso.curso}</td>
                      <td>{curso.docente}</td>
                      <td>{curso.id_salon}</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <button id={`btnEdit_${curso.id}`} className="btn btn-primary me-3" onClick={e=>selected(e)}> Editar</button>
                          <button id={`btnDelete_${curso.id}`}className="btn btn-danger" onClick={e=>selected(e)}>Eliminar</button>
                        </div>
                      </td>
                    </tr>
                );
            });
            setCursos(listaCursos);
        })
        .catch((err)=>{console.log(err);})
    },[]);
    return(
        <div className="mt-5">
            <h1 className="text-center mb-3">Cursos</h1>
             <table className="table">
               <thead>
                 <tr>
                   <th scope="col">Id</th>
                   <th scope="col">curso</th>
                   <th scope="col">Docente</th>
                   <th scope="col">Salón</th>
                   <th scope="col"></th>
                 </tr>
               </thead>
               <tbody>
                    {cursos}
               </tbody>
             </table>
        </div>
    );
};
function selected(e){
  e.preventDefault();
  console.log(e.target.id);
}

export default Lista_Curso;