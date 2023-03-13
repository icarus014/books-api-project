const books = require('express').Router()

books.get('./', (req,res)=>{
    req.send('hello world, from Books API!!!')
})



module.exports = books