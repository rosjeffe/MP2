// Confirmation.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Layout/header'; // 
import Footer from '../Layout/footer'; 

function Confirmation() {
  return (
    <div>
      <Header /> 
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h2>Registration Successful</h2>
            <p>Thank you for registering your store!</p>
           
          </Col>
        </Row>
      </Container>
      <Footer /> 
    </div>
  );
}

export default Confirmation;
