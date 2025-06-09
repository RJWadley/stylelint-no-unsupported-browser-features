/* AUTO_GENERATED: true */

/* 
feature: properties.align-items.flex_context.last_baseline
docs: https://developer.mozilla.org/docs/Web/CSS/align-items
spec: https://drafts.csswg.org/css-align/#align-items-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the basic case of using 'last baseline' with 'align-items' in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should detect unprefixed align-items: last baseline in flex context',
  code: `
    
  .foo {
    display: flex;
    align-items: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of '-webkit-align-items: last baseline' in a flex container. Although MDN does not show this prefixed, the checker might count it if it exists in older engines or for thoroughness.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should detect -webkit-align-items: last baseline in flex context',
  code: `
    
  .foo {
    display: flex;
    -webkit-align-items: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of '-moz-align-items: last baseline' in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should detect -moz-align-items: last baseline in flex context',
  code: `
    
  .foo {
    display: flex;
    -moz-align-items: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of '-ms-align-items: last baseline' in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should detect -ms-align-items: last baseline in flex context',
  code: `
    
  .foo {
    display: flex;
    -ms-align-items: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of '-o-align-items: last baseline' in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should detect -o-align-items: last baseline in flex context',
  code: `
    
  .foo {
    display: flex;
    -o-align-items: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests case insensitivity for 'last baseline' value.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should detect align-items: last baseline with mixed case',
  code: `
    
  .foo {
    display: flex;
    align-items: LAST BASELINE;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests tolerance for extra whitespace around 'last baseline'.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should detect align-items: last baseline with extra whitespace',
  code: `
    
  .foo {
    display: flex;
    align-items:  last   baseline ;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'last baseline' is detected when nested in a pseudo-class (same element context) within a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description:
    'should detect align-items: last baseline in nested pseudo-class within flex context',
  code: `
    
  .foo {
    display: flex;
    &:hover {
      align-items: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures 'last baseline' is not detected when used with 'align-items' in a grid container, as the feature is specific to flex context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should not detect align-items: last baseline in grid context',
  code: `
    
  .foo {
    display: grid;
    align-items: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'last baseline' is not detected when used with 'align-items' in a block container.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should not detect align-items: last baseline in block context',
  code: `
    
  .foo {
    display: block;
    align-items: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures other 'align-items' values are not detected in a flex context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should not detect align-items: center in flex context',
  code: `
    
  .foo {
    display: flex;
    align-items: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures other 'align-items' values are not detected in a flex context, specifically flex-start.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should not detect align-items: flex-start in flex context',
  code: `
    
  .foo {
    display: flex;
    align-items: flex-start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'last baseline' is not detected when explicitly guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should not detect align-items: last baseline when guarded by @supports',
  code: `
    
  @supports (align-items: last baseline) {
    .foo {
      display: flex;
      align-items: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'last baseline' is detected when guarded by an @supports query for a different property.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description:
    'should detect align-items: last baseline when guarded by incorrect @supports (different property)',
  code: `
    
  @supports (display: flex) {
    .foo {
      display: flex;
      align-items: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures 'last baseline' is detected when guarded by an @supports query for the same property but a different value.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description:
    'should detect align-items: last baseline when guarded by incorrect @supports (different value)',
  code: `
    
  @supports (align-items: center) {
    .foo {
      display: flex;
      align-items: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures 'last baseline' is not detected when the value is a CSS variable, as the checker does not resolve variables for specific value checks.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should not detect align-items: last baseline when value is a variable',
  code: `
    
  .foo {
    display: flex;
    --my-align: last baseline;
    align-items: var(--my-align);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'initial' keyword is not detected as 'last baseline'.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should not detect align-items: initial in flex context',
  code: `
    
  .foo {
    display: flex;
    align-items: initial;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'unset' keyword is not detected as 'last baseline'.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should not detect align-items: unset in flex context',
  code: `
    
  .foo {
    display: flex;
    align-items: unset;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'last baseline' is not detected when used in a nested rule targeting a child element, as it does not inherit the parent's display context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should not detect align-items: last baseline in nested child selector',
  code: `
    
  .foo {
    display: flex;
    & .bar {
      align-items: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'last baseline' is not detected when used in a nested rule targeting a pseudo-element, as it does not inherit the parent's display context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should not detect align-items: last baseline in nested pseudo-element',
  code: `
    
  .foo {
    display: flex;
    &::before {
      align-items: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'last baseline' is not detected when the rule does not explicitly define a display context as flex.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should not detect align-items: last baseline without explicit display context',
  code: `
    
  .foo {
    align-items: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests multiple instances of the problematic feature.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should detect two instances of align-items: last baseline in flex context',
  code: `
    
  .foo {
    display: flex;
    align-items: last baseline;
  }
  .bar {
    display: flex;
    align-items: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests a mix of unprefixed and prefixed instances.
 */
testRule({
  featureId: 'properties.align-items.flex_context.last_baseline',
  description: 'should detect one unprefixed and one webkit prefixed align-items: last baseline',
  code: `
    
  .foo {
    display: flex;
    align-items: last baseline;
  }
  .bar {
    display: flex;
    -webkit-align-items: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
