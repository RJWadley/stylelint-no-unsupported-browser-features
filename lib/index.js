const _ = require('lodash');
const stylelint = require('stylelint');
const doiuse = require('doiuse');
const Result = require('postcss/lib/result');

/**
 * Plugin settings
 */

const ruleName = 'plugin/no-unsupported-browser-features';
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: details => `Unexpected browser feature ${details}`
});

/**
 * Options
 */

const optionsSchema = {
  browsers: [_.isString],
  ignore: [_.isString]
};

/**
 * Utilities
 */

function cleanWarningText(warningText) {
  // Get index of feature Id
  const featureIdIndex = warningText.lastIndexOf('(');

  // Get feature Id, then replace brackets with quotes
  const featureId = warningText.slice(featureIdIndex, warningText.length).replace(/\(|\)/g, '"');

  // Get start of support text i.e. "x not supported by...", or "y only partially supported by..."
  const browserSupportStartIndex =
    warningText.indexOf('not') !== -1 ? warningText.indexOf('not') : warningText.indexOf('only');

  // Get browser support text, then strip brackets.
  const browserSupport = warningText
    .slice(browserSupportStartIndex, featureIdIndex - 1)
    .replace(/\(|\)|:/g, '');

  const cleanedWarningText = `${featureId} is ${browserSupport}`;

  return cleanedWarningText;
}

/**
 * The main plugin rule
 */

function ruleFunction(on, options) {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: options,
      possible: optionsSchema,
      optional: true
    });

    const doiuseOptions = _.pick(options, Object.keys(optionsSchema));
    const doiuseResult = new Result();

    if (!validOptions) return;

    doiuse(doiuseOptions).postcss(root, doiuseResult);
    doiuseResult.warnings().forEach(doiuseWarning => {
      stylelint.utils.report({
        ruleName,
        result,
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
