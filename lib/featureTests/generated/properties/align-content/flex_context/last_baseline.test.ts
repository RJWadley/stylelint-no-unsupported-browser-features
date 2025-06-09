/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.flex_context.last_baseline
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the basic detection of align-content: last baseline when display is flex in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description: 'should detect align-content: last baseline in a flex container',
  code: `
    
  .foo {
    display: flex;
    align-content: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that CSS variables are not resolved for specific values like 'last baseline'.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description:
    'should not detect align-content: last baseline when value is a var() in a flex container',
  code: `
    
  .foo {
    display: flex;
    --my-baseline: last baseline;
    align-content: var(--my-baseline);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that CSS-wide keyword 'initial' is not considered 'last baseline'.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description: 'should not detect align-content: initial in a flex container',
  code: `
    
  .foo {
    display: flex;
    align-content: initial;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that CSS-wide keyword 'unset' is not considered 'last baseline'.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description: 'should not detect align-content: unset in a flex container',
  code: `
    
  .foo {
    display: flex;
    align-content: unset;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the feature is not flagged when correctly guarded by @supports (exact property and value).
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description: 'should not detect align-content: last baseline when guarded by exact @supports',
  code: `
    
  @supports (align-content: last baseline) {
    .foo {
      display: flex;
      align-content: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the feature is flagged when @supports checks a different property.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description:
    'should detect align-content: last baseline when guarded by @supports with different property',
  code: `
    
  @supports (display: flex) {
    .foo {
      display: flex;
      align-content: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the feature is flagged when @supports checks the same property but a different value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description:
    'should detect align-content: last baseline when guarded by @supports with same property, different value',
  code: `
    
  @supports (align-content: center) {
    .foo {
      display: flex;
      align-content: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection when the flex context is established on the parent and the property is in a pseudo-class.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description:
    'should detect align-content: last baseline within a pseudo-class in a flex container',
  code: `
    
  .foo {
    display: flex;
    &:hover {
      align-content: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the feature is not detected when the property is applied to a new element (child selector), as context is not inherited.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description:
    'should not detect align-content: last baseline in a child selector, even with parent flex context',
  code: `
    
  .foo {
    display: flex;
    & .bar {
      align-content: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the feature is not detected when the property is applied to a pseudo-element, as context is not inherited.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description:
    'should not detect align-content: last baseline in a pseudo-element, even with parent flex context',
  code: `
    
  .foo {
    display: flex;
    &::before {
      content: '';
      align-content: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the feature is only detected when 'display: flex' is present in the same rule, ensuring correct context detection.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description:
    'should not detect align-content: last baseline when display context is not explicitly flex in the same rule',
  code: `
    
  .foo {
    align-content: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that multiple occurrences of the feature are correctly counted within a flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description:
    'should detect multiple instances of align-content: last baseline in a flex container',
  code: `
    
  .foo {
    display: flex;
    align-content: last baseline;
  }
  .bar {
    display: flex;
    align-content: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that 'last baseline' is only detected for the 'align-content' property.
 */
testRule({
  featureId: 'properties.align-content.flex_context.last_baseline',
  description: 'should not detect last baseline for a different property in a flex container',
  code: `
    
  .foo {
    display: flex;
    justify-content: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
