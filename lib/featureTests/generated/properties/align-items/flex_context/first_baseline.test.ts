/* AUTO_GENERATED: true */

/* 
feature: properties.align-items.flex_context.first_baseline
docs: https://developer.mozilla.org/docs/Web/CSS/align-items
spec: https://drafts.csswg.org/css-align/#align-items-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of `align-items: first baseline` within a `display: flex` context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should detect align-items: first baseline in a flex container',
  code: `
    
  .foo {
    display: flex;
    align-items: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of `align-items: first baseline` within a `display: inline-flex` context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should detect align-items: first baseline in an inline-flex container',
  code: `
    
  .bar {
    display: inline-flex;
    align-items: first baseline; /* different line and column */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `align-items: first baseline` is not flagged when the display context is `grid`.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should NOT detect align-items: first baseline in a grid container',
  code: `
    
  .baz {
    display: grid;
    align-items: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-items: first baseline` is not flagged when the display context is explicitly `block`.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description:
    'Should NOT detect align-items: first baseline in an explicitly defined block container',
  code: `
    
  .qux {
    display: block;
    align-items: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-items: first baseline` is not flagged when no display is specified (implicit block context).
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should NOT detect align-items: first baseline in an implicitly block container',
  code: `
    
  .quux {
    align-items: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-items: first baseline` is not flagged when it's precisely guarded by `@supports`.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should NOT detect when guarded by exact @supports query',
  code: `
    
  @supports (align-items: first baseline) {
    .corge {
      display: flex;
      align-items: first baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-items: first baseline` is flagged when `@supports` checks a different property.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should detect when unguarded by @supports (different property)',
  code: `
    
  @supports (display: flex) {
    .grault {
      display: flex;
      align-items: first baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `align-items: first baseline` is flagged when `@supports` checks the same property but a different value.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should detect when unguarded by @supports (different value)',
  code: `
    
  @supports (align-items: center) {
    .garply {
      display: flex;
      align-items: first baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `align-items` is not flagged when its value is a CSS variable, as the specific value cannot be resolved statically.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should NOT detect when value is a CSS variable',
  code: `
    
  .waldo {
    display: flex;
    --my-align: first baseline;
    align-items: var(--my-align);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-items: initial` does not trigger the `first baseline` feature.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should NOT detect for CSS-wide keyword: initial',
  code: `
    
  .fred {
    display: flex;
    align-items: initial;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-items: unset` does not trigger the `first baseline` feature.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should NOT detect for CSS-wide keyword: unset',
  code: `
    
  .plugh {
    display: flex;
    align-items: unset;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-items: normal` does not trigger the `first baseline` feature.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should NOT detect for CSS-wide keyword: normal',
  code: `
    
  .xyzzy {
    display: flex;
    align-items: normal;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-items: first baseline` is flagged when `display: flex` is on the element and `align-items` is on its pseudo-class.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should detect when display context is provided by pseudo-class',
  code: `
    
  .thud {
    display: flex;
  }
  .thud:hover {
    align-items: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `align-items: first baseline` is NOT flagged when `display: flex` is on parent and `align-items` is on a pseudo-element.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should NOT detect when display context is on parent and property on pseudo-element',
  code: `
    
  .wumpus {
    display: flex;
  }
  .wumpus::before {
    align-items: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-items: first baseline` is NOT flagged when `display: flex` is on parent and `align-items` is on a child selector.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should NOT detect when display context is on parent and property on child selector',
  code: `
    
  .glarb {
    display: flex;
  }
  .glarb .child {
    align-items: first baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests a scenario with two instances of the problematic usage to ensure multiple warnings are counted.
 */
testRule({
  featureId: 'properties.align-items.flex_context.first_baseline',
  description: 'Should include two warnings for align-items: first baseline',
  code: `
    
  .one {
    display: flex;
    align-items: first baseline; /* First warning */
    color: red;
  }
  .two {
    display: flex;
    align-items: first baseline; /* Second warning */
  }
  .three {
    display: grid;
    align-items: first baseline; /* Not a warning, wrong context */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});
