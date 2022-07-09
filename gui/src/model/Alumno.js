import api from "../config/axios";
const url_path = "alumno";
export const getOne = async (id)=>{
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
export const getAllAlumnos = async ()=>{
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
export const deleteOne = async (id)=>{
    try {
        let resp = await (api.delete(url_path+`/${id}`,{
            headers : {
                authorization : localStorage.getItem("JWT")
            }
        }));
        return resp.data.success;
    } catch (error) {
        console.log(error);
        return false;
    }
}
export const edit = async (data)=>{
    try {
        let resp = await (api.put(url_path+`/${data.id}`,{
            headers : {
                authorization : localStorage.getItem("JWT")
            },
            data : {
                n : data.nombre,
                ap : data.apellido_paterno,
                am : data.apellido_materno,
                fn : data.fecha_nacimiento,
                ai : data.anio_ingreso
            }
        }));
        return resp.data.success;
    } catch (error) {
        console.log(error);
        return false;
    }
}
export const create = async (data)=>{
    try {
        let resp = await (api.post(url_path,{
            headers : {
                authorization : localStorage.getItem("JWT")
            },
            data : {
                n : data.nombre,
                ap : data.apellido_paterno,
                am : data.apellido_materno,
                fn : data.fecha_nacimiento,
                ai : data.anio_ingreso,
                curp : data.curp
            }
        }));
        return resp.data.success;
    } catch (error) {
        console.log(error);
        return false;
    }
}