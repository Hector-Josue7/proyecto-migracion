
import axios from "axios";
import React, {useState , useEffect} from "react"; 
import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
//************************************************************** */
export default function Tablero() {
const [expediente, setExpediente] = useState('');
//const url = 'http://localhost:3007/migracion/expedientes/Exp-DINAF-2019-4475';
 const url = `http://localhost:3007/migracion/expedientes/${expediente}`;
async function getExpedientes(e){
 e.preventDefault();

     try{
       console.log('lectura de expediente '+expediente);
const expedienteRespuesta = await axios.get(url);
    // setCampo('');
//console.log(expedienteRespuesta.data);
  //   setExpediente(expedienteRespuesta.data);  // se guarda guarda la busqueda en el estado del componente padre 
     
     //return expedienteRespuesta.data;
    //return expediente;
} catch(err){
console.log(err);
//throw err;
  }
  }

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
  // useEffect( () =>{
  // getExpedientes();
  //     }, [])
=======
>>>>>>> Stashed changes
import Sidebar3 from '../components/Sidebar3';

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
>>>>>>> 80397375fb0c32fbe70e6e0b81dd7692d85bf00d

//***************************************************************************************** */
function renderExpediente(){
 const arreExpediente = getExpedientes();
return arreExpediente.map(  (exp) => (



  <tr key ={exp.numero_expediente}>
   <td>{exp.genero}</td>
   <td>{exp.ininacionalidad}</td>
   <td>{exp.fechanacimiento}</td>
   <td>{exp.gidpersona}</td>
   <td>{exp.nombre}</td>
   <td>{exp.segnombre}</td>
   <td>{exp.apellido}</td>
   <td>{exp.segapellido}</td>
</tr>
)

) 

}

  



return (
  
  <div>
    <Navbar />
    {/* <Sidebar /> */}
     
    <div className="mb-3">
     
     <form  className="d-flex" style ={{marginTop: '-160px', marginLeft: '280px'}} onSubmit ={getExpedientes } >
       <input className="form-control me-2" style ={{ width: '400px'}}  type="text"  placeholder="Ingrese el registro del expediente"  aria-label="Search" autoComplete="off"
        // onChange = { (e) =>{ setExpediente(e.target.value)}}

         //  onChange = {handleChange}
        // value={expediente.numero_expediente}
         value = {expediente}
        name = "buscar"
    />
   <button className="btn btn-success" type = "submit">Buscar expediente</button>
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
      { expediente.length > 0 ? (
            renderExpediente()  
          ) : (
            <tr colSpan ="3">Sin datos </tr>
          )}
      </tbody>
      </table> 
</div>
)

}


 












<<<<<<< HEAD
 

=======
return (
    <div>
      
      <Navbar />
     
       <div className="mb-3">
       
       <form  className="d-flex" style ={{marginTop: '-200px', marginLeft: '280px'}} onSubmit ={getExpedientes} >
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
 
   </form> 

   <Sidebar3 />


   <br/><br/>
   </div>

     
     
     {/* <table className="table table-bordered">
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
        </table>  */}
 </div>
  );
>>>>>>> 80397375fb0c32fbe70e6e0b81dd7692d85bf00d



            



 // if(!expediente.numero_expediente){
  //   alert("Esos datos son erroneos");
  //   return;
  // }else {
  // const saludo = <h1>Hola mundo </h1>
  // document.body.append(saludo)
  /*
   const PrimeraApp = () => {
     return  <h1>Hola mundo </h1>;
   }
   export default primeraApp;
  */


