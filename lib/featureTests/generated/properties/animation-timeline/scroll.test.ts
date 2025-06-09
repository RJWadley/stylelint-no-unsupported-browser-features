/* AUTO_GENERATED: true */

/* 
feature: properties.animation-timeline.scroll
docs: https://developer.mozilla.org/docs/Web/CSS/animation-timeline/scroll
spec: https://drafts.csswg.org/scroll-animations/#scroll-notation
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the basic usage of scroll() function without any arguments, which defaults to block nearest.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll() with default parameters',
  code: `
    a { animation-timeline: scroll(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with explicit 'block' axis.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll(block)',
  code: `
    a { animation-timeline: scroll(block); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with explicit 'nearest' scroller.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll(nearest)',
  code: `
    a { animation-timeline: scroll(nearest); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with explicit 'block' axis and 'nearest' scroller.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll(block nearest)',
  code: `
    a { animation-timeline: scroll(block nearest); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with explicit 'nearest' scroller and 'block' axis (order changed).
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll(nearest block)',
  code: `
    a { animation-timeline: scroll(nearest block); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with 'root' scroller.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll(root)',
  code: `
    a { animation-timeline: scroll(root); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with 'self' scroller.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll(self)',
  code: `
    a { animation-timeline: scroll(self); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with 'inline' axis.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll(inline)',
  code: `
    a { animation-timeline: scroll(inline); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with 'x' axis.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll(x)',
  code: `
    a { animation-timeline: scroll(x); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with 'y' axis.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll(y)',
  code: `
    a { animation-timeline: scroll(y); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with 'root' scroller and 'inline' axis.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll(root inline)',
  code: `
    a { animation-timeline: scroll(root inline); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with 'self' scroller and 'x' axis (order changed).
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll(x self)',
  code: `
    a { animation-timeline: scroll(x self); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that scroll() is not flagged when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description:
    'should not flag animation-timeline: scroll() when guarded by @supports (animation-timeline: scroll())',
  code: `
    @supports (animation-timeline: scroll()) { a { animation-timeline: scroll(); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that scroll() is flagged when @supports checks a different property.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description:
    'should flag animation-timeline: scroll() when @supports checks a different property',
  code: `
    @supports (display: flex) { a { animation-timeline: scroll(); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that scroll() is flagged when @supports checks the same property but a different value.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should flag animation-timeline: scroll() when @supports checks a different value',
  code: `
    @supports (animation-timeline: view()) { a { animation-timeline: scroll(); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-timeline with a CSS variable is not flagged, as the feature targets a specific value (scroll()).
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should not flag animation-timeline: var() for scroll() feature',
  code: `
    a { --my-timeline: scroll(); animation-timeline: var(--my-timeline); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-timeline with 'initial' keyword is not flagged.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should not flag animation-timeline: initial',
  code: `
    a { animation-timeline: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-timeline with 'unset' keyword is not flagged.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should not flag animation-timeline: unset',
  code: `
    a { animation-timeline: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-timeline with 'inherit' keyword is not flagged.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should not flag animation-timeline: inherit',
  code: `
    a { animation-timeline: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests scroll() with extra whitespace inside parentheses.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: scroll( ) with whitespace',
  code: `
    a { animation-timeline: scroll( ); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests SCROLL() with uppercase characters.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline: SCROLL() (case insensitive)',
  code: `
    a { animation-timeline: SCROLL(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with a comment inside the function.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline with comment inside scroll()',
  code: `
    a { animation-timeline: scroll(/* comment */); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests scroll() with a comment before the function.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect animation-timeline with comment before scroll()',
  code: `
    a { animation-timeline: /* comment */ scroll(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that scroll() is detected even if another animation-timeline is also present in the same rule.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect scroll() when other animation-timeline is also present',
  code: `
    a { animation-timeline: my-named-timeline; animation-timeline: scroll(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection with different line and column position.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect with different line and column',
  code: `
    
  .foo {
    animation-timeline: scroll(y root);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests an empty rule for no flags.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should not flag an empty rule',
  code: `
    a {}
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that no flag is raised when animation-timeline property is not used.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should not flag when animation-timeline is not present',
  code: `
    a { color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-timeline: view() is not flagged for properties.animation-timeline.scroll.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should not flag animation-timeline: view() for scroll() feature',
  code: `
    a { animation-timeline: view(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that a named timeline value for animation-timeline is not flagged for properties.animation-timeline.scroll.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should not flag a named timeline for scroll() feature',
  code: `
    a { animation-timeline: --my-scroll-timeline; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that two animation-timeline properties using scroll() in the same rule are both detected.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect two instances of scroll() in the same rule',
  code: `
    a { animation-timeline: scroll(); animation-timeline: scroll(y); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that two animation-timeline properties using scroll() in different rules are both detected.
 */
testRule({
  featureId: 'properties.animation-timeline.scroll',
  description: 'should detect two instances of scroll() across different rules',
  code: `
    a { animation-timeline: scroll(); } b { animation-timeline: scroll(x); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});
