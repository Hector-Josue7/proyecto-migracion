
import React, {useState, useEffect} from "react"; 
import axios from "axios";




//  import Navbar from "../components/Navbar";
import Navbar from '../components/Navbar';
//import { render } from "react-dom";
// import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { withRouter } from "react-router";
//import '../assets/css/journal.css'


 function Tablero() {

 


  // function CustomerList({ customers }) {
  //   function renderCustomers() {
  //     return customers.map((customer, i) => {
  //       return <li key={i}>{customer.name}</li>;
  //     });
  //   }
  
  //   return (
  //     <div>
  //       <ul>{renderCustomers()}</ul>
  //     </div>
  //   );
  // }
  
  // export default CustomerList;
  


  // import React, { useEffect, useState } from "react";
  // import CustomerForm from "./CustomerForm";
  // import CustomerList from "./CustomerList";
  
  // function Customers() {
  //   const [customers, setCustomers] = useState([]);
  
  //   async function getCustomers() {
  //     // const customersRes = await axios.get("http://localhost:5000/customer/");
  //     const customersRes = await axios.get(
  //       "https://mern-auth-template-tutorial.herokuapp.com/customer/"
  //     );
  //     setCustomers(customersRes.data);
  //   }
  
  //   useEffect(() => {
  //     getCustomers();
  //   }, []);
  
  //   return (
  //     <div>
  //       <CustomerForm getCustomers={getCustomers} />
  //       <CustomerList customers={customers} />
  //     </div>
  //   );
  // }




const [expediente, setBuscarExpediente] = useState([]);

async function getExpedientes(){

  const expedienteRespuesta = await axios.get(`http://localhost:3007/nice/expedientes/${expediente}`);
  setBuscarExpediente(expedienteRespuesta.data);
}

useEffect(() =>{
  getExpedientes();
});

async function renderExpedientes({expediente}){
return expediente.map( (expediente, i) =>{

});
}


  return (
    <div>
       <Navbar  /> 

       <div class="mb-3">
       
       <form   className="d-flex" style ={{marginTop: '-220px', 
      marginLeft: '280px'
       }}  >
     
     <label>Ingrese el codigo del expediente</label>
     <input className="form-control me-2" style ={{ width: '400px'}} id ="inputSearch" type="search" placeholder="Search" aria-label="Search"  />
     <button className="btn btn-success" type="submit">Search</button>
     
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


      
    </div>
  );

  


}

export default Tablero;


