/* AUTO_GENERATED: true */

/* 
feature: properties.animation-direction.alternate-reverse
docs: https://developer.mozilla.org/docs/Web/CSS/animation-direction
spec: https://drafts.csswg.org/css-animations/#valdef-animation-direction-alternate-reverse
*/

import { testRule } from 'lib/testRule';

/**
 * Detects basic usage of alternate-reverse keyword.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should warn when animation-direction is alternate-reverse',
  code: `
    a { animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects alternate-reverse keyword regardless of case.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should warn when animation-direction is alternate-reverse (case-insensitive)',
  code: `
    a { animation-direction: ALTERNATE-REVERSE; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects -webkit-prefixed alternate-reverse keyword.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description:
    'should warn when animation-direction is alternate-reverse with vendor prefix -webkit-',
  code: `
    a { -webkit-animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects -moz-prefixed alternate-reverse keyword.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should warn when animation-direction is alternate-reverse with vendor prefix -moz-',
  code: `
    a { -moz-animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects -ms-prefixed alternate-reverse keyword.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should warn when animation-direction is alternate-reverse with vendor prefix -ms-',
  code: `
    a { -ms-animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects -o-prefixed alternate-reverse keyword.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should warn when animation-direction is alternate-reverse with vendor prefix -o-',
  code: `
    a { -o-animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Detects alternate-reverse keyword within the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should warn when animation shorthand includes alternate-reverse',
  code: `
    a { animation: 1s linear alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects alternate-reverse when multiple animation-direction values are used.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should warn when multiple animation-direction values include alternate-reverse',
  code: `
    a { animation-direction: normal, alternate-reverse, reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects alternate-reverse in one of multiple animation shorthand values.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should warn when multiple animation shorthand values include alternate-reverse',
  code: `
    a { animation: slide 1s linear normal, fade 2s ease alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects alternate-reverse within a pseudo-class (same element context).
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should warn when animation-direction is alternate-reverse inside a pseudo-class',
  code: `
    a:hover { animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects -webkit-prefixed alternate-reverse keyword within the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description:
    'should warn when animation-direction is alternate-reverse with -webkit- prefix in shorthand',
  code: `
    a { -webkit-animation: 1s linear alternate-reverse; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures two warnings are generated for two usages of alternate-reverse.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should warn when two instances of alternate-reverse are found',
  code: `
    a { animation-direction: alternate-reverse; } b { animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Does not flag 'normal' value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should not warn when animation-direction is normal',
  code: `
    a { animation-direction: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag 'reverse' value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should not warn when animation-direction is reverse',
  code: `
    a { animation-direction: reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag 'alternate' value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should not warn when animation-direction is alternate',
  code: `
    a { animation-direction: alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag when animation shorthand uses other direction values.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should not warn when animation shorthand includes other direction values',
  code: `
    a { animation: 1s linear normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag alternate-reverse when exactly guarded by @supports.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description:
    'should not warn when animation-direction is alternate-reverse and guarded by exact @supports',
  code: `
    @supports (animation-direction: alternate-reverse) { a { animation-direction: alternate-reverse; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag -webkit-animation-direction: alternate-reverse when exactly guarded by @supports with prefix.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description:
    'should not warn when animation-direction is alternate-reverse and guarded by exact prefixed @supports',
  code: `
    @supports (-webkit-animation-direction: alternate-reverse) { a { -webkit-animation-direction: alternate-reverse; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Flags alternate-reverse when @supports guards a different property.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description:
    'should warn when animation-direction is alternate-reverse and not guarded by exact @supports (different property)',
  code: `
    @supports (display: flex) { a { animation-direction: alternate-reverse; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Flags alternate-reverse when @supports guards same property but different value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description:
    'should warn when animation-direction is alternate-reverse and not guarded by exact @supports (different value)',
  code: `
    @supports (animation-direction: normal) { a { animation-direction: alternate-reverse; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Does not flag CSS-wide keyword 'initial'.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should not warn when using CSS-wide keyword initial',
  code: `
    a { animation-direction: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag CSS-wide keyword 'unset'.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should not warn when using CSS-wide keyword unset',
  code: `
    a { animation-direction: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag when animation-direction uses a CSS variable.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description: 'should not warn when using CSS variable for animation-direction',
  code: `
    a { --direction: alternate-reverse; animation-direction: var(--direction); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag alternate-reverse within a child selector (different element context).
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description:
    'should not warn when animation-direction is alternate-reverse inside a child selector',
  code: `
    a .foo { animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag alternate-reverse within a pseudo-element (new element).
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description:
    'should not warn when animation-direction is alternate-reverse inside a pseudo-element',
  code: `
    a::before { animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Flags unprefixed alternate-reverse when @supports guards only the prefixed version.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description:
    'should warn when unprefixed alternate-reverse is not guarded by exact prefixed @supports',
  code: `
    @supports (-webkit-animation-direction: alternate-reverse) { a { animation-direction: alternate-reverse; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Flags prefixed alternate-reverse when @supports guards only the unprefixed version.
 */
testRule({
  featureId: 'properties.animation-direction.alternate-reverse',
  description:
    'should warn when prefixed alternate-reverse is not guarded by exact unpreports unprefixed @supports',
  code: `
    @supports (animation-direction: alternate-reverse) { a { -webkit-animation-direction: alternate-reverse; } }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
