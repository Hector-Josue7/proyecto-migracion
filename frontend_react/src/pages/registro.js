import React, {useState} from "react";
import axios from "axios";

function Registro() {

    const [nombre_persona, setNombrePersona] = useState("");
    const [apellido_persona, setApellidoPersona] = useState("");
    const [nombre_usuario, setUsuarioPersona] = useState("");
    const [clave_usuario, setClaveUsuario] = useState("");

    async function registro(e){
    e.preventDefault();

    try {
      const registrarDatos = {
        nombre_persona,
        apellido_persona,
        nombre_usuario,
        clave_usuario,
     };

      await axios.post("http://localhost:3006/auth/registro", registrarDatos);
      alert('se ha registrado de forma exitosa')
    } catch (err){
     console.error(err);
    }
    }
    return (
        <div>
       <h2>Registre un nuevo usuario</h2>
          <form onSubmit ={registro}>
               <input type ="text" placeholder="Nombre" 
                      onChange ={ (e) => setNombrePersona(e.target.value) } 
                      value ={nombre_persona}
                />

<input type ="text" placeholder="Apellido " 
                      onChange ={ (e) => setApellidoPersona(e.target.value) } 
                      value ={apellido_persona}
                />

               <input type ="text" placeholder="usuario"
                   onChange = { (e) => setUsuarioPersona(e.target.value)}
                   value ={nombre_usuario}
               />
               <input type="password" placeholder ="Contraseña"
                   onChange = { (e) => setClaveUsuario(e.target.value)}
                   value = {clave_usuario}
               />
               <button type="submit">Registro</button>
            </form>
        </div>
    );
};

export default Registro