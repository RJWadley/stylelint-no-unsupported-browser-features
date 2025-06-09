/* AUTO_GENERATED: true */

/* 
feature: properties.animation-play-state.paused
docs: https://developer.mozilla.org/docs/Web/CSS/animation-play-state
spec: https://drafts.csswg.org/css-animations/#valdef-animation-play-state-paused
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic detection of the 'paused' value for animation-play-state.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: 'should detect animation-play-state: paused;',
  code: `
    a { animation-play-state: paused; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of 'paused' when specified directly within a @keyframes rule's property.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: 'should detect animation-play-state: paused in a @keyframes rule',
  code: `
    
          @keyframes slide {
              from { left: 0; animation-play-state: paused; }
              to { left: 100px; animation-play-state: running; }
          }
          a { animation-name: slide; animation-duration: 1s; }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection when 'paused' is one of multiple comma-separated values for animation-play-state.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect 'paused' in multiple animation-play-state values",
  code: `
    a { animation-play-state: running, paused, running; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of 'paused' when used within the 'animation' shorthand property.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect 'paused' in animation shorthand property",
  code: `
    
          @keyframes slide {
              from { left: 0; }
              to { left: 100px; }
          }
          a { animation: slide 1s linear paused; }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that 'running' is not flagged when 'paused' is the specific feature being tested for animation-play-state.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should not detect 'running' value",
  code: `
    a { animation-play-state: running; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'paused' is not flagged when an exact @supports query for 'animation-play-state: paused' is present.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should not detect 'paused' when guarded by exact @supports query",
  code: `
    
          @supports (animation-play-state: paused) {
              a { animation-play-state: paused; }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'paused' is flagged when the @supports query is for 'animation-play-state' but with a different value (e.g., 'running').
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect 'paused' when @supports query has a different value",
  code: `
    
          @supports (animation-play-state: running) {
              a { animation-play-state: paused; }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'paused' is flagged when the @supports query is for a completely different CSS property (e.g., 'display').
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect 'paused' when @supports query is for a different property",
  code: `
    
          @supports (display: flex) {
              a { animation-play-state: paused; }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'paused' is not flagged when its value is set via a CSS variable, as the linter cannot resolve its dynamic content for specific value checks.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should not detect 'paused' when using CSS variable",
  code: `
    
          a {
              --play-state: paused;
              animation-play-state: var(--play-state);
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the CSS-wide keyword 'initial' is not flagged for the 'paused' feature, as it's not explicitly 'paused'.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should not detect CSS-wide keyword 'initial'",
  code: `
    a { animation-play-state: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the CSS-wide keyword 'inherit' is not flagged for the 'paused' feature.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should not detect CSS-wide keyword 'inherit'",
  code: `
    a { animation-play-state: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the CSS-wide keyword 'unset' is not flagged for the 'paused' feature.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should not detect CSS-wide keyword 'unset'",
  code: `
    a { animation-play-state: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the CSS-wide keyword 'revert' is not flagged for the 'paused' feature.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should not detect CSS-wide keyword 'revert'",
  code: `
    a { animation-play-state: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the CSS-wide keyword 'revert-layer' is not flagged for the 'paused' feature.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should not detect CSS-wide keyword 'revert-layer'",
  code: `
    a { animation-play-state: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'PAUSED' is detected correctly, ignoring case for the value of animation-play-state.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect 'paused' with case insensitivity",
  code: `
    a { animation-play-state: PAUSED; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'paused' is detected correctly despite extra whitespace and inline comments around its value.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect 'paused' with surrounding whitespace and comments",
  code: `
    a { animation-play-state : /* some comment */ paused ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that an unrecognized or syntactically invalid value for animation-play-state is not flagged for the 'paused' feature.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: 'should not detect an invalid value for animation-play-state',
  code: `
    a { animation-play-state: invalid-state; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that all occurrences of 'animation-play-state: paused;' declarations within the same rule are detected.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect multiple instances of 'paused' for two warnings within the same rule",
  code: `
    
          a {
              animation-play-state: paused;
              animation-play-state: paused;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests detection of 'paused' when applied within a pseudo-class selector (e.g., :hover), which modifies the state of the same element.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect 'paused' in a pseudo-class selector (same element context)",
  code: `
    
          .foo {
              animation-name: slide;
              animation-duration: 1s;
              &:hover {
                  animation-play-state: paused;
              }
          }
          @keyframes slide { from { left: 0; } to { left: 100px; } }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of 'paused' when applied to a pseudo-element (e.g., ::before), as the value 'paused' should still be detected despite being on a generated box.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect 'paused' in a pseudo-element context (new element)",
  code: `
    
          .foo {
              &::before {
                  content: '';
                  animation-play-state: paused;
              }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests whether 'paused' is detected if the animation-play-state property itself is vendor prefixed (e.g., -webkit-animation-play-state). This assumes the linter identifies the value 'paused' regardless of the property's prefix status and counts it under the corresponding prefix.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect 'paused' if property is non-standard vendor prefixed",
  code: `
    a { -webkit-animation-play-state: paused; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'paused' is detected when it appears in multiple, separate CSS rules.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect multiple instances of 'paused' across different rules",
  code: `
    
          .foo { animation-play-state: paused; }
          .bar { animation-play-state: paused; }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests detection of 'paused' nested deeply within a selector that still refers to the same element.
 */
testRule({
  featureId: 'properties.animation-play-state.paused',
  description: "should detect 'paused' within a complex selector structure",
  code: `
    
          .container {
              .item {
                  &:nth-child(even) {
                      animation-play-state: paused;
                  }
              }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
