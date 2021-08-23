import React from "react"; //, { useState, useMemo }
import { Form, Row, Col} from "react-bootstrap"; // Button,

export default function DatosSustractor() {
  return (
    <>
      <Form
        noValidate
        // validated={validated}
        // onSubmit={handleSubmit}
        style={{ margin: "50px 40px 0px 40px"}}
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
        <Row style ={{border:'1px solid orange'}}>

        <Form.Group  as={Col} className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Label style={{ margin:'20px 0px 24px 0px'}}><strong>Documentos que se adjuntan</strong></Form.Label>
  
  
  
          {['checkbox'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          
          label="Disposición jurídica que justificaba la residencia habitual del NNA previo al traslado o retención ilicita"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
          style={{ marginBottom:'15px'}}
        />
        <Form.Check
        
          label="Acuerdo jurídicamente vinculante"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          style={{marginBottom:'15px'}}



        />


<Form.Check
          inline
          label="Certificación de acta de Matrimonio (si corresponde)"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
          style={{marginBottom:'15px'}}
        />
        <Form.Check
          
          label="Certificación de acta de nacimiento del NNA (obligatoria)"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          style={{marginBottom:'15px'}}
        />
        
        <Form.Check
          
          label="Copia de tarjeta de identidad solicitante"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          style={{marginBottom:'15px'}}
        />
        <Form.Check
          
          label="Fotografias recientes de NNA"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          style={{marginBottom:'15px'}}
        />
         <Form.Check
          
          label="Copia de tarjeta de identidad de sustractor"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          style={{ marginBottom:'15px'}}
        />
         <Form.Check
          
          label="Mapa de la zona de la posible ubicación del NNA"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          style={{marginBottom:'15px'}}
        />
        <Form.Check
          
          label="Sentencia de pérdida de patria potestad"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          style={{marginBottom:'15px'}}
        />
        <Form.Check
          
          label="Sentencia de Guarda y custodia y regimen de visitas"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          style={{marginBottom:'15px'}}
        />
        <Form.Check
          
          label="Normativa nacional realtiva a los derechos de patria potestad"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          style={{marginBottom:'15px'}}
        />
        <Form.Check
          
          label="Otros documentos"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          style={{marginBottom:'15px'}}
        />
      </div>
    ))}
  
  
          </Form.Group>
          
        </Row>
        <Row style={{border:'1px solid green'}}>
               
        <Form.Group as={Col} className="mb-3 col-12" md="6" controlId="exampleForm.ControlTextarea1" style={{ marginTop: "20px"}}>
    <Form.Label>Arreglos propuestos para el retorno del NNA</Form.Label>
    <Form.Control as="textarea" placeholder="Arreglos propuestos para el retorno del NNA" rows={3} />
  </Form.Group>
  <Form.Group as={Col} className="mb-3 col-12" md="6" controlId="exampleForm.ControlTextarea1" style={{ marginTop: "20px"}}>
    <Form.Label>Otra información pertinente</Form.Label>
    <Form.Control as="textarea" placeholder="Otra información pertinente" rows={3} />
  </Form.Group>
        </Row>
      </Form>

    </>
  );
}
