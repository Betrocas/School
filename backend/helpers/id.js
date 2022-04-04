//Funcion que setea formato de id
function setId(id,tableName){
    id = parseInt(id);
    if(isNaN(id))throw  `Formato id ${tableName} invalido`;
    if(id<=0) throw `Id ${tableName} fuera de rango`;
    return id;
}
module.exports = setId;