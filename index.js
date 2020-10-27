'use strict'

module.exports = strip

var re = /🏻|🏼|🏽|🏾|🏿/g

function strip(value) {
  return value.replace(re, '')
}
