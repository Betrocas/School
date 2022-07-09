import React from "react";

const Lista_Prueba = (props)=>{

    const eliminar = (e)=>{        
        let id = e.target.id.split("_")[1];
       console.log("selected id: " + id); 
    }

    return props.data.map(num=>{
        return(
            <div id={num}>
                <p>{num}</p>
                <button 
                className="btn btn-primary" 
                id={`btn_${num}`}
                onClick={e=>eliminar(e)}>delete</button>
            </div>
        );
    });

}
export default Lista_Prueba;