const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a POST route
app.post('/submit', (req, res) => {
    const data = req.body; // Access the data sent in the request
    console.log(data); // Do something with the data
    // Send a response back to the client
    res.status(201).send({ message: 'Data received', data });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
