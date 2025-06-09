/* AUTO_GENERATED: true */

/* 
feature: properties.animation-direction.reverse
docs: https://developer.mozilla.org/docs/Web/CSS/animation-direction
spec: https://drafts.csswg.org/css-animations/#valdef-animation-direction-reverse
*/

import { testRule } from 'lib/testRule';

/**
 * Should detect `animation-direction: reverse` for an unprefixed property.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should detect animation-direction reverse',
  code: `
    a {
    animation-direction: reverse;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect `animation-direction: reverse` with vendor prefixes.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should detect prefixed animation-direction reverse',
  code: `
    a {
    -webkit-animation-direction: reverse;
    -moz-animation-direction: reverse;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect `reverse` when used in a comma-separated list of animation-direction values.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should detect animation-direction reverse in a list',
  code: `
    a {
    animation-direction: normal, reverse;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect `reverse` when used within the `animation` shorthand property.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should detect animation-direction reverse in animation shorthand',
  code: `
    a {
    animation: slide 2s linear infinite reverse;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should NOT detect `animation-direction: reverse` when used within an @keyframes rule, as it is ignored.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should not detect animation-direction reverse in @keyframes',
  code: `
    @keyframes slide {
    from {
      left: 0;
      animation-direction: reverse; /* This property is ignored in @keyframes, should not be flagged */
    }
    to {
      left: 100px;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect `animation-direction: reverse` when it is guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should not detect guarded animation-direction reverse',
  code: `
    @supports (animation-direction: reverse) {
    a {
      animation-direction: reverse;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect `animation-direction: reverse` when it is unguarded by a different property in @supports.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should detect unguarded animation-direction reverse (different property)',
  code: `
    @supports (display: flex) {
    a {
      animation-direction: reverse;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect `animation-direction: reverse` when it is unguarded by the same property but different value in @supports.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should detect unguarded animation-direction reverse (different value)',
  code: `
    @supports (animation-direction: normal) {
    a {
      animation-direction: reverse;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should NOT detect `animation-direction` when its value is a CSS variable, as the specific 'reverse' value cannot be resolved.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should not detect animation-direction with CSS variable',
  code: `
    a {
    --anim-dir: reverse;
    animation-direction: var(--anim-dir);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect `animation-direction` when its value is a CSS-wide keyword, as these are not 'reverse'.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should not detect animation-direction with CSS-wide keywords',
  code: `
    a {
    animation-direction: initial;
  }
  b {
    animation-direction: unset;
  }
  c {
    animation-direction: inherit;
  }
  d {
    animation-direction: revert;
  }
  e {
    animation-direction: revert-layer;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect other valid `animation-direction` values besides `reverse`.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should not detect other animation-direction values',
  code: `
    a {
    animation-direction: normal;
  }
  b {
    animation-direction: alternate;
  }
  c {
    animation-direction: alternate-reverse;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect `animation-direction: reverse` with various whitespace and comments.
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should detect animation-direction reverse with comments and whitespace',
  code: `
    a {
    /* comment */ animation-direction /* another comment */ : /* yet another */ reverse /* final comment */ ;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should include at least one test with 2 warnings for `animation-direction: reverse` (unprefixed and webkit).
 */
testRule({
  featureId: 'properties.animation-direction.reverse',
  description: 'should report two warnings for animation-direction reverse',
  code: `
    a {
    animation-direction: reverse;
  }
  b {
    -webkit-animation-direction: reverse;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
