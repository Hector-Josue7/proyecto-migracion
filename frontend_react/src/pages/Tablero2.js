
import axios from "axios";
import React, {useState} from "react"; //,useEffect ,useReducer 
import Navbar from '../components/Navbar';
import {Form , Row, Col} from 'react-bootstrap'; //  
export default function Tablero() {
const [expediente, setExpediente] = useState({
    data: [],
    loading: true
});
const url = `http://localhost:3007/migracion/expedientes/${expediente}`;

const getExpedientes = async(e)=>{
e.preventDefault();
try{
    const expedienteRespuesta = await axios.get(url);  // se hace la peticion al servidor
 // const expedienteRespuesta = await fetch(url);
//setExpediente(expedienteRespuesta.data);
    const { data } = await expedienteRespuesta.json();
    const datosExpediente = data.map( exp => {
        return {
           numero_expediente: exp.numero_expediente,
           genero: exp.genero,
           ininacionalidad: exp.ininacionalidad,
           fechanacimiento: exp.fechanacimiento,
           gidpersona: exp.gidpersona,
           nombre: exp.nombre,
           segnombre: exp.segnombre,
           apellido: exp.apellido,
           segapellido: exp.segapellido,
           descripcion: exp.descripcion
        }
    })
    return datosExpediente;
 

}catch(err){
  alert("Ese expediente no existe ");
  console.error(`Ha ocurrio una interrupcion:  ${err}`);
} }



// useEffect( () =>{
//      getExpedientes()
//      .then( datosExpediente =>{

//         setExpediente({
//             data: datosExpediente,
//             loading: false
//         });
//      })
// }, [expediente])

const manejadorCambio = (event) =>{
  setExpediente(event.target.value);
}

return (
   <div className="container">
    <Navbar />
      <div className="mb-3 ">
          <h4 style ={{ border: '1px solid grey', padding: '0px 0px 0px 100px', margin: '0px 0px 50px 0px'}}>Estoy en el tablero 2 probando otra forma de obtencion de datos de la base de datos</h4>
      
      <Form onSubmit={getExpedientes} className="d-flex" style ={{
     
          }}  >
 {/* <div style ={{border:'1px solid grey'}}> */}
<Row>
    <Col>
    <input className="form-control me-2" style ={{ width: '400px'}}  type="text"  placeholder="Ingrese el registro del expediente"  aria-label="Search" autoComplete="off"
             onChange = {manejadorCambio} />
    </Col>
    <Col>
    <button className="btn btn-success" type ="Submit" >Buscar expediente</button> 
    </Col>

  
   
</Row>

 
 {/* </div> */}
      
   {/* onClick = { () => dispath({ type: 'increment'}) } */}
   {/* el dispath es una accion que se envia al parametro action del arreglo de useReducer */}
 </Form> <br/><br/>
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

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;


}


import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])




    return state; // { data:[], loading: true };


}

*/



/*
export default function DashboardPage(){

    return(
        <div>
        <h1>DasboardPage</h1>
        </div>
    )
}

*/