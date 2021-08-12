
import axios from "axios";
import React, {useState , useEffect, useReducer } from "react"; 
import Navbar from '../components/Navbar';



//************************************************************** */
// function Hijo(props) {
//   return (




//     return (
//       obtencionData2.map( (exp) => {
//         <tr key ={exp.numero_expediente}>
//             <td>{exp.genero}</td>
//             <td>{exp.ininacionalidad}</td>
//             <td>{exp.fechanacimiento}</td>
//             <td>{exp.gidpersona}</td>
//             <td>{exp.nombre}</td>
//             <td>{exp.segnombre}</td>
//             <td>{exp.apellido}</td>
//             <td>{exp.segapellido}</td>
//         </tr>
      
//       }

//   );

// }



const reducer = (state, action) =>{
  if(action.type === 'increment')
  return state
}

export default function Tablero() {
//const [expediente, setExpediente] = useState('');

const [counter, dispath] = useReducer(reducer, 0);
// const url = `http://localhost:3007/migracion/expedientes/${expediente}`;


// const getExpedientes = async(e)=>{
// e.preventDefault();
// try{
//   const expedienteRespuesta = await axios.get(url);  // se hace la peticion al servidor
//   console.log(expedienteRespuesta.data); // se imprime en consola esa peticion 
  
//   setExpediente(expedienteRespuesta.data);
//   setExpediente(''); 
  

//   // <Hijo obtencionData ={expedienteRespuesta.data}/>

// }catch(err){
//   console.error(`Ha ocurrio una interrupcion:  ${err}`);
// }
// }



// const manejadorCambio = (event) =>{
//   //console.log("Valor al ingresar un valor ", event.target.value);
//   setExpediente(event.target.value);
// }

return (
  
  <div>
    <Navbar />
    {/* <Sidebar /> */}
     
    <div className="mb-3">
    {/* onSubmit ={ getExpedientes } */}
     <form  className="d-flex" style ={{marginTop: '-160px', marginLeft: '280px'}}  >
       <input className="form-control me-2" style ={{ width: '400px'}}  type="text"  placeholder="Ingrese el registro del expediente"  aria-label="Search" autoComplete="off"
        // onChange = { (e) =>{ setExpediente(e.target.value)}}

          //  onChange = {manejadorCambio}
        // value={expediente.numero_expediente}
        //  value = {expediente}
        
        name = "buscar"
    />
   {/* <button className="btn btn-success" type = "submit">Buscar expediente</button> */}
   <button className="btn btn-success" onClick = { () => dispath({ type: 'increment'}) }>Buscar expediente</button>
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
        </tr>
      </thead>
      <tbody> 
      {/* { expediente.length > 0 ? (
            renderExpediente()  
          ) : (
            <tr colSpan ="3">Sin datos </tr>
          )} */}
      </tbody>
      </table> 
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