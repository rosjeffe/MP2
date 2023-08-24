import React from 'react';
import Header from '../Layout/header';
import Footer from '../Layout/footer';
import FB from "../Images/fb.png";
import insta from "../Images/insta.png";
import linkedIn from "../Images/Linkedin.png";
import TikTok from "../Images/tiktok.png";
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form,InputGroup } from "react-bootstrap";


const AdminLogin = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Username, Password }),
    } );

    const data = await response.json();

    
    
    if (data.status === 'Success') {
     navigate(`/KopikoStore/${Username}`);
    } else {
      setMessage(data.status);
    }

  }



  return (
<div>
          <Header />
          <div>
          <Container className='cardsBody'>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
          <Card.Body className='cardsBody'>
          <div className="mb-3 mt-md-4">
          <h2 className="fw-bold mb-2 text-uppercase ">Hi Partner!</h2>
          <p className=" mb-5">Please enter your username and password!</p>
          <div className="mb-3">


<Form>
          <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <InputGroup size="sm">
          <Form.Control
            type="text"
            placeholder="Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Username"
            aria-describedby="inputGroup-sizing-sm"
          />
</InputGroup>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup size="sm">
           <Form.Control
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            aria-describedby="inputGroup-sizing-sm"
            />
</InputGroup>
</Form.Group>
                    
  <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
              >
              <p className="small">
              <a className="text-primary" href="#!">
              Forgot password?
              </a>
              </p> 
</Form.Group>
                      
                      
              <div className="d-grid">
              <Button variant="primary" type="submit" onClick={handleLogin}>
              Login
              </Button>
              <p>{message}</p>
              </div>
</Form>
              <p className='socSignin'><b>or sign in with</b></p>
              <div className="row">
              <div className="col-12 socialIcons" id="Social-Media-Container">
              <a href="https://facebook.com">
              <img className="SocIcon" src={FB} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/">
              <img className="SocIcon" src={insta} alt="InstaGram" />
              </a>
              <a href="https://www.tiktok.com/en/">
              <img className="SocIcon" src={TikTok} alt="Tiktok" />
              </a>
              <a href="https://www.linkedin.com/feed/">
              <img className="SocIcon" src={linkedIn} alt="Tiktok" />
              </a>
              </div>
              </div>


                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Want to feature your store? {" "}
                        <a href="Signup.js" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div> 
   <Footer /> 
</div>     
)
};

export default AdminLogin;