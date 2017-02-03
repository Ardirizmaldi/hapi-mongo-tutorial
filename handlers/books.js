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

exports.findOne = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID

  db.collection('books').findOne({ _id: new ObjectID(request.params.id) }, (err, result) => {
    if (err) {
      throw err
    }
    reply(result)
  })
}

exports.update = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID

  db.collection('books').findOneAndReplace({ _id: new ObjectID(request.params.id) }, request.payload, (err, result) => {
    if (err) {
      throw err
    }
    reply('OK')
  })
}

exports.remove = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID

  db.collection('books').findOneAndDelete({ _id: new ObjectID(request.params.id) }, (err, result) => {
    if (err) {
      throw err
    }
    reply('OK')
  })
}
