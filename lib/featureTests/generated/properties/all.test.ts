/* AUTO_GENERATED: true */

/* 
feature: properties.all
docs: https://developer.mozilla.org/docs/Web/CSS/all
spec: https://drafts.csswg.org/css-cascade/#all-shorthand
*/

import { testRule } from 'lib/testRule';

/**
 * Detects the 'all' property with the 'initial' value.
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag all: initial',
  code: `
    a { all: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'all' property with the 'inherit' value.
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag all: inherit',
  code: `
    a { all: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'all' property with the 'unset' value.
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag all: unset',
  code: `
    a { all: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'all' property with the 'revert' value.
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag all: revert',
  code: `
    a { all: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'all' property with the 'revert-layer' value.
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag all: revert-layer',
  code: `
    a { all: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'all' property when marked with !important.
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag all with !important',
  code: `
    a { all: initial !important; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'all' property when its value is a CSS variable.
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag all with var()',
  code: `
    a { --foo: initial; all: var(--foo); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'all' property correctly with additional whitespace.
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag all with varied whitespace',
  code: `
    a { all :  initial  ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies that the linter correctly flags two occurrences of the 'all' property in separate CSS rules, resulting in two warnings.
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag two instances of all in different rules',
  code: `
    a { all: initial; } b { all: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Detects 'all' property when nested inside a rule (e.g., using Sass-like nesting).
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag all nested inside a rule',
  code: `
    a { color: red; &:hover { all: initial; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures the 'direction' property is not flagged, as it is explicitly excluded from 'all''s reset scope.
 */
testRule({
  featureId: 'properties.all',
  description: 'should not flag direction property',
  code: `
    a { direction: rtl; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures the 'unicode-bidi' property is not flagged, as it is explicitly excluded from 'all''s reset scope.
 */
testRule({
  featureId: 'properties.all',
  description: 'should not flag unicode-bidi property',
  code: `
    a { unicode-bidi: embed; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures CSS custom properties are not flagged by the 'properties.all' feature check.
 */
testRule({
  featureId: 'properties.all',
  description: 'should not flag CSS custom properties',
  code: `
    a { --my-color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures arbitrary other CSS properties are not flagged by the 'properties.all' feature check.
 */
testRule({
  featureId: 'properties.all',
  description: 'should not flag other random properties',
  code: `
    a { color: red; font-size: 16px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures occurrences of 'all' within CSS comments are ignored.
 */
testRule({
  featureId: 'properties.all',
  description: 'should not flag all in comments',
  code: `
    a { /* all: initial; */ color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'all: initial' is not flagged when explicitly guarded by an identical '@supports' query, indicating support is checked.
 */
testRule({
  featureId: 'properties.all',
  description: 'should not flag guarded all with exact match @supports',
  code: `
    @supports (all: initial) { a { all: initial; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'all: initial' is flagged when inside an '@supports' rule checking a different property, as it's not considered guarded.
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag unguarded all with different property in @supports',
  code: `
    @supports (display: flex) { a { all: initial; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures 'all: initial' is flagged when inside an '@supports' rule checking the same property but a different value, as it's not considered guarded.
 */
testRule({
  featureId: 'properties.all',
  description: 'should flag unguarded all with different value in @supports',
  code: `
    @supports (all: unset) { a { all: initial; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
