/* global testRule */

const { ruleName } = require('.');

/**
 * This test suite uses https://github.com/stylelint/jest-preset-stylelint,
 * as recommended in https://stylelint.io/developer-guide/plugins#testing
 */

/**
 * browsers option: single browser
 */

// IE 6
testRule({
  plugins: ['.'],
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
  plugins: ['.'],
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
  plugins: ['.'],
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
  plugins: ['.'],
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
  plugins: ['.'],
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
  plugins: ['.'],
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
  plugins: ['.'],
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
  plugins: ['.'],
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
  plugins: ['.'],
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
  plugins: ['.'],
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
