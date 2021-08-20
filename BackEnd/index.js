const express = require('express');
const morgan = require("morgan");
const cors = require('cors')

//const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express()

app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}));

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

 
// route middleware
//app.use('/pruebas', require('./routes/rutas-prueba')); // testear las rutas que se vayan haciendo aqui primero
app.use('/migracion', require('./routes/rutasBuenas'));           


// iniciar servidor 
const PORT = process.env.PORT || 3007;
app.listen(PORT, () =>{ console.log(`BackEnd corriendo en http://localhost:${PORT}`) });
