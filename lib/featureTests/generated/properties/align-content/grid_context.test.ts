/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.grid_context
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of align-content: start within a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: start in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of align-content: center within a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: center in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of align-content: end within a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: end in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: end;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content: flex-start which behaves as start in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: flex-start in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: flex-start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content: flex-end which behaves as end in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: flex-end in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: flex-end;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of align-content: space-between within a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: space-between in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: space-between;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of align-content: space-around within a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: space-around in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: space-around;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of align-content: space-evenly within a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: space-evenly in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: space-evenly;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of align-content: stretch within a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: stretch in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: stretch;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content: normal which behaves as stretch in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: normal in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: normal;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content with 'safe' modifier in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: safe center in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: safe center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content with 'unsafe' modifier in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: unsafe start in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: unsafe start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content in a display: block context, which should not be flagged for grid_context.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should not warn for align-content in block context',
  code: `
    
  .foo {
    display: block;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-content without explicit display, which is implicitly block, and should not be flagged for grid_context.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description:
    'should not warn for align-content without explicit display (implicit block context)',
  code: `
    
  .bar {
    align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-content in a display: flex context, which is a different feature and should not be flagged here.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should not warn for align-content in flex context',
  code: `
    
  .baz {
    display: flex;
    align-content: space-between;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-content on a child element of a grid container, which does not inherit the grid context for this property.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should not warn for align-content on a child element in grid context',
  code: `
    
  .foo {
    display: grid;
    & .bar {
      align-content: start;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-content on a pseudo-element of a grid container, which is a new element and does not inherit the grid context.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should not warn for align-content on a pseudo-element in grid context',
  code: `
    
  .foo {
    display: grid;
    &::before {
      align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-content on a pseudo-class of a grid container, which is considered in the same context.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content on a pseudo-class in grid context',
  code: `
    
  .foo {
    display: grid;
    &:hover {
      align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content in grid context is not flagged when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should not warn when align-content is guarded by exact @supports query',
  code: `
    
  @supports (align-content: start) {
    .foo {
      display: grid;
      align-content: start;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-content in grid context is flagged when guarded by a non-matching @supports property.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn when align-content is not guarded by non-matching @supports property',
  code: `
    
  @supports (display: flex) {
    .foo {
      display: grid;
      align-content: start;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content in grid context is flagged when guarded by a non-matching @supports value.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn when align-content is not guarded by non-matching @supports value',
  code: `
    
  @supports (align-content: center) {
    .foo {
      display: grid;
      align-content: start;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-content with a CSS variable in a grid context. Since the property itself is part of the feature, it should be flagged.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content with var() in grid context',
  code: `
    
  .foo {
    display: grid;
    --my-align: center;
    align-content: var(--my-align);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content: initial in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: initial in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: initial;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content: unset in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: unset in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: unset;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content: inherit in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: inherit in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: inherit;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content: revert in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: revert in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: revert;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content: revert-layer in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: revert-layer in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: revert-layer;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple instances of align-content within a single grid context rule.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for multiple align-content properties in a grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: start;
    align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests align-content in grid context at various line and column positions.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content at different line/column positions',
  code: `
    
  .foo { display: grid; align-content: start; }
  .bar {
    display: grid;
    align-content: center;
  }
  .baz { display: grid; align-content: end; }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests that vendor prefixed properties for align-content are not counted, as align-content is not typically prefixed.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should not count vendor prefixed properties that are not part of the feature',
  code: `
    
  .foo {
    display: grid;
    -webkit-align-content: start;
    -moz-align-content: center;
    align-content: end;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content: baseline in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: baseline in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content: first baseline in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: first baseline in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-content: last baseline in a grid container.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description: 'should warn for align-content: last baseline in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: last baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple instances of align-content including a pseudo-class within a grid context rule.
 */
testRule({
  featureId: 'properties.align-content.grid_context',
  description:
    'should warn for align-content with different values and a pseudo-class in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: start;
    &:active {
      align-content: space-around;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});
