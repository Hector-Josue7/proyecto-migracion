
import axios from "axios";
import React, {useState, useEffect} from "react"; 

import Navbar from '../components/Navbar';

import Sidebar from '../components/Sidebar';

function muestraExpedientes({exp}){
  let {genero, ininacionalidad, fechanacimiento, gidpersona, nombre, segnombre, apellido, segapellido, numero_expediente} = exp;
  return(
  <tr exp={numero_expediente}>
    <td>{genero}</td>
    <td>{ininacionalidad}</td>
    <td>{fechanacimiento}</td>
    <td>{gidpersona}</td>
    <td>{nombre}</td>
    <td>{segnombre}</td>
    <td>{apellido}</td>
    <td>{segapellido}</td>
    <td>{numero_expediente}</td>
  </tr>);
}
const Tablero = () => {


const [expediente, setExpediente] = useState([]);


//const url = `http://localhost:3007/migracion/expedientes`;
 
//const url = 'http://localhost:3007/migracion/expedientes/Exp-DINAF-2019-4475';

 // CODIGO FUNCIONAL
// useEffect( () =>{
// fetch(url)
// .then( respuesta => respuesta.json())
// .then(json => console.log(json)
// //  setExpediente(json)} );

// },[]);

// React Hook UseEffect has a missing dependency: '

const handleChange = (e) =>{
  setExpediente({
   ...expediente,
   [e.target.name]: e.target.value
  });
}

// const reset = () =>{
//   setExpediente(initialState)
// }

async function getExpedientes(e){
  e.preventDefault();

  // if(!expediente.numero_expediente){
  //   alert("Esos datos son erroneos");
  //   return;
  // }else {

      try{
    const url = `http://localhost:3007/migracion/expedientes/${expediente}`;
    const expedienteRespuesta = await axios.get(url);
    // setExpediente(expedienteRespuesta.data);
   //console.log(expedienteRespuesta.data);

  } catch(err){
console.log(err);
  }
  // }


  
// handleSearch(form);
// setForm(initialForm);
}

// useEffect( () =>{
// getExpedientes();
// });

return (
    <div>
      
      <Navbar />
      <Sidebar />
       <div className="mb-3">
       
       <form  className="d-flex" style ={{marginTop: '-220px', marginLeft: '280px'}} onSubmit ={getExpedientes} >
         <input className="form-control me-2" style ={{ width: '400px'}} 
          type="text" 
          placeholder="Ingrese el registro del expediente" 
          aria-label="Search" 
          autoComplete="off"
      
           onChange = { (e) =>{ setExpediente(e.target.value)}}
        
        //  onChange = {handleChange}
          // value={expediente.numero_expediente}
          value = {expediente}
          name = "buscar"
      />
     <button className="btn btn-success" type = "submit">Search</button>
 
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
            <th>numero expediente</th>
          </tr>
        </thead>
        <tbody>  


          
            {
            expediente.length > 0 ? (
              expediente.map( (exp) => (
                <muestraExpedientes 
                key = {exp.numero_expediente}
                exp ={exp} />
              ))
            ) : (
              <tr colSpan ="3">Sin datos </tr>
            )
          
          }
          
        </tbody>
        </table> 
 </div>
  );

             }
            
export default Tablero;




  // const saludo = <h1>Hola mundo </h1>
  // document.body.append(saludo)
  /*
   const PrimeraApp = () => {
     return  <h1>Hola mundo </h1>;
   }
   export default primeraApp;
  */


