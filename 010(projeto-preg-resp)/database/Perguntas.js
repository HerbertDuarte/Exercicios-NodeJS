// importando o sequelize e iniciando a conexão com o banco de dados
const sequelize = require('sequelize')
const connection = require('./database')

// criando uma nova tabela 'perguntasTable' e insere as informações guardando ela na const Table
const Table = connection.define('tabela_de_perguntas', {
  titulo: {
    type: sequelize.STRING,
    allowNull: false
  },
  comentario: {
    type: sequelize.TEXT,
    allowNull: false
  }
})

// force: false => caso já exista uma tabela 'perguntas' ele não sobrescreve ela criando uma nova tabela.
// .sync => sincroniza a tabela com o banco de dados
Table.sync({force: false}).then(()=>{
  // console.log('tabela criada')
})

module.exports = Table