import React, { useEffect, useState } from "react";
let Inscrito = require("../model/Inscrito");
const ListaMaterias =  (props)=>{
    let [materias,setMaterias] = useState([]);
    useEffect(()=>{
        Inscrito.getCursos(props.id).then((data)=>{
            console.log("MATERISA:" , data);
            let listaMaterias = data?.map(materia=>{
                return(
                    <li className="list-group-item" key={materia.id}>{materia.nombre}</li>
                );
            });
            setMaterias(listaMaterias);
        })
        .catch((err)=>{console.log(err);})
    },[]);
    return (
        <div className="mt-3">
          <h5>Materias cursando:</h5>
          <ul className="list-group">
            {materias}
          </ul>
        </div>
    );
}

export default ListaMaterias;
