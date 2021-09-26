'use strict'

const test = require('ava')

const isUNIX = require('..')

;['aix', 'android', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos'].forEach(
  input => {
    test(input, t => t.true(isUNIX(input)))
  }
)
