import React, {Component,  useState, useContext} from 'react';
//import { Redirect } from 'react-router';
//import {Link} from 'react-router-dom'
//import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../css/estilos-login.css'
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:3007/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then( data => 

      data.json()

 
    
    
    
    )


}
 
export default function Login({ setToken }) {
  const [nombre_usuario, setUserName] = useState();
  const [clave_usuario, setPassword] = useState();
   const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      nombre_usuario,
      clave_usuario
    });
    setToken(token);
  }
  return(
     <main className="form-signin clearfix center-block justify-center h-screen flex items-center  col-xxl-4"> 
     <form onSubmit={handleSubmit}>
     <img className="mb-4" src="https://dinaf.gob.hn/wp-content/uploads/2019/06/logodinaf-01.png" alt="" width="300" height="160"/>
     <h1 className="h3 mb-3 fw-normal">Ingreso al sistema</h1>
     <div className="form-floating">
        <input type="text" className="form-control" placeholder="nombre de usuario"  onChange={e => setUserName(e.target.value)}/>
        <label for="floatingInput">Nombre de usuario</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" placeholder="nombre de usuario" onChange={e => setPassword(e.target.value)} />
        <label for="floatingPassword">Contraseña</label>
        </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
   
    </main>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}