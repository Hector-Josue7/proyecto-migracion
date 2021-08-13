

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
               {/* <Nav.Link href='/blog'>Blog</Nav.Link> */}

               <DropdownButton id="dropdown-button-dark-example2" variant="secondary" menuVariant="dark" title="Opciones migración" className="mt-2">
                   <Dropdown.Item href="/restitucion" >Restitución internacional</Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
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

