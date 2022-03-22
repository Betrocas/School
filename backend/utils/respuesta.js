//Objeto encargado de comunicar la capa de servicio con el controlador
class Respuesta{
    constructor(success,msg="",data){        
        this.success = success;//Bool
        this.msg = msg;
        this.data = data;
    }
}
module.exports = Respuesta;