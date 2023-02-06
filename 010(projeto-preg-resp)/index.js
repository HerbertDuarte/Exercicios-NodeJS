const express = require('express')
const app = express()

// estou dizendo para o express usar o ejs como engine de renderizador de html.
app.set('view engine', 'ejs')
// cria uma pasta public para armazenar arquivos estáticos
app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('index')
})

app.get('/perguntar', (req, res)=>{
  res.render('perguntar')
})

app.listen(4000, (error)=>{
  error ? console.log('error') : console.log('running server...')
})