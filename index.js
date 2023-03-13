// DEPENDENCIES
const express = require('express')

// Configuration 
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello from Index!")
})

// controllers
const bookController = require('./controllers/books_controller');
app.use('/books', bookController);

// LISTEN
app.listen(PORT, () => {
    console.log("I AM ALIVE or Greetings from port: ", PORT);
})