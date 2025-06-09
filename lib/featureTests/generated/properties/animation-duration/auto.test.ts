/* AUTO_GENERATED: true */

/* 
feature: properties.animation-duration.auto
docs: https://developer.mozilla.org/docs/Web/CSS/animation-duration#values
spec: https://drafts.csswg.org/css-animations-2/#valdef-animation-duration-auto
*/

import { testRule } from 'lib/testRule';

/**
 * Tests a basic usage of the 'auto' keyword for animation-duration.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect unprefixed animation-duration: auto;',
  code: `
    a { animation-duration: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures the 'auto' keyword is detected when used inside an @keyframes rule.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect unprefixed animation-duration: auto within @keyframes',
  code: `
    @keyframes anim { from { opacity: 0; } to { opacity: 1; animation-duration: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks if the 'auto' keyword is correctly identified when used as the duration value in the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: auto in shorthand animation property',
  code: `
    a { animation: name auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies that all instances of 'auto' are detected in a comma-separated list of animation-duration values.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect multiple animation-duration: auto values',
  code: `
    a { animation-duration: auto, auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Confirms detection when 'auto' is mixed with standard time values in a comma-separated list.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: auto with other time values',
  code: `
    a { animation-duration: auto, 1s, 200ms; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'auto' is not detected when the declaration is exactly matched and guarded by an @supports query.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should not detect animation-duration: auto when guarded by @supports (exact match)',
  code: `
    @supports (animation-duration: auto) { a { animation-duration: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures detection when @supports guards a different property, not animation-duration.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description:
    'should detect animation-duration: auto when not guarded by @supports (different property)',
  code: `
    @supports (display: flex) { a { animation-duration: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Confirms detection when @supports guards the same property but with a different value.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description:
    'should detect animation-duration: auto when not guarded by @supports (different value)',
  code: `
    @supports (animation-duration: 1s) { a { animation-duration: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks if the 'initial' keyword, which resolves to 'auto' for non-inherited properties, is detected.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: initial as equivalent to auto',
  code: `
    a { animation-duration: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks if the 'unset' keyword, which resolves to 'initial' (and thus 'auto') for non-inherited properties, is detected.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: unset as equivalent to auto',
  code: `
    a { animation-duration: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks if 'inherit', for a non-inherited property, effectively resolves to 'initial'/'auto' and is detected.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: inherit if it resolves to auto',
  code: `
    a { animation-duration: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if 'revert', which restores the property to its previous cascaded value or 'initial'/'auto', is detected.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: revert if it resolves to auto',
  code: `
    a { animation-duration: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if 'revert-layer', which restores the property to its previous cascaded layer value or 'initial'/'auto', is detected.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: revert-layer if it resolves to auto',
  code: `
    a { animation-duration: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Confirms that only the 'auto' keyword is detected, not numerically equivalent values.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: "should not detect 0s, as it is not the 'auto' keyword",
  code: `
    a { animation-duration: 0s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that invalid property values are not detected as 'auto'.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should not detect an invalid negative time value',
  code: `
    a { animation-duration: -1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks for detection of 'auto' when animation-duration is webkit-prefixed.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect -webkit-prefixed animation-duration with auto value',
  code: `
    a { -webkit-animation-duration: auto; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of 'auto' with other vendor prefixes for animation-duration.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect -moz-, -ms-, and -o-prefixed animation-duration with auto value',
  code: `
    a { -moz-animation-duration: auto; -ms-animation-duration: auto; -o-animation-duration: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 0 },
});

/**
 * Verifies detection when 'auto' is used in conjunction with a scroll-driven timeline.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: auto with an explicit scroll timeline',
  code: `
    a { animation-duration: auto; animation-timeline: scroll(root); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies detection when 'auto' is used in conjunction with a view-driven timeline.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: auto with an explicit view timeline',
  code: `
    a { animation-duration: auto; animation-timeline: view(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Confirms that '0s' is not detected as 'auto', even in a scroll-driven animation context.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description:
    "should not detect animation-duration: 0s in scroll-driven context (not 'auto' keyword)",
  code: `
    a { animation-duration: 0s; animation-timeline: scroll(root); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Confirms that a time value like '1s' is not detected as 'auto', even in a scroll-driven animation context.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description:
    "should not detect animation-duration: 1s in scroll-driven context (not 'auto' keyword)",
  code: `
    a { animation-duration: 1s; animation-timeline: scroll(root); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'auto' is not detected when assigned via a CSS variable, following the rule for specific value features.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: "should not detect animation-duration with var() as it's a specific value",
  code: `
    a { --my-duration: auto; animation-duration: var(--my-duration); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks if the 'auto' keyword is detected when applied to a pseudo-element.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: auto in a pseudo-element',
  code: `
    a::before { content: ''; animation-duration: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks if 'auto' is detected within a nested rule targeting a pseudo-class of the same element.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: auto in a nested pseudo-class',
  code: `
    a { &:hover { animation-duration: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks if 'auto' is detected within a nested rule targeting a child element.
 */
testRule({
  featureId: 'properties.animation-duration.auto',
  description: 'should detect animation-duration: auto in a nested child rule',
  code: `
    a { .b { animation-duration: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
