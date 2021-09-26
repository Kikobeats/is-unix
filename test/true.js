'use strict'

const test = require('ava')

const isUNIX = require('..')

;['linux', 'darwin', 'freebsd', 'sunos'].forEach(input => {
  test(input, t => t.true(isUNIX(input)))
})
