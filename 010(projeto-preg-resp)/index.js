// imports

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
var perguntaModel = require('./database/Perguntas')

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
  // busca todas as perguntas do model pergunta (raw : true => mostra apenas os dados crus da tabela)
  perguntaModel.findAll({raw : true}).then(perguntas => {
    res.render('index', {
      perguntas
    })
  })
})

app.get('/perguntar', (req, res)=>{
  res.render('perguntar')
})

app.post('/salvarPergunta', (req,res)=>{
  let titulo = req.body.titulo
  let comentario = req.body.comentario
  perguntaModel.create({
    titulo,
    comentario
  }).then(() => {
    console.log('dados enviados com sucesso!')
    res.redirect('/')
  }).catch((err)=>{
    console.log('envio falhou, erro : ' + err)
  })

})

app.listen(4000, (error)=>{
  error ? console.log('error') : console.log('running server...')
})