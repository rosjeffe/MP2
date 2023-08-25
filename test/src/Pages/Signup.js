import Header from "../Layout/header";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
      <Header />
      <Container>
        <h2>Store Registration</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Store Name</Form.Label>
            <Form.Control type="text" style={{width:'50%'}} value={name} onChange={handleNameChange} placeholder="Enter store name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text"style={{width:'50%'}} value={user} onChange={handleUserChange} placeholder="Enter username" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"style={{width:'50%'}} value={password} onChange={handlePasswordChange} placeholder="Enter password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" style={{width:'50%'}} value={email} onChange={handleEmailChange} placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Upload Menu (PDF)</Form.Label>
            <Form.Control type="file" style={{width:'50%'}} accept="application/pdf" onChange={handleFileChange} />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Opening Time</Form.Label>
                <Form.Control type="time"   style={{ width: '25%' }} value={open} onChange={handleOpeningChange} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Closing Time</Form.Label>
                <Form.Control type="time" style={{width:'25%', marginLeft: '-50%'}} value={close} onChange={handleClosingChange} />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Register</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Signup;
