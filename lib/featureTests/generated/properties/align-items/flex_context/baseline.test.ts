/* AUTO_GENERATED: true */

/* 
feature: properties.align-items.flex_context.baseline
docs: https://developer.mozilla.org/docs/Web/CSS/align-items
spec: https://drafts.csswg.org/css-align/#align-items-property
*/

import { testRule } from 'lib/testRule';

/**
 * Verifies detection of 'align-items: baseline' when 'display: flex' is explicitly set in the same rule.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should detect unprefixed align-items: baseline in flex context',
  code: `
    
  .foo {
    display: flex;
    align-items: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies detection of vendor-prefixed 'align-items: baseline' in a flex context, based on MDN compatibility.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should detect vendor-prefixed align-items: baseline in flex context',
  code: `
    
  .foo {
    display: flex;
    -webkit-align-items: baseline;
    -moz-align-items: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies detection of 'align-items: first baseline' and 'align-items: last baseline' as forms of baseline alignment in a flex context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should detect align-items: first baseline and last baseline in flex context',
  code: `
    
  .foo {
    display: flex;
    align-items: first baseline;
    align-items: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Verifies detection of 'align-items: safe baseline' and 'align-items: unsafe baseline' as forms of baseline alignment in a flex context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should detect align-items: safe baseline and unsafe baseline in flex context',
  code: `
    
  .foo {
    display: flex;
    align-items: safe baseline;
    align-items: unsafe baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures 'align-items: baseline' is not flagged as a problem when it is explicitly guarded by an exact '@supports' query for the property and value.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should not flag align-items: baseline when guarded by exact @supports query',
  code: `
    
  @supports (align-items: baseline) {
    .foo {
      display: flex;
      align-items: baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'align-items: baseline' is still flagged when the '@supports' query is for a different property ('display: flex'), as it's not considered a guard.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should flag align-items: baseline when @supports query is for a different property',
  code: `
    
  @supports (display: flex) {
    .foo {
      display: flex;
      align-items: baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures 'align-items: baseline' is still flagged when the '@supports' query is for the same property but a different value ('align-items: center'), as it's not an exact guard.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description:
    'should flag align-items: baseline when @supports query is for same property but different value',
  code: `
    
  @supports (align-items: center) {
    .foo {
      display: flex;
      align-items: baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that 'align-items' using a CSS variable for its value is NOT flagged, as the checker does not resolve variables for specific value features.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should not flag align-items: baseline with var() in flex context',
  code: `
    
  .foo {
    display: flex;
    --my-align: baseline;
    align-items: var(--my-align);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that CSS-wide keywords like 'initial', 'unset', 'revert', and 'revert-layer' for 'align-items' are not flagged as 'baseline', as they typically resolve differently in a flex context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should not flag align-items with CSS-wide keywords in flex context',
  code: `
    
  .foo {
    display: flex;
    align-items: initial;
    align-items: unset;
    align-items: revert;
    align-items: revert-layer;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'align-items: baseline' is NOT flagged when used in non-flex contexts (e.g., grid, block, or no explicit display), as the feature specifically targets 'flex_context'.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should not flag align-items: baseline in non-flex contexts',
  code: `
    
  .bar {
    display: grid;
    align-items: baseline;
  }
  .baz {
    display: block;
    align-items: baseline;
  }
  .qux {
    align-items: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that other valid 'align-items' values (e.g., 'center', 'start', 'end', 'flex-start', 'flex-end', 'stretch', 'normal') in a flex context are NOT flagged, as they are not the 'baseline' value.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should not flag other align-items values in flex context',
  code: `
    
  .foo {
    display: flex;
    align-items: center;
    align-items: start;
    align-items: end;
    align-items: flex-start;
    align-items: flex-end;
    align-items: stretch;
    align-items: normal;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'align-items: baseline' is NOT flagged when it appears within nested selectors that target new elements (e.g., child selectors, pseudo-elements), as these do not inherit the parent's display context for detection.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should not flag align-items: baseline in nested selectors targeting new elements',
  code: `
    
  .foo {
    display: flex;
    & .bar {
      align-items: baseline;
    }
    &::before {
      align-items: baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'align-items: baseline' is detected when used within a nested pseudo-class selector (e.g., ':hover') that targets the same element with 'display: flex'.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description: 'should detect align-items: baseline in nested pseudo-class for same element',
  code: `
    
  .foo {
    display: flex;
    &:hover {
      align-items: baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Combines detection of unprefixed and -webkit-prefixed 'align-items: baseline' in separate rules, ensuring at least two warnings are generated.
 */
testRule({
  featureId: 'properties.align-items.flex_context.baseline',
  description:
    'should include at least two warnings for align-items: baseline and its webkit prefix',
  code: `
    
  .foo {
    display: flex;
    align-items: baseline; /* Warning 1 */
  }
  
  .bar {
    display: flex;
    -webkit-align-items: baseline; /* Warning 2 */
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
