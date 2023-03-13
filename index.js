

// DEPENDENCIES
const express = require('express')

// Configuration 
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
app.listen(3000, () => {
    console.log("I AM ALIVE or Greetings from port: ", PORT);
})

module.exports = app;