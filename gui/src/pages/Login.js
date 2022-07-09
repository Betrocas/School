import React from "react";
import {useNavigate} from "react-router-dom";
const Usuario = require("../model/Usuario");
const Login = (props)=>{
    const navigate = useNavigate();
    let login = async (event)=>{
      event.preventDefault();
      let correo = document.getElementById("email").value;
      let pass = document.getElementById("password").value;
      let resp = await Usuario.get({correo:correo,password:pass}); 
      if(resp?.success){
        localStorage.setItem("id", resp.data.id+"");
        localStorage.setItem("rol", resp.data.rol);
        props.setRol(resp.data.rol);
        navigate("/");
      }
      else alert("Datos incorrectos");
    }
    return (
        <div className="m-auto mt-5 w-50">
            <form onSubmit={login}>
              <div className="mb-3">
                <label  className="form-label ">Correo</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Contraseña</label>
                <input type="text" className="form-control" name="pass" id="password"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;