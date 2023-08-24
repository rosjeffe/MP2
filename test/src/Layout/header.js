import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../Images/Logo.png";


const Header = () =>{
    return(
<Container  className='headerContainer' id='headerContainer'>   
    <Navbar expand="lg" bg="body-tertiary">
          <div className="container-fluid">
            <img className="img-fluid" src={img1} alt="Logo" id='headerLogo'/>
              
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                  <Nav className="me-auto" id='navLinks'>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Stores">Stores</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Contact">Contact Us</Nav.Link>
                    <Nav.Link href="/AdminLogin">Store Login</Nav.Link>
                    <Nav.Link href="/Signup">Sign up</Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              
          </div>
      </Navbar>
</Container>
    )
}
export default Header;