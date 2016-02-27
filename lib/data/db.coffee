
config = require '../config'

Sequelize = require('sequelize')

db = config.env().db

console.log 'connecting to database:', JSON.stringify process.env.DATABASE_URL
sequelize = new Sequelize process.env.DATABASE_URL, { dialect: 'mysql' }

console.log "env: " + process.env.NODE_ENV

if process.env.NODE_ENV == "development"
  redis = require("redis").createClient(6379, '127.0.0.1')
else
  { REDIS_HOST } = process.env

  redis = require("redis").createClient(process.env.REDIS_URL, {})

module.exports =
  redis: redis
  seq: sequelize
  sync: (cb) -> sequelize.sync()
