import React from "react";

const Crear = (props)=>{
    return(
        <div className="mt-5">
            <h2 className="text-center">Crear</h2>
            <form className="mt-3">
              <div class="mb-3">
                <label for="curp" class="form-label">CURP</label>
                <input type="text" class="form-control" id="curp" name="curp"/>
              </div>
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombre"/>
              </div>
              <div class="mb-3">
                <label for="apellidoP" class="form-label">Apellido paterno</label>
                <input type="text" class="form-control" id="apellidoP" name="ap"/>
              </div>
              <div class="mb-3">
                <label for="apellidoM" class="form-label">Apellido materno</label>
                <input type="text" class="form-control" id="apellidoM" name="am"/>
              </div>
              <div class="mb-3">
                <label for="fechaNacimiento" class="form-label">Fecha nacimiento</label>
                <input type="date" class="form-control" id="fechaNacimiento" name="fn"/>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="check" />
                <label className="form-check-label" for="check">Año de ingreso actual</label>
              </div>
              <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
};

export default Crear;