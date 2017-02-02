'use strict'

const Books = require('./handlers/books')
const bookSchema = require('./schemas/book')

module.exports = [{
  method: 'GET',
  path: '/api/books',
  handler: Books.find
}, {
  method: 'POST',
  path: '/api/books',
  handler: Books.create,
  config: {
    validate: {
      payload: bookSchema
    }
  }
}, {
  method: 'GET',
  path: '/api/books/{id}',
  handler: Books.findOne
}]
