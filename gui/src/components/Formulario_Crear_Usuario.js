import React from "react";

const Formulario_Crear_Usuario = (props)=>{
    const anioIngreso = ()=>{
        return (
              <div className="mb-3">
                <label className="form-label">Año de ingreso</label>
                <input type="text" className="form-control" id="anioIngreso" name="anioIngreso"/>
              </div>
        );
    }
    const clicked = (e)=>{
        e.preventDefault();
        let data = {};
        data.nombre = document.getElementById("nombre").value;
        data.curp  = document.getElementById("curp").value;
        data.apellido_paterno  = document.getElementById("apellidoP").value;
        data.apellido_materno  = document.getElementById("apellidoM").value;
        data.fecha_nacimiento  = document.getElementById("fechaNacimiento").value;
        if(props.rol==="alumno"){
            data.anio_ingreso = document.getElementById("anioIngreso").value;
        }
        props.handlerCrear(data);
    }

    return(
        <div className="mt-5">
            <h2 className="text-center">Crear</h2>
            <form className="mt-3">
              <div className="mb-3">
                <label  className="form-label">CURP</label>
                <input   type="text" className="form-control" id="curp" name="curp"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Apellido paterno</label>
                <input  type="text" className="form-control" id="apellidoP" name="ap"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Apellido materno</label>
                <input type="text" className="form-control" id="apellidoM" name="am"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Fecha nacimiento</label>
                <input type="date" className="form-control" id="fechaNacimiento" name="fn"/>
              </div>
              {
                props.rol==="alumno"?anioIngreso():<div></div>
              }
              <button type="submit" onClick={e=>clicked(e)} className="btn btn-primary">Guardar</button>
            </form>
        </div>

    );

};
export default Formulario_Crear_Usuario;