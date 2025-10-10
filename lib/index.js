import stylelint from 'stylelint';
import browserslist from 'browserslist';
import doiuse from 'doiuse';
import { Result } from 'postcss';

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

function isString(value) {
  return typeof value === 'string';
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

const optionsSchema = {
  browsers: [isString],
  ignore: [isString],
  ignorePartialSupport: isBoolean,
};

const defaultBrowsers = browserslist();

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

    const usedFeatures = {};
    const doiuseResult = new Result();
    const doiuseOptions = {};

    if (options) {
      Object.keys(optionsSchema).forEach((optionsKey) => {
        doiuseOptions[optionsKey] = options[optionsKey];
      });
    }

    if (!doiuseOptions.browsers) {
      doiuseOptions.browsers = defaultBrowsers;
    }

    doiuseOptions.onFeatureUsage = (info) => {
      // Use the node as key to store feature information
      usedFeatures[info.usage] = info.featureData;
    };

    const { ignorePartialSupport } = doiuseOptions;

    doiuse(doiuseOptions).postcss(root, doiuseResult);
    doiuseResult.warnings().forEach((doiuseWarning) => {
      const featureData = usedFeatures[doiuseWarning.node];
      if (featureData && ignorePartialSupport && featureData.partial && !featureData.missing) {
        return;
      }

      stylelint.utils.report({
        ruleName,
        result,
        message: messages.rejected(cleanWarningText(doiuseWarning.text, ignorePartialSupport)),
        node: doiuseWarning.node,
      });
    });
  };
}

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;

const plugin = stylelint.createPlugin(ruleName, ruleFunction);

export default plugin;
