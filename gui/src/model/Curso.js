import api from "../config/axios";
const url_path = "curso";

export const getCurso = async (id)=>{
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
export const getAllCurso = async (id)=>{
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
export const deleteCurso = async (id)=>{
    //Id: alumno
    try {
        let resp = await (api.delete(url_path+`/${id}`,{
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
export const editCurso = async (data)=>{
    //Id: alumno
    try {
        let resp = await (api.put(url_path+`/${data.id}`,{
            headers : {
                authorization : localStorage.getItem("JWT")
            },
            data: {
                prof : data.profesor,
                mteria : data.materia,
                slon : data.salon
            }
        }));
        return resp.data.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}
export const createCurso = async (data)=>{
    //Id: alumno
    try {
        let resp = await (api.post(url_path+`/${data.id}`,{
            headers : {
                authorization : localStorage.getItem("JWT")
            },
            data: {
                prof : data.profesor,
                mteria : data.materia,
                slon : data.salon
            }
        }));
        return resp.data.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}