const sequelize = require('sequelize')
const connection = new sequelize('perguntas', 'root', '12300123',{
  host: 'localhost',
  dialect : 'mysql'
})

module.exports = connection