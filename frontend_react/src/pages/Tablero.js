
import React, {useState} from "react"; // useEffect
import axios from "axios";

//  import Navbar from "../components/Navbar";
// import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { withRouter } from "react-router";
//import '../assets/css/journal.css'


 function Tablero() {

 

  const [expediente, setBuscarExpediente] = useState('');
  //  async function devuelveExpediente() {

  //   const resp = await axios.get(`http://localhost:3006/nice/expedientes/${expediente}`);
  //   setBuscarExpediente(resp.data);
  //  }

  //  useEffect( () =>{
   
  //   devuelveExpediente();
   
  // }, [] );
// React Hook useEffect has a missing dependency 


async function getExpediente(e){
  e.preventDefault();
  try{
    const response = await axios.get(`http://localhost:3007/nice/expedientes/${expediente}`);

 document.write(response.data[0])
   
  }catch(err){
    console.error(err);
  }
}




  return (
    <div>
      {/* <Navbar  /> */}
    
      <form onSubmit={getExpediente} className="d-flex" style ={{marginTop: '-220px'}}  >
      <p>Ingrese el registro del expediente</p><br/>
        <input className="form-control me-2" style ={{ width: '400px'}} type="search" placeholder="Search" aria-label="Search"  
         onChange={(e) => setBuscarExpediente(e.target.value)}   value={expediente}/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>


      
    </div>
  );


}

export default Tablero;


