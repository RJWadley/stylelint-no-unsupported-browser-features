/* AUTO_GENERATED: true */

/* 
feature: properties.animation-composition
docs: https://developer.mozilla.org/docs/Web/CSS/animation-composition
spec: https://drafts.csswg.org/css-animations-2/#animation-composition
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of 'replace' keyword for animation-composition.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect animation-composition: replace',
  code: `
    a { animation-composition: replace; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of 'add' keyword for animation-composition.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect animation-composition: add',
  code: `
    a { animation-composition: add; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of 'accumulate' keyword for animation-composition.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect animation-composition: accumulate',
  code: `
    a { animation-composition: accumulate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-composition with multiple comma-separated keywords.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: "should detect multiple values 'replace, add'",
  code: `
    a { animation-composition: replace, add; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests animation-composition with all three comma-separated keywords.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: "should detect multiple values 'replace, add, accumulate'",
  code: `
    a { animation-composition: replace, add, accumulate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests usage of 'initial' keyword for animation-composition.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect animation-composition: initial',
  code: `
    a { animation-composition: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of 'unset' keyword for animation-composition.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect animation-composition: unset',
  code: `
    a { animation-composition: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of 'revert' keyword for animation-composition.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect animation-composition: revert',
  code: `
    a { animation-composition: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of 'revert-layer' keyword for animation-composition.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect animation-composition: revert-layer',
  code: `
    a { animation-composition: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that invalid values for animation-composition are not flagged by this rule.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should not flag invalid value',
  code: `
    a { animation-composition: invalid-value; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that non-standard or non-existent vendor prefixed versions are not flagged for a property that doesn't have them.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should not flag non-existent vendor prefixed property',
  code: `
    a { -webkit-animation-composition: add; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-composition: add is not flagged when exactly guarded by @supports (animation-composition: add).
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should not flag when exactly guarded by @supports',
  code: `
    
          @supports (animation-composition: add) {
              .foo {
                  animation-composition: add;
              }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-composition: add is flagged when guarded by @supports (animation-composition: replace).
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should flag when @supports guards with a different value',
  code: `
    
          @supports (animation-composition: replace) {
              .foo {
                  animation-composition: add;
              }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-composition is flagged when its value is a CSS variable, as the property itself is the feature.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should flag animation-composition when using var()',
  code: `
    
          .foo {
              --my-composition: add;
              animation-composition: var(--my-composition);
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple instances of animation-composition in one code block.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should include at least two warnings in one test',
  code: `
    
          .foo {
              animation-composition: add;
          }
          .bar {
              animation-composition: accumulate;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that animation-composition with varied casing is still detected.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect case variations of property name',
  code: `
    a { Animation-Composition: add; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'Add' value with varied casing is still detected.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect case variations of value',
  code: `
    a { animation-composition: Add; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-composition used within a nested pseudo-class (same element context).
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect in nested pseudo-class',
  code: `
    
          .foo {
              animation: test 1s;
              &:hover {
                  animation-composition: add;
              }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-composition used within a nested pseudo-element (new element context).
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect in nested pseudo-element',
  code: `
    
          .foo {
              animation: test 1s;
              &::before {
                  animation-composition: add;
              }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-composition when defined directly inside a @keyframes rule.
 */
testRule({
  featureId: 'properties.animation-composition',
  description: 'should detect animation-composition within @keyframes',
  code: `
    
          @keyframes pulse {
              0% {
                  filter: blur(10px);
                  animation-composition: add;
              }
              100% {
                  filter: blur(20px);
              }
          }
          .icon {
              animation: pulse 3s infinite;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
