import React, { useEffect, useState} from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import getModel from "../util/getModel";


const Editar = (props)=>{
  let navigate = useNavigate();
  let urlParams = useParams();
  let [user,setUser] = useState({});
  let location = useLocation();
  let [model,setModel]=useState({});
  let [rol,setRol] = useState("");
  useEffect(()=> {
    if(location.state?.usr===undefined){
      if(props.rol!="alumno"&&props.rol!="administrativo"&&props.rol!="docente"){
        navigate("/404");
      }
      console.log("Rol: " , props.rol);
      setRol(props.rol);
      setModel(getModel(props.rol));
      //navigate("/");
    }else{
      setRol(location.state.rol);
      setModel(getModel(location.state.rol));
      location.state.usr.fecha_nacimiento = location.state.usr.fecha_nacimiento.substring(0,10);
      setUser(location.state.usr);
    }
  },[]);

  useEffect(()=>{
    console.log(model);
    if(Object.keys(model).length>0&&Object.keys(user)<=0){
      model.getOne(urlParams.id).then((usuario)=>{
        usuario.fecha_nacimiento = usuario.fecha_nacimiento.substring(0,10);
        setUser(usuario);
      });
    }
  },[model]);

  const clicked = async (e)=>{
    e.preventDefault();
    let data={};
    data.id = user.id;
    data.CURP = user.CURP;
    data.nombre = document.getElementById("nombre").value;
    data.apellido_paterno = document.getElementById("apellidoP").value;
    data.apellido_materno = document.getElementById("apellidoM").value;
    data.fecha_nacimiento = document.getElementById("fechaNacimiento").value;
    if(rol==="alumno"){
      data.anio_ingreso=document.getElementById("anioIngreso").value;
    }
    let response = await model.edit(data);
    if(response){
      alert("Hecho");
    }else{
      alert("Incorrecto");
    }
  }
    return(
        <div className="mt-5">
            <h2 className="text-center">Editar</h2>
            <form className="mt-3">
              <div className="mb-3">
                <label  className="form-label">CURP</label>
                <input  value={user.CURP!=undefined?user.CURP:""} type="text" className="form-control" id="curp" name="curp"readOnly/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Nombre</label>
                <input defaultValue={user.nombre!=undefined?user.nombre:""}type="text" className="form-control" id="nombre" name="nombre" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Apellido paterno</label>
                <input defaultValue={user.apellido_paterno!=undefined?user.apellido_paterno:""} type="text" className="form-control" id="apellidoP" name="ap"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Apellido materno</label>
                <input defaultValue={user.apellido_materno!=undefined?user.apellido_materno:""}type="text" className="form-control" id="apellidoM" name="am"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Fecha nacimiento</label>
                <input defaultValue={user.fecha_nacimiento!=undefined?user.fecha_nacimiento:""}type="date" className="form-control" id="fechaNacimiento" name="fn"/>
              </div>
              {
                rol==="alumno"?Alumno(user.anio_ingreso):<div></div>
              }
              <button onClick={e=>clicked(e)} type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
};
function Alumno(anio_ingreso){
  return(
    <div className="mb-3">
      <label  className="form-label">Año de ingreso</label>
      <input defaultValue={anio_ingreso} type="number" className="form-control" id="anioIngreso" name="ai"/>
    </div>
  );
}

export default Editar;