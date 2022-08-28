import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//import 'bootswatch/dist/flatly/bootstrap.min.css'; 

function Navbarx() {
  return (
    <nav className=' bg-slate-300 px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 top-0 left-0 flex justify-between'>
    <Navbar expand="lg" >
      <Container >
        
        <div>
        <Navbar.Brand href="/" >Rentax</Navbar.Brand>
        </div>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
             
              aria-expanded="false" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="navbar-sticky">

            <div className='flex'>
            <Nav.Link href="/">Home</Nav.Link>
           
           <Nav.Link href="/">About</Nav.Link>
           <Nav.Link href="/allproperties">Properties</Nav.Link>
           <Nav.Link href="/signup">Contact</Nav.Link>
            </div>
            

            <div className='flex justify-end '>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            </div>
            
            
               
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    </nav>
  );
}

export default Navbarx;