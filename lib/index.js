const _ = require('lodash');
const stylelint = require('stylelint');
const doiuse = require('doiuse');
const Result = require('postcss/lib/result');

/**
 * Plugin settings
 */

const ruleName = 'plugin/no-unsupported-browser-features';
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: (details) => `Unexpected browser feature ${details}`,
});

/**
 * Options
 */

const optionsSchema = {
  browsers: [_.isString],
  ignore: [_.isString],
  ignorePartialSupport: _.isBoolean,
};

/**
 * Utilities
 */

function cleanWarningText(warningText, ignorePartialSupport) {
  // Get index of feature Id
  const featureIdIndex = warningText.lastIndexOf('(');

  // Get feature Id, then replace brackets with quotes
  const featureId = warningText.slice(featureIdIndex, warningText.length).replace(/\(|\)/g, '"');

  // Get start of support text i.e. "x not supported by...", or "y only partially supported by..."
  const browserSupportStartIndex =
    warningText.indexOf('not') !== -1 ? warningText.indexOf('not') : warningText.indexOf('only');

  // Get browser support text, then strip brackets.
  let browserSupport = warningText
    .slice(browserSupportStartIndex, featureIdIndex - 1)
    .replace(/\(|\)|:/g, '');

  // Check if there's partial support for anything
  const andIndex = browserSupport.indexOf(' and');

  // If there's an and, and partialSupport should be ignored, remove the partial support string
  if (ignorePartialSupport && andIndex !== -1) {
    browserSupport = browserSupport.slice(0, andIndex);
  }

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
      optional: true,
    });

    if (!validOptions) {
      return;
    }

    const ignorePartialSupport = options ? options.ignorePartialSupport : false;
    const doiuseOptions = _.pick(options, Object.keys(optionsSchema));
    const doiuseResult = new Result();

    let usageInfo;

    doiuseOptions.onFeatureUsage = (info) => {
      usageInfo = info;
    };

    doiuse(doiuseOptions).postcss(root, doiuseResult);
    doiuseResult.warnings().forEach((doiuseWarning) => {
      if (ignorePartialSupport && usageInfo.featureData.partial && !usageInfo.featureData.missing) {
        return;
      }

      stylelint.utils.report({
        ruleName,
        result,
        message: messages.rejected(cleanWarningText(doiuseWarning.text, ignorePartialSupport)),
        node: doiuseWarning.node,
        line: doiuseWarning.line,
        column: doiuseWarning.column,
      });
    });
  };
}

module.exports = stylelint.createPlugin(ruleName, ruleFunction);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
