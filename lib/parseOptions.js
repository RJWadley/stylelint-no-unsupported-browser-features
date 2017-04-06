var parseOptions = function (options) {
  var doiuseOptions = {}

  if (options && options.browsers) {
    doiuseOptions.browsers = options.browsers
  }

  if (options && options.ignore) {
    doiuseOptions.ignore = options.ignore
  }

  return doiuseOptions
}

module.exports = parseOptions
