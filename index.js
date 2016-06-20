'use strict'

function isUnix (platform) {
  return ['linux', 'darwin', 'freebsd', 'sunos'].indexOf(platform) !== -1
}

module.exports = isUnix
