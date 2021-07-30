

import { Navbar, Nav, Container } from 'react-bootstrap'
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
               <Nav.Link href='/registro'>Registro</Nav.Link>
               <Nav.Link href='/blog'>Blog</Nav.Link>
               

               <Nav.Link > <LogoutBTN/></Nav.Link>
               
            </Nav>
         </Navbar.Collapse>
       </Container>
    </Navbar>
    </>
  );
}

export default Navigation;

