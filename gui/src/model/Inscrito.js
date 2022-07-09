import api from "../config/axios";
const url_path = "inscrito";
export const getCursos = async (id)=>{
    //Id: alumno
    try {
        let resp = await (api.get(url_path+`/cursos/${id}`,{
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
export const getAlumnos = async (id)=>{
    //Id: curso 
    try {
        let resp = await (api.get(url_path+`/alumnos/${id}`,{
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