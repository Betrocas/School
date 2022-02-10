const express = require('express');
require("dotenv").config();
const app = express();

app.use("/api",require("./routes/alumnos"))


app.listen(3000,()=>{
    console.log("listening");
})