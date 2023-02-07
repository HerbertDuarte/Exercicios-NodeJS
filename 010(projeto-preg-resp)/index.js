const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

// conexão com o banco de dados

connection
  .authenticate()
  .then(()=>{
    console.log('conexão feita com o banco de dados')
  })
  .catch((error)=>{
    console.log(error)
  })

// rotas

// estou dizendo para o express usar o ejs como engine de renderizador de html.
app.set('view engine', 'ejs')
// cria uma pasta public para armazenar arquivos estáticos
app.use(express.static('public'))
// chamando o body parser para capturar os dados do formulário
app.use(bodyParser.urlencoded({extended: false}))
// permitindo que os dados do formulário sejam lidos via json
app.use(bodyParser.json())

// rotas
app.get('/', (req, res)=>{
  res.render('index')
})

app.get('/perguntar', (req, res)=>{
  res.render('perguntar')
})

app.post('/form', (req,res)=>{
  let titulo = req.body.titulo
  let comentario = req.body.comentario

  module.exports = {titulo, comentario}

  res.render('success')
})

app.listen(4000, (error)=>{
  error ? console.log('error') : console.log('running server...')
})