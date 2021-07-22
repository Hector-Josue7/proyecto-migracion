const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
// conexion a base de datos
const { credenciales } = require('../config')
const pool = new Pool(credenciales)
pool.connect()


// devuelve todos los usuarios 
// router.get("/descnna", async (req,res) =>{ // http://localhost:3006/views/descnna
//   let consulta = 'SELECT * FROM tbl_ninos_ninas_adolescentes'
//   let respuesta = await pool.query(consulta)
//  // res.json(respuesta.rows)
//   //res.end()
//   res.render('tabla', {respuesta});
// });


// login
//router.get("/login", async (req,res) =>{ // http://localhost:3006/views/descnna

 // res.json(respuesta.rows)
  //res.end()
 // res.render('tabla', {respuesta});
//});


router.get('/login', async (req, res) =>{ // http://localhost:3006/views/login
  res.render('login')
})

  module.exports = router