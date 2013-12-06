
Sequelize = require('sequelize-mysql').sequelize

sequelize = new Sequelize 'lotusod', 'lotusod', 'snowman42', dialect: 'mysql'

module.exports = 
	seq: sequelize
	sync: (cb) -> sequelize.sync()
