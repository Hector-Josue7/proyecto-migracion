const jwt = require("jsonwebtoken");
// middleware para validar toten (rutas protegidas)
const { SECRET_TOKEN } = require('../config');
const autenticador = (req, res, next) =>{
    const token = req.header('auth-token');
    // const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: "Acceso denegador" });
    try {
     const verificar = jwt.verify(token, SECRET_TOKEN);
    req.user = verificar;
    // req.user = verificar.user;
    next(); // continuamos
  } catch (err) {
    console.error(err);
    res.status(400).json({ errorMessage: "Este token no es valido" });
  }
}

module.exports = autenticador;


