/* AUTO_GENERATED: true */

/* 
feature: properties.aspect-ratio
docs: https://developer.mozilla.org/docs/Web/CSS/aspect-ratio
spec: https://drafts.csswg.org/css-sizing-4/#aspect-ratio
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of aspect-ratio with an integer ratio.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with integer ratio',
  code: `
    a { aspect-ratio: 1 / 1; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of aspect-ratio with a floating point ratio.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with floating point ratio',
  code: `
    a { aspect-ratio: 0.5; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of aspect-ratio with a different integer ratio.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with different integer ratio',
  code: `
    a { aspect-ratio: 16 / 9; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of aspect-ratio with the 'auto' keyword.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with auto keyword',
  code: `
    a { aspect-ratio: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of aspect-ratio with 'auto' and a ratio, 'auto' first.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with auto and ratio (auto first)',
  code: `
    a { aspect-ratio: auto 3 / 4; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of aspect-ratio with 'auto' and a ratio, ratio first.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with auto and ratio (ratio first)',
  code: `
    a { aspect-ratio: 9 / 6 auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio with the 'initial' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with initial keyword',
  code: `
    a { aspect-ratio: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio with the 'unset' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with unset keyword',
  code: `
    a { aspect-ratio: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio with the 'inherit' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with inherit keyword',
  code: `
    a { aspect-ratio: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio with the 'revert' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with revert keyword',
  code: `
    a { aspect-ratio: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio with the 'revert-layer' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with revert-layer keyword',
  code: `
    a { aspect-ratio: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio with a degenerate ratio (1/0) which behaves as 'auto'.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with degenerate ratio (1/0)',
  code: `
    a { aspect-ratio: 1 / 0; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio with a degenerate ratio (0/1) which behaves as 'auto'.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with degenerate ratio (0/1)',
  code: `
    a { aspect-ratio: 0 / 1; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio with auto and a degenerate ratio.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with auto and degenerate ratio',
  code: `
    a { aspect-ratio: auto 1 / 0; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that vendor-prefixed aspect-ratio is not detected.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should not detect vendor-prefixed aspect-ratio',
  code: `
    a { -webkit-aspect-ratio: 1 / 1; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests aspect-ratio when its value is a CSS variable, as the property itself is used.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with CSS variable',
  code: `
    a { aspect-ratio: var(--my-ratio); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio with comments in the declaration.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio with comments',
  code: `
    a { /* comment */ aspect-ratio: 1 / 1; /* another comment */ }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple aspect-ratio declarations in a single rule.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect multiple aspect-ratio declarations in one rule',
  code: `
    a { aspect-ratio: 1 / 1; width: 100%; aspect-ratio: 16 / 9; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that aspect-ratio is not detected when not present.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should not detect aspect-ratio when not present',
  code: `
    a { width: 100%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests aspect-ratio is not detected when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should not detect aspect-ratio when guarded by exact @supports query',
  code: `
    @supports (aspect-ratio: 1 / 1) { a { aspect-ratio: 1 / 1; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests aspect-ratio auto is not detected when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should not detect aspect-ratio auto when guarded by exact @supports query',
  code: `
    @supports (aspect-ratio: auto) { a { aspect-ratio: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests aspect-ratio auto ratio is not detected when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should not detect aspect-ratio auto ratio when guarded by exact @supports query',
  code: `
    @supports (aspect-ratio: auto 1 / 1) { a { aspect-ratio: auto 1 / 1; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests aspect-ratio is detected when not guarded by a different property @supports query.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio when not guarded by different property @supports query',
  code: `
    @supports (display: flex) { a { aspect-ratio: 1 / 1; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio is detected when not guarded by a different value @supports query.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio when not guarded by different value @supports query',
  code: `
    @supports (aspect-ratio: auto) { a { aspect-ratio: 1 / 1; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio is detected when not guarded by a different auto-ratio @supports query.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description:
    'should detect aspect-ratio when not guarded by different auto-ratio @supports query',
  code: `
    @supports (aspect-ratio: auto 16 / 9) { a { aspect-ratio: auto 1 / 1; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio is detected inside @supports not query.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio inside @supports not',
  code: `
    @supports not (aspect-ratio: 1 / 1) { a { aspect-ratio: 1 / 1; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio is detected inside @supports and with one false condition.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description: 'should detect aspect-ratio inside @supports and with one false condition',
  code: `
    @supports (aspect-ratio: 1 / 1) and (width: 0) { a { aspect-ratio: 1 / 1; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests aspect-ratio is detected inside @supports or with one true but not exact condition.
 */
testRule({
  featureId: 'properties.aspect-ratio',
  description:
    'should detect aspect-ratio inside @supports or with one true but not exact condition',
  code: `
    @supports (aspect-ratio: auto) or (width: 0) { a { aspect-ratio: 1 / 1; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
