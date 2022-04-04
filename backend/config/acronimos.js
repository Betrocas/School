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
let Curso = {
    prof : "id_docente",
    mtria : "id_materia",
    slon : "id_salon"
}
let Parcial = {
    fi : "fecha_inicio",
    ff : "fecha_final"
}
let Evaluacion = {
    parcial : "parcial",
    almno : "alumno",
    crso : "curso"
}
module.exports = {
    Docente,
    Administrativo,
    Alumno,
    Salon,
    MateriaClasificacion,
    Materia,
    Evaluacion,
    Parcial,
    Curso
}
