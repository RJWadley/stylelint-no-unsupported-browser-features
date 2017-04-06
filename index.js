// dependencies
var _ = require('lodash')
var stylelint = require('stylelint')
var doiuse = require('doiuse')
var Result = require('postcss/lib/result')
var cleanWarningText = require('./lib/cleanWarningText')
var parseOptions = require('./lib/parseOptions')

// plugin settings
var ruleName = 'plugin/no-unsupported-browser-features'
var messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: function (details) { return 'Unexpected browser feature ' + details }
})

// the allowed options
var optionsSchema = {
  browsers: [_.isString],
  ignore: [_.isString]
}

// the main plugin rule
var ruleFunction = function (on, options) {
  return function postCssPlugin(root, result) {
    var validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: options,
      possible: optionsSchema,
      optional: true
    })

    var doiuseOptions = parseOptions(options)
    var doiuseResult = new Result()

    if (!validOptions) return

    doiuse(doiuseOptions).postcss(root, doiuseResult)
    doiuseResult.warnings().forEach(function reportWarning(doiuseWarning) {
      stylelint.utils.report({
        ruleName: ruleName,
        result: result,
        message: messages.rejected(cleanWarningText(doiuseWarning.text)),
        node: doiuseWarning.node,
        line: doiuseWarning.line,
        column: doiuseWarning.column
      })
    })
  }
}

// main plugin export
module.exports = stylelint.createPlugin(ruleName, ruleFunction)

// other exports
module.exports.ruleName = ruleName
module.exports.messages = messages
