// iniciando o sequelize
const sequelize = require('sequelize')
// criando um novo banco de dados e a conexão com o banco de dados 'perguntas'.
const connection = new sequelize('perguntas', 'root', '12300123',{
  host: 'localhost',
  dialect : 'mysql'
})

// exportando a conexão
module.exports = connection