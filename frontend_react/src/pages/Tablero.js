
import axios from "axios";
import React, {useState} from "react"; // , useEffect, useReducer 
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



// const reducer = (state, action) =>{
//   if(action.type === 'increment')
//   return state
// }

export default function Tablero() {
const [expediente, setExpediente] = useState('');

//const [counter, dispath] = useReducer(reducer, 0);
 const url = `http://localhost:3007/migracion/expedientes/${expediente}`;


const getExpedientes = async(e)=>{
e.preventDefault();
try{
  const expedienteRespuesta = await axios.get(url);  // se hace la peticion al servidor
 // console.log(expedienteRespuesta.data); // se imprime en consola esa peticion 
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
 //setExpediente(''); 
 // return expedienteRespuesta.data;
}catch(err){
  alert("Ese expediente no existe ");
  console.error(`Ha ocurrio una interrupcion:  ${err}`);
}

}

const manejadorCambio = (event) =>{
  //console.log("Valor al ingresar un valor ", event.target.value);
  setExpediente(event.target.value);
  
}



return (
  
  <div>
    <Navbar />
    {/* <Sidebar /> */}
     
    <div className="mb-3">
 
     <form  onSubmit ={ getExpedientes } className="d-flex" style ={{marginTop: '-160px', marginLeft: '280px'}}  >
       <input className="form-control me-2" style ={{ width: '400px'}}  type="text"  placeholder="Ingrese el registro del expediente"  aria-label="Search" autoComplete="off"
        // onChange = { (e) =>{ setExpediente(e.target.value)}}

           onChange = {manejadorCambio}
        // value={expediente.numero_expediente}
        //  value = {expediente}
        
        name = "buscar"
    />
   {/* <button className="btn btn-success" type = "submit">Buscar expediente</button> */}
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