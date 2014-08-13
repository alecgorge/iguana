
config = require '../config'

Sequelize = require('sequelize-mysql').sequelize

db = config.env().db

console.log 'connecting to database:', JSON.stringify db
sequelize = new Sequelize db.database, db.username, db.password, host: db.host, dialect: 'mysql'

module.exports =
	seq: sequelize
	sync: (cb) -> sequelize.sync()
