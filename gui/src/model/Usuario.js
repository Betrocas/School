import api from "../config/axios";
export const get = async (data)=>{
    try {
        let resp = await (api.post("auth",{        
            correo : data.correo,
            pass : data.password
        }));
        console.log(resp);
        if(resp.data?.success){            
            localStorage.setItem("JWT",resp.data.data?.token);
        }
        return resp.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}