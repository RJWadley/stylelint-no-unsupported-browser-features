/* AUTO_GENERATED: true */

/* 
feature: properties.animation-timeline.view
docs: https://developer.mozilla.org/docs/Web/CSS/animation-timeline/view
spec: https://drafts.csswg.org/scroll-animations/#view-notation
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the most basic usage of the view() function for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with no parameters',
  code: `
    a { animation-timeline: view(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with the explicit 'block' axis, which is the default, for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with block axis',
  code: `
    a { animation-timeline: view(block); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with the 'inline' axis for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with inline axis',
  code: `
    a { animation-timeline: view(inline); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with the 'x' axis for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with x axis',
  code: `
    a { animation-timeline: view(x); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with the 'y' axis for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with y axis',
  code: `
    a { animation-timeline: view(y); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with the explicit 'auto' inset, which is the default, for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with auto inset',
  code: `
    a { animation-timeline: view(auto); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with a single percentage inset value for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with percentage inset',
  code: `
    a { animation-timeline: view(20%); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with a single length inset value for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with length inset',
  code: `
    a { animation-timeline: view(200px); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with two percentage inset values for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with two percentage insets',
  code: `
    a { animation-timeline: view(20% 40%); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with mixed percentage and length inset values for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with mixed percentage and length insets',
  code: `
    a { animation-timeline: view(20% 200px); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with two length inset values for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with two length insets',
  code: `
    a { animation-timeline: view(100px 200px); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with 'auto' and a length inset value for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with auto and length inset',
  code: `
    a { animation-timeline: view(auto 200px); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with both axis and inset parameters for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with axis and inset',
  code: `
    a { animation-timeline: view(inline 20%); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with axis and two inset values for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with axis and two insets',
  code: `
    a { animation-timeline: view(x 200px auto); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that view() is not flagged when correctly guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should not detect view() when guarded by exact @supports query',
  code: `
    @supports (animation-timeline: view()) { a { animation-timeline: view(); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that view(block) is not flagged when correctly guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should not detect view(block) when guarded by exact @supports query',
  code: `
    @supports (animation-timeline: view(block)) { a { animation-timeline: view(block); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that view(inline 20%) is not flagged when correctly guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should not detect view(inline 20%) when guarded by exact @supports query',
  code: `
    @supports (animation-timeline: view(inline 20%)) { a { animation-timeline: view(inline 20%); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that view() is flagged when the @supports query checks a different property.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description:
    'should detect view() when guarded by incorrect @supports query (different property)',
  code: `
    @supports (display: flex) { a { animation-timeline: view(); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that view() is flagged when the @supports query checks a different animation-timeline function.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description:
    'should detect view() when guarded by incorrect @supports query (different function)',
  code: `
    @supports (animation-timeline: scroll()) { a { animation-timeline: view(); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that view() is not flagged when a CSS variable is used for the function value, as we cannot resolve it.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description:
    'should not detect view() when using a CSS variable for the function (feature is for specific value)',
  code: `
    a { --view-func: view(); animation-timeline: var(--view-func); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that view() is flagged if the function is used, even if its parameter is a variable.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() when using a CSS variable for inset value',
  code: `
    a { --my-inset: 20%; animation-timeline: view(var(--my-inset)); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that CSS-wide keywords like 'initial' for animation-timeline do not trigger the view() detection.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should not detect view() when using CSS-wide keyword for the property value',
  code: `
    a { animation-timeline: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that multiple view() instances within the same animation-timeline property are detected.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect multiple instances of view() in a single rule',
  code: `
    a { animation-timeline: view(), view(x 10%); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that multiple view() instances in different rules are detected, resulting in 2 warnings.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect multiple instances of view() across different rules',
  code: `
    a { animation-timeline: view(); } b { animation-timeline: view(inline); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests view() when used inside a nested rule for the same element (pseudo-class).
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() inside a nested rule (same context)',
  code: `
    .foo { &:hover { animation-timeline: view(); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() when used inside a nested rule targeting a new element (pseudo-element). This should still be detected because the property is present.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() inside a nested rule (new element)',
  code: `
    .foo { &::before { animation-timeline: view(); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with comments and non-standard whitespace.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with comments and varied whitespace',
  code: `
    a { /* comment */ animation-timeline: view ( /* another comment */ block /* yet another */ ) /* final comment */ ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() with different casing (e.g., VIEW()), which should still be detected.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with case insensitivity',
  code: `
    a { animation-timeline: VIEW(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests view() when it's part of a comma-separated list for animation-timeline.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() as part of a list of animation-timeline values',
  code: `
    a { animation-timeline: scroll(), view(), auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that if the property itself is prefixed, it's counted under the correct prefix, not as unprefixed view().
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with -webkit- prefix on property',
  code: `
    a { -webkit-animation-timeline: view(); }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that if the property itself is prefixed with multiple view() values, they are counted under the correct prefix.
 */
testRule({
  featureId: 'properties.animation-timeline.view',
  description: 'should detect view() with -moz- prefix on property (multiple values)',
  code: `
    a { -moz-animation-timeline: view(), view(y); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 2, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
