
import axios from "axios";
import React, {useState} from "react"; // , useEffect, useReducer 
//import {useParams} from 'react-router-dom';

import Navbar from '../components/Navbar';

export default function Tablero() {

  //const {idExp} = useParams();

const [expediente, setExpediente] = useState('');
const url = `http://localhost:3007/migracion/expedientes/${expediente}`;

const getExpedientes = async(e)=>{
e.preventDefault();
try{
  const expedienteRespuesta = await axios.get(url);  // se hace la peticion al servidor
        setExpediente(expedienteRespuesta.data);

  document.getElementById('cuerpoTabla').innerHTML = '';
  document.getElementById("cuerpoTabla").innerHTML +=`
  <tr key=${expedienteRespuesta.data[0].numero_expediente}>
      <td>${expedienteRespuesta.data[0].genero}</td>
      <td>${expedienteRespuesta.data[0].ininacionalidad}</td>
      <td>${expedienteRespuesta.data[0].fechanacimiento} </td>
      <td>${expedienteRespuesta.data[0].gidpersona} </td>
      <td>${expedienteRespuesta.data[0].nombre} </td>
      <td>${expedienteRespuesta.data[0].segnombre}</td>
      <td>${expedienteRespuesta.data[0].apellido}</td>
      <td>${expedienteRespuesta.data[0].segapellido}</td>
      <td>${expedienteRespuesta.data[0].descripcion}</td>
  </tr>
  `;


}catch(err){
  alert("Ese expediente no existe ");
  console.error(`Ha ocurrio una interrupcion:  ${err}`);
} }

const manejadorCambio = (event) =>{
  setExpediente(event.target.value);
}

return (
   <div>
    <Navbar />
      <div className="mb-3">
      <form  onSubmit ={ getExpedientes } className="d-flex" style ={{marginTop: '-160px', marginLeft: '280px'}}  >
       <input className="form-control me-2" style ={{ width: '400px'}}  type="text"  placeholder="Ingrese el registro del expediente"  aria-label="Search" autoComplete="off"
            onChange = {manejadorCambio} />

   <button className="btn btn-success" type ="Submit" >Buscar expediente</button>
   {/* onClick = { () => dispath({ type: 'increment'}) } */}
   {/* el dispath es una accion que se envia al parametro action del arreglo de useReducer */}
 </form> <br/><br/>
 </div>
<table className="table table-bordered">
      <thead>
        <tr>
          <th>Genero</th>
          <th>Ininacionalidad</th>
          <th>fechanacimiento</th>   
          <th>gidpersona</th>     
          <th>nombre</th>      
          <th>segnombre</th>   
          <th>apellido</th>      
          <th>segapellido</th> 
          <th>descripcion</th>
        </tr>
      </thead>
      <tbody id = "cuerpoTabla"> 
      {/* { expediente.length > 0 ? (
            getExpedientes() 
          ) : (
            <tr colSpan ="3">Sin datos </tr>
          )} */}
         
      </tbody>
      </table> 


{/* <h2>Numero Expediente: {idExp}</h2> */}
    
</div>
);

}




/*

const initialTodos = [{
 
  id: 1,
  todo: 'Comprar pan',
  done: false
}];

const todoReducer = ( state = initialTodos, action) => {
  return state; 
}



let todos = todoReducer();
console.log(todos);


*/