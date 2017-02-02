'use strict'

const Books = require('./handlers/books')

module.exports = [{
  method: 'GET',
  path: '/api/books',
  handler: Books.find
}]
