import React from "react"; //, { useState, useMemo }
import { Form, Row, Col} from "react-bootstrap"; // Button,

export default function DatosSustractor() {
  return (
    <>
      <Form
        noValidate
        // validated={validated}
        // onSubmit={handleSubmit}
        style={{ margin: "50px 40px 0px 40px" }}
      >
        <h3 style={{ textAlign: "center" }}>Datos del Sustractor</h3>
        <hr></hr>

        <Row>
          <Form.Group as={Col} md="4" className="col-12">
            <Form.Label>Nombres</Form.Label>
            <Form.Control type="text" placeholder="Nombres" required />
            <div className="valid-feedback">Ok</div>
            <div className="invalid-feedback">Nombre es requerido</div>
          </Form.Group>
          <Form.Group as={Col} md="4" className="col-12">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control placeholder="Apellidos" />
            <div className="valid-feedback">Ok</div>
            <div className="invalid-feedback">El apellido es requerido</div>
          </Form.Group>
          <Form.Group as={Col} md="4" className="col-12">
            <Form.Label>Parentesco con el NNA</Form.Label>
            <Form.Control placeholder="Parentesco con el NNA" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            md="4"
            className="col-12"
            style={{ marginTop: "20px" }}
          >
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control placeholder="Nacionalidad" />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="duedate"
            style={{ marginTop: "20px" }}
          >
            {/* <label htmlFor="fechaNacimiento">Fecha de nacimiento</label> */}
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" name="duedate" />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            className="col-12"
            style={{ marginTop: "20px" }}
          >
            <Form.Label>Número de pasaporte</Form.Label>
            <Form.Control placeholder="Número de pasaporte" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            md="4"
            className="col-12"
            style={{ marginTop: "20px" }}
          >
            <Form.Label>Estado civil</Form.Label>
            <Form.Control placeholder="Estado civil" />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="col-12"
            style={{ marginTop: "20px" }}
          >
            <Form.Label>Número de identidad</Form.Label>
            <Form.Control placeholder="Número de identidad" />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="col-12"
            style={{ marginTop: "20px" }}
          >
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control placeholder="Correo electronico" />
          </Form.Group>



          
        </Row>
        <Row>
        <Form.Group as={Col} className="mb-3 col-12" md="6" controlId="exampleForm.ControlTextarea1" style={{ marginTop: "20px"}}>
    <Form.Label>¿Tiene parientes en el país dónde se encuentra el NNA? (Nombre Completo)</Form.Label>
    <Form.Control as="textarea" placeholder="¿Tiene parientes en el país dónde se encuentra el NNA? (Nombre Completo)" rows={3} />
  </Form.Group>
  <Form.Group as={Col} className="mb-3 col-12" md="6" controlId="exampleForm.ControlTextarea1" style={{ marginTop: "20px"}}>
    <Form.Label style={{marginBottom:'31px'}}>Actividades habituales</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Actividades habituales"/>
  </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} className="mb-3 col-12" md="6" controlId="exampleForm.ControlTextarea1" style={{ marginTop: "20px"}}>
    <Form.Label>Lugar, fecha y circunstancias de la retención o traslado</Form.Label>
    <Form.Control as="textarea" placeholder="Lugar, fecha y circunstancias de la retención o traslado" rows={3} />
  </Form.Group>
  <Form.Group as={Col} className="mb-3 col-12" md="6" controlId="exampleForm.ControlTextarea1" style={{ marginTop: "20px"}}>
    <Form.Label>Hechos y aspectos juridicos que justifican la solicitud</Form.Label>
    <Form.Control as="textarea" placeholder="Hechos y aspectos juridicos que justifican la solicitud" rows={3} />
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
          
        </Row>
      </Form>

    </>
  );
}
