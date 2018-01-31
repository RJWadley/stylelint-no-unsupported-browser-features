var _ = require('lodash');
var stylelint = require('stylelint');
var doiuse = require('doiuse');
var Result = require('postcss/lib/result');

/**
 * Plugin settings
 */

var ruleName = 'plugin/no-unsupported-browser-features';
var messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: function rejectRule(details) {
    return 'Unexpected browser feature ' + details;
  }
});

/**
 * Options
 */

var optionsSchema = {
  browsers: [_.isString],
  ignore: [_.isString]
};

/**
 * Utilities
 */

function cleanWarningText(warningText) {
  // Get index of feature Id
  var featureIdIndex = warningText.lastIndexOf('(');

  // Get feature Id, then replace brackets with quotes
  var featureId = warningText.slice(featureIdIndex, warningText.length).replace(/\(|\)/g, '"');

  // Get start of support text i.e. "x not supported by...", or "y only partially supported by..."
  var browserSupportStartIndex =
    warningText.indexOf('not') !== -1 ? warningText.indexOf('not') : warningText.indexOf('only');

  // Get browser support text, then strip brackets.
  var browserSupport = warningText
    .slice(browserSupportStartIndex, featureIdIndex - 1)
    .replace(/\(|\)|:/g, '');

  var cleanedWarningText = featureId + ' is ' + browserSupport;

  return cleanedWarningText;
}

/**
 * The main plugin rule
 */

function ruleFunction(on, options) {
  return function postCssPlugin(root, result) {
    var validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: options,
      possible: optionsSchema,
      optional: true
    });

    var doiuseOptions = _.pick(options, Object.keys(optionsSchema));
    var doiuseResult = new Result();

    if (!validOptions) return;

    doiuse(doiuseOptions).postcss(root, doiuseResult);
    doiuseResult.warnings().forEach(function reportWarning(doiuseWarning) {
      stylelint.utils.report({
        ruleName: ruleName,
        result: result,
        message: messages.rejected(cleanWarningText(doiuseWarning.text)),
        node: doiuseWarning.node,
        line: doiuseWarning.line,
        column: doiuseWarning.column
      });
    });
  };
}

module.exports = stylelint.createPlugin(ruleName, ruleFunction);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
