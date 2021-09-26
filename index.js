'use strict'

function isUnix (platform) {
  platform = (platform || '').toLowerCase()
  return ['linux', 'darwin', 'freebsd', 'sunos', 'aix', 'openbsd', 'android'].indexOf(platform) !== -1
}

module.exports = isUnix
