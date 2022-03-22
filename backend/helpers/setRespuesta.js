function setRespuesta(resp,data = false){
    let respuesta = {
        success : resp.success
    };
    if(!resp.success){
        respuesta.msg = resp.msg;
    }
    if(data && resp.success){
        respuesta.data = resp.data;
    }
    return respuesta;
}
module.exports = setRespuesta;