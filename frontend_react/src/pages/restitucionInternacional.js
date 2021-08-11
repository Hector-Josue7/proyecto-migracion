import React from 'react' //, { useState, useMemo }
import Navigation from '../components/Navbar';
<<<<<<< Updated upstream
import SideBar3 from '../components/Sidebar3'
=======
<<<<<<< HEAD
// import SideBar from '../components/Sidebar'
=======
import SideBar3 from '../components/Sidebar3'
>>>>>>> 80397375fb0c32fbe70e6e0b81dd7692d85bf00d
>>>>>>> Stashed changes



import {Form, Button} from 'react-bootstrap';

<<<<<<< Updated upstream

function RestitucionInternacional( { selectedDate, onChange }) {



=======
<<<<<<< HEAD
// const weekDays = { nl: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'] };
function RestitucionInternacional( { selectedDate, onChange }) {
  // const [showDate, setShowDate] = useState(new Date(selectedDate));
  // const firstDayThisMonth = new Date(showDate.getFullYear(), showDate.getMonth(), 1);
   // getDay sunday=0 and we monday=0
  //  const dayOfWeek = (firstDayThisMonth.getDay() + 6) % 7;
    // first day of next month
=======

function RestitucionInternacional( { selectedDate, onChange }) {



>>>>>>> 80397375fb0c32fbe70e6e0b81dd7692d85bf00d
>>>>>>> Stashed changes
  return (
        <div>
            
              
              <Navigation />
<<<<<<< Updated upstream
              <SideBar3 />
=======
<<<<<<< HEAD
              {/* <SideBar /> */}
=======
              <SideBar3 />
>>>>>>> 80397375fb0c32fbe70e6e0b81dd7692d85bf00d
>>>>>>> Stashed changes
                <h1 style={{
                  marginBottom: '100px',
                  marginLeft: '400px'
                }}>Restitucion internacional</h1>

             <Form>
  <Form.Group className="mb-3">
    <Form.Label>Nombre Completo</Form.Label>
    <Form.Control type="text" />
   
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        
        </div>
    )
}

export default RestitucionInternacional
