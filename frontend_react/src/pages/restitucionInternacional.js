import React from 'react' //, { useState, useMemo }
import Navigation from '../components/Navbar';
import {Form, Button} from 'react-bootstrap';
function RestitucionInternacional( { selectedDate, onChange }) {




// const weekDays = { nl: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'] };

  // const [showDate, setShowDate] = useState(new Date(selectedDate));
  // const firstDayThisMonth = new Date(showDate.getFullYear(), showDate.getMonth(), 1);
   // getDay sunday=0 and we monday=0
  //  const dayOfWeek = (firstDayThisMonth.getDay() + 6) % 7;
    // first day of next month







  return (
        <div>
            
              
              <Navigation />
¿


              {/* <SideBar /> */}

           

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
