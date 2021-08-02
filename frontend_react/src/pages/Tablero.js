
import axios from "axios";
import React, {useState, useEffect} from "react"; 






import Navbar from '../components/Navbar';
//import { render } from "react-dom";
// import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { withRouter } from "react-router";
//import '../assets/css/journal.css';


  const Tablero = () => {

 


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



  // const saludo = <h1>Hola mundo </h1>
  // document.body.append(saludo)
  /*
   const PrimeraApp = () => {
     return  <h1>Hola mundo </h1>;
   }
   export default primeraApp;
  */


const [expediente, setBuscarExpediente] = useState("");

// useEffect( async() => {
//   const url = `http://localhost:3007/migracion/expedientes/${expediente}`;
  
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }, [])



// async function getExpedientes(){

//   const url = `http://localhost:3007/migracion/expedientes/${expediente}`;
//   //const expedienteRespuesta = await axios.get(url);
//   const resp = await fetch(url);
//   const { data} = await resp.json();
//   console.log(data);
 
//   // setBuscarExpediente(expedienteRespuesta.data);
// }

// useEffect(() =>{
//   getExpedientes();
// });




async function obtenerExpediente(e){
  e.preventDefault();

  try{
 

   const url = `http://localhost:3007/migracion/expedientes/${expediente}`;
   const resp = await axios.get(url);

  
console.log(resp.data);
   

  }catch(err){
console.error(err);
  }
}




// async function renderExpediente(expediente){
//   return expediente.map( (exp) =>{
//     return(
//       <>
       
//      <li>exp.ininacionalidad </li>
    
//       </>
   
//       ); 
//   });
// }


  return (
    <div>
      
      <Navbar />

       <div className="mb-3">
       
       <form onSubmit ={obtenerExpediente}  className="d-flex" style ={{marginTop: '-220px', 
      marginLeft: '280px'
       }}  >
     
     <label>Ingrese el codigo del expediente</label>
     <input className="form-control me-2" style ={{ width: '400px'}} id ="inputSearch" type="search" placeholder="Ingrese el registro del expediente" aria-label="Search" 
      onChange ={ (e) => setBuscarExpediente(e.target.value)} value={expediente}
      />
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


      
        {/* <ul>{renderExpediente()}</ul> */}

    </div>
  );

  


}


export default Tablero;

