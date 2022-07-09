//Determina el rol del usuario y setea el modelo a usar durante
//la ejecución
function getModel(rol){
    let model;
    switch (rol) {
        case "alumno":
            model = require("../model/Alumno");
            break;
        case "docente":
            model = require("../model/Docente");
            break;
        case "administrativo":
            model = require("../model/Administrativo");
            break;
        default:
            model = null;
            break;
    }    
    return model;
}
export default getModel;