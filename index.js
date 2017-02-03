const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 4000
})

server.start(() => {
  console.log('Serving on:', server.info.uri)
})
