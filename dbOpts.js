'use strict'

module.exports = {
  url: process.env.mlab,
  settings: {
    db: {
      native_parser: false
    }
  },
  decorate: true
}
