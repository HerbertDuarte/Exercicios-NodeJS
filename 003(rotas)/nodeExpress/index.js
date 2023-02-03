const express = require('express') // importando o express
const app = express() // iniciando o express na const app

//cria a rota root com o método GET e devolve uma response RES
app.get('/',function(req,res){
//somente pode haver UMA response
  res.send('Essa é a home do app')
})

app.get('/blog',function(req,res){
  res.send('<h1>Essa é a página de BLOG</h1><br><button>curtir</button>')
})

app.listen(3030,function(erro){
  if(erro){console.log('ocorreu um erro')}
  else{console.log('servidor funciando')}
})