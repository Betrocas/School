const express = require('express');
const app = express();

app.use("/api",require("./routes/alumnos"))


app.listen(3000,()=>{
    console.log("listening");
})