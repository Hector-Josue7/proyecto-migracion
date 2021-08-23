

import { Navbar, Nav, Container, Dropdown, DropdownButton} from 'react-bootstrap' // SplitButton, ButtonGroup
import LogoutBTN from './LogoutBTN'

const Navigation = () => {
  return(
    <>
    <Navbar collapseOnSelect fixed ="top" expand = 'sm' bg= 'dark' variant='dark'>
       <Container>
         <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
         <Navbar.Collapse id ='responsive-navbar-nav'>
            <Nav>
               <Nav.Link href='/tablero'>Tablero</Nav.Link>
               {/* <Nav.Link href='/restitucion'>Restitucion Internacional</Nav.Link> */}
           
             
               <DropdownButton id="dropdown-button-dark-example2" variant="secondary" menuvariant="dark" title="Opciones migración" className="mt-2">
                   <Dropdown.Item href="/restitucion" >Restitución internacional</Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item href="/tablero2">Tablero 2</Dropdown.Item>
                </DropdownButton>
               <Nav.Link > <LogoutBTN/></Nav.Link>
            </Nav>
         </Navbar.Collapse>
       </Container>
    </Navbar>
    </>
  );
}

export default Navigation;


/*
import {Link, NavLink} from 'react-router-dom';

export default function Navbar(){
   return (
      <nav>
         <ul>
         <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
         </li>
         <li>
            <NavLink exact to="/about" activeClassName="active">About</NavLink>
         </li>
         <li>
            <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
         </li>
         </ul>
      </nav>
   )
}




hacer un archivo index.css con este codigo 

.active {
   background-color: crimson;
   color: white;
}
*/

