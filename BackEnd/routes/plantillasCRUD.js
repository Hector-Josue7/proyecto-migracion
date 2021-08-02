const  router  = require('express').Router();
//const bcrypt = require('bcrypt');  // encriptador de contraseñas
//const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

// conexion a base de datos
const { credenciales } = require('../config')
const pool = new Pool(credenciales)
pool.connect()
 //.then( () => console.log('La Base de datos ha sido conectada'))
 //.catch( e=> console.log('error db: ', e))

 // INICIO DE RUTAS BACKEND
// devuelve todos los usuarios 
router.get("/usuarios", async (req,res) =>{ // http://localhost:3007/templates/usuarios
   let consulta = 'SELECT * FROM tbl_personas'
   let respuesta = await pool.query(consulta)
   res.json(respuesta.rows)
   res.end()
});

// devuelve un solo usuario 
router.get('/usuarios/:id', async (req, res) =>{ // http://localhost:3006/templates/usuarios/:id
      let datos = [parseInt(req.params.id)]
      let consulta = `SELECT * FROM tbl_personas WHERE codigo_persona =$1`
      let respuesta = await pool.query(consulta, datos);
      res.json(respuesta.rows);
      res.end()
});

// insertar un usuario
router.post('/guardar2' , async (req, res) =>{  // http://localhost:3006/templates/guardar2
    try {
        let {nombre_persona, usuario_persona, clave_persona} = req.body;
        let consulta = 'INSERT INTO tbl_personas(nombre_persona, usuario_persona, clave_persona) VALUES ($1, $2, $3)'
        let datos = [nombre_persona, usuario_persona, clave_persona];
        await pool.query(consulta, datos)
        res.json({ message: 'Usuario agregado exitosamente' });
        res.end()
    } catch(error){
        // return res.status(500).send({message: `Error en la ruta /guardar2/ >> ${error}`})
        return res.status(500).send({message: `${error}`})
    }
});


// actualizar datos de un usuario 
router.put('/actualizar/:codigo_persona', async(req, res) =>{ // http://localhost:3006/templates/actualizar/:id
    try{
        let codigo_persona = parseInt(req.params.codigo_persona);
        let { nombre_persona, usuario_persona, clave_persona} = req.body;
        let consulta = 'UPDATE tbl_personas SET nombre_persona = $1, usuario_persona =$2, clave_persona = $3 WHERE codigo_persona = $4'
        let datos = [nombre_persona, usuario_persona, clave_persona, codigo_persona]
        await pool.query(consulta, datos)
        res.json('Usuario actualizado exitosamente')
        res.end()
    }catch(error){
        return res.status(500).send({message: `Error en la ruta /actualizar/:codigo_persona >> ${error}`})
     }
});

// eliminar un usuario 
router.delete('/eliminar/:codigo_persona', async (req, res)=>{ // http://localhost:3006/test/eliminar/:id
    try{
        let codigo_persona = parseInt(req.params.codigo_persona);
        let consulta = 'DELETE FROM tbl_personas WHERE codigo_persona =$1'
        let datos = [codigo_persona]
        const usuarioAEliminar = await pool.query(consulta, datos)
        res.json(`Usuario eliminado exitosamente >> ${usuarioAEliminar.fields}`)
        res.end()
    }catch(error){
        return res.status(500).send({message: `Error en la ruta /eliminar/:codigo_persona >> ${error}`})
     }
});

module.exports = router