function fecha(f){
    console.log("f",f);
    //Formato de fecha aceptada: "anio-mes-dia";
    let date = f.split("-");
    if(date.length!=3) throw ("Formato de fecha incorrecto" + f);
    date = new Date(date[0],date[1],date[2]);
    if(isNaN(date.getDate()))throw("Formato de fecha incorrecto" + f);
    return date;
}
module.exports = fecha;