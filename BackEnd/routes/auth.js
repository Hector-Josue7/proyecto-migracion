const  router  = require('express').Router();
const bcrypt = require('bcrypt');  // encriptador de contraseñas
// const auth = require('../services/middleware') 
const jwt = require('jsonwebtoken');





const moment = require('moment')


// conexion a la base de datos
const { Pool } = require('pg');
const { credenciales, SECRET_TOKEN} = require('../config')
const pool = new Pool(credenciales)
pool.connect()
.then( () => console.log('La Base de datos ha sido conectada'))
.catch( e=> console.log('error db: ', e))

// validation 
 const Joi = require('@hapi/joi'); 

 const schemaLogin = Joi.object({
  nombre_usuario: Joi.string().min(4).max(255).required(),
   clave_usuario: Joi.string().min(4).max(1024).required()
})



router.post('/registro', async (req, res) =>{ // http://localhost:3006/auth/registro
  try {
        let {nombre_persona, apellido_persona, nombre_usuario, clave_usuario} = req.body;
        const saltos = await bcrypt.genSalt(10);
        const clave_persona_encriptada = await bcrypt.hash(clave_usuario, saltos);
        let consulta = 'INSERT INTO tbl_usuarios_migracion(nombre_persona, apellido_persona, nombre_usuario, clave_usuario) VALUES ($1, $2, $3, $4)'
        let datos = [nombre_persona, apellido_persona, nombre_usuario, clave_persona_encriptada];
        await pool.query(consulta, datos)
        res.json({ message: 'Usuario agregado exitosamente' });
        res.end()
    } catch(error){
      console.error(error);
      return res.status(500).send({message: `Error al crear el usuario: ${error}`})
     }
});


router.post("/login", async (req, res) => { // http://localhost:3007/auth/login
  
 // validaciones
 //const { error } = schemaLogin.validate(req.body);
 //if (error) return res.status(400).json({ error: error.details[0].message }) 
   const {nombre_usuario, clave_usuario} = req.body
   const consulta = 'SELECT * FROM tbl_usuarios_migracion WHERE nombre_usuario = $1' 
   
   
   try {   
         const user = await pool.query(consulta, [nombre_usuario])
              if (user.rowCount > 0) {
                     var passwordIsValid = bcrypt.compareSync(clave_usuario, user.rows[0].clave_usuario);
                if (passwordIsValid) {
                      console.log("se ha logueado bien ")
                         var token = jwt.sign({ codigo_usuario: user.rows[0].codigo_usuario }, SECRET_TOKEN, {
                         expiresIn: 86400 // expires in 24 hours
                         });
                       
                     
                         res.status(200).send({ auth: true, token: token,  message: "Se ha logueado exitosamente" });
                        
                        

                        

                     } else {   // aqui cae se si la contraseña es incorrecta 
                            return res.status(400).json({error: "ok", msj: "Usuario o contraseña incorrectos"})


                      }
              } else {   // aqui cae si el usuario no existe en la base de datos 
               
                  res.status(400).json({
                    error: "ok",
                    msj: "Usuario o contraseña incorrectos"
                  })
            } } catch (error) {
            res.status(400).json({
              error: "ok",
              msj: "Error en el servicio "+ error
            })
          }
});
  


router.get("/logout", (req, res) => { // http://localhost:3006/auth/logout
  res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});


router.get("/loggedIn", (req, res) => { // http://localhost:3006/auth/loggedIn
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, SECRET_TOKEN );
// process.env.JWT_SECRET
    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

module.exports = router












// import { useEffect, useState } from 'react';
// import Todo from './componets/Todo';
// import Todos from './componets/Todos';
// function App() {
//     const [todos, settodos] = useState("");

//     useEffect(async () => {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//         const data = await response.json();
//         settodos(data);
//     }, [])

//     return (
//         <div className="App">
//             <h1>Hola mundo </h1>
//             <h2>Prueba de consulta de servicio <
// import React from 'react'

// const Todos = ({ todos }) => {
//     return (
//         <div>

//             {
//                 todos ?
//                     todos.map(item =>
//                         <div key={item.id}>
//                             <p>{item.userId}</p>
//                             <p>{item.title}</p>
//                         </div>
//                     )
//                     : <h5>Cargando</h5>
//             }
//         </div>
//     )
// }
// export default Todos;
// import React from 'react'

// const Todo = ({ todo }) => {
//     return (
//         <div>
//             <h4>{todo.userId}</h4>
//             <p>{todo.title}</p>
//         </div>
//     )
// }
// export default Todo;


