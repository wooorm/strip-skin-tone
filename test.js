import test from 'tape'
import {stripSkinTone} from './index.js'

test('stripSkinTone', function (t) {
  t.equal(stripSkinTone('🎅🏿'), '🎅')
  t.equal(stripSkinTone('👎🏾'), '👎')
  t.equal(stripSkinTone('👱🏽'), '👱')
  t.equal(stripSkinTone('👰🏼'), '👰')
  t.equal(stripSkinTone('👌🏻'), '👌')

  t.equal(stripSkinTone('🎅🏿👎🏾👱🏽👰🏼👌🏻'), '🎅👎👱👰👌')

  t.end()
})
