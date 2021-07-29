// https://bluuweb.github.io/node/07-jwt/#validaciones-hapi-joi
// https://github.com/carlosazaustre/node-api-rest-2017
// https://www.tabnine.com/code/javascript/functions/bcryptjs/compareSync
const express = require('express');
const path = require('path');
//const exphbs = require('express-handlebars');
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
app.use('/auth',  require('./routes/auth'));         //  (1)
 // app.use('/views', require('./routes/rutas-get'));        //  (2)
 app.use('/test', require('./routes/rutas-prueba'));        //  (3)
 app.use('/templates', require('./routes/plantillasCRUD'))       //  (4)
app.use('/nice', require('./routes/rutasBuenas'))            // (5)     


// iniciar servidor 
  const PORT = process.env.PORT || 3007;
  app.listen(PORT, () =>{
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
  })
