import React, { useEffect, useState } from "react";
const modelDocente = require("../../model/Docente");
const modelMateria = require("../../model/Materia");
const modelSalon = require("../../model/Salon");
const CrearCurso = (props)=>{
    
    let [materias,setMaterias] = useState([]);
    let [docentes,setDocentes] = useState([]);
    let [salones,setSalones] = useState([]);
    let [materiasLista,setMateriasLista] = useState([]);
    let [docentesLista,setDocentesLista] = useState([]);
    let [salonesLista,setSalonesLista] = useState([]);

    useEffect(()=>{
        modelDocente.getAllDocente().then(data=>{
            setDocentes(data);
            let listaDocentes = data.map(docente=>{
                return(
                    <option value={docente.id}>{docente.nombre}</option>
                );
            });
            setDocentesLista(listaDocentes);
        });
        modelMateria.getAllMaterias().then(data=>{
            setMaterias(data);
            setMateriasLista(data.map(materia=>{
                return(
                    <option value={materia.id}>{materia.nombre}</option>
                );
            }));
        });
        modelSalon.getAllSalones().then(data=>{
            setSalones(data);
            setSalonesLista(data.map(salon=>{
                return(
                    <option value={salon.id}>{salon.id}</option>
                );
            }));
        })
    },[]);

    const clicked=(e)=>{
        e.preventDefault();
        let materiaSelected = document.getElementById("materia").value;
        let docenteSelected = document.getElementById("docente").value;
        let salonSelected = document.getElementById("salon").value;
        console.log(materiaSelected,docenteSelected,salonSelected);        
    }

    return(
        <div className="mt-5">
            <h2 className="text-center">Crear Curso</h2>
            <form className="mt-3">
              <div className="mb-3">
                <label  className="form-label">Materia</label>
                <select id="materia" className="form-select" aria-label="Default select example">
                    {materiasLista}
                </select>
              </div>
              <div className="mb-3">
                <label  className="form-label">Docente</label>
                <select id="docente" className="form-select" aria-label="Default select example">
                    {docentesLista}
                </select>
              </div>
              <div className="mb-3">
                <label  className="form-label">Salon</label>
                <select id="salon" className="form-select" aria-label="Default select example">
                    {salonesLista}
                </select>
              </div>
              <button type="submit" onClick={e=>clicked(e)} className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );

};

export default CrearCurso;