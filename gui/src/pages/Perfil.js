import React, { useEffect, useState } from "react";
import getModel from "../util/getModel";
import img_profile from "../img/profile.png";
import { useNavigate,useParams } from "react-router-dom";
import ListaMaterias from "../components/ListaMaterias";
/*
*Se debe mostrar:
    Nombre, Apellidos, Fecha de nacimiento,Anio de ingreso
    Correo
    Materias inscritas
*/
const Perfil  = (props)=>{
  const navigate = useNavigate();
  let [logged,setLogged] = useState(false);
  let [usr,setUser] = useState({});
  let [rol,setRol] = useState("");
  let urlParams = useParams();
  useEffect(()=>{
    //Se verifica el usuario este previamente loggeado
    if(localStorage.getItem("JWT")==undefined){
      navigate("/login");
    }else{      
      setLogged(true);
      let tmRol = props.rol!=undefined?props.rol:localStorage.getItem("rol");
      setRol(tmRol);
      let id = urlParams.id!=undefined?parseInt(urlParams.id):localStorage.getItem("id");
      let model = getModel(tmRol);
      model.getOne(id).then(resp =>{
        setUser(resp);
      });
    }
  },[]);
  if(logged)return Render(usr,rol);
};

const Render = (usr,rol)=>{
    const Anio_ingreso = (props)=>{
                if(rol==="alumno"){
                  return(
                    <p className="card-text"><span className="fw-bold">Año de ingreso: </span>{props.user.anio_ingreso}</p>
                  );
                }else return "";
              };
    const Materias = (props)=>{
      if(rol==="alumno"){
        return(<ListaMaterias id={props.id}></ListaMaterias>)
      }else return "";
    }
    return(
        <div className="card w-50 m-auto mt-5">
          <img src={img_profile} className="card-img-top " alt="..."/>
          <div className="card-body text-center">
            <div className="mb-2">
              <h2 className="card-title">{usr?.nombre}</h2>
              <h3 className="card-title">{usr?.apellido_paterno + " " + usr?.apellido_materno}</h3>
              <p className="card-text"><span className="fw-bold">Fecha de nacimiento: </span>{usr?.fecha_nacimiento?.substring(0,10)}</p>
              <p className="card-text"><span className="fw-bold">Correo: </span>localhost@localhost.com</p>
            </div>
            <Anio_ingreso user={usr}></Anio_ingreso>
            <hr/>
            {<Materias id={usr.id}></Materias>}
            <div className="mt-4 d-flex flex-row justify-content-around">
              <button className="btn btn-primary">Historial Academico</button>
              <button className="btn btn-primary">Editar</button>
            </div>
          </div>
        </div>
    );

}


export default Perfil;