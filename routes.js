'use strict'

module.exports = [{
  method: 'GET',
  path: '/api/books',
  handler: function (request, reply) {
    const db = request.mongo.db

    db.collection('books').find().toArray((err, result) => {
      if (err) {
        console.error(err)
        throw err
      }
      reply(result)
    })
  }
}]
