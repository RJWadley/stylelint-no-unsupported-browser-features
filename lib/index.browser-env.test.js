/* global testRule */

const { ruleName } = require('.');

/**
 * This test suite uses https://github.com/stylelint/jest-preset-stylelint,
 * as recommended in https://stylelint.io/developer-guide/plugins#testing.
 *
 * It does not test configurations that would cause the plugin code itself
 * to error. It only asserts whether the rule acceptance and rejections
 * work as expected for a given config and code.
 *
 * This specific test does not pass a secondary configuration object, to test
 * how the plugin behaves without it. Instead it relies on browserslist
 * resolving the supported browsers. We're setting the environment vars
 * BROWSERSLIST_DISABLE_CACHE and BROWSERSLIST='IE 8' in the package.json scripts
 * so that the browser will resolve to IE 8.
 *
 * See also: https://github.com/browserslist/browserslist#environment-variables
 */

testRule({
  plugins: ['.'],
  ruleName,
  config: true,

  accept: [
    {
      code: 'div { display: inline-block; }',
      description: 'allow display:inline-block for IE 8',
    },
    {
      code: 'div { display: table; }',
      description: 'allow display:table for IE 8',
    },
  ],
  reject: [
    {
      code: 'div { cursor: no-drop; }',
      description: 'disallow css3-cursors for IE 8',
      message: `Unexpected browser feature "css3-cursors" is only partially supported by IE 8 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 7,
    },
    {
      code: 'div { opacity: 0; }',
      description: 'disallow opacity for IE 8',
      message: `Unexpected browser feature "css-opacity" is only partially supported by IE 8 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 7,
    },
    {
      code: 'div { width: 5rem; }',
      description: 'disallow rems for IE 8',
      message: `Unexpected browser feature "rem" is not supported by IE 8 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 7,
    },
    {
      code: 'div { display: flex; }',
      description: 'disallow display:flex for IE 8',
      message: `Unexpected browser feature "flexbox" is not supported by IE 8 (plugin/no-unsupported-browser-features)`,
      line: 1,
      column: 7,
    },
  ],
});

testRule({
  plugins: ['.'],
  ruleName,
  config: [
    true,
    {
      ignore: ['rem', 'flexbox'],
    },
  ],

  accept: [
    {
      code: 'div { width: 5rem; }',
      description: 'allow rems for IE 8 if ignored',
    },
    {
      code: 'div { display: flex; }',
      description: 'allow display:flex for IE 8 if ignored',
    },
  ],
});

testRule({
  plugins: ['.'],
  ruleName,
  config: [
    true,
    {
      ignorePartialSupport: true,
    },
  ],

  accept: [
    {
      code: 'div { opacity: 0; }',
      description: 'allow opacity for IE 8 if partial support is ignored',
    },
    {
      code: 'div { cursor: no-drop; }',
      description: 'allow css3-cursors for IE 8 if partial support is ignored',
    },
  ],
});
