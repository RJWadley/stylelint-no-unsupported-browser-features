/* AUTO_GENERATED: true */

/* 
feature: properties.animation-direction
docs: https://developer.mozilla.org/docs/Web/CSS/animation-direction
spec: https://drafts.csswg.org/css-animations/#animation-direction
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the detection of animation-direction with 'normal' value.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: "should detect 'normal' value",
  code: `
    a { animation-direction: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with 'reverse' value.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: "should detect 'reverse' value",
  code: `
    a { animation-direction: reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with 'alternate' value.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: "should detect 'alternate' value",
  code: `
    a { animation-direction: alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with 'alternate-reverse' value.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: "should detect 'alternate-reverse' value",
  code: `
    a { animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with multiple comma-separated values.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect multiple values',
  code: `
    a { animation-direction: normal, reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with multiple comma-separated values in a different order.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect multiple values with different order',
  code: `
    a { animation-direction: alternate, normal, alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of -webkit-animation-direction property.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect -webkit- prefixed property',
  code: `
    a { -webkit-animation-direction: normal; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the detection of -moz-animation-direction property.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect -moz- prefixed property',
  code: `
    a { -moz-animation-direction: reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the detection of -ms-animation-direction property.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect -ms- prefixed property',
  code: `
    a { -ms-animation-direction: alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the detection of -o-animation-direction property.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect -o- prefixed property',
  code: `
    a { -o-animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests the detection of multiple prefixed and unprefixed animation-direction properties in one rule.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect multiple prefixed and unprefixed properties',
  code: `
    a { -webkit-animation-direction: normal; animation-direction: reverse; -moz-animation-direction: alternate; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with 'initial' keyword.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: "should detect 'initial' keyword",
  code: `
    a { animation-direction: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with 'inherit' keyword.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: "should detect 'inherit' keyword",
  code: `
    a { animation-direction: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with 'unset' keyword.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: "should detect 'unset' keyword",
  code: `
    a { animation-direction: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with 'revert' keyword.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: "should detect 'revert' keyword",
  code: `
    a { animation-direction: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with 'revert-layer' keyword.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: "should detect 'revert-layer' keyword",
  code: `
    a { animation-direction: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction when its value is a CSS variable.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect animation-direction with var()',
  code: `
    .foo { --my-direction: normal; animation-direction: var(--my-direction); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-direction is not detected when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should not detect animation-direction when guarded by exact @supports query',
  code: `
    @supports (animation-direction: normal) { a { animation-direction: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-direction is detected when guarded by @supports with a different value.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect animation-direction when guarded by @supports with different value',
  code: `
    @supports (animation-direction: reverse) { a { animation-direction: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-direction is detected when guarded by @supports with a different property.
 */
testRule({
  featureId: 'properties.animation-direction',
  description:
    'should detect animation-direction when guarded by @supports with different property',
  code: `
    @supports (display: flex) { a { animation-direction: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with comments inside the value.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect with comments in the value',
  code: `
    a { animation-direction: /* inline comment */ normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with a mixed-case property name.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect with mixed case property name',
  code: `
    a { AnImAtIoN-DiReCtIoN: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction with extra whitespace.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect with extra whitespace',
  code: `
    a { animation-direction   :   normal   ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of animation-direction when used inside an @keyframes rule.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect when used in keyframes',
  code: `
    @keyframes slide { from { left: 0; } to { animation-direction: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of multiple animation-direction properties in different rules.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should detect multiple occurrences in different rules',
  code: `
    a { animation-direction: normal; } b { animation-direction: reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures at least one test produces two warnings for coverage.
 */
testRule({
  featureId: 'properties.animation-direction',
  description: 'should have two warnings',
  code: `
    a { animation-direction: normal; } b { animation-direction: reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});
