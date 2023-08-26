import { Container } from "react-bootstrap";
import img1 from "../Images/Logo.png";

const Footer =() =>{
    return(
                <div id="footerContainer">
                <Container className="w-100 p-3 footer" id="footerCard">  
                      <div className="row">
                      <div className="col">
                
    
                <footer className="container py-5">
                      <div className="row">
                      <div className="col-12 col-md">
                      <div className="container-fluid">
                      <img className="img-fluid" src={img1} alt="Logo" id='footerLogo'/>
                      </div>
                      </div>
                <div className="col-3 col-sm">
                        <h5>SITE LINKS</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="link-secondary text-decoration-none" href="#">Contact Us</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">About Us</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Directions</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Blog</a></li>
                        </ul>
                        </div>

                <div className="col-3 col-sm">
                        <h5>Top Stores</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="link-secondary text-decoration-none" href="#">Angel Store</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Pizza Store</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Cofee Store</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Burger Store</a></li>
                        </ul>
                        </div>

                <div className="col-3 col-sm">
                        <h5>Top Food</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="link-secondary text-decoration-none" href="#">Isaw</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Milk Shake</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Kare Kare</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Laing</a></li>
                        </ul>
                        </div>


                <div className="col-3 col-sm">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="link-secondary text-decoration-none" href="#">Team</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Jobs</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
                        </ul>
                        </div>
                        </div>
                  </footer>
    
    
    
            </div>
        </div>
        
      </Container>
        </div>



    )
}

export default Footer;