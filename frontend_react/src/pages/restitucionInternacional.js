import React, { useState, useMemo } from 'react'
import Navigation from '../components/Navbar';
import SideBar3 from '../components/Sidebar3'



import {Form, Button} from 'react-bootstrap';


function RestitucionInternacional( { selectedDate, onChange }) {



  return (
        <div>
            
              
              <Navigation />
              <SideBar3 />
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
