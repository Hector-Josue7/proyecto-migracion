// https://bluuweb.github.io/node/07-jwt/#validaciones-hapi-joi
// https://github.com/carlosazaustre/node-api-rest-2017
// https://www.tabnine.com/code/javascript/functions/bcryptjs/compareSync
const express = require('express');
const morgan = require("morgan");
const cors = require('cors')

const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express()

app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}));

//app.use(cors());
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
