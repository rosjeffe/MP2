const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const userDB = [
  {
    id: 1,
    Username: 'Pizza',
    Password: 'Pizza123',
    isAdmin: true,
  },
  {
    id: 2,
    Username: 'Kopiko',
    Password: '123456',
    isAdmin: true,
  },
];

const storeDB = []; // Array to store submitted store data

app.post('/login', (req, res) => {
  const { Username, Password } = req.body;
 


  const user = userDB.find((u) => u.Username === Username && u.Password === Password);

  if (user) {
   
    res.json({ status: 'Success' });
  } else {
   
    res.json({ status: 'Invalid Username or Password' });
  }
});

app.post('/submit', (req, res) => {
  const formData = req.body;

  // Perform actions with the form data (e.g., store it in the database)
  storeDB.push(formData);

  // Respond with a success message (adjust as needed)
  res.json({ status: 'Form submission successful' });
});

app.listen(3001);
console.log('Server is Running');
