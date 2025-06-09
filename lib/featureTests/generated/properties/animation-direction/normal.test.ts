/* AUTO_GENERATED: true */

/* 
feature: properties.animation-direction.normal
docs: https://developer.mozilla.org/docs/Web/CSS/animation-direction
spec: https://drafts.csswg.org/css-animations/#valdef-animation-direction-normal
*/

import { testRule } from 'lib/testRule';

/**
 * Detects the 'normal' keyword for the animation-direction property.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should detect animation-direction: normal',
  code: `
    
  a {
    animation-direction: normal;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'normal' keyword when used in the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: "should detect 'normal' in animation shorthand",
  code: `
    
  a {
    animation: myAnim 2s ease-in-out normal forwards;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'NORMAL' keyword due to case-insensitivity of CSS values.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: "should detect case-insensitive 'normal'",
  code: `
    
  a {
    animation-direction: NORMAL;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'normal' keyword when surrounded by varying whitespace.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should detect with varying whitespace',
  code: `
    
  a {
    animation-direction : normal ;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that 'reverse', 'alternate', and 'alternate-reverse' are not flagged as 'normal'.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should not detect other animation-direction values',
  code: `
    
  a {
    animation-direction: reverse;
    animation-direction: alternate;
    animation-direction: alternate-reverse;
    animation: myAnim 2s alternate-reverse;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * The 'normal' value is default, but the linter should only flag explicit usage.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should not detect when animation-direction is not explicitly set (default value)',
  code: `
    
  a {
    animation-duration: 1s;
    animation-name: slide;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that CSS-wide keywords are not considered 'normal' values.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should not detect CSS-wide keywords',
  code: `
    
  a {
    animation-direction: initial;
    animation-direction: unset;
    animation-direction: inherit;
    animation-direction: revert;
    animation-direction: revert-layer;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * When 'normal' is passed via a CSS variable, it should not be flagged as the specific value is unknown statically.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should not detect when using CSS variable',
  code: `
    
  a {
    --animation-direction-value: normal;
    animation-direction: var(--animation-direction-value);
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'normal' keyword within comments or strings is ignored.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should not detect in comments or strings',
  code: `
    
  a {
    /* animation-direction: normal; */
    content: "animation-direction: normal;";
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * The feature 'properties.animation-direction.normal' refers to the unprefixed property. Prefixed versions are not considered part of this feature.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should not detect prefixed versions',
  code: `
    
  a {
    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;
    -ms-animation-direction: normal;
    -o-animation-direction: normal;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Usage of 'animation-direction: normal' should not be flagged if exactly guarded by an @supports query.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should be guarded by @supports (exact match)',
  code: `
    
  @supports (animation-direction: normal) {
    a {
      animation-direction: normal;
    }
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Usage of 'animation-direction: normal' should be flagged if @supports query is for the same property but a different value.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should not be guarded by @supports (different value)',
  code: `
    
  @supports (animation-direction: reverse) {
    a {
      animation-direction: normal;
    }
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Usage of 'animation-direction: normal' should be flagged if @supports query is for a different property.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should not be guarded by @supports (different property)',
  code: `
    
  @supports (display: flex) {
    a {
      animation-direction: normal;
    }
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Combines two instances of 'animation-direction: normal' to ensure multiple warnings are caught.
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should include at least two warnings in one test',
  code: `
    
  .foo {
    animation-direction: normal;
  }
  .bar {
    animation: slide 1s ease-in normal;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Detects 'normal' within a nested rule targeting the same element (pseudo-class).
 */
testRule({
  featureId: 'properties.animation-direction.normal',
  description: 'should detect in a nested pseudo-class',
  code: `
    
  .foo {
    animation-duration: 1s;
    &:hover {
      animation-direction: normal;
    }
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
