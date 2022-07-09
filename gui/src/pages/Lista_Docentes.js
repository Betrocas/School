import React from "react";
import {useEffect,useState} from "react"
import { Link,useNavigate } from "react-router-dom";
import Lista_Usuarios from "../components/Lista_Usuarios";
let Docente = require("../model/Docente");

const Lista_Docentes = (props)=>{
    let [docentes,setDocentes] = useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        Docente.getAllDocente().then((data)=>{
            setDocentes(data);
        })
        .catch((err)=>{console.log(err);})
    },[]);
    let eliminar =async (id)=>{
      let resp = await Docente.deleteOne(id);      
      if(!resp){
        alert("No existe este indice");
        return;
      }
      setDocentes(docentes.filter(docente=>{
        return id!=docente.id;
      }));
    }
    let editar= async (id)=>{
      let usr;
       for (let i = 0; i < docentes.length; i++) {
          if(docentes[i].id==id){
            usr = docentes[i];
            break;
          }
        };
      navigate(`editar/${id}`,{
        state:{'usr':usr,
        rol : "docente"}});
    }
    return(
        <div className="mt-5">
            <h1 className="text-center mb-3">Docentes</h1>
             <table className="table">
               <thead>
                 <tr>
                   <th scope="col">CURP</th>
                   <th scope="col">Nombre</th>
                   <th scope="col">Apellido paterno</th>
                   <th scope="col">Apellido materno</th>
                   <th scope="col">Fecha nacimiento</th>
                   <th scope="col"></th>
                 </tr>
               </thead>
               <tbody>
                <Lista_Usuarios users={docentes} editHandler={editar} deleteHandler={eliminar} rol="docente"></Lista_Usuarios>
               </tbody>
             </table>
        </div>
    );
};
function selected(e){
  e.preventDefault();
  console.log(e.target.id);
}

export default Lista_Docentes;