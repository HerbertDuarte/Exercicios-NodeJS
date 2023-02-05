const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.send('<h1> Home screen</h1>')
})



app.listen(5000, (error)=>{
  error ? console.log('error') : console.log('running server...')
})