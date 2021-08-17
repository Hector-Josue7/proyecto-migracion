import React from 'react' //, { useState, useMemo }
import 'date-fns';
import Navigation from '../components/Navbar';
 import {Button, Form, Row, Col} from 'react-bootstrap';
 //import styled from 'styled-components'


import Boton from '@material-ui/core/Button';


export default function RestitucionInternacional() {

 
  




return (
        <div className="container">
           <Navigation />

   <Row>
     <Col className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
     <div style={{ margin: '80px 0px 0px 5px', padding:'0px 0px 0px 0px'}}>
              <h3 style={{
                   padding: '0px 0px 0px 0px',
                  
                   margin: '20px 0px 50px 30px',
                   
                }}>Restitucion internacional</h3>

            






<Boton variant="contained"  color="primary" style= {{
  
  margin: '0px 0px 0px 30px'
}}>
   Ingresar datos de NNA </Boton>
              </div>  
     </Col>
   
   <Col className = "col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
   <DatosNNA />   
   </Col>
              
   </Row>
              
  
        










        </div>
    )
}





function DatosNNA(){
  return(
    <div>
    
    <Form style ={{ margin:'80px 0px 0px 0px'}}>
    <h3 style={{textAlign:'center'}}>Datos del NNA</h3>
    <Row>
        <Col style ={{margin: '20px 0px 0px 0px'}}>
          <Form.Control placeholder="Nombres" />
        </Col>
        <Col style ={{margin: '20px 0px 0px 0px'}}>
          <Form.Control placeholder="Apellidos" />
        </Col>
        <Col>
                    
                        <Form.Group controlId="duedate">
                        <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                            <Form.Control type="date" id="fechaNacimiento" name="duedate"  />
                        </Form.Group>
                    </Col>
      </Row> 
      <Row style = {{marginTop: '20px'}}> 
                    
                    <Col>
                    
                    <Form.Control placeholder="Nacionalidad" />
                    </Col>
                    <Col>
                   
                    
                     <Form.Group controlId="edad">
                    
                     <input className ="form-control" type="number" id="edad" name="edad" min="10" max="100" placeholder="Edad"/>

                     </Form.Group>
                  </Col>
                  <Col>
                  <Form.Control placeholder="Lugar de nacimiento" />
                  </Col>
                </Row>
             
                <Row style = {{marginTop: '15px'}}>
                  <Col className="col-4">
                  <Form.Group controlId="duedate">
                        <label htmlFor="fechaNacimiento">Fecha en que cumpliria 16 años</label>
                            <Form.Control type="date" id="fechaNacimiento" name="duedate" placeholder="Due date" />
                        </Form.Group>
                  </Col>
                <Col style={{marginTop:'24px'}}>
                <Form.Control placeholder="Numero de pasaporte o identidad" />
                </Col>
                </Row>

                <Row style ={{marginTop: '20px'}}>
                  <Col>
                  <Form.Control placeholder = "Cicatrices o marcas de nacimiento"/>
                  </Col>
                  <Col>
                  <Form.Control placeholder = "Dirección en que residia antes de la sustracción"/>
                  </Col>
                </Row>
                <Row style ={{marginTop: '20px'}}>
                  <Col>
                  <Form.Control placeholder = "Actividades y entretenimientos del NNA"/>
                  </Col>
                </Row>
                <Row style ={{marginTop: '20px'}}>
                  <Col>
                  <Form.Control placeholder = "Peso"/>
                  </Col>
                  <Col>
                  <Form.Control placeholder = "Altura"/>
                  </Col>
                  <Col>
                  <Form.Control placeholder = "Color de ojos"/>
                  </Col>
                  <Col>
                  <Form.Control placeholder = "Color de cabello"/>
                  </Col>
                </Row>

                <Row style ={{marginTop: '30px', boxSizing: 'contentBox', width: '100%'}}>
                  {/* <Col style={{ width: '20%' ,padding:'0px 0px 0px 0px', }} ><Button variant="secondary" >Cancelar</Button></Col> */}
                  <Col style={{ padding:'0px 0px 0px 70%', boxSizing: 'contentBox'}} ><Button variant="success" style={{width:'100%'}} className="btn-lg btn-block">Enviar</Button></Col>
              
              
                </Row>
                 
                 
                
          



    </Form>
    </div>
  );
}












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