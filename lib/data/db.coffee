
config = require '../config'

Sequelize = require('sequelize')

db = config.env().db

console.log 'connecting to database:', JSON.stringify db
sequelize = new Sequelize db.database, db.username, db.password, { host: db.host, dialect: 'mysql' }

if process.env.NODE_ENV == "development"
  redis = require("redis").createClient(6379, '127.0.0.1')
else
  { REDIS_HOST } = process.env

  redis = require("redis").createClient(6379, 'redis', {})

module.exports =
  redis: redis
  seq: sequelize
  sync: (cb) -> sequelize.sync()
