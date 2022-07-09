import api from "../config/axios";
const url_path = "clasificacionMateria";

export const getClasificacion = async (id)=>{
    //Id: alumno
    try {
        let resp = await (api.get(url_path+`/${id}`,{
            headers : {
                authorization : localStorage.getItem("JWT")
            }
        }));
        return resp.data.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}
export const getAllClasificacion = async ()=>{
    //Id: alumno
    try {
        let resp = await (api.get(url_path,{
            headers : {
                authorization : localStorage.getItem("JWT")
            }
        }));
        return resp.data.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}