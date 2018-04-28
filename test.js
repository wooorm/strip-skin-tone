'use strict'

var test = require('tape')
var strip = require('.')

test('strip', function(t) {
  t.equal(strip('🎅🏿'), '🎅')
  t.equal(strip('👎🏾'), '👎')
  t.equal(strip('👱🏽'), '👱')
  t.equal(strip('👰🏼'), '👰')
  t.equal(strip('👌🏻'), '👌')

  t.equal(strip('🎅🏿👎🏾👱🏽👰🏼👌🏻'), '🎅👎👱👰👌')

  t.end()
})
