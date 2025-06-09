/* AUTO_GENERATED: true */

/* 
feature: properties.animation-fill-mode.both
docs: https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
spec: https://drafts.csswg.org/css-animations/#valdef-animation-fill-mode-both
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of 'both' value for animation-fill-mode property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect unprefixed animation-fill-mode: both',
  code: `
    a { animation-fill-mode: both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests webkit prefixed usage of 'both' value for animation-fill-mode property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect -webkit-animation-fill-mode: both',
  code: `
    a { -webkit-animation-fill-mode: both; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests moz prefixed usage of 'both' value for animation-fill-mode property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect -moz-animation-fill-mode: both',
  code: `
    a { -moz-animation-fill-mode: both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests o prefixed usage of 'both' value for animation-fill-mode property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect -o-animation-fill-mode: both',
  code: `
    a { -o-animation-fill-mode: both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests ms prefixed usage of 'both' value for animation-fill-mode property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect -ms-animation-fill-mode: both',
  code: `
    a { -ms-animation-fill-mode: both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests 'both' value when specified within the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect both in animation shorthand',
  code: `
    a { animation: slide 1s ease-in 1 forwards both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests 'both' value when specified within the webkit-animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect -webkit-both in -webkit-animation shorthand',
  code: `
    a { -webkit-animation: slide 1s ease-in 1 forwards both; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of 'both' when multiple fill modes are specified.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect both among multiple animation-fill-mode values',
  code: `
    a { animation-fill-mode: none, both, forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'both' is not detected when exactly guarded by @supports.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should not detect both when guarded by @supports (animation-fill-mode: both)',
  code: `
    @supports (animation-fill-mode: both) { a { animation-fill-mode: both; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'both' is detected when guarded by @supports with a different value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect both when unguarded by @supports (animation-fill-mode: forwards)',
  code: `
    @supports (animation-fill-mode: forwards) { a { animation-fill-mode: both; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'both' is detected when guarded by @supports for a different property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect both when unguarded by @supports (opacity: 0.5)',
  code: `
    @supports (opacity: 0.5) { a { animation-fill-mode: both; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'both' is not detected when the value is a CSS variable, as the exact value cannot be determined.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should not detect both when using a CSS variable for animation-fill-mode',
  code: `
    a { --fill-mode-val: both; animation-fill-mode: var(--fill-mode-val); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that CSS-wide keyword 'initial' is not flagged as 'both'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should not detect both when animation-fill-mode is initial',
  code: `
    a { animation-fill-mode: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that CSS-wide keyword 'unset' is not flagged as 'both'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should not detect both when animation-fill-mode is unset',
  code: `
    a { animation-fill-mode: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'BOTH' is detected regardless of case.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect animation-fill-mode: BOTH (case insensitive)',
  code: `
    a { animation-fill-mode: BOTH; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of 'both' when multiple animations are defined in shorthand, and one uses 'both'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect both in one of multiple animation shorthand values',
  code: `
    a { animation: slide 2s ease-in forwards, fade 1s linear both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of 'both' when multiple animations are defined using individual animation properties.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect both when multiple animations are defined with separate properties',
  code: `
    a { animation-name: slide, fade; animation-duration: 2s, 1s; animation-fill-mode: forwards, both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'none' value is not incorrectly flagged as 'both'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should not detect none as both',
  code: `
    a { animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'forwards' value is not incorrectly flagged as 'both'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should not detect forwards as both',
  code: `
    a { animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'backwards' value is not incorrectly flagged as 'both'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should not detect backwards as both',
  code: `
    a { animation-fill-mode: backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of 'both' within a nested CSS rule.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should detect both in a nested rule',
  code: `
    a { & .foo { animation-fill-mode: both; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple instances of 'both' in a single code block.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should include at least two warnings',
  code: `
    a { animation-fill-mode: both; } b { animation-fill-mode: both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that 'both' within comments is not flagged.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should not detect both in comments',
  code: `
    /* animation-fill-mode: both; */ a { color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'both' within strings is not flagged.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should not detect both in strings',
  code: `
    a::before { content: 'animation-fill-mode: both'; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'both' is detected even if it's not the last value in the animation shorthand.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: "should detect both when it's not the last value in shorthand",
  code: `
    a { animation: slide 2s both ease-in forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that 'both' is only flagged when used with animation properties.
 */
testRule({
  featureId: 'properties.animation-fill-mode.both',
  description: 'should not detect both when used with a non-animation property',
  code: `
    a { content: 'both'; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
