const crypto = require("crypto");
function hashContrasena(password){
    hmac = crypto.createHash("sha256");
    return hmac.update(password+"")
                .digest("hex");
}
module.exports = hashContrasena;