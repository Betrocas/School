const roles = require("../../config/roles");
let validarPermiso = (rolesRequeridos) =>async (req,res,next)=>{    
    //Funcion encargada de comprobar que se tenga el rol/roles necesario/s
    /*@params
        rolProporcionado: Rol asigando al usuario que solicita acceso
        rolesRequeridos: Arreglo de roles aceptados a acceder
    */
    let rolProporcionado = req.token.rol;//numerico
    if(rolesRequeridos.includes(rolProporcionado)||rolesRequeridos.includes(roles.general)){
        next();
    }else{
        res.sendStatus(403);
    }
}

module.exports = validarPermiso;