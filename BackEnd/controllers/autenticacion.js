const { Pool } = require('pg');
const bcrypt = require('bcrypt');  // encriptador de contraseñas
const jwt = require('jsonwebtoken');
// conexion a base de datos
const { credenciales, SECRET_TOKEN } = require('../config')
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


const registrousuarios = async (req, res) =>{
    try {
        let {nombre_persona, apellido_persona, nombre_usuario, clave_usuario} = req.body;
        const saltos = await bcrypt.genSalt(10);
        const clave_persona_encriptada = await bcrypt.hash(clave_usuario, saltos);
        let consulta = 'INSERT INTO tbl_usuarios_migracion(nombre_persona, apellido_persona, nombre_usuario, clave_usuario) VALUES ($1, $2, $3, $4)';
        let datos = [nombre_persona, apellido_persona, nombre_usuario, clave_persona_encriptada];
        let user = await pool.query(consulta, datos);
        console.log(user);
        res.json({ message: 'Usuario agregado exitosamente' });
        res.end()
    } catch(error){
       console.error(error);
      return res.status(500).send({message: `Error al crear el usuario: ${error}`})
     }
}

const loginusuarios = async (req, res) => {
     // validaciones
 //const { error } = schemaLogin.validate(req.body);
 //if (error) return res.status(400).json({ error: error.details[0].message }) 
   const {nombre_usuario, clave_usuario} = req.body
   const consulta = 'SELECT * FROM tbl_usuarios_migracion WHERE nombre_usuario = $1' 
   try {   
     if(!nombre_usuario || !clave_usuario) 
       return res.stautus(400).json({ errorMessage: "Por favor llene los campos"});

         const user = await pool.query(consulta, [nombre_usuario])
              if (user.rowCount > 0) {
                     var passwordIsValid = bcrypt.compareSync(clave_usuario, user.rows[0].clave_usuario);
                if (passwordIsValid) {
                      console.log("se ha logueado bien ")
                         const  token = jwt.sign({ codigo_usuario: user.rows[0].codigo_usuario, 
                                                   nombre_usuario: user.rows[0].nombre_usuario }, 
                                                   SECRET_TOKEN, 
                                      {
                         expiresIn: 86400 // expires in 24 hours
                         });

                        //  res.header('auth-token', token).json({
                        //    error: null,
                        //    data: {token}
                        //  })
                        
                        res.cookie("token", token, {
                                      httpOnly: true,
                                      secure: true,
                                      sameSite: "none",
                                    }).send();
                       
                     
                        // res.status(200).send({ auth: true, token: token,  message: "Se ha logueado exitosamente" });
                        
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
}

const cerrarSesion = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
      }).send();
}

const estaLogueado = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);
    
        jwt.verify(token,  SECRET_TOKEN);
    
        res.send(true);
      } catch (err) {
        res.json(false);
      }
}

module.exports = {
    registrousuarios,
    loginusuarios,
    cerrarSesion,
    estaLogueado
}