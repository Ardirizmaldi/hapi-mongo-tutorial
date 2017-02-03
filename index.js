const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 8080
})

server.start(() => {
  console.log('Serving on:', server.info.uri)
})
