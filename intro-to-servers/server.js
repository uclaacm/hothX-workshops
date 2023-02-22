// Import express module
const express = require('express');
// Create an express application
const app = express();
// Set the port number for the server to listen for requests on
const port = 3000;

// Add some middleware to parse JSON request bodies
app.use(express.json());

// Define a route that serves a web page
app.get('/', (req, res) => {
  res.send('<h1>Hello, world!</h1>');
});

// Simulated database of users
let users = [
  { id: 1, name: 'Arisu' },
  { id: 2, name: 'Ako' },
  { id: 3, name: 'Hina' },
];


// GET request handler for /api/users
// Request to get all of the users in our simulated database
app.get('/api/users', (req, res) => {
  res.json({ users });
});


// POST request handler for /api/users
// Request to create a new user
app.post('/api/users', (req, res) => {
  // Extract the name of the new user from the request body
  const name = req.body.name;

  // Set the new user's ID
  const newId = users.length + 1;

  // Insert new user with their ID into the simulated data base
  users.push({ id: newId, name: name });
  
  // Log successful user creation
  console.log(`Created user ${name} with ID ${newId}`);

  // Sends a status code indicating successful creation
  // along with a JSON response containing the ID and user
  res.status(201).json({ id: newId, name });
});


// DELETE request handler for /api/users/:id
// Request to delete a specified user
app.delete('/api/users/:id', (req, res) => {
  // Extract the id from the parameter in the route URL
  const id = req.params.id;

  // Locate the user to delete in the database
  const index = id - 1;

  // Send an error code along with an error message if the ID is invalid
  if (index == -1 || index >= users.length) {
    res.status(404).json({ error: `User with ID ${id} not found` });
  } else {

    // Delete the user from the simulated database
    users.splice(index, 1);

    // Output a status code and log message indicating successful deletion
    console.log(`Deleted user with ID ${id}`);
    res.sendStatus(204);
  }
});

// Start the server listening on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});