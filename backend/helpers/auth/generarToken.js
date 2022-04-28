const jwt = require("jsonwebtoken");
async function generarToken(data){
    /*@params
        id: id del usuario (Alumno,Docente,Admnistrativo)
        rol
    */
    let resp = "blablabla";
    let promise = new Promise((resolve,reject)=>{
        jwt.sign(data,process.env.JWT_TOKEN,(err,token)=>{
            if(err){
                console.log(err);
            }
            resolve(err?"":token);
        });
    });
    resp = await promise;
    return resp;
}
module.exports = generarToken;