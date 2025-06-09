/* AUTO_GENERATED: true */

/* 
feature: properties.animation.animation-timeline_included
docs: https://developer.mozilla.org/docs/Web/CSS/animation
spec: https://drafts.csswg.org/css-animations/#animation
*/

import { testRule } from 'lib/testRule';

/**
 * Should not flag a standard animation shorthand without animation-timeline values.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should not flag standard animation',
  code: `
    a { animation: slide-in 3s linear 1s infinite alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag 'scroll()' as an animation-timeline value attempted in the shorthand.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should flag animation with scroll() function',
  code: `
    a { animation: 3s linear scroll(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'view()' as an animation-timeline value attempted in the shorthand.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should flag animation with view() function',
  code: `
    a { animation: 3s linear view(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'auto' when it is in a position interpretable only as an animation-timeline value.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: "should flag animation with 'auto' timeline value",
  code: `
    a { animation: 3s auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'scroll()' in one of multiple animation definitions within the shorthand.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should flag scroll() in multiple animations',
  code: `
    a { animation: foo 1s, bar 2s linear scroll(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag '-webkit-animation' when it includes 'scroll()'.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should flag -webkit-animation with scroll()',
  code: `
    a { -webkit-animation: 3s linear scroll(); }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag '-moz-animation' when it includes 'scroll()'.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should flag -moz-animation with scroll()',
  code: `
    a { -moz-animation: 3s linear scroll(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag 'var()' when it might resolve to an animation-timeline value.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should flag animation with var() as timeline',
  code: `
    a { animation: 3s linear var(--my-timeline); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag 'initial' as it's a CSS-wide keyword and not an animation-timeline value.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should not flag animation with initial keyword',
  code: `
    a { animation: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'scroll()' if it's guarded by a matching @supports query.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should not flag when guarded by @supports',
  code: `
    @supports (animation-timeline: scroll()) { a { animation: 3s linear scroll(); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag 'scroll()' if it's not guarded by a matching @supports query.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should flag when not guarded by @supports',
  code: `
    @supports (animation-duration: 1s) { a { animation: 3s linear scroll(); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'SCROLL()' with case insensitivity.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should flag with case insensitivity',
  code: `
    a { ANimation: 3s linear SCROLL(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'scroll()' even with comments present.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: 'should flag with comments',
  code: `
    a { animation: 3s linear /* comment */ scroll(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag 'none' when interpreted as animation-name.
 */
testRule({
  featureId: 'properties.animation.animation-timeline_included',
  description: "should not flag 'none' as animation-name",
  code: `
    a { animation: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
