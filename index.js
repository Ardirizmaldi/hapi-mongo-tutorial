'use strict'

require('dotenv').config()

const Hapi = require('hapi')
const server = new Hapi.Server()
const dbOpts = require('./dbOpts')

server.connection({
  host: 'localhost',
  port: 8080
})

server.register({
  register: require('hapi-mongodb'),
  options: dbOpts
}, (err) => {
  if (err) {
    console.error(err)
    throw err
  }

  server.start(() => {
    console.log('Serving on:', server.info.uri)
  })
})
