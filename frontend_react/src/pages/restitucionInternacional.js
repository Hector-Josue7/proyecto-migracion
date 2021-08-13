import React, {useState} from 'react' //, { useState, useMemo }
import 'date-fns';
import Navigation from '../components/Navbar';
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';


import Boton from '@material-ui/core/Button';


function RestitucionInternacional() {
  const [show, setShow] = useState(false);
 
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return (
        <div>
           <Navigation />
              <h1 style={{
                  marginBottom: '80px',
                   marginLeft: '400px'
                }}>Restitucion internacional</h1>

             






<Boton variant="contained" color="primary" onClick={handleShow} style= {{
  marginBottom: '300px',
  marginLeft: '100px'
}}> Ingresar datos de NNA </Boton>
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Datos del NNA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                <Col style={{marginTop:'45px'}}>
                <Form.Control placeholder="Numero de pasaporte o identidad" />
                </Col>
                </Row>
                </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary">Enviar</Button>
        </Modal.Footer>
      </Modal>









        </div>
    )
}

export default RestitucionInternacional
