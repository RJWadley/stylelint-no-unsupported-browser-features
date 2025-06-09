/* AUTO_GENERATED: true */

/* 
feature: properties.animation-fill-mode
docs: https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
spec: https://drafts.csswg.org/css-animations/#animation-fill-mode
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the basic usage of animation-fill-mode with 'none' value.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: "should detect unprefixed 'none' value",
  code: `
    .foo { animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the basic usage of animation-fill-mode with 'forwards' value.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: "should detect unprefixed 'forwards' value",
  code: `
    .foo { animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the basic usage of animation-fill-mode with 'backwards' value.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: "should detect unprefixed 'backwards' value",
  code: `
    .foo { animation-fill-mode: backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the basic usage of animation-fill-mode with 'both' value.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: "should detect unprefixed 'both' value",
  code: `
    .foo { animation-fill-mode: both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of -webkit-animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect -webkit- prefixed value',
  code: `
    .foo { -webkit-animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of -moz-animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect -moz- prefixed value',
  code: `
    .foo { -moz-animation-fill-mode: backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of -ms-animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect -ms- prefixed value',
  code: `
    .foo { -ms-animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of -o-animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect -o- prefixed value',
  code: `
    .foo { -o-animation-fill-mode: both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests detection of multiple comma-separated values.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect multiple unprefixed values',
  code: `
    .foo { animation-fill-mode: none, backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests detection of multiple comma-separated values with three items.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect multiple unprefixed values with three values',
  code: `
    .foo { animation-fill-mode: both, forwards, none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests detection when animation-fill-mode is specified via the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect animation-fill-mode within animation shorthand',
  code: `
    .foo { animation: slide 1s ease-in 1 forwards; } @keyframes slide { from { opacity: 0; } to { opacity: 1; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection when animation-fill-mode is specified via the animation shorthand property for multiple animations.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description:
    'should detect animation-fill-mode within animation shorthand with multiple animations',
  code: `
    .foo { animation: slide1 1s both, slide2 2s backwards; } @keyframes slide1 { from { opacity: 0; } to { opacity: 1; } } @keyframes slide2 { from { color: red; } to { color: blue; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests detection of the 'initial' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: "should detect 'initial' keyword",
  code: `
    .foo { animation-fill-mode: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of the 'inherit' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: "should detect 'inherit' keyword",
  code: `
    .foo { animation-fill-mode: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of the 'unset' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: "should detect 'unset' keyword",
  code: `
    .foo { animation-fill-mode: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-fill-mode is not detected when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should not detect when guarded by exact @supports query',
  code: `
    @supports (animation-fill-mode: forwards) { .foo { animation-fill-mode: forwards; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-fill-mode is detected when the @supports query is for a different property.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect when not guarded by @supports for different property',
  code: `
    @supports (display: flex) { .foo { animation-fill-mode: forwards; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-fill-mode is detected when the @supports query is for the same property but a different value.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect when not guarded by @supports for same property but different value',
  code: `
    @supports (animation-fill-mode: none) { .foo { animation-fill-mode: forwards; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-fill-mode is detected when its value is a CSS variable, as the property itself is being used.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect when value is a CSS variable',
  code: `
    .foo { --fill-mode: forwards; animation-fill-mode: var(--fill-mode); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the property name is case-insensitive.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect case insensitivity for property name',
  code: `
    .foo { ANIMATION-FILL-MODE: FORWARDS; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection with CSS comments around the property and value.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect with comments',
  code: `
    .foo { /* comment */ animation-fill-mode /* another */ : /* one more */ forwards /* end */; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures no detection when the rule is empty.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should not detect in an empty rule',
  code: `
    .foo { }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests a scenario with two warnings in different lines/columns.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should include two warnings',
  code: `
    .foo { animation-fill-mode: forwards; -webkit-animation-fill-mode: backwards; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Confirms that animation-fill-mode is not detected when used within an @keyframes rule, as per specification it's not an animatable property within keyframes.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description:
    "should not detect animation-fill-mode inside @keyframes rule as it's not applicable",
  code: `
    @keyframes slide { from { transform: translateX(0); animation-fill-mode: forwards; } to { transform: translateX(100px); } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the value 'forwards' is detected case-insensitively.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect case insensitivity for value',
  code: `
    .foo { animation-fill-mode: FORWARDS; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-fill-mode is detected in a nested rule (`& .bar`) as it applies to a new element regardless of display context.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect animation-fill-mode in nested rule targeting a different element',
  code: `
    .foo { display: block; & .bar { animation-fill-mode: forwards; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection with extra whitespace around the property and value.
 */
testRule({
  featureId: 'properties.animation-fill-mode',
  description: 'should detect with extra whitespace',
  code: `
    .foo { animation-fill-mode :   forwards   ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
