const express = require('express');
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
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

app.listen(3000,()=>{
    console.log("listening");
})