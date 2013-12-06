
Sequelize = require('sequelize-mysql').sequelize

sequelize = new Sequelize 'lotusod', 'root', 'snowman42', dialect: 'mysql'

module.exports = 
	seq: sequelize
	sync: (cb) -> sequelize.sync()
