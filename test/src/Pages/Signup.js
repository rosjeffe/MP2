import Header from "../Layout/header";
import Footer from "../Layout/footer";
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Signup() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [menuFile, setMenuFile] = useState(null);
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFileChange = (event) => {
    setMenuFile(event.target.files[0]);
  };

  const handleOpeningChange = (event) => {
    setOpen(event.target.value);
  };

  const handleClosingChange = (event) => {
    setClose(event.target.value);
  };

  const handleAddressChange = (event) => {
    setClose(event.target.value);
  };

  const handleContactChange = (event) => {
    setClose(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
      <Header />
      <div id="regForm">
      <Container>
        <h2 id="regHead">Store Registration</h2>
        <Form className="regForm" onSubmit={handleSubmit}>
          <Form.Group>
            <div className="formLabel">
            <Form.Label>Store Name</Form.Label>
            </div>
            <Form.Control type="text" style={{width:'50%'}} value={name} onChange={handleNameChange} placeholder="Enter store name" />
          </Form.Group>
          <Form.Group>
          <div className="formLabel">
            <Form.Label>Username</Form.Label>
            </div>
            <Form.Control type="text"style={{width:'50%'}} value={user} onChange={handleUserChange} placeholder="Enter username" />
          </Form.Group>
          <Form.Group>
          <div className="formLabel">
            <Form.Label>Password</Form.Label>
            </div>
            <Form.Control type="password"style={{width:'50%'}} value={password} onChange={handlePasswordChange} placeholder="Enter password" />
          </Form.Group>
          <Form.Group>
          <div className="formLabel">
            <Form.Label>Email</Form.Label>
            </div>
            <Form.Control type="email" style={{width:'50%'}} value={email} onChange={handleEmailChange} placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
          <div className="formLabel">
            <Form.Label>Upload Menu (PDF)</Form.Label>
            </div>
            <Form.Control type="file" style={{width:'50%'}}  value={menuFile} onChange={handleFileChange} />
          </Form.Group>
              <Form.Group>
              <div className="formLabel">
                <Form.Label>Opening Time</Form.Label>
                </div>
                <Form.Control type="time"  style={{width:'50%'}}  value={open} onChange={handleOpeningChange} />
              </Form.Group>
              <Form.Group>
              <div className="formLabel">
                <Form.Label>Closing Time</Form.Label>
                </div>
                <Form.Control type="time" style={{width:'50%'}} value={close} onChange={handleClosingChange} />
              </Form.Group>
          
          <Form.Group>
          <div className="formLabel">
            <Form.Label>Address</Form.Label>
            </div>
            <Form.Control type="text" style={{width:'50%'}} value={address} onChange={handleAddressChange} placeholder="Enter Complete Address" />
          </Form.Group>
          <Form.Group>
          <div className="formLabel">
            <Form.Label>Contact Number</Form.Label>
            </div>
            <Form.Control type="text" style={{width:'50%'}} value={contact} onChange={handleUserChange} placeholder="Enter Contact Number" />
          </Form.Group>
          <br/>
          
          <Button type="submit" >Register</Button>
        </Form>
      </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
