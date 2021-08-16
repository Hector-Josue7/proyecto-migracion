import React from 'react' //, { useState, useMemo }
import 'date-fns';
import Navigation from '../components/Navbar';
 import {Button, Form, Row, Col} from 'react-bootstrap';
 //import styled from 'styled-components'


import Boton from '@material-ui/core/Button';


export default function RestitucionInternacional() {

 
  




return (
        <div>
           <Navigation />
              <h1 style={{
                  // padding: '100px 0px 0px 0px',
                   margin: '400px 0px 0px 20px'
                }}>Restitucion internacional</h1>

            






<Boton variant="contained"  color="primary" style= {{
  
  margin: '30px 0px 10px 100px'
}}>
   Ingresar datos de NNA </Boton>
  
        


<DatosNNA  style={{ margin: '',
                        }}/>







        </div>
    )
}





function DatosNNA(){
  return(
    <div>
    <h2>Datos del NNA</h2>
    <Form>
    <Row>
        <Col>
          <Form.Control placeholder="Nombres" />
        </Col>
        <Col>
          <Form.Control placeholder="Apellidos" />
        </Col>
      </Row> 
      <Row style = {{marginTop: '20px'}}> 
                    <Col>
                    
                        <Form.Group controlId="duedate">
                        <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                            <Form.Control type="date" id="fechaNacimiento" name="duedate"  />
                        </Form.Group>
                    </Col>
                    <Col style={{marginTop:'22px'}}>
                    
                    <Form.Control placeholder="Nacionalidad" />
                    </Col>
                </Row>
                <Row style = {{marginTop: '20px'}}>
                  <Col>
                   
                    
                     <Form.Group controlId="edad">
                    
                     <input className ="form-control" type="number" id="edad" name="edad" min="10" max="100" placeholder="Edad"/>

                     </Form.Group>
                  </Col>
                
                  <Col>
                  <Form.Control placeholder="Lugar de nacimiento" />
                  </Col>

                  
                  
                </Row>
                <Row style = {{marginTop: '20px'}}>
                  <Col className="col-4">
                  <Form.Group controlId="duedate">
                        <label htmlFor="fechaNacimiento">Fecha en que cumpliria 16 años</label>
                            <Form.Control type="date" id="fechaNacimiento" name="duedate" placeholder="Due date" />
                        </Form.Group>
                  </Col>
                <Col style={{marginTop:'25px'}}>
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
                <Row>
                  <Col>
                  <Form.Control placeholder = "Actividades y entretenimientos del NNA"/>
                  </Col>
                </Row>

       
                <Button variant="secondary" >Cancelar</Button>
                <Button variant="primary">Enviar</Button> 
                 
                
          



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