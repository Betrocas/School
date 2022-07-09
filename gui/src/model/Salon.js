import api from "../config/axios";
const url_path = "salon";

export const getAllSalones = async ()=>{
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