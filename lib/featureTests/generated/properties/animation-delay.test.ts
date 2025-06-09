/* AUTO_GENERATED: true */

/* 
feature: properties.animation-delay
docs: https://developer.mozilla.org/docs/Web/CSS/animation-delay
spec: https://drafts.csswg.org/css-animations/#animation-delay
*/

import { testRule } from 'lib/testRule';

/**
 * Tests a basic positive second value for animation-delay.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with positive seconds',
  code: `
    a { animation-delay: 2s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests a basic positive millisecond value for animation-delay.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with positive milliseconds',
  code: `
    a { animation-delay: 500ms; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with a zero second value.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with zero seconds',
  code: `
    a { animation-delay: 0s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with a negative second value.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with negative seconds',
  code: `
    a { animation-delay: -1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with a negative millisecond value.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with negative milliseconds',
  code: `
    a { animation-delay: -250ms; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with multiple comma-separated positive values.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with multiple positive values',
  code: `
    a { animation-delay: 1s, 2s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests animation-delay with multiple comma-separated mixed positive and negative values.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with multiple mixed values',
  code: `
    a { animation-delay: 0.5s, -1s, 2s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests the -webkit- prefixed version of animation-delay.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag -webkit-animation-delay',
  code: `
    a { -webkit-animation-delay: 1s; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the -moz- prefixed version of animation-delay.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag -moz-animation-delay',
  code: `
    a { -moz-animation-delay: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests the -o- prefixed version of animation-delay.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag -o-animation-delay',
  code: `
    a { -o-animation-delay: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests the -ms- prefixed version of animation-delay.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag -ms-animation-delay',
  code: `
    a { -ms-animation-delay: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests multiple prefixed and unprefixed animation-delay properties.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag multiple prefixed and unprefixed animation-delay',
  code: `
    
  a {
      -webkit-animation-delay: 1s;
      animation-delay: 2s;
      -moz-animation-delay: 3s;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-delay is flagged when set as the second time value in the animation shorthand.
 */
testRule({
  featureId: 'properties.animation-delay',
  description:
    'should flag animation-delay implicitly set via animation shorthand (duration and delay)',
  code: `
    a { animation: rotate 0.7s 2s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-delay is flagged when explicitly ordered in animation shorthand.
 */
testRule({
  featureId: 'properties.animation-delay',
  description:
    'should flag animation-delay implicitly set via animation shorthand (explicit duration and delay order)',
  code: `
    a { animation: 1s 2s linear rotate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple animation delays specified within a comma-separated animation shorthand.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag multiple animation-delays within multiple animation shorthand values',
  code: `
    a { animation: rotate 1s, slide 2s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that animation-delay is NOT flagged when only animation-duration is specified in the shorthand.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should not flag animation shorthand if only duration is present',
  code: `
    a { animation: rotate 0.7s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-delay with the 'initial' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: "should flag animation-delay with 'initial' keyword",
  code: `
    a { animation-delay: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with the 'inherit' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: "should flag animation-delay with 'inherit' keyword",
  code: `
    a { animation-delay: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with the 'unset' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: "should flag animation-delay with 'unset' keyword",
  code: `
    a { animation-delay: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with the 'revert' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: "should flag animation-delay with 'revert' keyword",
  code: `
    a { animation-delay: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with the 'revert-layer' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: "should flag animation-delay with 'revert-layer' keyword",
  code: `
    a { animation-delay: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that animation-delay without a unit is not flagged (invalid CSS).
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should not flag animation-delay with missing unit',
  code: `
    a { animation-delay: 2; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that animation-delay with an invalid unit is not flagged (invalid CSS).
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should not flag animation-delay with an invalid unit',
  code: `
    a { animation-delay: 2px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that animation-delay with an invalid keyword is not flagged (invalid CSS).
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should not flag animation-delay with a non-time keyword',
  code: `
    a { animation-delay: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-delay when its value is a CSS variable, as it's a general property feature.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with var()',
  code: `
    a { --my-delay: 1s; animation-delay: var(--my-delay); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay when it is exactly guarded by an @supports rule.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should not flag animation-delay when guarded by exact @supports query',
  code: `
    
          @supports (animation-delay: 2s) {
              a { animation-delay: 2s; }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-delay when it's not guarded by an @supports rule with a different value.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay when not guarded by @supports (different value)',
  code: `
    
          @supports (animation-delay: 1s) {
              a { animation-delay: 2s; }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay when it's not guarded by an @supports rule checking a different property.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay when not guarded by @supports (different property)',
  code: `
    
          @supports (transform: rotate(10deg)) {
              a { animation-delay: 2s; }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay within a nested @supports query, ensuring it is flagged if not exactly guarded.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay inside a nested @supports query',
  code: `
    
          @supports (display: block) {
              @supports (color: red) {
                  a { animation-delay: 1s; }
              }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay within a nested @supports query, ensuring it is NOT flagged if exactly guarded.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should not flag animation-delay inside a nested @supports query if exactly guarded',
  code: `
    
          @supports (display: block) {
              @supports (animation-delay: 1s) {
                  a { animation-delay: 1s; }
              }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-delay when the property name uses mixed casing.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with mixed case property name',
  code: `
    a { Animation-Delay: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay when the property name uses uppercase casing.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with uppercase property name',
  code: `
    a { ANIMATION-DELAY: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with extra whitespace.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with excessive whitespace',
  code: `
    a { animation-delay:  2s  ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with an inline comment.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with inline comment',
  code: `
    a { animation-delay: 1s; /* comment */ }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with a comment placed before its value.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with comment before value',
  code: `
    a { animation-delay: /* comment */ 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with a comment within multiple values.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay with comment within multiple values',
  code: `
    a { animation-delay: 1s, /* c */ 2s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests a combination of explicit animation-delay and animation shorthand in the same rule.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag both animation-delay and animation shorthand',
  code: `
    
          .foo {
              animation-delay: 1s;
              animation: slide 2s 3s;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests animation-delay inside a rule with a different display context (context is irrelevant for this property).
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay in a different display context (should still count)',
  code: `
    
          .foo {
              display: flex;
              animation-delay: 1s;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay in a nested rule targeting the same element via pseudo-class.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay in a nested rule for the same element',
  code: `
    
          .foo {
              &:hover {
                  animation-delay: 1s;
              }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay in a rule targeting a child element.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay in a rule for a child element',
  code: `
    
          .foo {
              & .bar {
                  animation-delay: 1s;
              }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay in a rule targeting a pseudo-element.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag animation-delay in a rule for a pseudo-element',
  code: `
    
          .foo {
              &::before {
                  animation-delay: 1s;
              }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests a scenario with two animation-delay warnings in one block.
 */
testRule({
  featureId: 'properties.animation-delay',
  description: 'should flag two warnings for multiple animation-delay properties',
  code: `
    
          a {
              animation-delay: 1s;
              -webkit-animation-delay: 2s;
          }
          
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
