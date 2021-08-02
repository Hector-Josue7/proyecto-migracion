
import axios from "axios";
import React, {useState, useEffect} from "react"; 

import Navbar from '../components/Navbar';

// import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { withRouter } from "react-router";
//import '../assets/css/journal.css';


  const Tablero = () => {
const [expediente, setBuscarExpediente] = useState([]);
const url = `http://localhost:3007/migracion/expedientes/${expediente}`;





const busquedaExpediente = async (e) =>{
  e.preventDefault();
  const res = await axios.get(url);
console.log(res.data)
//setBuscarExpediente(res.data);
}


// useEffect(() =>{

// });



  return (
    <div>
      
      <Navbar />

       <div className="mb-3">
       
       <form className="d-flex" style ={{marginTop: '-220px', 
      marginLeft: '280px'
       }}  >
     
     <label>Ingrese el codigo del expediente</label>
     <input className="form-control me-2" style ={{ width: '400px'}} type="search" placeholder="Ingrese el registro del expediente" aria-label="Search" autoComplete="off"
        onChange = { (e) =>{ setBuscarExpediente(e.target.value)}} 
      value={expediente}
      />
     <button className="btn btn-success" onClick ={busquedaExpediente}  >Search</button>
     
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


      
        {/* <ul>{muestraExpediente()}</ul> */}

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


