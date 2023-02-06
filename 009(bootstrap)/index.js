const express = require('express')
const app = express()

// estou dizendo para o express usar o ejs como engine de renderizador de html.
app.set('view engine', 'ejs')
// cria uma pasta public para armazenar arquivos estáticos
app.use(express.static('public'))

app.get('/:nome?/:lang?', (req, res)=>{
  const nome = req.params.nome
  const lang = req.params.lang
  const exibirMsg = false
  const products = [
    {name: 'doritos', price: 2.49},
    {name: 'milk', price : 3.15},
    {name: 'creatine', price : 70.05},
    {name: 'whey protein', price: 89.99}
  ]
  res.render('index', {
    //exporta variáveis para o ejs
    nome,
    lang,
    idade : 20,
    msg: exibirMsg,
    products
  })
})

app.listen(4000, (error)=>{
  error ? console.log('error') : console.log('running server...')
})