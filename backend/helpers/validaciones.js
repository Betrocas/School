function id(id){
    return !(typeof(id)!=="number" ||id<=0);
}
function fecha(f,max,min){
    let band;
    if(max==undefined || isNaN(max.getDate()))throw "Fecha maxima invalida";
    band = max.getTime()>f.getTime();
    if(min!=undefined){        
        if(isNaN(min.getDate()))throw "Fecha minima invalida";
        band = min.getTime()<f.getTime();
    }
    return band;
}

module.exports = {
    id,
    fecha
}