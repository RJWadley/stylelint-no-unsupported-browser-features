/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.block_context
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Tests align-content: start when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: start in block context',
  code: `
    
  .foo {
    display: block;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: center when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: center in block context',
  code: `
    
  .foo {
    display: block;
    align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: end when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: end in block context',
  code: `
    
  .foo {
    display: block;
    align-content: end;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: flex-start when display is explicitly block. flex-start behaves as start in block layout.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: flex-start in block context (behaves as start)',
  code: `
    
  .foo {
    display: block;
    align-content: flex-start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: flex-end when display is explicitly block. flex-end behaves as end in block layout.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: flex-end in block context (behaves as end)',
  code: `
    
  .foo {
    display: block;
    align-content: flex-end;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: normal when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: normal in block context',
  code: `
    
  .foo {
    display: block;
    align-content: normal;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: baseline when display is explicitly block. It falls back to start.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: baseline in block context',
  code: `
    
  .foo {
    display: block;
    align-content: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: first baseline when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: first baseline in block context',
  code: `
    
  .foo {
    display: block;
    align-content: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: last baseline when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: last baseline in block context',
  code: `
    
  .foo {
    display: block;
    align-content: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: space-between when display is explicitly block, even if it has no effect.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: space-between in block context',
  code: `
    
  .foo {
    display: block;
    align-content: space-between;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: space-around when display is explicitly block, even if it has no effect.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: space-around in block context',
  code: `
    
  .foo {
    display: block;
    align-content: space-around;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: space-evenly when display is explicitly block, even if it has no effect.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: space-evenly in block context',
  code: `
    
  .foo {
    display: block;
    align-content: space-evenly;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: stretch when display is explicitly block, even if it has no effect.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: stretch in block context',
  code: `
    
  .foo {
    display: block;
    align-content: stretch;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: safe center when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: safe center in block context',
  code: `
    
  .foo {
    display: block;
    align-content: safe center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: unsafe start when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: unsafe start in block context',
  code: `
    
  .foo {
    display: block;
    align-content: unsafe start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: initial when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: initial in block context',
  code: `
    
  .foo {
    display: block;
    align-content: initial;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: unset when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: unset in block context',
  code: `
    
  .foo {
    display: block;
    align-content: unset;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: revert when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: revert in block context',
  code: `
    
  .foo {
    display: block;
    align-content: revert;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: revert-layer when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content: revert-layer in block context',
  code: `
    
  .foo {
    display: block;
    align-content: revert-layer;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content with a CSS variable in a block context. This feature is for the property in general, so it should be flagged.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content with var() in block context',
  code: `
    
  .foo {
    display: block;
    --my-align: center;
    align-content: var(--my-align);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests -webkit-align-content when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect -webkit-align-content in block context',
  code: `
    
  .foo {
    display: block;
    -webkit-align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -moz-align-content when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect -moz-align-content in block context',
  code: `
    
  .foo {
    display: block;
    -moz-align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -ms-align-content when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect -ms-align-content in block context',
  code: `
    
  .foo {
    display: block;
    -ms-align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -o-align-content when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect -o-align-content in block context',
  code: `
    
  .foo {
    display: block;
    -o-align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests multiple prefixed and unprefixed align-content in a block context.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect multiple prefixed and unprefixed in block context',
  code: `
    
  .foo {
    display: block;
    -webkit-align-content: start;
    -moz-align-content: center;
    align-content: end;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: center guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content in @supports with exact match',
  code: `
    
  @supports (align-content: center) {
    .foo {
      display: block;
      align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -webkit-align-content: center guarded by an exact @supports query for the prefixed property.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect prefixed align-content in @supports with exact match',
  code: `
    
  @supports (-webkit-align-content: center) {
    .foo {
      display: block;
      -webkit-align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * align-content without explicit display: block should not be detected for block_context.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should NOT detect align-content if display is not explicitly block',
  code: `
    
  .foo {
    align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * align-content in a display: flex context should not be detected for block_context.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should NOT detect align-content in flex context',
  code: `
    
  .foo {
    display: flex;
    align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * align-content in a display: grid context should not be detected for block_context.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should NOT detect align-content in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * align-content in a pseudo-element, which is a new element, should not be detected.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should NOT detect align-content in pseudo-element',
  code: `
    
  .foo {
    display: block;
    &::before {
      align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * align-content in a child selector, which is a new element, should not be detected.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should NOT detect align-content in child selector',
  code: `
    
  .foo {
    display: block;
    & .bar {
      align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * align-content in a pseudo-class, which targets the same element, should be detected.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect align-content in pseudo-class (same element)',
  code: `
    
  .foo {
    display: block;
    &:hover {
      align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: center not guarded by a different @supports property.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should NOT detect align-content in @supports with different property',
  code: `
    
  @supports (display: flex) {
    .foo {
      display: block;
      align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content: center not guarded by a @supports with a different value.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should NOT detect align-content in @supports with different value',
  code: `
    
  @supports (align-content: start) {
    .foo {
      display: block;
      align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests two instances of align-content in block context.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect two align-content in block context',
  code: `
    
  .foo {
    display: block;
    align-content: center;
  }
  .bar {
    display: block;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests two instances of align-content in block context, where one is guarded.
 */
testRule({
  featureId: 'properties.align-content.block_context',
  description: 'should detect one of two align-content with one guarded',
  code: `
    
  @supports (align-content: center) {
    .foo {
      display: block;
      align-content: center; /* Guarded */
    }
  }
  .bar {
    display: block;
    align-content: start; /* Not guarded */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
