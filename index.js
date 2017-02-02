'use strict'

require('dotenv').config()

const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 8080
})

server.register({
  register: require('hapi-mongodb'),
  options: require('./dbOpts')
}, (err) => {
  if (err) {
    console.error(err)
    throw err
  }

  server.route(require('./routes'))

  server.start(() => {
    console.log('Serving on:', server.info.uri)
  })
})
