// Dependencies
const express = require('express')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
  res.send("hello from index!")
})
// controller
const bookController = require('./controllers/books_controller')
app.use('/books', bookController)

// Listen
app.listen(PORT, () => {
    console.log( PORT,"is alive")
})