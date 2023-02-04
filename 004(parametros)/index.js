const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.send('<h1>Tela de home</h1>')
})

app.get('/ola/:nome/:empresa?', (req, res)=>{
  //req => requisição solicitada pelo usuário
  //res => resposta do servidor
  const nome = req.params.nome
  const empresa = req.params.empresa

  // [/:nome_do_parametro] => estrutura padrão para requisitar parâmetros obrigatórios
  // [/:nome_do_parametro?] => estrutura padrão para requisitar parâmetros opcionais (?)
  res.send(`<h1>Olá, ${nome}</h1>${empresa?empresa:''}`)

})

app.get('/rota1', (req, res)=>{
  // há também o método de parâmetros QUERY PARAMS => NÃO precisam ser definido na rota, pode ser chamado usando '?nome=herbert' por exemplo
  const nome = req.query['nome']

  res.send(`<h1>${nome?nome:'Nenhum nome passado'}</h1>`)
})

app.listen(4000,function(error){
  if(error){console.log('Ops, ocorreu um erro!')}
  else{console.log('running server...')}
})