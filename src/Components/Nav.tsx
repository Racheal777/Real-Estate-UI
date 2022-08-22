import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootswatch/dist/flatly/bootstrap.min.css'; 

function Navbarx() {
  return (
    <Navbar expand="lg" className='navbar-dark bg-primary'>
      <Container>
        <Navbar.Brand href="#home">Rentax</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/login">Link</Nav.Link>
            
               
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarx;