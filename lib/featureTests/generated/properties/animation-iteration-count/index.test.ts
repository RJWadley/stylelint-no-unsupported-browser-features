/* AUTO_GENERATED: true */

/* 
feature: properties.animation-iteration-count
docs: https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
spec: https://drafts.csswg.org/css-animations/#animation-iteration-count
*/

import { testRule } from 'lib/testRule';

/**
 * Detects the use of the 'infinite' keyword for animation-iteration-count.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when using infinite keyword',
  code: `
    a { animation-iteration-count: infinite; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the use of an integer number for animation-iteration-count.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when using integer number value',
  code: `
    a { animation-iteration-count: 2; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the use of a float number for animation-iteration-count.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when using float number value',
  code: `
    a { animation-iteration-count: 1.5; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the use of 0 for animation-iteration-count, which is valid and causes an instantaneous animation.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when using 0 as iteration count',
  code: `
    a { animation-iteration-count: 0; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects multiple comma-separated values for animation-iteration-count.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when using multiple comma-separated values',
  code: `
    a { animation-iteration-count: 2, infinite, 0.5; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Detects the 'infinite' keyword within the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when animation-iteration-count is in animation shorthand with infinite',
  code: `
    a { animation: slide 1s infinite; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects a number value within the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when animation-iteration-count is in animation shorthand with number',
  code: `
    a { animation: slide 1s 3; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Does not flag invalid negative values, as the parser should ignore them for feature detection.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should not warn when using invalid negative number value',
  code: `
    a { animation-iteration-count: -1; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects the 'initial' keyword for animation-iteration-count.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn for initial keyword',
  code: `
    a { animation-iteration-count: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'unset' keyword for animation-iteration-count.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn for unset keyword',
  code: `
    a { animation-iteration-count: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'inherit' keyword for animation-iteration-count.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn for inherit keyword',
  code: `
    a { animation-iteration-count: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'revert' keyword for animation-iteration-count.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn for revert keyword',
  code: `
    a { animation-iteration-count: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'revert-layer' keyword for animation-iteration-count.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn for revert-layer keyword',
  code: `
    a { animation-iteration-count: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the use of a CSS variable for animation-iteration-count, as its resolved value cannot be determined statically.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when using a CSS variable for animation-iteration-count',
  code: `
    a { animation-iteration-count: var(--foo); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-iteration-count with comments around and within the declaration.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn with comments inside and outside',
  code: `
    /* comment before */ a { /* comment in rule */ animation-iteration-count: /* inner */ infinite /* inner */; /* comment in rule */ } /* comment after */
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection with different whitespace configurations around values and semicolons.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn with varied whitespace',
  code: `
    a { animation-iteration-count : 2.0 ;}
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures animation-iteration-count is detected within a media query.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn inside an @media query',
  code: `
    @media (min-width: 500px) { a { animation-iteration-count: 3; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures animation-iteration-count is flagged when the @supports query checks a different property.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when not guarded by @supports for a different property',
  code: `
    @supports (display: flex) { a { animation-iteration-count: infinite; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures animation-iteration-count is flagged when the @supports query checks the same property but a different value.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when not guarded by @supports for same property but different value',
  code: `
    @supports (animation-iteration-count: 1) { a { animation-iteration-count: infinite; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures animation-iteration-count is not flagged when the @supports query exactly matches the declaration.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should not warn when guarded by @supports with exact match',
  code: `
    @supports (animation-iteration-count: infinite) { a { animation-iteration-count: infinite; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures animation-iteration-count is not flagged when the @supports query exactly matches the declaration with a number value.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should not warn when guarded by @supports with exact match for number',
  code: `
    @supports (animation-iteration-count: 3) { a { animation-iteration-count: 3; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of animation-iteration-count within a nested rule targeting the same element (pseudo-class).
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when nested with pseudo-class in same context',
  code: `
    .foo { animation-duration: 1s; &:hover { animation-iteration-count: 2; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of animation-iteration-count within a nested rule targeting a pseudo-element (new element).
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when nested with pseudo-element (new element)',
  code: `
    .foo { animation-duration: 1s; &::before { animation-iteration-count: 2; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of animation-iteration-count within a nested rule targeting a child element (new element).
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn when nested with child selector (new element)',
  code: `
    .foo { animation-duration: 1s; & .bar { animation-iteration-count: 2; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects animation-iteration-count even if animation-name is not explicitly set.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn for animation-iteration-count without animation-name',
  code: `
    a { animation-iteration-count: 2; animation-duration: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures an empty rule block does not trigger a warning.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should not warn for empty rule',
  code: `
    a { }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection when animation-iteration-count is one of several declarations in a rule.
 */
testRule({
  featureId: 'properties.animation-iteration-count',
  description: 'should warn in a rule with multiple declarations',
  code: `
    a { color: red; animation-iteration-count: 2; margin: 10px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
