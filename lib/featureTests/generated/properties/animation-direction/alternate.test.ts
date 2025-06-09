/* AUTO_GENERATED: true */

/* 
feature: properties.animation-direction.alternate
docs: https://developer.mozilla.org/docs/Web/CSS/animation-direction
spec: https://drafts.csswg.org/css-animations/#valdef-animation-direction-alternate
*/

import { testRule } from 'lib/testRule';

/**
 * Detects the basic use of animation-direction with 'alternate' value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect unprefixed animation-direction: alternate',
  code: `
    a { animation-direction: alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'alternate' value when used within the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect unprefixed animation shorthand with alternate value',
  code: `
    a { animation: slide 2s alternate infinite; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects each instance of 'alternate' when multiple animation-direction values are provided.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect multiple unprefixed alternate values in a comma-separated list',
  code: `
    a { animation-direction: normal, alternate, reverse, alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Detects each instance of 'alternate' when multiple animations are defined in shorthand with 'alternate'.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect multiple unprefixed alternate values in animation shorthand',
  code: `
    a { animation: one 1s alternate, two 2s normal, three 3s alternate-reverse, four 4s alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures that 'normal' value for animation-direction is not flagged.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction: normal',
  code: `
    a { animation-direction: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'reverse' value for animation-direction is not flagged.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction: reverse',
  code: `
    a { animation-direction: reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'alternate-reverse' value for animation-direction is not flagged.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction: alternate-reverse',
  code: `
    a { animation-direction: alternate-reverse; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects the -webkit- prefixed version of animation-direction with 'alternate' value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect -webkit-animation-direction: alternate',
  code: `
    a { -webkit-animation-direction: alternate; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects the -moz- prefixed version of animation-direction with 'alternate' value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect -moz-animation-direction: alternate',
  code: `
    a { -moz-animation-direction: alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects the -ms- prefixed version of animation-direction with 'alternate' value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect -ms-animation-direction: alternate',
  code: `
    a { -ms-animation-direction: alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects the -o- prefixed version of animation-direction with 'alternate' value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect -o-animation-direction: alternate',
  code: `
    a { -o-animation-direction: alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Detects 'alternate' value for both unprefixed and various vendor-prefixed properties.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect a mix of unprefixed and prefixed animation-direction: alternate',
  code: `
    
      .foo {
          animation-direction: alternate;
          -webkit-animation-direction: alternate;
          -moz-animation-direction: alternate;
      }
      
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that 'initial' CSS-wide keyword for animation-direction is not flagged for 'alternate'.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction: initial',
  code: `
    a { animation-direction: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'unset' CSS-wide keyword for animation-direction is not flagged for 'alternate'.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction: unset',
  code: `
    a { animation-direction: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'inherit' CSS-wide keyword for animation-direction is not flagged for 'alternate'.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction: inherit',
  code: `
    a { animation-direction: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'revert' CSS-wide keyword for animation-direction is not flagged for 'alternate'.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction: revert',
  code: `
    a { animation-direction: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'revert-layer' CSS-wide keyword for animation-direction is not flagged for 'alternate'.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction: revert-layer',
  code: `
    a { animation-direction: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that animation-direction using a CSS variable is not flagged when looking for a specific value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction with a CSS variable',
  code: `
    
      .foo {
          --my-direction: alternate;
          animation-direction: var(--my-direction);
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'alternate' is not flagged when an exact @supports query guards the property-value pair.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction: alternate when guarded by exact @supports',
  code: `
    
      @supports (animation-direction: alternate) {
          a {
              animation-direction: alternate;
          }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'alternate' is flagged when @supports guards a different property.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description:
    'should detect animation-direction: alternate when @supports guards a different property',
  code: `
    
      @supports (display: flex) {
          a {
              animation-direction: alternate;
          }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that 'alternate' is flagged when @supports guards the same property but a different value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description:
    'should detect animation-direction: alternate when @supports guards same property but different value',
  code: `
    
      @supports (animation-direction: normal) {
          a {
              animation-direction: alternate;
          }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'alternate' value regardless of its casing.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: "should detect case-insensitive 'ALTERNATE' value",
  code: `
    a { animation-direction: ALTERNATE; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'alternate' value regardless of the property's casing.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: "should detect case-insensitive 'ANIMATION-DIRECTION' property",
  code: `
    a { ANIMATION-DIRECTION: alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that 'alternate' appearing within a CSS comment is not flagged.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction: alternate in a CSS comment',
  code: `
    a { /* animation-direction: alternate; */ color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'alternate' appearing within a CSS string value is not flagged.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation-direction: alternate in a CSS string',
  code: `
    a::before { content: 'animation-direction: alternate;'; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects 'alternate' when combined with other animation properties in a rule.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect animation-direction: alternate with other animation properties',
  code: `
    
      .bar {
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
          animation-direction: alternate;
          animation-iteration-count: infinite;
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures detection works for multiple instances across different rules and positions.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect across multiple rules with varied line and column positions',
  code: `
    
      .foo { animation-direction: alternate; }
          .bar {
              top: 0; animation: bounce 1s alternate; /* another animation */
          }
      @media screen {
          .baz { animation-direction: alternate; }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Detects 'alternate' when used inside an @keyframes block, even if its effect on animation is special or ignored by spec.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect animation-direction: alternate inside @keyframes rule',
  code: `
    
      @keyframes my-animation {
          from {
              left: 0;
              animation-direction: alternate;
          }
          to {
              left: 100px;
          }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks for multiple instances of the feature in a single test case.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should include at least two warnings',
  code: `
    
      .foo {
          animation-direction: alternate;
          -webkit-animation-direction: alternate;
      }
      .bar {
          animation: slide 1s alternate;
      }
      
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures detection within pseudo-class and pseudo-element rules.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect in pseudo-class and pseudo-element rules',
  code: `
    
      a:hover {
        animation-direction: alternate;
      }
      a::before {
        animation-direction: alternate;
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Detects the feature correctly within nested CSS rules.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect animation-direction: alternate in nested rules',
  code: `
    
      .parent {
          .child {
              animation-direction: alternate;
          }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures 'alternate' is detected regardless of surrounding whitespace.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect with varying whitespace',
  code: `
    
      a {animation-direction:alternate;}
      .foo { animation-direction : alternate ; }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures no false positives when the animation-direction property is not used.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect when animation-direction property is absent',
  code: `
    a { color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures no detection when only animation-name is used without specifying 'alternate'.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect when only animation-name is present without direction',
  code: `
    a { animation-name: foo; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures no detection when animation shorthand is used without explicitly setting 'alternate'.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect animation shorthand without explicit direction',
  code: `
    a { animation: foo 1s linear infinite; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures the feature is detected even in complex selectors.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect in complex selectors like attribute selectors',
  code: `
    a[data-anim='true'] { animation-direction: alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'alternate' even if animation-direction is used in a context where it's not valid (e.g., @font-face).
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description:
    'should detect animation-direction: alternate even in invalid contexts like @font-face',
  code: `
    
      @font-face {
          font-family: "MyFont";
          src: url("myfont.woff");
          animation-direction: alternate; /* This is invalid CSS, but the linter should still see the pattern */
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the feature even when declared with !important.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect when declared with !important',
  code: `
    a { animation-direction: alternate !important; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Accurately counts only the 'alternate' values when other directions are also present.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect only alternate values in a mixed comma-separated list',
  code: `
    a { animation-direction: normal, alternate, normal, alternate-reverse, alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures feature detection works across multiple lines of CSS.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect in multi-line CSS',
  code: `
    
      .box {
          animation-direction:
              alternate;
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures feature detection works when animation-direction is on a single line with other properties.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect in a single line with other properties',
  code: `
    .box { width: 100px; animation-direction: alternate; height: 100px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures no detection when animation-direction is present but has no value.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect when animation-direction property has no value',
  code: `
    a { animation-direction: ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures no detection when animation shorthand contains many properties but not 'alternate'.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should not detect complex animation shorthand without alternate',
  code: `
    a { animation: slidein 3s ease-in 1s 2 reverse forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Correctly identifies 'alternate' amidst other animation direction values in shorthand.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect complex animation shorthand with alternate and other directions',
  code: `
    a { animation: slidein 3s ease-in 1s 2 reverse forwards, spin 2s linear infinite alternate, bounce 1s normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that 'alternate' within a comment, even after the property, is not flagged.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: "should not detect alternate when it's commented out",
  code: `
    a { animation-direction: /* alternate */ normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects all instances of 'alternate' when animation-direction is declared multiple times in the same rule.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect multiple animation-direction declarations in the same rule',
  code: `
    
      a {
          animation-direction: normal;
          animation-direction: alternate;
          animation-direction: reverse;
          animation-direction: alternate;
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures detection for a prefixed and an unprefixed version in different rules.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect one prefixed and one unprefixed in separate rules',
  code: `
    
      .foo {
          -webkit-animation-direction: alternate;
      }
      .bar {
          animation-direction: alternate;
      }
      
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures detection for different vendor-prefixed versions in different rules.
 */
testRule({
  featureId: 'properties.animation-direction.alternate',
  description: 'should detect different prefixes in separate rules',
  code: `
    
      .foo {
          -moz-animation-direction: alternate;
      }
      .bar {
          -ms-animation-direction: alternate;
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});
