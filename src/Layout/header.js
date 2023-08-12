import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../Images/Logo.png";


const Header = () =>{
    return(
<Navbar expand="lg" bg="body-tertiary">
      <div className="container-fluid">
        <img className="img-fluid" src={img1} alt="Logo" />
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Stores">Stores</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact Us</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Admin Login &#9094;</NavDropdown.Item>
              <NavDropdown.Item href="#">User Login &#9094;</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Set Location" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Find Stores</button>
          </form>
        </Navbar.Collapse>
      </div>
    </Navbar>
    )
}
export default Header;