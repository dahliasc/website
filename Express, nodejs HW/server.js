// server-express.js
let counter = 0 ('includes global variables');
const express = require('express');
const app = express(); // initialize app
const port = 3000;

// GET callback function returns a response message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js');
});

app.get('/visits', (req, res) => { // at /visits route we want to increase'counter' variable by 1
	counter += 1
      // Text formatting from ‘text formatting’ JavaScript prelab section
	res.send(`There have been ${counter} visits to this session`); //wrapped 'counter' variable turns into text
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

