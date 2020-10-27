'use strict'

module.exports = strip

function strip(value) {
  return value.replace(/🏻|🏼|🏽|🏾|🏿/g, '')
}
