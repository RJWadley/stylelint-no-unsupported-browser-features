/* AUTO_GENERATED: true */

/* 
feature: properties.animation-range
docs: https://developer.mozilla.org/docs/Web/CSS/animation-range
spec: https://drafts.csswg.org/scroll-animations/#animation-range
*/

import { testRule } from 'lib/testRule';

/**
 * Detects basic usage of animation-range with 'normal' value.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: normal',
  code: `
    a { animation-range: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects basic usage of animation-range with a percentage value.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: 2025-10-20',
  code: `
    a { animation-range: 20%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects basic usage of animation-range with a length value.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: 100px',
  code: `
    a { animation-range: 100px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects basic usage of animation-range with 'cover' named timeline range.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: cover',
  code: `
    a { animation-range: cover; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range with named timeline range and percentage.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: cover 2025-10-20',
  code: `
    a { animation-range: cover 20%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range with 'normal' and percentage values.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: normal 2525-10-20',
  code: `
    a { animation-range: normal 25%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range with percentage and 'normal' values.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: 25% normal',
  code: `
    a { animation-range: 25% normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range with two percentage values.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: 25% 5025-10-20',
  code: `
    a { animation-range: 25% 50%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range with two named timeline ranges.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: entry exit',
  code: `
    a { animation-range: entry exit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range with named timeline range and length.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: cover cover 200px',
  code: `
    a { animation-range: cover cover 200px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range with mixed named timeline ranges and percentage.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: entry 10% exit',
  code: `
    a { animation-range: entry 10% exit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range with mixed percentage and named timeline range.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: 10% exit 9025-10-20',
  code: `
    a { animation-range: 10% exit 90%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range with named timeline range and two percentages.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: entry 10% 9025-10-20',
  code: `
    a { animation-range: entry 10% 90%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects usage of animation-range with 'initial' keyword.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: initial',
  code: `
    a { animation-range: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects usage of animation-range with 'unset' keyword.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range: unset',
  code: `
    a { animation-range: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects usage of animation-range when its value is a CSS variable.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range with a CSS variable',
  code: `
    .foo { --my-range: normal; animation-range: var(--my-range); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures animation-range is not flagged when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should NOT flag animation-range when exactly guarded by @supports',
  code: `
    @supports (animation-range: normal) { a { animation-range: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures animation-range is flagged when @supports query uses a different value.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range when guarded by @supports with different value',
  code: `
    @supports (animation-range: cover) { a { animation-range: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures animation-range is flagged when @supports query uses a different property.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range when guarded by @supports with different property',
  code: `
    @supports (display: flex) { a { animation-range: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range within a pseudo-class selector for the same element.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range in nested pseudo-class',
  code: `
    a { &:hover { animation-range: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range within a nested child selector.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range in nested child selector',
  code: `
    .foo { & .bar { animation-range: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-range even with comments and extra whitespace.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range with comments and extra whitespace',
  code: `
    a { animation-range: /* start */ normal /* end */; animation-range : 100px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Detects animation-range regardless of case.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag ANIMATION-RANGE (case insensitive)',
  code: `
    a { ANIMATION-RANGE: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures multiple instances of animation-range are flagged.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should have two warnings for multiple usages',
  code: `
    .foo { animation-range: normal; } .bar { animation-range: cover; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Detects animation-range when values are expressed using calc().
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should flag animation-range with calc() values',
  code: `
    .foo { animation-range: entry calc(100% - 100px) exit calc(0% + 100px); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures empty rules do not produce false positives.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should not flag an empty rule',
  code: `
    a {}
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures only the target property is flagged.
 */
testRule({
  featureId: 'properties.animation-range',
  description: 'should not flag other properties',
  code: `
    a { color: red; display: flex; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
