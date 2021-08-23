import React from 'react' //, { useState, useMemo }
import 'date-fns';
import { Form, Row, Col, Button} from 'react-bootstrap'; // , Button

export default function DatosSolicitante(){

    return(
      <>
      <Form style ={{ margin:'0px 0px 0px 0px'}}>
        <h3 style={{textAlign:'center'}}>Datos del Solicitante</h3>
        <Row>
  
  
  
        <Form.Group as={Col} md="3" className="col-12">
            <Form.Label>Primer nombre</Form.Label>
            <Form.Control type="text" placeholder="Primer nombre" required />
            <div className="valid-feedback">Ok</div>
            <div className="invalid-feedback">Nombre es requerido</div>
          </Form.Group>

          <Form.Group as={Col} md="3" className="col-12">
            <Form.Label>Segundo nombre</Form.Label>
            <Form.Control type="text" placeholder="Segundo nombre" required />
            <div className="valid-feedback">Ok</div>
            <div className="invalid-feedback">Nombre es requerido</div>
          </Form.Group>


          <Form.Group as={Col} md="3" className="col-12">
            <Form.Label>Primer apellido</Form.Label>
            <Form.Control placeholder="Primer apellido" />
            <div className="valid-feedback">Ok</div>
            <div className="invalid-feedback">El apellido es requerido</div>
          </Form.Group>
          <Form.Group as={Col} md="3" className="col-12">
            <Form.Label>Segundo apellido</Form.Label>
            <Form.Control placeholder="Segundo apellido" />
            <div className="valid-feedback">Ok</div>
            <div className="invalid-feedback">El apellido es requerido</div>
          </Form.Group>
  
  
  
          
        </Row>
        <Row>
  
        <Form.Group as={Col} md="3"  style ={{marginTop: '20px'}} className ="col-12 col-md-4" controlId="formGridState">
        <Form.Label htmlFor="parentescos">Parentesco con el NNA</Form.Label>
          {/* <Form.Control placeholder="Parentesco con el NNA"/> */}
        
          {/* <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        /> */}
      <select id="parentescos" class="form-control">
      <option selected>Elija una opción</option>
        <option>Padre</option>
        <option>Madre</option>
        <option>Tio</option>
        <option>Tia</option>
        <option>Abuelo</option>
        <option>Abuela</option>
        <option>Padrastro</option>
        <option>Padrastra</option>
         
      </select>
          
          </Form.Group>
  
  
  
  
          <Form.Group as={Col} md="3"  style ={{marginTop: '20px',}} className ="col-12">
          <Form.Label>Nacionalidad</Form.Label>
          {/* <Form.Control placeholder="Nacionalidad" /> */}
          <select id="nacionalidades" class="form-control">
      <option selected>Elija una opción</option>
        <option>Hondureña</option>
        <option>Mexicana</option>
        <option>Estado Unidense</option>
        <option>Canadiense</option>

        </select>
          </Form.Group>
        
         
         
          
              <Form.Group as={Col} md="3" controlId="duedate" style ={{marginTop:'20px'}}>
                  {/* <label htmlFor="fechaNacimiento">Fecha de nacimiento</label> */}
                  <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type="date"  name="duedate"  />
                   
              </Form.Group>
         
              <Form.Group as={Col} md="3"  style ={{textAlign:'center', marginTop: '20px'}} className ="col-12">
              <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control placeholder="Número de pasaporte" style ={{margin:'0px 0px 0px 0px'}}/>
          </Form.Group>
        </Row>
  
        <Row>
        
  
  
          <Form.Group  as={Col} className="mb-2" controlId="exampleForm.ControlInput1" style ={{marginTop:'38px', height:'167px'}}>
          <Form.Label style={{ margin:'0px 0px 24px 75px'}}>Idiomas que habla</Form.Label>
  
  
  
          {['checkbox'].map((type) => (
      <div key={`inline-${type}`} className="mb-3" style={{ marginLeft:'10%'}} >
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
        <Row>
       
       
        {/* <Form.Group as={Col} md="3"  style ={{marginTop: '20px',}} className ="col-12">
          <Form.Label>Nacionalidad</Form.Label>
          <Form.Control placeholder="Nacionalidad" />
          </Form.Group>
            <Form.Group as={Col} md="3"  style ={{marginTop: '20px'}} className ="col-12">
          */}
        
       <Form.Group as={Col} md="3"  className ="col-12">
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
  
        
          <h3 style={{textAlign:'center', margin: '30px 0px 20px 0px'}}>Otra Referencia</h3>
          
        <Row>
          <Form.Group as={Col} md="6"  className ="col-12">
            <Form.Label>Nombres</Form.Label>
            <Form.Control placeholder="Nombres"></Form.Control>
          </Form.Group>
  
          <Form.Group as={Col} md="6"  className ="col-12">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control placeholder="Apellidos"></Form.Control>
          </Form.Group>
  
        </Row>
  
        <Row>
        <Form.Group as={Col} md="4" style={{marginTop: '22px'}}  className ="col-12">
            <Form.Label>Parentesco</Form.Label>
            <Form.Control placeholder="Parentesco"></Form.Control>
          </Form.Group>
  
          <Form.Group as={Col} md="4" style={{marginTop: '22px'}} className ="col-12">
            <Form.Label>Dirección</Form.Label>
            <Form.Control placeholder="Dirección"></Form.Control>
          </Form.Group>
  
          <Form.Group as={Col} md="4" style={{marginTop: '22px'}}  className ="col-12">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control placeholder="Teléfono"></Form.Control>
          </Form.Group>
        </Row>
  <Row>
    <Form.Group as={Col} md="6" style={{marginTop:'22px'}} className ="col-12"> 
    <Form.Label>Correo electronico</Form.Label>
         <Form.Control type="email" placeholder="Correo electronico"></Form.Control>
    </Form.Group>
    <Form.Group as={Col} md="6" style={{ marginTop: '22px'}} className ="col-12"> 
    <Form.Label>Número de identidad</Form.Label>
         <Form.Control type="text" placeholder="Número de identidad"></Form.Control>
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
      // <div style ={{border:'1px solid purple'}}>
        
      // </div>
    );
  }