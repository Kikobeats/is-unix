'use strict'

const test = require('ava')

const isUNIX = require('..')

test('(empty)', t => {
  t.false(isUNIX())
})
;['win32'].forEach(input => {
  test(input, t => t.false(isUNIX(input)))
})
