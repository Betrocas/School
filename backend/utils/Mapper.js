function entityToObject(entity){
    let obj = {};
    Object.keys(entity).forEach(key=>{
        obj[key] = entity[key];
    });
    return obj;
}

module.exports = {
    entityToObject
}