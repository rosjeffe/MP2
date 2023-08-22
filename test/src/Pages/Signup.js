import React from "react";
import Header from "../Layout/header";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";



const Signup = () => {

return(

<div>
<Header />
<Container>
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="store@example.com" />
        </Form.Group>

        <Form.Label htmlFor="inputPassword">Password</Form.Label>
        <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
            Your password must be atleast 8 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
        </Form.Text>

        <Form.Group className="menuSource" controlId="menuUpload">
            <Form.Label>Upload menu</Form.Label>
            <Button type="file" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contact">
            <Form.Label>Contact number</Form.Label>
            <Form.Control type="number"></Form.Control>
        </Form.Group>

        
    </Form>


</Container>
</div>
);
    


}

export default Signup