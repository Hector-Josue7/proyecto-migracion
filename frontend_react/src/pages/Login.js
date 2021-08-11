import axios from "axios";
import React, { useState,  useContext } from "react";  //
import { useHistory} from "react-router-dom";
import AuthContext from "../context/AuthContext";

import logoDinaf from '../assets/img/logodinaf-01.png';
import '../assets/css/Login.css'
import Swal from 'sweetalert2';

export default function Login() {
  const [nombre_usuario, setUsername] = useState("");
  const [clave_usuario, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);


  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
         nombre_usuario,
         clave_usuario,
      };

       await axios.post("http://localhost:3007/migracion/usuarios/login", loginData);
   
      await getLoggedIn();
   
      Swal.fire({
        
        icon: 'success',
        title: 'Se ha logueado correctamente',
        showConfirmButton: false,
        timer: 2000
      })
     
      history.push("/tablero");
    } catch (err) {
    
      Swal.fire({
        title: "Los datos son incorrectos",
        icon: 'error'

      });
     // console.error(err);
    }
  }

  return (



  
 
 <div className="container p-4">
<div className="row">
  <div className ="col-12 ">
  <main className="form-signin col-md-4  mx-auto d-flex ">
<form onSubmit={login}>
   
  <img className="mb-4" src= {logoDinaf} alt="" width="310" height="175"/>
  <h1 className="h3 mb-3 fw-normal">Ingrese al sistema</h1>

   <div className="form-floating">
      <input type="text" className="form-control" id="nombre_usuario" onChange={(e) => setUsername(e.target.value)}  value={nombre_usuario} />
      <label htmlFor="nombre_usuario">Nombre de usuario</label>
    </div>

     <div className="form-floating">
      <input type="password" className="form-control" id="clave_usuario" onChange={(e) => setPassword(e.target.value)} value={clave_usuario} />
      <label htmlFor="clave_usuario">Contraseña</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="Recuerdame"/> Recuerdame
      </label>
    </div>

    <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
 </form>
</main>
  </div>

</div>


</div> 

 
   
  );

     
    }



