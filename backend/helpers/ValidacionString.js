let validator = require("validator");
function stringName(cad){
    //validacion de cadena la cual solo debe contener letras
    string = cad.toLowerCase();    
    let i;
    for (i = 0; i < string.length; i++) {
        if(!(string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123)){
          break;
        }
    }
    return i >= string.length;
}


module.exports = {
    stringName
}