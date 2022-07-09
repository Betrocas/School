import React, { useEffect } from "react";
import Formulario_Crear_Usuario from "../../components/Formulario_Crear_Usuario";
const model = require("../../model/Docente");
const CrearDocente = ()=>{
    const crear = async (data)=>{
        let resp = await model.create(data);
        if(resp){
            alert("Hecho");
        }else{
            alert("Error");
        }
    }
    return(
        <Formulario_Crear_Usuario
        rol={"docente"}
        handlerCrear={crear}
        >            
        </Formulario_Crear_Usuario>
    );

};
export default CrearDocente;