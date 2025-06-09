/* AUTO_GENERATED: true */

/* 
feature: properties.align-self.flex_context.baseline
docs: https://developer.mozilla.org/docs/Web/CSS/align-self
spec: https://drafts.csswg.org/css-align/#align-self-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of align-self: baseline within a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should flag align-self: baseline in flex context',
  code: `
    
  .foo {
    display: flex;
    align-self: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self with 'first baseline' value in a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should flag align-self: first baseline in flex context',
  code: `
    
  .bar {
    display: flex;
    align-self: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self with 'last baseline' value in a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should flag align-self: last baseline in flex context',
  code: `
    
  .baz {
    display: flex;
    align-self: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests all vendor prefixes and the unprefixed version of align-self: baseline in a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should flag vendor-prefixed and unprefixed align-self: baseline in flex context',
  code: `
    
  .foo-bar {
    display: flex;
    -webkit-align-self: baseline;
    -moz-align-self: baseline;
    -ms-align-self: baseline;
    -o-align-self: baseline;
    align-self: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 1 },
});

/**
 * Tests align-self: baseline with display: inline-flex.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should flag align-self: baseline in inline-flex context',
  code: `
    
  .inline-flex-item {
    display: inline-flex;
    align-self: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures align-self: baseline is not flagged when the display context is grid or block (not flex for this feature).
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should not flag align-self: baseline in non-flex display contexts',
  code: `
    
  .grid-item {
    display: grid;
    align-self: baseline;
  }
  .block-item {
    display: block;
    align-self: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that justify-self: baseline is not flagged for align-self feature.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should not flag different property (justify-self: baseline)',
  code: `
    
  .foo {
    display: flex;
    justify-self: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-self with a different value (center) is not flagged.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should not flag different value (align-self: center)',
  code: `
    
  .bar {
    display: flex;
    align-self: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that align-self: baseline is not flagged when correctly guarded by @supports.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should not flag when guarded by exact @supports query',
  code: `
    
  @supports (align-self: baseline) {
    .foo {
      display: flex;
      align-self: baseline;
    }
  }
  @supports (align-self: first baseline) {
    .bar {
      display: flex;
      align-self: first baseline;
    }
  }
  @supports (align-self: last baseline) {
    .baz {
      display: flex;
      align-self: last baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-self: baseline is flagged when guarded by an irrelevant @supports query, even if the display context is correctly set.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should flag when guarded by non-exact @supports query (2 warnings)',
  code: `
    
  @supports (align-self: center) { /* Incorrect guard */
    .foo {
      display: flex;
      align-self: baseline;
    }
  }
  @supports (display: grid) { /* Incorrect guard and wrong context for the supports query, but rule is correct */
    .bar {
      display: flex;
      align-self: baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Since 'baseline' is a specific value, var() should not be flagged.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should not flag align-self with a CSS variable',
  code: `
    
  .foo {
    display: flex;
    --my-baseline: baseline;
    align-self: var(--my-baseline);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures CSS-wide keywords for align-self are not flagged as 'baseline'.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should not flag align-self with CSS-wide keywords',
  code: `
    
  .foo {
    display: flex;
    align-self: initial;
    align-self: unset;
    align-self: revert;
    align-self: revert-layer;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self: baseline within a pseudo-class selector of a flex item (same element, so context is inherited).
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should flag align-self: baseline in a pseudo-class selector',
  code: `
    
  .foo {
    display: flex;
    &:hover {
      align-self: baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self: baseline within a pseudo-element of a flex container (new element, context is not inherited).
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should not flag align-self: baseline in a pseudo-element selector',
  code: `
    
  .foo {
    display: flex;
    &::before {
      align-self: baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self: baseline on a child element, which does not inherit the parent's flex context according to the rules.
 */
testRule({
  featureId: 'properties.align-self.flex_context.baseline',
  description: 'should not flag align-self: baseline in a child selector',
  code: `
    
  .foo {
    display: flex;
    & .bar {
      align-self: baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
