import React from 'react'
import Navigation from '../components/Navbar';

function restitucionInternacional() {
    return (
        <div>
             return (
    <div>
     <Navigation />
      <h1>Registrar una nueva cuenta</h1>
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
  );
        </div>
    )
}

export default restitucionInternacional
