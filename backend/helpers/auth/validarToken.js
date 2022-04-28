const jwt = require("jsonwebtoken");

async function validarToken(req,res,next){
    if(req.headers.authorization==undefined){
        res.sendStatus(400);
    }else{
        let token = req.headers.authorization.split(' ').pop();
        jwt.verify(token,process.env.JWT_TOKEN,(err,data)=>{
            if(err){
                res.sendStatus(400);
            }else{
                req.token = data;                
                next();
            }
        });
    }
}
module.exports = validarToken;