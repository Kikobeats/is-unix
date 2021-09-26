'use strict'

module.exports = (platform = '') => {
  platform = platform.toLowerCase()
  return (
    [
      'linux',
      'darwin',
      'freebsd',
      'sunos',
      'aix',
      'openbsd',
      'android'
    ].indexOf(platform) !== -1
  )
}
