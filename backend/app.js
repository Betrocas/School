const express = require('express');
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use("/api",require("./routes/AlumnoRoute"));


app.listen(3000,()=>{
    console.log("listening");
})