import Header from "../Layout/header";
import React, { useState } from 'react';
import { Form } from "react-bootstrap";

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
    // Handle form submission here
  };

  return (
    <div>
      <Header />
      <h2>Store Registration</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>Store name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={user} onChange={handleUserChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
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
      </Form>
    </div>
  );
}

export default Signup;
