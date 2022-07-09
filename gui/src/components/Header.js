import React from "react";
import logOut from "../util/logOut";
import { useNavigate,Link } from "react-router-dom";
const Header = (props)=>{  
  //Require conocer rol 
  let navigate = useNavigate();
    let Estudiante = ()=>{
     return (
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to={"/"}>Estudiante</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Materias</a>          
        </li>
       </ul>
     );
    }
    let Docente = ()=>{
     return (
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Docente</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Cursos</a>
        </li>
       </ul>
     );
    }
    let Administrativo = ()=>{
     return (
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="/">{localStorage.getItem("rol").toLocaleUpperCase()}</a>          
        </li>
        <li className="nav-item dropdown">
          <a
          className="nav-link dropdown-toggle"  
          id="navbarDropdown" 
          role="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false">            
            Cursos 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"cursos"}>Lista</Link></li>
            <li><Link className="dropdown-item" to={"cursos/crear"}>Crear</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a
          className="nav-link dropdown-toggle"  
          id="navbarDropdown" 
          role="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false">            
            Docentes 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"docentes"}>Lista</Link></li>
            <li><Link className="dropdown-item" to={"docentes/crear"}>Crear</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a
          className="nav-link dropdown-toggle"  
          id="navbarDropdown" 
          role="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false">            
            Alumnos 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"alumnos"}>Lista</Link></li>
            <li><Link className="dropdown-item" to={"alumnos/crear"}>Crear</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Cuentas</a>
        </li>
      

       </ul>
     );
    }
    const setNav =()=>{
      switch (localStorage.getItem("rol")) {
        case "alumno":
          return Estudiante();
        case "docente":
          return Docente();
        case "administrativo":
          return Administrativo();
        default:          
          return (<div>NADA</div>);  
      }
    }
    const logout=()=>{
      logOut();
      navigate("/login");
    }
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/*Seccion de opciones de menu*/}
            {setNav()}
          </div>
          <button className="btn btn-outline-primary" type="submit" onClick={logout}>Log out</button>
        </div>
      </nav>
    );
}

export default Header;