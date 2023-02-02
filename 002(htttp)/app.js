var http = require('http')

// CREATESERVER => cria um servidor no localhost que é referido pelo HTTP
// LISTEN => indica a porta do localhost em que o servidor irá rodar
http.createServer((req, res)=>{
  res.end('<h1 style="text-align:center">Welcome to local server!</h1>')
  // END => print in document html the content in '', it read tags html
}).listen(8181)
// CONSOLE.LOG => o que aparecerá durante a execução do script
console.log('running server...')