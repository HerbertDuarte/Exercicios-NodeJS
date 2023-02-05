const { text } = require('express')
const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.send('<h1> Home screen</h1>')
})

// tipos primitivos mysql :

// text
// character
// float 
// int 
// date 
// blob

app.listen(5000, (error)=>{
  error ? console.log('error') : console.log('running server...')
})