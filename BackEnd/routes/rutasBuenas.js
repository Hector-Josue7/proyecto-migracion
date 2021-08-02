const  router  = require('express').Router();

const getControllers = require('../controllers/get-controllers');  
const autenticacionController = require('../controllers/autenticacion')

// RUTAS DE LOGIN Y REGISTRO
router.post('/usuarios/registro', autenticacionController.registrousuarios); // http://localhost:3007/migracion/usuarios/registro
router.post("/usuarios/login", autenticacionController.loginusuarios);      // http://localhost:3007/migracion/usuarios/login
router.get("/usuarios/logout", autenticacionController.cerrarSesion);   // http://localhost:3007/migracion/usuarios/logout
router.get("/usuarios/loggedIn", autenticacionController.estaLogueado); // http://localhost:3007/migracion/usuarios/loggedIn

// RUTAS DE EXPEDIENTES
router.get("/expedientes", getControllers.todosExpedientes); // http://localhost:3007/migracion/expedientes
router.get("/expedientes/:id", getControllers.detalleExpediente); // http://localhost:3007/migracion/expedientes/:id


module.exports = router



