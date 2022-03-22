let Persona =  {
    n : "nombre",
    ap : "apellido_paterno",
    am : "apellido_materno",
    fn : "fecha_nacimiento"
}; 
let Alumno =  {
    n : "nombre",
    ap : "apellido_paterno",
    am : "apellido_materno",
    fn : "fecha_nacimiento",    
    ai : "anio_ingreso"
}; 
let Docente =  {
    n : "nombre",
    ap : "apellido_paterno",
    am : "apellido_materno",
    fn : "fecha_nacimiento"
}; 
let Administrativo  =  {
    n : "nombre",
    ap : "apellido_paterno",
    am : "apellido_materno",
    fn : "fecha_nacimiento"
}; 
let Salon = {
    cap : "capacidad"
}
let MateriaClasificacion = {
    n : "nombre",
    desc : "descripcion"
}
let Materia = {
    n : "nombre",
    desc : "descripcion",
    clasf : "clasificacion"
}
module.exports = {
    Docente,
    Administrativo,
    Alumno,
    Salon,
    MateriaClasificacion,
    Materia
}
