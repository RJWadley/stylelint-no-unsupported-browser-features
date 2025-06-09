/* AUTO_GENERATED: true */

/* 
feature: properties.animation-timing-function
docs: https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
spec: https://drafts.csswg.org/css-animations/#animation-timing-function
*/

import { testRule } from 'lib/testRule';

/**
 * Tests detection of the 'ease' keyword value, which is widely supported.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag ease keyword as usage',
  code: `
    a { animation-timing-function: ease; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of the 'linear' keyword value.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag linear keyword as usage',
  code: `
    a { animation-timing-function: linear; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of the cubic-bezier() function.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag cubic-bezier() function as usage',
  code: `
    a { animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of the steps() function with jump-start keyword.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag steps() with jump-start as usage',
  code: `
    a { animation-timing-function: steps(4, jump-start); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of multiple animation-timing-function values separated by commas.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag all values in a multiple value declaration',
  code: `
    a { animation-timing-function: ease, linear, steps(2, end); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests detection of the linear() function, which is a newer easing function.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag linear() function as usage',
  code: `
    a { animation-timing-function: linear(0, 0.5 50%, 1); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of the 'initial' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag initial keyword as usage',
  code: `
    a { animation-timing-function: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of the 'unset' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag unset keyword as usage',
  code: `
    a { animation-timing-function: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of animation-timing-function used within an @keyframes rule.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag animation-timing-function inside @keyframes',
  code: `
    @keyframes foo { from { top: 0; animation-timing-function: ease-in; } to { top: 100px; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-timing-function is NOT flagged when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should not flag when exactly guarded by @supports',
  code: `
    @supports (animation-timing-function: ease) { a { animation-timing-function: ease; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-timing-function IS flagged when guarded by @supports for a different property.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag when unguarded by @supports (different property)',
  code: `
    @supports (display: flex) { a { animation-timing-function: linear; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-timing-function IS flagged when guarded by @supports for the same property but a different value.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag when unguarded by @supports (same property, different value)',
  code: `
    @supports (animation-timing-function: linear) { a { animation-timing-function: ease; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of animation-timing-function with a CSS variable, as the feature is for the property in general.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag animation-timing-function with var()',
  code: `
    a { --my-timing-function: ease; animation-timing-function: var(--my-timing-function); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that comments do not interfere with detection of the property.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag property despite comments',
  code: `
    a { /* some comment */ animation-timing-function: ease-in-out; /* another comment */ }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the property is detected regardless of casing of the property name.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag with case-insensitive property name',
  code: `
    a { ANIMATION-TIMING-FUNCTION: steps(10, end); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests two separate usages of the linear() function, expecting two detections.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag two instances of linear() function and report 2 warnings',
  code: `
    a { animation-timing-function: linear(0, 0.25, 1); } b { animation-timing-function: linear(0, 0.5 50%, 1); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests cubic-bezier() function with y-coordinates outside the [0, 1] range, which is valid CSS.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag cubic-bezier() with out-of-range y values (valid)',
  code: `
    a { animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 1.5); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of step-start and step-end keywords (equivalent to steps(1, jump-start/end)).
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag steps() with step-start and step-end',
  code: `
    a { animation-timing-function: step-start; } b { animation-timing-function: step-end; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests detection when animation-timing-function is part of the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should flag animation-timing-function within animation shorthand',
  code: `
    a { animation: slide 2s ease-in-out 1s infinite alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures no detection occurs when the property is not used in the code.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should not flag when animation-timing-function is not present',
  code: `
    a { color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the property is not detected when it's entirely within a CSS comment.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should not flag property inside a comment',
  code: `
    /* animation-timing-function: ease; */
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests a non-standard prefixed animation-timing-function property, expecting no detection as it's invalid CSS for this feature.
 */
testRule({
  featureId: 'properties.animation-timing-function',
  description: 'should not flag non-standard prefixed property name',
  code: `
    a { -webkit-animation-timing-function: ease; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
