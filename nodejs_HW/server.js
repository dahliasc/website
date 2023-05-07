// server-express.js
let counter = 0;
const express = require('express');
const app = express(); // initialize app
const port = 3000;

// GET callback function returns a response message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js')
});
app.get('/visits', (req, res) => { // at /visits route we want to increase'counter' variable by 1
	counter += 1
      // Text formatting from ‘text formatting’ JavaScript prelab section
	res.send(`There have been ${counter} visits to this session`); //wrapped 'counter' variable turns into text
});

//Rock Paper Sciccors Game, each route opton user selects, 'bot' will randomly select 1/3 options 
//Paper (2) covers Rock (1)
 // Scissors (3) cuts Paper (2) 
 // Rock (1) smashes Scissors (3) 

app.get('/rock', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt) //prints out bot choice --> great for trouble shooting
    if (rndInt === 3){
        res.send('Opposing player picked scissors, you win :)!')
    } else if (rndInt === 1){
        res.send("Opposing player picked rock, it's a tie, try again!")
    } else if (rndInt ===2){
        res.send('Opposing player picked paper, you lose!')
    }  
});

app.get('/paper', (req, res) => { 
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt) //prints out bot choice --> great for trouble shooting
    if (rndInt === 3){
        res.send('Opposing player picked scissors, you lose!')
    } else if (rndInt === 1){
        res.send('Opposing player picked rock, you win :)!')
    } else if (rndInt ===2){
        res.send("Opposing player picked paper,  it's a tie, try again!")
    }  
});
app.get('/scissors', (req, res) => { //scissors is 3
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt) //prints out bot choice --> great for trouble shooting
    if (rndInt === 3){
        res.send("Opposing player picked scissors,  it's a tie, try again!")
    } else if (rndInt === 1){
        res.send('Opposing player picked rock, you lose!')
    } else if (rndInt ===2){
        res.send('Opposing player picked paper, you win :)!')
    }  
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});
