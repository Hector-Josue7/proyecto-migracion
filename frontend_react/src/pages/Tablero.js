
//import axios from "axios";
import React, {useState, useEffect} from "react"; 
import Navbar from '../components/Navbar';

const Tablero = () => {

const [expediente, setExpediente] = useState({
  buscar: ''
});
//const url = `http://localhost:3007/migracion/expedientes`;
//const url = `http://localhost:3007/migracion/expedientes/${expediente}`;
const url = 'http://localhost:3007/migracion/expedientes/Exp-DINAF-2019-4475';

 // CODIGO FUNCIONAL
useEffect( () =>{
fetch(url)
.then( respuesta => respuesta.json())
.then(json => setExpediente(json));
},[]);




return (
    <div>
      
      <Navbar />
      {/* <Aside /> */}
       <div className="mb-3">
       
       <form  className="d-flex" style ={{marginTop: '-220px', marginLeft: '280px'}} >
         <input className="form-control me-2" style ={{ width: '400px'}} 
          type="search" 
          placeholder="Ingrese el registro del expediente" 
          aria-label="Search" 
          autoComplete="off"
          onChange = { (e) =>{ setExpediente(e.target.value)}}
          value={expediente}
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
          {expediente.map(exp => {
          return(<tr>
            <td>{exp.genero}</td>
            <td>{exp.ininacionalidad}</td>
            <td>{exp.fechanacimiento}</td>
            <td>{exp.gidpersona}</td>
            <td>{exp.nombre}</td>
            <td>{exp.segnombre}</td>
            <td>{exp.apellido}</td>
            <td>{exp.segapellido}</td>
            <td>{exp.numero_expediente}</td>
          </tr>);
          } 
          
            
            
          
            )} 
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


