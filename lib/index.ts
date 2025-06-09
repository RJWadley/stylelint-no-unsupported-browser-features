import stylelint, { type Rule } from 'stylelint';
import { check } from './checker';

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = 'plugin/no-unsupported-browser-features';

const messages = ruleMessages(ruleName, {
  rejected: (selector) => `Unexpected "foo" within selector "${selector}"`,
});

const meta = {
  url: 'https://github.com/foo-org/stylelint-selector-no-foo/blob/main/README.md',
};

const ruleFunction: Rule = (primary, secondaryOptions, context) => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primary,
      possible: [true],
    });

    if (!validOptions) return;

    check(root, () => null);

    root.walkRules((ruleNode) => {
      const { selector } = ruleNode;

      if (!selector.includes('foo')) return;

      report({
        result,
        ruleName,
        message: messages.rejected(selector),
        node: ruleNode,
        word: selector,
      });
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default createPlugin(ruleName, ruleFunction);
