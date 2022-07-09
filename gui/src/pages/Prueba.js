import React, { useEffect, useState } from "react";
import Lista_Prueba from "../components/Lista_Prueba";

const Prueba=(props)=>{
    let [num,setNums] = useState([]);    
    useEffect(()=>{
        setNums([1,2,3,4,5,6]);
    },[]);
    return(
        <div>
            <Lista_Prueba data={num}></Lista_Prueba>
        </div>
    );
};
export default Prueba;