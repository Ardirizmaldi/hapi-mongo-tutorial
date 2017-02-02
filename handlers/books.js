'use strict'

exports.find = function (request, reply) {
  const db = request.mongo.db

  db.collection('books').find().toArray((err, result) => {
    if (err) {
      console.error(err)
      throw err
    }
    reply(result)
  })
}
