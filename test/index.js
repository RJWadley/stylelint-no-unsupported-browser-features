var testRule = require('stylelint-test-rule-tape')
var noUnsupported = require('..')

testRule(noUnsupported.rule, {
  ruleName: noUnsupported.ruleName,
  config: null,
  skipBasicChecks: false
})

// Single browser

testRule(noUnsupported.rule, {
  ruleName: noUnsupported.ruleName,
  config: [true, { browsers: ['IE 8'] }],
  skipBasicChecks: true,

  accept: [
    { code: 'display: table;' },
    { code: 'display: table-cell' }
  ],

  reject: [
    {
      code: 'height: calc(1px + 1px);',
      message: 'Unexpected browser feature "calc" is not supported by IE 8 (' + noUnsupported.ruleName + ')',
      line: 1,
      column: 1
    },
    {
      code: 'height: 6rem;',
      message: 'Unexpected browser feature "rem" is not supported by IE 8 (' + noUnsupported.ruleName + ')',
      line: 1,
      column: 1
    }
  ]
})

// Multiple browsers

testRule(noUnsupported.rule, {
  ruleName: noUnsupported.ruleName,
  config: [true, { browsers: ['IE 6', 'IE 8'] }],
  skipBasicChecks: true,

  accept: [
    { code: 'display: block;' },
    { code: 'float: left;' }
  ],

  reject: [
    {
      code: 'display: table;',
      message: 'Unexpected browser feature "css-table" is not supported by IE 6 (' + noUnsupported.ruleName + ')',
      line: 1,
      column: 1
    },
    {
      code: 'display: table-cell',
      message: 'Unexpected browser feature "css-table" is not supported by IE 6 (' + noUnsupported.ruleName + ')',
      line: 1,
      column: 1
    }
  ]
})

// Ignore option

testRule(noUnsupported.rule, {
  ruleName: noUnsupported.ruleName,
  config: [true, { browsers: ['IE 6', 'IE 8'], ignore: ['css-table'] }],
  skipBasicChecks: true,

  accept: [
    { code: 'display: table;' }
  ],

  reject: [
    {
      code: 'width: 20rem;',
      message: 'Unexpected browser feature "rem" is not supported by IE 6,8 (' + noUnsupported.ruleName + ')',
      line: 1,
      column: 1
    }
  ]
})

// Multiple ignore options

testRule(noUnsupported.rule, {
  ruleName: noUnsupported.ruleName,
  config: [true, { browsers: ['IE 6', 'IE 8'], ignore: ['css-table', 'rem'] }],
  skipBasicChecks: true,

  accept: [
    { code: 'display: table;' },
    { code: 'width: 20rem;' }
  ]
})

// Browsers option validation

testRule(noUnsupported.rule, {
  ruleName: noUnsupported.ruleName,
  config: [true, { browsers: [1] }],
  skipBasicChecks: true,

  reject: [
    {
      code: 'a {}',
      message: 'Invalid value "1" for option "browsers" of rule "' + noUnsupported.ruleName + '"'
    }
  ]
})

// Ignore option validation

testRule(noUnsupported.rule, {
  ruleName: noUnsupported.ruleName,
  config: [true, { ignore: [1] }],
  skipBasicChecks: true,

  reject: [
    {
      code: 'a {}',
      message: 'Invalid value "1" for option "ignore" of rule "' + noUnsupported.ruleName + '"'
    }
  ]
})
