import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/header';
import Footer from '../Layout/footer';

function Signup() {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [menuFile, setMenuFile] = useState(null);
  const [open, setOpen] = useState('');
  const [close, setClose] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any of the entry fields are blank
    if (!name || !user || !password || !email || !menuFile || !open || !close || !address || !contact) {
      setError('All fields are required.');
      return;
    }

    // Create a new FormData object
    const formData = new FormData();
    

    // Append form data to the FormData object
    formData.append('name', name);
    formData.append('user', user);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('menuFile', menuFile);
    formData.append('open', open);
    formData.append('close', close);
    formData.append('address', address);
    formData.append('contact', contact);

    try {
      // Send a POST request with the FormData object
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Form submitted successfully, navigate to confirmation page
        navigate('/Confirmation');
      } else {
        // Handle errors here
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Header /> 
      <br/>
      <div className='regForm'>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="mx-auto">
            <h2 className="text-center">Store Registration</h2>
            <br/>
            {/* Display error message if any field is blank */}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Store Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter store name"
                />
              </Form.Group>

              <Form.Group controlId="user">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="Enter username"
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="menuFile">
                <Form.Label>Upload Menu (PDF)</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setMenuFile(e.target.files[0])}
                />
              </Form.Group>

              <Form.Group controlId="open">
                <Form.Label>Opening Time</Form.Label>
                <Form.Control
                  type="time"
                  value={open}
                  onChange={(e) => setOpen(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="close">
                <Form.Label>Closing Time</Form.Label>
                <Form.Control
                  type="time"
                  value={close}
                  onChange={(e) => setClose(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Complete Address"
                />
              </Form.Group>

              <Form.Group controlId="contact">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Enter Contact Number"
                />
              </Form.Group>
              <br/>
              <Button type="submit" className="w-100 btn-hover">Register</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      </div>
      <br/>
      <Footer /> 
    </div>
  );
}

export default Signup;
