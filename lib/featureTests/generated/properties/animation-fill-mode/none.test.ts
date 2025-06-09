/* AUTO_GENERATED: true */

/* 
feature: properties.animation-fill-mode.none
docs: https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
spec: https://drafts.csswg.org/css-animations/#valdef-animation-fill-mode-none
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of the 'none' value for animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect animation-fill-mode: none',
  code: `
    a { animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests when 'none' is one of multiple values for animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect animation-fill-mode with multiple values including none',
  code: `
    a { animation-fill-mode: none, forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests when 'none' appears multiple times in animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: "should detect animation-fill-mode with multiple 'none' values",
  code: `
    a { animation-fill-mode: none, none, forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests detection of 'none' as animation-fill-mode in the animation shorthand.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect animation-fill-mode: none in animation shorthand',
  code: `
    a { animation: slide 1s ease-in none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'none' as animation-name is not detected as animation-fill-mode: none.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: "should not detect when 'none' is animation-name in shorthand",
  code: `
    a { animation: none 1s ease-in forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests vendor-prefixed -webkit-animation-fill-mode with 'none' value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect -webkit-animation-fill-mode: none',
  code: `
    a { -webkit-animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests vendor-prefixed -moz-animation-fill-mode with 'none' value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect -moz-animation-fill-mode: none',
  code: `
    a { -moz-animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests vendor-prefixed -ms-animation-fill-mode with 'none' value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect -ms-animation-fill-mode: none',
  code: `
    a { -ms-animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests vendor-prefixed -o-animation-fill-mode with 'none' value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect -o-animation-fill-mode: none',
  code: `
    a { -o-animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests detection when both prefixed and unprefixed versions are present.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect both prefixed and unprefixed animation-fill-mode: none',
  code: `
    a { -webkit-animation-fill-mode: none; animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection when animation-fill-mode is set to 'initial', which resolves to 'none'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect animation-fill-mode: initial',
  code: `
    a { animation-fill-mode: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection when animation-fill-mode is set to 'unset', which resolves to 'none' (not inherited).
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect animation-fill-mode: unset',
  code: `
    a { animation-fill-mode: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'inherit' does not automatically detect 'none' unless parent context is known.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should not detect animation-fill-mode: inherit',
  code: `
    a { animation-fill-mode: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'revert' does not automatically detect 'none'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should not detect animation-fill-mode: revert',
  code: `
    a { animation-fill-mode: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'revert-layer' does not automatically detect 'none'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should not detect animation-fill-mode: revert-layer',
  code: `
    a { animation-fill-mode: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that var() usage is not flagged when feature is for a specific value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should not detect animation-fill-mode with var() for specific value',
  code: `
    a { --fill-mode: none; animation-fill-mode: var(--fill-mode); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that other animation-fill-mode values are not detected as 'none'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should not detect other animation-fill-mode values',
  code: `
    a { animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'none' is guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should be guarded by @supports (exact match)',
  code: `
    @supports (animation-fill-mode: none) { a { animation-fill-mode: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'none' is NOT guarded by a @supports query with a different value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should not be guarded by @supports (different value)',
  code: `
    @supports (animation-fill-mode: forwards) { a { animation-fill-mode: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'none' is NOT guarded by a @supports query with a different property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should not be guarded by @supports (different property)',
  code: `
    @supports (display: flex) { a { animation-fill-mode: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests 'none' detection with whitespace and comments.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect with varied positions and comments',
  code: `
    /* comment */
  .foo { animation-fill-mode : none ; /* another comment */
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of 'none' within an empty CSS rule.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect in an empty rule',
  code: `
    a { animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'none' is detected regardless of case.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should detect case-insensitively',
  code: `
    a { AnImAtIoN-FiLl-MoDe: NONE; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple instances of 'animation-fill-mode: none' in a single block.
 */
testRule({
  featureId: 'properties.animation-fill-mode.none',
  description: 'should include at least one test with 2 warnings',
  code: `
    a { animation-fill-mode: none; -webkit-animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
