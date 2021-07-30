const  router  = require('express').Router();

// importaciones
const getControllers = require('../controllers/get-controllers')

router.get("/expedientes/:id", getControllers.listaExpedientes); // http://localhost:3007/nice/expedientes/:id


module.exports = router