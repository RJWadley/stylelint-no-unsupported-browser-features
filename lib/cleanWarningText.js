// util function
function cleanWarningText(warningText) {
  // Get index of feature Id
  var featureIdIndex = warningText.lastIndexOf('(')

  // Get feature Id, then replace brackets with quotes
  var featureId = warningText.slice(featureIdIndex, warningText.length).replace(/\(|\)/g, '"')

  // Get start of support text i.e. "x not supported by...", or "y only partially supported by..."
  var browserSupportStartIndex = warningText.indexOf('not') !== -1 ? warningText.indexOf('not') : warningText.indexOf('only')

  // Get browser support text, then strip brackets.
  var browserSupport = warningText.slice(browserSupportStartIndex, featureIdIndex - 1).replace(/\(|\)|:/g, '')

  var cleanedWarningText = featureId + ' is ' + browserSupport

  return cleanedWarningText
}

module.exports = cleanWarningText
