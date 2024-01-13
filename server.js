const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs').promises;
// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express API!');
});

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, this is your Express API!');
  });
  

// Define a route to send the array of complex users
app.get('/api/users', async (req, res) => {
    try {
      // Read the complex JSON file
      console.log(path.join(__dirname, 'data.json'))
      const filePath = path.join(__dirname, 'data.json');
      const complexUsers = await fs.readFile(filePath, 'utf-8');
  
      // Parse the JSON and send it
      res.json(JSON.parse(complexUsers));
    } catch (error) {
      console.error('Error reading complex JSON file:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
