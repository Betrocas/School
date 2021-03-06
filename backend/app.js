const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
//TODO:Agregar validacion de token a las rutas faltantes
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api",require("./routes/AlumnoRoute"));
app.use("/api",require("./routes/AdministrativoRoute"));
app.use("/api",require("./routes/DocenteRoute"));
app.use("/api",require("./routes/SalonRoute"));
app.use("/api",require("./routes/ClasificacionMateriaRoute"));
app.use("/api",require("./routes/MateriaRoute"));
app.use("/api",require("./routes/ParcialRoute"));
app.use("/api",require("./routes/CursoRoute"));
app.use("/api",require("./routes/InscritoRoute"));
app.use("/api",require("./routes/EvaluacionRoute"));
app.use("/api/cuenta",require("./routes/UsuarioRoute"));
app.use("/api",require("./routes/AuthRoute"));
app.use("/api",require("./routes/prueba"));

app.listen(3001,()=>{
    console.log("listening");
})
