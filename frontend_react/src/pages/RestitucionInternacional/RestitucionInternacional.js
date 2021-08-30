import React from 'react' //, { useState, useMemo }
import 'date-fns';
import Navigation from '../../components/Navbar';
 import { Row, Col} from 'react-bootstrap'; // Button, Form , Card, ListGroup , ButtonGroup, DropdownButton, Button, Dropdown
 import '../../assets/css/RestitucionInternacional.css';
 import Boton from '@material-ui/core/Button';

 
 //import DatosSolicitante  from './DatosSolicitante';
 //import DatosSustractor from './DatosSustractor';
import {DatosNNA} from './DatosNNA';



  
export default function RestitucionInternacional() {

 return (
    <>
  <Navigation  />
    <div className="container-fluid" style ={{margin:'820px 0px 0px 45px', width:'1300px',  border:'1px solid pink'}}>
           
            <Row style={{border:'1px solid #FF00FF', margin:'20px 0px 0px 0px'}}>
           <Col className=" col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"  style ={{backgroundColor:' #a2e2ad ', border:'1 px solid orange'}}>
     <div style={{margin: '100px 0px 0px 0px', border:'1px solid orange'}} >
            
            
              <h3 style={{textAlign:'center'}}>Restitución Internacional</h3>





   <ul className ="list-group" style ={{border:'1px solid red', margin:'40px 0px 0px 0px'}}>

    <Boton variant="contained"  color="primary"  type="submit" className ="list-group-item list-group-item-action">Datos de NNA</Boton> 
     <Boton style={{margin: '20px 0px 0px 0px', border: '1px solid orange'}} variant="contained"  color="primary" className ="list-group-item list-group-item-action">Datos de solicitante</Boton>
   <Boton style={{margin: '20px 0px 0px 0px', border: '1px solid orange'}} variant="contained"  color="primary" className ="list-group-item list-group-item-action">Datos de sustractor</Boton>
   
   </ul>


              </div>  
     
     



              {/* <ButtonGroup vertical>
  <Button>Button</Button>
  <Button>Button</Button>

  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>

  <Button>Button</Button>
  <Button>Button</Button>

  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>

  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup> */}

{/* <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card> */}

     </Col>

<Col controlid="espacioFormulario" className = "col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12" style={{border:'1px solid orange'}}>
<DatosNNA />
   {/* <DatosSolicitante /> */}
   {/* <DatosSustractor /> */}


   </Col>
              
   </Row>
              
  </div>
  </>
      
    )
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