import React from "react";
import {useEffect,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Lista_Usuarios from "../components/Lista_Usuarios";
const Alumno = require("../model/Alumno");


const Lista_Alumno = (props)=>{
    let [alumnos,setAlumnos] = useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        Alumno.getAllAlumnos().then((data)=>{
            setAlumnos(data);
        })
        .catch((err)=>{console.log(err);})
    },[]);

    let eliminar =async (id)=>{
      let resp = await Alumno.deleteOne(id);      
      if(!resp){
        alert("No existe este indice");
        return;
      }
      setAlumnos(alumnos.filter(alumno=>{
        return id!=alumno.id;
      }));
    }
    let editar= async (id)=>{
      let usr;
       for (let i = 0; i < alumnos.length; i++) {
          if(alumnos[i].id==id){
            usr = alumnos[i];
            break;
          }
        };
      navigate(`editar/${id}`,{
        state:{'usr':usr,
        rol : "alumno"}});
    }
    return(
        <div className="mt-5">
            <h1 className="text-center mb-3">Alumnos</h1>
             <table className="table">
               <thead>
                 <tr>
                    <th scope="col">CURP</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido paterno</th>
                    <th scope="col">Apellido materno</th>
                    <th scope="col">Fecha nacimiento</th>
                    <th scope="col">Año de ingreso</th>
                    <th scope="col"></th>
                 </tr>
               </thead>
               <tbody>
                <Lista_Usuarios users={alumnos} editHandler={editar} deleteHandler={eliminar} rol="alumnos"></Lista_Usuarios>
               </tbody>
             </table>
        </div>
    );
};

export default Lista_Alumno;