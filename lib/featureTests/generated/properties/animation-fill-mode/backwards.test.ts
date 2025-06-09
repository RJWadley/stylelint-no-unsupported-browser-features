/* AUTO_GENERATED: true */

/* 
feature: properties.animation-fill-mode.backwards
docs: https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
spec: https://drafts.csswg.org/css-animations/#valdef-animation-fill-mode-backwards
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of the 'backwards' value for animation-fill-mode property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag `animation-fill-mode: backwards`',
  code: `
    a { animation-fill-mode: backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage in another rule to ensure it's not specific to 'a'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag `animation-fill-mode: backwards` in a different rule',
  code: `
    .foo { animation-fill-mode: backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests sensitivity to whitespace around the value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag `animation-fill-mode: backwards` with different whitespace',
  code: `
    a { animation-fill-mode :  backwards ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests case insensitivity of the 'backwards' value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag `animation-fill-mode: backwards` (case insensitive)',
  code: `
    a { animation-fill-mode: BACKWARDS; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests when 'backwards' is part of a multiple value list for animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag `animation-fill-mode: backwards` with multiple values (unprefixed)',
  code: `
    a { animation-fill-mode: none, backwards, forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple animation-fill-mode values including 'backwards' with different prefixes.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description:
    'should flag `animation-fill-mode: backwards` with multiple values (mixed prefixes and unprefixed)',
  code: `
    a { -webkit-animation-fill-mode: none, backwards; animation-fill-mode: forwards, both; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of 'backwards' within the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag `animation` shorthand with `backwards`',
  code: `
    a { animation: slide 1s ease-in 1s backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of 'backwards' within animation shorthand when combined with other values.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag `animation` shorthand with `backwards` and other values',
  code: `
    a { animation: 3s ease-in 1s normal forwards, 2s linear 0s reverse backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the -webkit- prefixed version of the property with 'backwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag prefixed `animation-fill-mode: backwards` (-webkit-)',
  code: `
    a { -webkit-animation-fill-mode: backwards; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the -moz- prefixed version of the property with 'backwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag prefixed `animation-fill-mode: backwards` (-moz-)',
  code: `
    a { -moz-animation-fill-mode: backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the -ms- prefixed version of the property with 'backwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag prefixed `animation-fill-mode: backwards` (-ms-)',
  code: `
    a { -ms-animation-fill-mode: backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the -o- prefixed version of the property with 'backwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag prefixed `animation-fill-mode: backwards` (-o-)',
  code: `
    a { -o-animation-fill-mode: backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests -webkit- prefixed animation shorthand with 'backwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag prefixed `animation` shorthand with `backwards` (-webkit-)',
  code: `
    a { -webkit-animation: slide 1s ease-in 1s backwards; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures multiple instances of the feature are flagged.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should flag multiple warnings for `animation-fill-mode: backwards`',
  code: `
    a { animation-fill-mode: backwards; } b { -webkit-animation-fill-mode: backwards; } c { animation: foo backwards; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures other values of animation-fill-mode are not flagged.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should not flag `animation-fill-mode: none`',
  code: `
    a { animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures other values of animation-fill-mode are not flagged.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should not flag `animation-fill-mode: forwards`',
  code: `
    a { animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures other values of animation-fill-mode are not flagged.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should not flag `animation-fill-mode: both`',
  code: `
    a { animation-fill-mode: both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures shorthand with other animation-fill-mode values is not flagged.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should not flag `animation` shorthand with other fill modes',
  code: `
    a { animation: slide 1s ease-in 1s none; } b { animation: slide 1s ease-in 1s forwards; } c { animation: slide 1s ease-in 1s both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the feature is not flagged when correctly guarded by an @supports query.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description:
    'should not flag when `animation-fill-mode: backwards` is guarded by exact @supports',
  code: `
    @supports (animation-fill-mode: backwards) { a { animation-fill-mode: backwards; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the feature is flagged when @supports guards a different property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description:
    'should flag when `animation-fill-mode: backwards` is guarded by different property in @supports',
  code: `
    @supports (display: flex) { a { animation-fill-mode: backwards; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the feature is flagged when @supports guards the same property but a different value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description:
    'should flag when `animation-fill-mode: backwards` is guarded by same property but different value in @supports',
  code: `
    @supports (animation-fill-mode: none) { a { animation-fill-mode: backwards; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `var()` is not flagged for a specific value feature.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should not flag `animation-fill-mode: var(--my-value)`',
  code: `
    a { --my-value: backwards; animation-fill-mode: var(--my-value); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the CSS-wide keyword 'initial'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should not flag `animation-fill-mode: initial`',
  code: `
    a { animation-fill-mode: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the CSS-wide keyword 'unset'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should not flag `animation-fill-mode: unset`',
  code: `
    a { animation-fill-mode: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the CSS-wide keyword 'revert'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should not flag `animation-fill-mode: revert`',
  code: `
    a { animation-fill-mode: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the CSS-wide keyword 'revert-layer'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should not flag `animation-fill-mode: revert-layer`',
  code: `
    a { animation-fill-mode: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'backwards' in comments is ignored.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: "should not flag comments containing 'backwards'",
  code: `
    /* animation-fill-mode: backwards; */
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'backwards' in strings is ignored.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: "should not flag strings containing 'backwards'",
  code: `
    a::before { content: 'animation-fill-mode: backwards'; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests an empty rule with the property but no value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.backwards',
  description: 'should not flag an empty rule with animation-fill-mode property',
  code: `
    a { animation-fill-mode: ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
