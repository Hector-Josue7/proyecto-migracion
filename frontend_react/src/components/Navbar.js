import { Navbar, Nav, Container } from 'react-bootstrap'
import LogoutBTN from '../components/LogoutBTN'

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
               

               <Nav.Link  style={{marginLeft: '300px'}}>
   
               <form className="d-flex">
        <input className="form-control me-2" style ={{ width: '400px'}} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
               </Nav.Link>
               <Nav.Link > <LogoutBTN/></Nav.Link>
               
            </Nav>
         </Navbar.Collapse>
       </Container>
    </Navbar>
    </>
  );
}

export default Navigation;

