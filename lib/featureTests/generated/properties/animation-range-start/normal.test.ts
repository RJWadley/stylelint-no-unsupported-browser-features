/* AUTO_GENERATED: true */

/* 
feature: properties.animation-range-start.normal
docs: https://developer.mozilla.org/docs/Web/CSS/animation-range-start
spec: https://drafts.csswg.org/scroll-animations/#valdef-animation-range-start-normal
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the basic usage of animation-range-start with the 'normal' keyword.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description: 'Should detect animation-range-start: normal;',
  code: `
    a { animation-range-start: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that values other than 'normal', like percentages, are not flagged.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description: 'Should not detect animation-range-start with a percentage value',
  code: `
    a { animation-range-start: 20%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that values other than 'normal', like lengths, are not flagged.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description: 'Should not detect animation-range-start with a length value',
  code: `
    a { animation-range-start: 100px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that named timeline range keywords like 'cover' are not flagged when looking for 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description: 'Should not detect animation-range-start with a named timeline range keyword',
  code: `
    a { animation-range-start: cover; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that named timeline ranges with percentages like 'cover 20%' are not flagged when looking for 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description: 'Should not detect animation-range-start with a named timeline range and percentage',
  code: `
    a { animation-range-start: cover 20%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'normal' is not detected when the value is a CSS variable, as its resolved value is unknown.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description: 'Should not detect animation-range-start with a CSS variable',
  code: `
    a { --my-start: normal; animation-range-start: var(--my-start); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures CSS-wide keyword 'initial' is not flagged, as it's not explicitly 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description: "Should not detect animation-range-start with 'initial' keyword",
  code: `
    a { animation-range-start: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures CSS-wide keyword 'inherit' is not flagged, as it's not explicitly 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description: "Should not detect animation-range-start with 'inherit' keyword",
  code: `
    a { animation-range-start: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures CSS-wide keyword 'unset' is not flagged, as it's not explicitly 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description: "Should not detect animation-range-start with 'unset' keyword",
  code: `
    a { animation-range-start: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-range-start: normal is not flagged when explicitly guarded by a matching @supports query.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description:
    'Should not detect animation-range-start: normal when guarded by exact @supports query',
  code: `
    @supports (animation-range-start: normal) { a { animation-range-start: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-range-start: normal is flagged when guarded by an @supports query for a different property.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description:
    'Should detect animation-range-start: normal when guarded by incorrect @supports property',
  code: `
    @supports (display: flex) { a { animation-range-start: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-range-start: normal is flagged when guarded by an @supports query for the same property but a different value.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description:
    'Should detect animation-range-start: normal when guarded by incorrect @supports value',
  code: `
    @supports (animation-range-start: 20%) { a { animation-range-start: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that multiple occurrences of animation-range-start: normal are all flagged.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description: 'Should detect multiple instances of animation-range-start: normal',
  code: `
    a { animation-range-start: normal; } b { animation-range-start: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that animation-range-start: normal is flagged when its value is implicitly set to 'normal' by the animation-range shorthand.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description:
    'Should detect animation-range-start: normal when implicitly set by animation-range shorthand',
  code: `
    a { animation-range: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-range-start: normal is flagged when explicitly set as the start value in the animation-range shorthand, even with an explicit end range.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description:
    'Should detect animation-range-start: normal when explicitly set by animation-range shorthand with another value',
  code: `
    a { animation-range: normal exit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-range-start: normal is not flagged when the animation-range shorthand sets a non-normal start value (e.g., percentage), even if the end range defaults to 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description:
    'Should not detect animation-range-start: normal when animation-range shorthand sets a non-normal start value',
  code: `
    a { animation-range: 10%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-range-start: normal is not flagged when the animation-range shorthand sets a named range start value (e.g., 'entry').
 */
testRule({
  featureId: 'properties.animation-range-start.normal',
  description:
    'Should not detect animation-range-start: normal when animation-range shorthand sets a named range start value',
  code: `
    a { animation-range: entry; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
