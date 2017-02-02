'use strict'

const Joi = require('joi')

module.exports = {
  title: Joi.string().required(),
  author: Joi.string().required()
}
