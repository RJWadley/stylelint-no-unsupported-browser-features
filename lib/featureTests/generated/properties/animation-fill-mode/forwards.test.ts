/* AUTO_GENERATED: true */

/* 
feature: properties.animation-fill-mode.forwards
docs: https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
spec: https://drafts.csswg.org/css-animations/#valdef-animation-fill-mode-forwards
*/

import { testRule } from 'lib/testRule';

/**
 * Basic detection of 'forwards' keyword for animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect 'forwards' for animation-fill-mode",
  code: `
    a { animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensure 'none' is not detected as 'forwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should not detect 'none' for animation-fill-mode",
  code: `
    a { animation-fill-mode: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensure 'backwards' is not detected as 'forwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should not detect 'backwards' for animation-fill-mode",
  code: `
    a { animation-fill-mode: backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensure 'both' is not detected as 'forwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should not detect 'both' for animation-fill-mode",
  code: `
    a { animation-fill-mode: both; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detection of '-webkit-forwards' keyword for -webkit-animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect '-webkit-forwards' for -webkit-animation-fill-mode",
  code: `
    a { -webkit-animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detection of '-moz-forwards' keyword for -moz-animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect '-moz-forwards' for -moz-animation-fill-mode",
  code: `
    a { -moz-animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detection of '-ms-forwards' keyword for -ms-animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect '-ms-forwards' for -ms-animation-fill-mode",
  code: `
    a { -ms-animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Detection of '-o-forwards' keyword for -o-animation-fill-mode.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect '-o-forwards' for -o-animation-fill-mode",
  code: `
    a { -o-animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Detection of 'forwards' when it's the first keyword in the animation shorthand.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect 'forwards' in animation shorthand (value first)",
  code: `
    a { animation: forwards 1s ease name; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detection of 'forwards' when it's in the middle of the animation shorthand.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect 'forwards' in animation shorthand (value middle)",
  code: `
    a { animation: 1s forwards ease name; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detection of 'forwards' when it's the last keyword in the animation shorthand.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect 'forwards' in animation shorthand (value last)",
  code: `
    a { animation: 1s ease name forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detection of 'forwards' with multiple animations in animation shorthand.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect 'forwards' with multiple animations in shorthand",
  code: `
    a { animation: 1s forwards name, 2s ease-in another; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detection of multiple 'forwards' values in animation shorthand.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect multiple 'forwards' in animation shorthand",
  code: `
    a { animation: 1s forwards name, 2s forwards another; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Detection of prefixed 'forwards' within the shorthand.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect prefixed 'forwards' in shorthand",
  code: `
    a { -webkit-animation: 1s forwards name; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detection of 'forwards' when multiple values are present, including 'none'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect 'forwards' when multiple animation-fill-mode values (forwards, none)",
  code: `
    a { animation-fill-mode: forwards, none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detection of 'forwards' when multiple values are present, including 'none', with 'forwards' as second value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect 'forwards' when multiple animation-fill-mode values (none, forwards)",
  code: `
    a { animation-fill-mode: none, forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detection of 'forwards' when multiple values are present, including 'backwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description:
    "should detect 'forwards' when multiple animation-fill-mode values (forwards, backwards)",
  code: `
    a { animation-fill-mode: forwards, backwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detection of multiple 'forwards' values in animation-fill-mode property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect multiple 'forwards' in animation-fill-mode property",
  code: `
    a { animation-fill-mode: forwards, forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Feature should be guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: 'should be guarded by exact @supports (animation-fill-mode: forwards)',
  code: `
    
              @supports (animation-fill-mode: forwards) {
                a {
                  animation-fill-mode: forwards;
                }
              }
              
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Feature should not be guarded by a @supports query for a different property.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: 'should not be guarded by non-matching @supports property',
  code: `
    
              @supports (display: flex) {
                a {
                  animation-fill-mode: forwards;
                }
              }
              
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Feature should not be guarded by a @supports query for the same property but different value.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: 'should not be guarded by non-matching @supports value',
  code: `
    
              @supports (animation-fill-mode: backwards) {
                a {
                  animation-fill-mode: forwards;
                }
              }
              
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Feature should not be guarded by @supports query using the animation shorthand, as it's not an exact match.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: 'should not be guarded by @supports shorthand (animation: forwards)',
  code: `
    
              @supports (animation: forwards) {
                a {
                  animation-fill-mode: forwards;
                }
              }
              
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Guarded by exact prefixed @supports query.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: 'should be guarded by @supports with prefixed property and value',
  code: `
    
              @supports (-webkit-animation-fill-mode: forwards) {
                a {
                  -webkit-animation-fill-mode: forwards;
                }
              }
              
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * CSS-wide keyword 'initial' should not be detected as 'forwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should not detect 'initial' for animation-fill-mode",
  code: `
    a { animation-fill-mode: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * CSS-wide keyword 'inherit' should not be detected as 'forwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should not detect 'inherit' for animation-fill-mode",
  code: `
    a { animation-fill-mode: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * CSS-wide keyword 'unset' should not be detected as 'forwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should not detect 'unset' for animation-fill-mode",
  code: `
    a { animation-fill-mode: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * CSS-wide keyword 'revert' should not be detected as 'forwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should not detect 'revert' for animation-fill-mode",
  code: `
    a { animation-fill-mode: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * CSS-wide keyword 'revert-layer' should not be detected as 'forwards'.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should not detect 'revert-layer' for animation-fill-mode",
  code: `
    a { animation-fill-mode: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * When the feature is a specific value, usage of var() should not be flagged.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should not detect 'forwards' when using a CSS variable",
  code: `
    a { animation-fill-mode: var(--fill-mode); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * When the feature is a specific value, usage of var() with fallback should not be flagged.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should not detect 'forwards' when using a CSS variable with fallback",
  code: `
    a { animation-fill-mode: var(--fill-mode, forwards); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect explicit 'forwards' even if a variable is present in a multi-value list.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect 'forwards' when mixed with var() and explicit value",
  code: `
    a { animation-fill-mode: var(--foo), forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detection should not be affected by comments.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect 'forwards' with comments",
  code: `
    a { animation-fill-mode: /* comment */ forwards /* another comment */; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detection should not be affected by extra whitespace.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect 'forwards' with extra whitespace",
  code: `
    a { animation-fill-mode:  forwards   ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects both prefixed and unprefixed instances in the same rule.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect mixed prefixed and unprefixed 'forwards'",
  code: `
    a { -webkit-animation-fill-mode: forwards; animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensure 'forwards' is only detected for animation-fill-mode context.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should not detect 'forwards' if it's part of a different property value",
  code: `
    a { background-image: url('forwards.png'); content: 'forwards'; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Includes at least one test that has 2 warnings.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should have 2 warnings for multiple 'forwards' instances",
  code: `
    
              .foo {
                animation-fill-mode: forwards;
              }
              .bar {
                animation: slide 1s forwards;
              }
              
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensure detection works within nested CSS rules.
 */
testRule({
  featureId: 'properties.animation-fill-mode.forwards',
  description: "should detect 'forwards' in a nested rule",
  code: `
    
              .foo {
                animation-duration: 1s;
                .bar {
                  animation-fill-mode: forwards;
                }
              }
              
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
