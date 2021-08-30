
import React, {useState} from 'react' //, { useState, useMemo }
import { Form, Row, Col, Button  } from 'react-bootstrap'; //FloatingLabel ,
import axios from "axios";






export  function DatosNNA(){
  //const [validated, setValidated] = useState(false);
    const [municipios, setMunicipios ] = useState("");


  const handleSubmit = (event) => {
   event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    //setValidated(true);
  };



  const handleChange = async (event) =>{

 event.preventDefault();
//console.log(event.target.value);
try{
  const respuestaMunicipios = await axios.get(`http://localhost:3007/migracion/municipios/${event.target.value}`);
  setMunicipios(respuestaMunicipios.data);
 let select = document.getElementById("slcMunicipios");




 
 document.getElementById("slcMunicipios").innerHTML=``;
 for(let i=0; i< respuestaMunicipios.data.length; i++){
   document.getElementById("slcMunicipios").innerHTML+=`
   <option>${respuestaMunicipios.data[i].municipio}</option>
   `;



 }


//console.log(estadoSelect);

//return respuestaMunicipios.data;



} catch(err){
console.error(err);
}
}





// const renderMunicipios = async() =>{
//   //event.preventDefault();
//  let arrayMunicipios = handleChange();
 
//  //alert(arrayMunicipios);
  
     
   


// }

  return (
    <>
      <Form
        // noValidate
        // validated={validated}
        onSubmit={handleSubmit}
        style={{ margin: "50px 40px 0px 40px" }}
      >
        <h3 style={{ textAlign: "center" }}>Datos del NNA</h3>
        <hr></hr>
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



        <Row style ={{margin: '20px 0px 0px 0px'}}>
        <Form.Group as={Col} md="4" controlId="duedate" className="col-12">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" name="duedate" />
          </Form.Group>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Form.Group as={Col} md="4" controlId="validationCustom01" className="col-12">
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control placeholder="Nacionalidad" />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="edad" className="col-12">
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

         
        </Row>
      <Row>
      <Form.Group as={Col} md="4" style={{marginTop: '20px'}} controlId="lugarNacimiento" className="col-12">
            <Form.Label>Lugar de nacimiento</Form.Label>
            {/* <Form.Control placeholder="Lugar de nacimiento" /> */}
            

<select className="custom-select custom-select-sm form-control" onChange={handleChange}  >
 
 
  <option key="01">Atlantida</option>
  <option key="06">Choluteca</option>
  <option key="02">Colon</option>
  <option key="03">Comayagua</option>
  <option key="04">Copan</option>
  <option key="05">Cortes</option>
  <option key="07">El Paraiso</option>
  <option key="08">Francisco Morazan</option>
  <option key="09">Gracias a Dios</option>
  <option key="10">Intibuca</option>
  <option key="11">Islas de La Bahia</option>
  <option key="12">La Paz</option>
  <option key="13">Lempira</option>
  <option key="14">Ocotepeque</option>
  <option key="15">Olancho</option>
  <option key="16">Santa Barbara</option>
  <option key="17">Valle</option>
  <option key="18">Yoro</option>
 
  
</select>


          </Form.Group> 


           <Form.Group as={Col} md="4" style={{marginTop: '50px'}} controlId="lugarNacimiento" className="col-12">
           
            {/* <Form.Control placeholder="Lugar de nacimiento" /> */}
            

<select id="slcMunicipios" className="custom-select custom-select-sm form-control" >




</select>


          </Form.Group>         
          
      </Row>
        <Row>
        <Form.Group as={Col} md="12" controlId="problemasSalud" className="col-12 mt-4">
            <Form.Label>Problemas de salud, medicamentos o antecedentes quirurgicos</Form.Label>
            <Form.Control placeholder="Problemas de salud, medicamentos o antecedentes quirurgicos" />
          </Form.Group>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          {/* <Col className="col-4">
                  <Form.Group controlId="duedate">
                        <label htmlFor="fechaNacimiento">Fecha en que cumpliria 16 años</label>
                            <Form.Control type="date"  name="duedate" placeholder="Due date" />
                        </Form.Group>
                  </Col> */}

          <Form.Group as={Col} md="6" controlId="numeroPasaporteOIdentidad" className="col-12">
            <Form.Label>Número de pasaporte o identidad</Form.Label>
            <Form.Control placeholder="Numero de pasaporte o identidad" />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="cicatricesMarcasNacimiento" className="col-12">
            <Form.Label>Cicatrices o marcas de nacimiento</Form.Label>
            <Form.Control placeholder="Cicatrices o marcas de nacimiento" />
          </Form.Group>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Form.Group as={Col} md="6" className="col-12">
            <Form.Label>
              Dirección que residia antes de la sustracción
            </Form.Label>
            <Form.Control placeholder="Dirección en que residia antes de la sustracción" />
          </Form.Group>

          <Form.Group as={Col} md="6" className="col-12">
            <Form.Label>Actividades y entretenimientos del NNA</Form.Label>
            <Form.Control placeholder="Actividades y entretenimientos del NNA" />
          </Form.Group>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Form.Group as={Col} md="3" className="col-12">
            <Form.Label>Peso</Form.Label>
            <Form.Control placeholder="Peso" />
          </Form.Group>

          <Form.Group as={Col} md="3" className="col-12">
            <Form.Label>Altura</Form.Label>
            <Form.Control placeholder="Altura" />
          </Form.Group>
          <Form.Group as={Col} md="3" className="col-12">
            <Form.Label>Color de ojos</Form.Label>
            <Form.Control placeholder="Color de ojos" />
          </Form.Group>
          <Form.Group as={Col} md="3" className="col-12">
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
/*
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
*/







