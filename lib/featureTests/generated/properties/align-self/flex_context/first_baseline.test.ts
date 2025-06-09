/* AUTO_GENERATED: true */

/* 
feature: properties.align-self.flex_context.first_baseline
docs: https://developer.mozilla.org/docs/Web/CSS/align-self
spec: https://drafts.csswg.org/css-align/#align-self-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of 'align-self: first baseline' on a flex item without vendor prefixes. This should be detected as it's the target feature.
 */
testRule({
  featureId: 'properties.align-self.flex_context.first_baseline',
  description: 'should detect unprefixed align-self: first baseline in flex context',
  code: `
    
  .container {
    display: flex;
  }
  .item {
    align-self: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of 'align-self: first baseline' with and without vendor prefixes on a flex item. All instances (prefixed and unprefixed) should be detected.
 */
testRule({
  featureId: 'properties.align-self.flex_context.first_baseline',
  description:
    'should detect vendor prefixed and unprefixed align-self: first baseline in flex context',
  code: `
    
  .container {
    display: flex;
  }
  .item {
    -webkit-align-self: first baseline;
    -moz-align-self: first baseline;
    align-self: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-self: first baseline' is NOT detected when the item is in a grid context, as the feature explicitly targets 'flex_context'.
 */
testRule({
  featureId: 'properties.align-self.flex_context.first_baseline',
  description: 'should not detect align-self: first baseline in grid context',
  code: `
    
  .container {
    display: grid;
  }
  .item {
    align-self: first baseline; /* Should not be flagged as it's not a flex context */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-self: first baseline' is NOT detected on a non-flex/non-grid element (block-level box), as the property does not apply and therefore not in a flex context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.first_baseline',
  description: 'should not detect align-self: first baseline on a block-level element',
  code: `
    
  .block-element {
    align-self: first baseline; /* align-self does not apply to block-level boxes */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-self' with other valid values ('start', 'center') is NOT flagged, as the feature specifically targets 'first baseline'.
 */
testRule({
  featureId: 'properties.align-self.flex_context.first_baseline',
  description: 'should not detect align-self with other values in flex context',
  code: `
    
  .container {
    display: flex;
  }
  .item-start {
    align-self: start; /* Different value, should not be flagged */
  }
  .item-center {
    align-self: center; /* Different value, should not be flagged */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-self: first baseline' is detected within a pseudo-class (:hover) applied to a flex item, as it refers to the same element's context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.first_baseline',
  description: 'should detect align-self: first baseline in flex context with pseudo-class',
  code: `
    
  .container {
    display: flex;
  }
  .item:hover {
    align-self: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-self: first baseline' is NOT flagged when it is properly guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.align-self.flex_context.first_baseline',
  description: 'should not detect align-self: first baseline when guarded by exact @supports',
  code: `
    
  @supports (align-self: first baseline) {
    .container {
      display: flex;
    }
    .item {
      align-self: first baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-self: first baseline' IS flagged when guarded by irrelevant @supports queries (different property or different value).
 */
testRule({
  featureId: 'properties.align-self.flex_context.first_baseline',
  description: 'should detect align-self: first baseline when guarded by irrelevant @supports',
  code: `
    
  @supports (display: flex) {
    .container {
      display: flex;
    }
    .item {
      align-self: first baseline;
    }
  }
  @supports (align-self: center) {
    .container {
      display: flex;
    }
    .item {
      align-self: first baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that 'align-self: var(--my-align)' is NOT flagged when the feature targets a specific value ('first baseline'), as variables are never resolved.
 */
testRule({
  featureId: 'properties.align-self.flex_context.first_baseline',
  description: 'should not detect align-self with var() for a specific value',
  code: `
    
  .container {
    display: flex;
  }
  .item {
    --my-align: first baseline;
    align-self: var(--my-align);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that CSS-wide keywords ('initial', 'unset', 'revert', 'revert-layer') for 'align-self' are NOT flagged, as they resolve to 'auto' or inherited values, not 'first baseline'.
 */
testRule({
  featureId: 'properties.align-self.flex_context.first_baseline',
  description: 'should not detect align-self with CSS-wide keywords',
  code: `
    
  .container {
    display: flex;
  }
  .item-initial {
    align-self: initial;
  }
  .item-unset {
    align-self: unset;
  }
  .item-revert {
    align-self: revert;
  }
  .item-revert-layer {
    align-self: revert-layer;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
