/* global testRule */

import rule from './index.js';

const { ruleName } = rule;

/**
 * This test suite uses https://github.com/stylelint/jest-preset-stylelint,
 * as recommended in https://stylelint.io/developer-guide/plugins#testing.
 *
 * It does not test configurations that would cause the plugin code itself
 * to error. It only asserts whether the rule acceptance and rejections
 * work as expected for a given config and code.
 */

/**
 * browsers option: single browser
 */

// IE 6
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 6'],
    },
  ],

  reject: [
    {
      code: 'div { display: table; }',
      description: 'disallow display:table for IE 6',
      message: `Unexpected browser feature "css-table" is not supported by IE 6 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 7,
    },
  ],
});

// IE 8
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 8'],
    },
  ],

  accept: [
    {
      code: 'div { display: table; }',
      description: 'allow display:table for IE 8',
    },
  ],
});

// IE 9
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 9'],
    },
  ],

  reject: [
    {
      code: 'div { width: 10rem; }',
      description: 'disallow rems for IE 9',
      message: `Unexpected browser feature "rem" is only partially supported by IE 9 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 7,
    },
  ],
});

/**
 * browsers option: multiple browsers
 */

// IE 8 and IE 9
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 8', 'IE 9'],
    },
  ],

  accept: [
    {
      code: 'div { display: table; }',
      description: 'allow display:table for IE 8 and IE 9',
    },
  ],
});

// IE 6 and IE 7
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 6', 'IE 7'],
    },
  ],

  reject: [
    {
      code: 'div { display: table; }',
      description: 'disallow display:table for IE 6 and IE 7',
      message: `Unexpected browser feature "css-table" is not supported by IE 6,7 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 7,
    },
  ],
});

/**
 * ignore option
 */

// IE 6 with flexbox ignored
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 6'],
      ignore: ['flexbox'],
    },
  ],

  accept: [
    {
      code: 'div { display: flex; }',
      description: 'allow display:flex for IE 6 if ignored',
    },
  ],
});

// IE 6 with flexbox and table ignored
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 6'],
      ignore: ['flexbox', 'css-table'],
    },
  ],

  accept: [
    {
      code: 'div { display: flex; } a { display: table; }',
      description: 'allow display:flex and display:table for IE 6 if both ignored',
    },
  ],
});

/**
 * ignorePartialSupport option
 */

// IE 11 with partial support ignored
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 11'],
      ignorePartialSupport: true,
    },
  ],

  accept: [
    {
      code: 'div { display: flex; }',
      description: 'allow display:flex for IE 11 if partial support ignored',
    },
  ],
});

// IE 7 and IE 10 with partial support ignored
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 7', 'IE 10'],
      ignorePartialSupport: true,
    },
  ],

  reject: [
    {
      code: 'div { width: 10rem; }',
      description: 'remove the partial support warning for a rule with mixed support',
      message: `Unexpected browser feature "rem" is not supported by IE 7 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 7,
    },
  ],
});

// IE 6 with partial support ignored
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 6'],
      ignorePartialSupport: true,
    },
  ],

  reject: [
    {
      code: 'div { width: 10rem; }',
      description: 'not ignore a rule which is fully unsupported',
      message: `Unexpected browser feature "rem" is not supported by IE 6 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 7,
    },
  ],
});

// IE 11 mix of not supported and partially supported
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 11'],
      ignorePartialSupport: true,
    },
  ],

  reject: [
    {
      code: 'div { display: flex;\nposition: sticky; }',
      description: 'handle unsupported and partially supported separately',
      message: `Unexpected browser feature "css-sticky" is not supported by IE 11 (plugin/no-unsupported-browser-features)`,
      line: 2,
      column: 1,
    },
  ],
});

/**
 * ignoreWithinAtSupports option
 */

// Basic @supports acceptance
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 11'],
      ignore: ['css-featurequeries'],
      ignoreWithinAtSupports: true,
    },
  ],

  accept: [
    {
      code: '@supports (display: flex) { div { display: flex; } }',
      description: 'should ignore unsupported features inside matching @supports',
    },
    {
      code: '@supports (not (display: grid)) { div { display: table; } }',
      description: 'should ignore when inside negated @supports that matches',
    },
    {
      code: `
        @supports (display: table) {
          @supports (display: flex) {
            div { display: flex; }
          }
        }`,
      description: 'should handle nested @supports blocks',
    },
  ],

  reject: [
    {
      code: '@supports (not (display: flex)) { div { display: flex; } }',
      description: 'should still reject unsupported features outside @supports',
      message: `Unexpected browser feature "flexbox" is only partially supported by IE 11 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 41,
    },
    {
      code: '@supports (display: grid) { div { display: flex; } }',
      description: 'should reject when @supports condition doesnt match',
      message: `Unexpected browser feature "flexbox" is only partially supported by IE 11 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 35,
    },
  ],
});

// Complex logical operators
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 7'],
      ignore: ['css-featurequeries'],
      ignoreWithinAtSupports: true,
    },
  ],

  reject: [
    {
      code: '@supports (display: flex) or (display: grid) { div { display: flex; } }',
      description: 'should reject with OR conditions (uncertain support)',
      message: `Unexpected browser feature "flexbox" is not supported by IE 7 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 54,
    },
    {
      code: '@supports (display: flex) and (display: grid) { div { display: table; } }',
      description: 'should reject when one condition in AND is unsupported',
      message: `Unexpected browser feature "css-table" is not supported by IE 7 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 55,
    },
  ],

  accept: [
    {
      code: '@supports (display: table) and (not (display: flex)) { div { display: table; } }',
      description: 'should accept when all AND conditions are satisfied',
    },
  ],
});

// Edge cases with partial support
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 9'],
      ignore: ['css-featurequeries'],
      ignoreWithinAtSupports: true,
    },
  ],

  accept: [
    {
      code: '@supports (width: 1rem) { div { width: 1rem; } }',
      description:
        'should acceot partial support when ignorePartialSupport=false while declared as condition',
    },
  ],
});

// Combination with ignore option
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 10'],
      ignoreWithinAtSupports: true,
      ignore: ['css-table', 'css-featurequeries'],
    },
  ],

  accept: [
    {
      code: 'div { display: table; }',
      description: 'should respect ignore list outside @supports',
    },
    {
      code: '@supports (display: flex) { div { display: flex; } }',
      description: 'should respect ignoreWithinAtSupports inside @supports',
    },
  ],
});

// Complex nested cases
testRule({
  plugins: ['./lib'],
  ruleName,
  config: [
    true,
    {
      browsers: ['IE 11'],
      ignore: ['css-featurequeries'],
      ignoreWithinAtSupports: true,
    },
  ],

  accept: [
    {
      code: `
        @supports (display: grid) {
          .grid { display: grid; }
          @supports (not (display: flex)) {
            .no-flex { display: grid; }
          }
        }`,
      description: 'should handle complex nested @supports structures',
    },
  ],

  reject: [
    {
      code: `
        @supports (display: grid) {
          .grid { display: grid; }
          .outside { display: flex; }
        }`,
      description: 'should reject rules outside @supports but inside its block',
      message: `Unexpected browser feature "flexbox" is only partially supported by IE 11 (plugin/no-unsupported-browser-features)`,
      line: 4,
      column: 22,
    },
  ],
});
