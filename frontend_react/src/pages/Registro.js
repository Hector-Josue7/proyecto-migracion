import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Navigation from '../components/Navbar'
<<<<<<< Updated upstream
import Sidebar3 from '../components/Sidebar3';
=======
<<<<<<< HEAD
// import Sidebar from '../components/Sidebar';
=======
import Sidebar3 from '../components/Sidebar3';
>>>>>>> 80397375fb0c32fbe70e6e0b81dd7692d85bf00d
>>>>>>> Stashed changes

function Register() {
    const [nombre_persona, setNombre] = useState("");
    const [apellido_persona, setApellido] = useState("");
    const [nombre_usuario, setUsername] = useState("");
  const [clave_usuario, setPassword] = useState("");


  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();




  
  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
          nombre_persona,
          apellido_persona,
        nombre_usuario,
        clave_usuario
    
      };

       await axios.post("http://localhost:3007/migracion/usuarios/registro", registerData);
    
      await getLoggedIn();
      history.push("/");
      alert("se ha registrado bien");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
     <Navigation />
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
     {/* <Sidebar /> */}
     <div style ={{ marginBottom: '220px'}}>
     <h1>Registrar una nueva cuenta</h1>
=======
>>>>>>> Stashed changes
     <Sidebar3 />
      <h1>Registrar una nueva cuenta</h1>
>>>>>>> 80397375fb0c32fbe70e6e0b81dd7692d85bf00d
      <form onSubmit={register}>
      <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre_persona}
        />

<input
          type="text"
          placeholder="Apellido"
          onChange={(e) => setApellido(e.target.value)}
          value={apellido_persona}
        />
      
        <input
          type="text"
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
          value={nombre_usuario}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={clave_usuario}
        />
      
        <button type="submit">Registrar</button>
      </form>
     </div>
      
    </div>
  );
}

export default Register;