import Header from "../Layout/header";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import React, { useState } from "react";


const Signup = () => {

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);
    const [open, setOpen] = useState();
    const [close, setClose] = useState();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleOpeningChange = (event) => {
        setFile(event.target.value);
      };

    const handleClosingChange = (event) => {
        setFile(event.target.value);

    
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('file', file);
      formData.append('open', open);
      formData.append('close', close);
  
      
      console.log(formData);
    };
  
    return (
        
      <div className="regForm" id="registration">
        <Header />
        <h2>Store Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Store name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Username:</label>
            <input type="text" value={user} onChange={handleNameChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handleNameChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Upload Menu:</label>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
          </div>
          <div>
            <label>Opening:</label>
            <input type="time" value={open} onChange={handleOpeningChange} />
          </div>
          <div>
            <label>Closing:</label>
            <input type="time" value={close} onChange={handleClosingChange} />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    )
  };
}
export default Signup