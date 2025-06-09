/* AUTO_GENERATED: true */

/* 
feature: properties.align-content
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Tests `align-content: normal` within a flex container.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: normal in flex context',
  code: `
    
  .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: normal;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: start` within a flex container.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: start in flex context',
  code: `
    
  .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: center` within a flex container.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: center in flex context',
  code: `
    
  .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: flex-start` within a flex container.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: flex-start in flex context',
  code: `
    
  .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: stretch` within a flex container.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: stretch in flex context',
  code: `
    
  .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: space-between` within a flex container.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: space-between in flex context',
  code: `
    
  .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: start` within a grid container.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: start in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: space-around` within a grid container.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: space-around in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: space-around;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: center` within a block container.
 */
testRule({
  featureId: 'properties.align-content',
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
 * Tests `align-content: stretch` within a block container. It should still be detected despite fallback.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: stretch in block context, which falls back to start',
  code: `
    
  .foo {
    display: block;
    align-content: stretch;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: baseline`.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: baseline',
  code: `
    
  .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: first baseline`.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: first baseline',
  code: `
    
  .foo {
    display: grid;
    align-content: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: safe center`.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: safe center',
  code: `
    
  .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: safe center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: unsafe end`.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: unsafe end',
  code: `
    
  .foo {
    display: grid;
    align-content: unsafe end;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: initial`.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: initial',
  code: `
    
  .foo {
    align-content: initial;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: unset`.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: unset',
  code: `
    
  .foo {
    align-content: unset;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: inherit`.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: inherit',
  code: `
    
  .foo {
    align-content: inherit;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: revert`.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: revert',
  code: `
    
  .foo {
    align-content: revert;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: revert-layer`.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: revert-layer',
  code: `
    
  .foo {
    align-content: revert-layer;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of `-webkit-align-content`.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect -webkit-align-content',
  code: `
    
  .foo {
    -webkit-align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of `-moz-align-content`.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect -moz-align-content',
  code: `
    
  .foo {
    -moz-align-content: space-between;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests both `-webkit-align-content` and `align-content` in the same rule.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect mix of prefixed and unprefixed align-content',
  code: `
    
  .foo {
    -webkit-align-content: center;
    align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that -ms-align-content is not recognized as a direct align-content prefix (as per MDN data).
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should not detect -ms-align-content as align-content feature',
  code: `
    
  .foo {
    -ms-align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that -o-align-content is not recognized as a direct align-content prefix.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should not detect -o-align-content as align-content feature',
  code: `
    
  .foo {
    -o-align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests `align-content: stretch` when guarded by an exact `@supports` query. Should not be counted.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should not detect align-content: stretch when exactly guarded by @supports',
  code: `
    
  @supports (align-content: stretch) {
    .foo {
      align-content: stretch;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `align-content: start` when guarded by a different property (`display: flex`) in `@supports`. Should be counted.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content: start when guarded by different property @supports',
  code: `
    
  @supports (display: flex) {
    .foo {
      align-content: start;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content: end` when guarded by the same property but a different value (`align-content: center`) in `@supports`. Should be counted.
 */
testRule({
  featureId: 'properties.align-content',
  description:
    'should detect align-content: end when guarded by same property different value @supports',
  code: `
    
  @supports (align-content: center) {
    .foo {
      align-content: end;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content` used with a `var()` function. Should be counted as a general property usage.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content with var() value',
  code: `
    
  .foo {
    --align-val: center;
    align-content: var(--align-val);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests prefixed `align-content` used with a `var()` function.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content with var() value and prefixed property',
  code: `
    
  .foo {
    --align-val: center;
    -webkit-align-content: var(--align-val);
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `align-content` when it's part of a CSS comment. Should not be detected as an active feature.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content inside a comment',
  code: `
    
  .foo {
    /* align-content: center; */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `ALIGN-CONTENT` with a value, ensuring case insensitivity does not prevent detection.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content with case insensitivity',
  code: `
    
  .foo {
    ALIGN-CONTENT: START;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content` within a pseudo-class, which shares the parent's display context.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content in a pseudo-class (same element context)',
  code: `
    
  .foo {
    display: flex;
    flex-wrap: wrap;
    &:hover {
      align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content` in a child selector, which does not inherit the parent's display context.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should not detect align-content in a child selector (new element context)',
  code: `
    
  .foo {
    display: flex;
    flex-wrap: wrap;
    & .bar {
      align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content` in a pseudo-element, which does not inherit the parent's display context.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should not detect align-content in a pseudo-element (new element context)',
  code: `
    
  .foo {
    display: flex;
    flex-wrap: wrap;
    &::before {
      align-content: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple `align-content` declarations, including a prefixed one, within the same block.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect multiple align-content declarations and a prefixed one',
  code: `
    
  .multi-test {
    display: flex;
    flex-wrap: wrap;
    align-content: start;
    -webkit-align-content: end;
    align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests an empty rule with no declarations.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should not detect align-content in an empty rule',
  code: `
    
  .foo {}
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-content usage without an explicit display context.
 */
testRule({
  featureId: 'properties.align-content',
  description: 'should detect align-content with no explicit display context',
  code: `
    
  .foo {
    align-content: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
