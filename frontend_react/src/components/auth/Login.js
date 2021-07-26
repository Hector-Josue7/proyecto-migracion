import axios from "axios";
import React, { useState,  useContext } from "react";  //
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Swal from 'sweetalert2';

function Login() {
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

       await axios.post("http://localhost:3007/auth/login", loginData);
   
      await getLoggedIn();
   
      Swal.fire({
        
        icon: 'success',
        title: 'Se ha logueado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
     
      history.push("/customer");
    } catch (err) {
    
      Swal.fire({
        title: "Los datos son incorrectos",
        icon: 'error'

      });
     // console.error(err);
    }
  }

  return (
    <div>
      <h1>Ingrese al sistema</h1>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
          value={nombre_usuario}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={clave_usuario}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;