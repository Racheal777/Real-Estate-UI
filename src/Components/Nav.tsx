import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootswatch/dist/flatly/bootstrap.min.css'; 

function Navbarx() {
  return (
    <Navbar expand="lg" className='navbar-dark bg-primary fixed'>
      <Container >
        
        <div>
        <Navbar.Brand href="/">Rentax</Navbar.Brand>
        </div>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <div className='flex'>
            <Nav.Link href="/">Home</Nav.Link>
           
           <Nav.Link href="/">About</Nav.Link>
           <Nav.Link href="/allproperties">Properties</Nav.Link>
           <Nav.Link href="/signup">Contact</Nav.Link>
            </div>
            

            <div className='flex '>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            </div>
            
            
               
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}

export default Navbarx;