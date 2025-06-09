/* AUTO_GENERATED: true */

/* 
feature: properties.animation-range-start
docs: https://developer.mozilla.org/docs/Web/CSS/animation-range-start
spec: https://drafts.csswg.org/scroll-animations/#animation-range-start
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the basic usage of animation-range-start with the 'normal' keyword.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: "should detect animation-range-start with 'normal' value",
  code: `
    a { animation-range-start: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-start with a pixel length value.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start with length value',
  code: `
    a { animation-range-start: 100px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-start with a percentage value.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start with percentage value',
  code: `
    a { animation-range-start: 20%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-start with the 'entry' named timeline range.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: "should detect animation-range-start with named timeline range 'entry'",
  code: `
    a { animation-range-start: entry; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-start with 'entry' and a percentage offset.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description:
    'should detect animation-range-start with named timeline range and percentage offset',
  code: `
    a { animation-range-start: entry 25%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-start with 'exit' and a pixel length offset.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start with named timeline range and length offset',
  code: `
    a { animation-range-start: exit 10px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures detection when animation-range-start is part of a larger animation declaration block.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start alongside other animation properties',
  code: `
    a { animation-name: foo; animation-timeline: view(); animation-range-start: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-range-start is flagged when its value is a CSS variable, as the resolved value cannot be known.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start when value is a CSS variable',
  code: `
    a { --start-range: entry; animation-range-start: var(--start-range); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of animation-range-start when set to 'initial'.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: "should detect animation-range-start with 'initial' keyword",
  code: `
    a { animation-range-start: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of animation-range-start when set to 'unset'.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: "should detect animation-range-start with 'unset' keyword",
  code: `
    a { animation-range-start: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of animation-range-start when set to 'inherit'.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: "should detect animation-range-start with 'inherit' keyword",
  code: `
    a { animation-range-start: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of animation-range-start when set to 'revert'.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: "should detect animation-range-start with 'revert' keyword",
  code: `
    a { animation-range-start: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-range-start is not flagged when a direct match is found in @supports.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should NOT detect animation-range-start when guarded by exact @supports',
  code: `
    @supports (animation-range-start: normal) { a { animation-range-start: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-range-start is flagged when @supports query has same property but different value.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start when @supports checks different value',
  code: `
    @supports (animation-range-start: 100px) { a { animation-range-start: 20%; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-range-start is flagged when @supports query checks a different property.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start when @supports checks different property',
  code: `
    @supports (display: block) { a { animation-range-start: cover; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-range-start is detected regardless of value casing.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start with case-insensitive value',
  code: `
    a { animation-range-start: NORMAL; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-start with different whitespace around values.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start with varied whitespace',
  code: `
    a { animation-range-start :  entry  50 % ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection within a pseudo-class, which is considered the same display context.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start in pseudo-class nesting',
  code: `
    a { &:hover { animation-range-start: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection within a pseudo-element, which is considered a new element and still flagged.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start in pseudo-element nesting',
  code: `
    a { &::before { animation-range-start: entry 10px; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that multiple instances of animation-range-start in one rule are all detected.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should generate multiple warnings for multiple usages',
  code: `
    a { animation-range-start: normal; color: red; animation-range-start: entry; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that an invalid value for animation-range-start does not get flagged by this rule, as it's a syntax error.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should NOT detect animation-range-start with invalid value',
  code: `
    a { animation-range-start: invalid-value; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-range-start with a named range that is not defined in the spec, ensuring it's still flagged.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start with an unknown named range',
  code: `
    a { animation-range-start: unknown-range 30%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-start when multiple values are provided, separated by commas.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start with multiple comma-separated values',
  code: `
    a { animation-range-start: normal, 100px, entry 20%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests animation-range-start with a calc() function for length-percentage.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start with calc() function',
  code: `
    a { animation-range-start: calc(10% + 50px); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-start with a named range and a calc() function for offset.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start with calc() function and named range',
  code: `
    a { animation-range-start: cover calc(100% - 20px); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-start within a flex display context.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start in a flex context',
  code: `
    .foo { display: flex; animation-range-start: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-start within a grid display context.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start in a grid context',
  code: `
    .bar { display: grid; animation-range-start: 50%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that comments do not interfere with detection.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description: 'should detect animation-range-start with comments',
  code: `
    a { /* comment before */ animation-range-start: normal; /* comment after */ }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests different named timeline ranges for animation-range-start.
 */
testRule({
  featureId: 'properties.animation-range-start',
  description:
    "should detect animation-range-start with named ranges like 'cover', 'contain', 'entry-crossing', 'exit-crossing'",
  code: `
    a { animation-range-start: cover; animation-range-start: contain; animation-range-start: entry-crossing; animation-range-start: exit-crossing; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 4 },
});
