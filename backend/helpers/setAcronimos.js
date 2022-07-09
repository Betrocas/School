function setAcronimos(params,acronimos){
    let data = {};
    Object.keys(params).forEach(key =>{
        let acroValor = acronimos[key];
        if(acroValor){
            data[acroValor] = params[key];
            delete params[key];
        }
    });
    return data;
}
module.exports = setAcronimos;
