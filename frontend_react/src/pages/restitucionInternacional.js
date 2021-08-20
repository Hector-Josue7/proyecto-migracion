import React, {useState} from 'react' //, { useState, useMemo }
import 'date-fns';
import Navigation from '../components/Navbar';
 import { Form, Row, Col, Button} from 'react-bootstrap'; // Button,
 import '../assets/css/RestitucionInternacional.css';
 //import styled from 'styled-components'




import Boton from '@material-ui/core/Button';
//const { Formik } = formik;






export default function RestitucionInternacional() {

 
  




return (
    <>
  <Navigation  />
    <div className="container-fluid" style ={{margin:'400px 0px 0px 2px', width:'1300px',  border:'1px solid pink'}}>
           
            <Row style={{border:'1px solid green'}}>

     
     
     
     
                <Col className=" col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"  style ={{backgroundColor:' #a2e2ad ', border:'1 px solid red'}}>
     <div style={{margin: '0px 0px 0px 0px', border:'1px solid black'}} >
            
            
              <h3 style={{textAlign:'center'}}>Restitución Internacional</h3>





   <ul className ="list-group" style ={{border:'1px solid red', margin:'40px 0px 0px 0px'}}>

     <Boton variant="contained"  color="primary"  className ="list-group-item list-group-item-action">Datos de NNA</Boton>
     <Boton style={{margin: '20px 0px 0px 0px', border: '1px solid orange'}} variant="contained"  color="primary" className ="list-group-item list-group-item-action">Datos de solicitante</Boton>
   </ul>
              </div>  
     
     






     </Col>
















   
   <Col className = "col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
{/* <DatosNNA /> */}
   <DatosSolicitante />
   </Col>
              
   </Row>
              
  </div>
  </>
      
    )
}


function DatosNNA(){
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{ margin: "50px 40px 0px 0px" }}
      >
        <h3 style={{ textAlign: "center" }}>Datos del NNA</h3>
        <hr></hr>
        <Row style={{ boxSizing: "border-box" }}>
          <Form.Group as={Col} md="4" className="col-12">
            <Form.Label>Nombres</Form.Label>
            <Form.Control type="text" placeholder="Nombres" required />
            <div className="valid-feedback">Ok</div>
            <div className="invalid-feedback">Nombre es requerido</div>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control placeholder="Apellidos" />
            <div className="valid-feedback">Ok</div>
            <div className="invalid-feedback">El apellido es requerido</div>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="duedate">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" name="duedate" />
          </Form.Group>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control placeholder="Nacionalidad" />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="edad">
            <Form.Label>Edad</Form.Label>
            <input
              className="form-control"
              type="number"
              name="edad"
              min="10"
              max="100"
              placeholder="Edad"
            />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="lugarNacimiento">
            <Form.Label>Lugar de nacimiento</Form.Label>
            <Form.Control placeholder="Lugar de nacimiento" />
          </Form.Group>
        </Row>

        <Row style={{ marginTop: "15px" }}>
          {/* <Col className="col-4">
                  <Form.Group controlId="duedate">
                        <label htmlFor="fechaNacimiento">Fecha en que cumpliria 16 años</label>
                            <Form.Control type="date"  name="duedate" placeholder="Due date" />
                        </Form.Group>
                  </Col> */}

          <Form.Group as={Col} md="6" controlId="numeroPasaporteOIdentidad">
            <Form.Label>Número de pasaporte o identidad</Form.Label>
            <Form.Control placeholder="Numero de pasaporte o identidad" />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="cicatricesMarcasNacimiento">
            <Form.Label>Cicatrices o marcas de nacimiento</Form.Label>
            <Form.Control placeholder="Cicatrices o marcas de nacimiento" />
          </Form.Group>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Form.Group as={Col} md="6">
            <Form.Label>
              Dirección que residia antes de la sustracción
            </Form.Label>
            <Form.Control placeholder="Dirección en que residia antes de la sustracción" />
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Actividades y entretenimientos del NNA</Form.Label>
            <Form.Control placeholder="Actividades y entretenimientos del NNA" />
          </Form.Group>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Form.Group as={Col} md="3">
            <Form.Label>Peso</Form.Label>
            <Form.Control placeholder="Peso" />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Altura</Form.Label>
            <Form.Control placeholder="Altura" />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Color de ojos</Form.Label>
            <Form.Control placeholder="Color de ojos" />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Color de cabello</Form.Label>
            <Form.Control placeholder="Color de cabello" />
          </Form.Group>
        </Row>

        <Row
          style={{ marginTop: "30px", boxSizing: "contentBox", width: "100%" }}
        >
          {/* <Col style={{ width: '20%' ,padding:'0px 0px 0px 0px', }} ><Button variant="secondary" >Cancelar</Button></Col> */}
          <Col style={{ padding: "0px 0px 0px 80%", boxSizing: "contentBox" }}>
            <Button
              variant="success"
              style={{ width: "75%" }}
              className="btn-lg btn-block"
            >
              Enviar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

//************************************************************************************************************************************************************ */

// function DatosNNA(){
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };
//   return(
//     <>
    
//     <Form noValidate validated = {validated} onSubmit={handleSubmit} style ={{ margin:'60px 40px 0px 0px', border: '1px solid red'}}>
//     <h3 style={{textAlign:'center'}}>Datos del NNA</h3>
//     <Row>
//         <Col style ={{margin: '20px 0px 0px 0px'}}>
         

//           <Form.Control placeholder="Nombres" />
//         </Col>
//         <Col style ={{margin: '20px 0px 0px 0px'}}>
//           <Form.Control placeholder="Apellidos" />
//         </Col>
//         <Col>
                    
//                         <Form.Group controlId="duedate">
//                         <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
//                             <Form.Control type="date" id="fechaNacimiento" name="duedate"  />
//                         </Form.Group>
//                     </Col>
//       </Row> 
//       <Row style = {{marginTop: '20px'}}> 
                    
//                     <Col>
                    
//                     <Form.Control placeholder="Nacionalidad" />
//                     </Col>
//                     <Col>
                   
                    
//                      <Form.Group controlId="edad">
                    
//                      <input className ="form-control" type="number" id="edad" name="edad" min="10" max="100" placeholder="Edad"/>

//                      </Form.Group>
//                   </Col>
//                   <Col>
//                   <Form.Control placeholder="Lugar de nacimiento" />
//                   </Col>
//                 </Row>
             
//                 <Row style = {{marginTop: '15px'}}>
//                   <Col className="col-4">
//                   <Form.Group controlId="duedate">
//                         <label htmlFor="fechaNacimiento">Fecha en que cumpliria 16 años</label>
//                             <Form.Control type="date" id="fechaNacimiento" name="duedate" placeholder="Due date" />
//                         </Form.Group>
//                   </Col>
//                 <Col style={{marginTop:'24px'}}>
//                 <Form.Control placeholder="Numero de pasaporte o identidad" />
//                 </Col>
//                 </Row>

//                 <Row style ={{marginTop: '20px'}}>
//                   <Col>
//                   <Form.Control placeholder = "Cicatrices o marcas de nacimiento"/>
//                   </Col>
//                   <Col>
//                   <Form.Control placeholder = "Dirección en que residia antes de la sustracción"/>
//                   </Col>
//                 </Row>
//                 <Row style ={{marginTop: '20px'}}>
//                   <Col>
//                   <Form.Control placeholder = "Actividades y entretenimientos del NNA"/>
//                   </Col>
//                 </Row>
//                 <Row style ={{marginTop: '20px'}}>
//                   <Col>
//                   <Form.Control placeholder = "Peso"/>
//                   </Col>
//                   <Col>
//                   <Form.Control placeholder = "Altura"/>
//                   </Col>
//                   <Col>
//                   <Form.Control placeholder = "Color de ojos"/>
//                   </Col>
//                   <Col>
//                   <Form.Control placeholder = "Color de cabello"/>
//                   </Col>
//                 </Row>

//                 <Row style ={{marginTop: '30px', boxSizing: 'contentBox', width: '100%'}}>
//                   {/* <Col style={{ width: '20%' ,padding:'0px 0px 0px 0px', }} ><Button variant="secondary" >Cancelar</Button></Col> */}
//                   <Col style={{ padding:'0px 0px 0px 70%', boxSizing: 'contentBox'}} ><Button variant="success" style={{width:'100%'}} className="btn-lg btn-block">Enviar</Button></Col>
              
              
//                 </Row>
                 
                 
                
          



//     </Form>
//     </>
//   );
// }


function DatosSolicitante(){

  return(
    <>
    <Form style ={{ margin:'0px 0px 0px 0px'}}>
      <h3 style={{textAlign:'center'}}>Datos del Solicitante</h3>
      <Row>




      <Form.Group as={Col} md="6"  style ={{marginTop: '20px'}} className ="col-12">
      <Form.Label>Nombres</Form.Label>
          <Form.Control placeholder="Nombres" />
       
        </Form.Group>






        <Form.Group as={Col} md="6"  style ={{marginTop: '20px'}} className ="col-12">
        <Form.Label>Apellidos</Form.Label>
      
          <Form.Control placeholder="Apellidos" />
        
        </Form.Group>




        
      </Row>
      <Row>

      <Form.Group as={Col} md="3"  style ={{marginTop: '20px'}} className ="col-12">
      <Form.Label>Parentesco con el NNA</Form.Label>
        <Form.Control placeholder="Parentesco con el NNA"/>
      
        </Form.Group>




        <Form.Group as={Col} md="3"  style ={{marginTop: '20px',}} className ="col-12">
        <Form.Label>Nacionalidad</Form.Label>
        <Form.Control placeholder="Nacionalidad" />
        </Form.Group>
      
       
       
        
            <Form.Group as={Col} md="3" controlId="duedate" style ={{marginTop:'20px'}}>
                {/* <label htmlFor="fechaNacimiento">Fecha de nacimiento</label> */}
                <Form.Label>Fecha de nacimiento</Form.Label>
                  <Form.Control type="date" id="fechaNacimiento" name="duedate"  />
            </Form.Group>
       
            <Form.Group as={Col} md="3"  style ={{textAlign:'center', marginTop: '20px'}} className ="col-12">
            <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control placeholder="Número de pasaporte" style ={{margin:'0px 0px 0px 0px'}}/>
        </Form.Group>
      </Row>

      <Row style={{border:'1px solid green'}}>
      


        <Form.Group  as={Col} className="mb-2" controlId="exampleForm.ControlInput1" style ={{margin:'38px 0px 0px 0px', height:'167px'}}>
        <Form.Label style={{ margin:'0px 0px 24px 75px'}}>Idiomas que habla</Form.Label>



        {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3" style={{ margin:'0px 0px 0px 10%'}} >
      <Form.Check
        inline
        label="Español"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
        style={{ marginRight:'15%'}}
      />
      <Form.Check
        inline
        label="Inglés"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
        style={{ marginLeft: '3px'}}
      />
      
    </div>
  ))}

{['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3" style={{marginLeft:'10%'}}>
      <Form.Check
        inline
        label="Frances"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
        style={{marginRight:'17%'}}
      />
      <Form.Check
        inline
        label="Portugués"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      
    </div>
  ))}
        </Form.Group>
        
        
        
        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1" style ={{margin:'38px 0px 0px 0px'}}>
    <Form.Label style ={{textAlign:'center'}}>¿Puede viajar al pais en que se encuentra el NNA?</Form.Label>
    {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3" style ={{paddingLeft:'91px', marginTop: '24px'}}>
      <Form.Check inline label="Sí" style ={{ margin:'0px 30px 0px 10px', padding:'0px'}} name="group1" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="No" style ={{ margin:'0px 0px 0px 20px'}} name="group1" type={type} id={`inline-${type}-2`} />
     
    </div>
  ))}
  </Form.Group>

        
        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1" style ={{ margin:'38px 0px 0px 0px'}}>
    <Form.Label style ={{ margin:'0px 0px 15px 30%'}}>Estado Civil</Form.Label>
    


    {['Radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline
        label="Soltero(a)"
        name="group2"
        type={type}
        id={`inline-${type}-1`}
        
      />
      <Form.Check
        inline
        label="Casado(a)"
        name="group2"
        type={type}
        id={`inline-${type}-2`}
        style={{ marginLeft:'24px'}}
      />
      
    </div>
  ))}

{['Radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Divorciado(a)"
        name="group2"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Union Libre"
        name="group2"
        type={type}
        id={`inline-${type}-2`}
      />
      
    </div>

    
  ))}

{['Radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Viudo(a)"
        name="group2"
        type={type}
        id={`inline-${type}-1`}
      />
   
    </div>

    
  ))}
  </Form.Group>
       
      </Row>
      <Row style ={{border: '1px solid green'}}>
     
     
      {/* <Form.Group as={Col} md="3"  style ={{marginTop: '20px',}} className ="col-12">
        <Form.Label>Nacionalidad</Form.Label>
        <Form.Control placeholder="Nacionalidad" />
        </Form.Group>
          <Form.Group as={Col} md="3"  style ={{marginTop: '20px'}} className ="col-12">
        */}
      
     <Form.Group as={Col} md="3" style={{border:'1px solid orange'}} className ="col-12">
        <Form.Label>Dirección</Form.Label>
     <Form.Control placeholder="Dirección"/>
     </Form.Group>
      
      
      <Form.Group as ={Col} md="3"  className ="col-12">
      <Form.Label>Teléfono(s)</Form.Label>
      <Form.Control placeholder="Teléfono(s)"/>
      </Form.Group>
        
        
        
        <Form.Group as={Col} md="3"  className ="col-12">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control placeholder="Correo electrónico"/>
        </Form.Group>
        
        
         <Form.Group as={Col} md="3"  className ="col-12">  
        <Form.Label>Número de identidad</Form.Label>
        <Form.Control placeholder="Número de identidad"/>
      </Form.Group>
   
   
   
      </Row>

      
        <h3 style={{textAlign:'center', margin: '30px 0px 20px 0px', border:'1px solid red'}}>Otra Referencia</h3>
        
      <Row>
        <Form.Group as={Col} md="6"  className ="col-12">
          <Form.Label>Nombres</Form.Label>
          <Form.Control placeholder="Nombres"></Form.Control>
        </Form.Group>

        <Form.Group as={Col} md="6" style={{border:'1px solid orange'}} className ="col-12">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control placeholder="Apellidos"></Form.Control>
        </Form.Group>

      </Row>

      <Row>
      <Form.Group as={Col} md="4" style={{border:'1px solid orange'}} className ="col-12">
          <Form.Label>Parentesco</Form.Label>
          <Form.Control placeholder="Parentesco"></Form.Control>
        </Form.Group>

        <Form.Group as={Col} md="4" style={{border:'1px solid orange'}} className ="col-12">
          <Form.Label>Dirección</Form.Label>
          <Form.Control placeholder="Dirección"></Form.Control>
        </Form.Group>

        <Form.Group as={Col} md="4" style={{border:'1px solid orange'}} className ="col-12">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control placeholder="Teléfono"></Form.Control>
        </Form.Group>
      </Row>
<Row>
  <Form.Group as={Col} md="6" style={{border:'1px solid orange'}} className ="col-12"> 
  <Form.Label>Correo electronico</Form.Label>
       <Form.Control type="email" placeholder="Correo electronico"></Form.Control>
  </Form.Group>
  <Form.Group as={Col} md="6" style={{border:'1px solid orange'}} className ="col-12"> 
  <Form.Label>Número de identidad</Form.Label>
       <Form.Control type="text" placeholder="Número de identidad"></Form.Control>
  </Form.Group>
</Row>


      </Form>
    </>
    // <div style ={{border:'1px solid purple'}}>
      
    // </div>
  );
}

// function DatosSustractor(){
//   return();
// }








// const Button2 = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid ;
//   color: palevioletred;
//   margin: 0 20em;
//   padding: 0.25em 1em;

  
// `;
// const Container = styled.div`
//   text-align: center;
// `

/*
render(
  <Container>
    <Button2>Normal Button</Button2>
    <Button2 primary>Primary Button</Button2>
  </Container>
);
*/