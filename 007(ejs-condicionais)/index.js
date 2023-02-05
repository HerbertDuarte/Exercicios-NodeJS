const express = require('express')
const app = express()

// estou dizendo para o express usar o ejs como engine de renderizador de html.
app.set('view engine', 'ejs')

app.get('/:nome?/:lang?', (req, res)=>{
  const nome = req.params.nome
  const lang = req.params.lang
  const exibirMsg = true

  res.render('index', {
    //exporta variáveis para o ejs
    nome,
    lang,
    idade : 20,
    msg: exibirMsg
  })
})

app.listen(4000, (error)=>{
  error ? console.log('error') : console.log('running server...')
})