'use strict'

exports.find = function (request, reply) {
  const db = request.mongo.db

  db.collection('books').find().toArray((err, result) => {
    if (err) {
      throw err
    }
    reply(result)
  })
}

exports.create = function (request, reply) {
  const db = request.mongo.db

  db.collection('books').insertOne(request.payload, (err, result) => {
    if (err) {
      throw err
    }
    reply('OK')
  })
}
