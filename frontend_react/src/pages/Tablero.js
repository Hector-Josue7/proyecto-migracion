
import axios from "axios";
import React, {useState, useEffect} from "react"; 

import Navbar from '../components/Navbar';
// import Aside from "../components/Sidebar2";

// import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { withRouter } from "react-router";
//import '../assets/css/journal.css';


  const Tablero = () => {

// const [expediente, setExpediente] = useState({
//   fechanacimiento: '',
//   gidpersona: '',
//   nombre: 'agapito',
//   segnombre: '',
//   apellido: '',
//   segapellido: '',
//   gidexpediente: ''
// });



//const [expediente, setExpediente] = useState({});
const [expediente, setExpediente] = useState([]);



const url = `http://localhost:3007/migracion/expedientes/${expediente}`;

const busquedaExpediente = async (e) =>{
e.preventDefault();
  try{
    const res = await axios.get(url);
   console.log(res.data);
   //  const res = await fetch(url);
  

    
    setExpediente(res.data);
    
  } catch(err){
console.error(err);
  }
 


}

useEffect(() => {
  busquedaExpediente();
}, []);








function renderExpedientes(){
  return expediente.map( (exp, i) =>{
     return <li>exp.referencias</li>
  });
}

return (
    <div>
      
      <Navbar />
      {/* <Aside /> */}
       <div className="mb-3">
       
       <form onSubmit={busquedaExpediente} className="d-flex" style ={{marginTop: '-220px', 
      marginLeft: '280px'
       }}  >
     
   
     <input className="form-control me-2" style ={{ width: '400px'}} type="search" placeholder="Ingrese el registro del expediente" aria-label="Search" autoComplete="off"
        onChange = { (e) =>{ setExpediente(e.target.value)}} 
        value={expediente}
      />
     <button className="btn btn-success" type = "submit" >Search</button>
 
   </form> <br/><br/>
   </div>
  
       {/* onSubmit={this.getExpediente} */}
      


      {/*
       onChange={(e) => setBuscarExpediente(e.target.value)}   value={expediente}

     */}

      {/* <table className="table table-bordered">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>                    
          </tr>
        </thead>
        <tbody>  
          {this.state.registros.map(exp => {
            return (
              <tr>
                <td>{exp.genero}</td>
                <td>{exp.ininacionalidad}</td>
                <td>{exp.fechanacimiento}</td>
                <td>{exp.gidpersona}</td>
              </tr>
            );
          })} 
        </tbody>
        </table>  */}


      
        <ul>{renderExpedientes()}</ul>

        

<div>
 {expediente.nombre}
</div>


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


