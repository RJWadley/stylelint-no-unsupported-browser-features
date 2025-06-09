/* AUTO_GENERATED: true */

/* 
feature: properties.align-items.anchor-center
docs: https://developer.mozilla.org/docs/Web/CSS/align-items
spec: https://drafts.csswg.org/css-anchor-position-1/#anchor-center
*/

import { testRule } from 'lib/testRule';

/**
 * Checks for direct usage of 'align-items: anchor-center' within a flex container rule.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should detect align-items: anchor-center in display: flex context',
  code: `
    
  a {
    display: flex;
    align-items: anchor-center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks for direct usage of 'align-items: anchor-center' within a grid container rule.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should detect align-items: anchor-center in display: grid context',
  code: `
    
  a {
    display: grid;
    align-items: anchor-center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks for 'align-items: anchor-center' in a nested pseudo-class on the same element with a flex display.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description:
    'should detect align-items: anchor-center in nested pseudo-class within flex context',
  code: `
    
  a {
    display: flex;
    &:hover {
      align-items: anchor-center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks for multiple occurrences of 'align-items: anchor-center' in different rules.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should detect multiple instances of align-items: anchor-center',
  code: `
    
  .foo {
    display: flex;
    align-items: anchor-center;
  }
  .bar {
    display: grid;
    align-items: anchor-center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Detects 'align-items: anchor-center' even when the 'align-items' property itself is vendor-prefixed.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should detect align-items: anchor-center with vendor-prefixed align-items property',
  code: `
    
  .foo {
    display: flex;
    -webkit-align-items: anchor-center;
  }
  .bar {
    display: flex;
    -moz-align-items: anchor-center;
  }
  .baz {
    display: flex;
    -ms-flex-align: anchor-center;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that standard 'align-items' values are not flagged.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should not detect other align-items values',
  code: `
    
  a {
    display: flex;
    align-items: center;
    align-items: start;
    align-items: end;
    align-items: flex-start;
    align-items: flex-end;
    align-items: self-start;
    align-items: self-end;
    align-items: baseline;
    align-items: first baseline;
    align-items: last baseline;
    align-items: stretch;
    align-items: normal;
    align-items: safe center;
    align-items: unsafe center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that CSS-wide keywords for 'align-items' are not flagged as 'anchor-center'.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should not detect global CSS keywords for align-items',
  code: `
    
  a {
    display: flex;
    align-items: initial;
    align-items: inherit;
    align-items: unset;
    align-items: revert;
    align-items: revert-layer;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that 'align-items' using a CSS variable is not flagged since 'anchor-center' is a specific value.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should not detect align-items with var()',
  code: `
    
  .foo {
    --my-align: anchor-center;
    align-items: var(--my-align);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'anchor-center' used with properties other than 'align-items' is not flagged by this rule.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should not detect anchor-center used with other properties',
  code: `
    
  .foo {
    justify-self: anchor-center;
    align-self: anchor-center;
    place-items: anchor-center;
    justify-items: anchor-center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'align-items: anchor-center' is not flagged when 'display' is not explicitly 'flex' or 'grid' in the same rule.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should not detect align-items: anchor-center without explicit display context',
  code: `
    
  .foo {
    align-items: anchor-center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'align-items: anchor-center' is not flagged when 'display' is explicitly 'block'.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should not detect align-items: anchor-center in display: block context',
  code: `
    
  .foo {
    display: block;
    align-items: anchor-center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that 'align-items: anchor-center' is not flagged when it's precisely guarded by an @supports rule.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should not detect align-items: anchor-center when guarded by @supports',
  code: `
    
  @supports (align-items: anchor-center) {
    a {
      display: flex;
      align-items: anchor-center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that 'align-items: anchor-center' is flagged when @supports checks a different property.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description:
    'should detect align-items: anchor-center when unguarded by @supports (different property)',
  code: `
    
  @supports (display: flex) {
    a {
      display: flex;
      align-items: anchor-center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks that 'align-items: anchor-center' is flagged when @supports checks the same property but a different value.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description:
    'should detect align-items: anchor-center when unguarded by @supports (different value)',
  code: `
    
  @supports (align-items: center) {
    a {
      display: flex;
      align-items: anchor-center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks that 'align-items: anchor-center' is detected even with comments within the declaration.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should detect align-items: anchor-center with comments',
  code: `
    
  .foo {
    display: flex; /* some comment */
    align-items: anchor-center; /* another comment */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks that 'align-items: anchor-center' is not flagged when nested in a child selector, as context is lost.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should not detect align-items: anchor-center in nested child selector',
  code: `
    
  .foo {
    display: flex;
    & .bar {
      align-items: anchor-center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that 'align-items: anchor-center' is not flagged when nested in a pseudo-element selector, as context is lost.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should not detect align-items: anchor-center in nested pseudo-element',
  code: `
    
  .foo {
    display: flex;
    &::before {
      align-items: anchor-center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Confirms detection of two separate 'align-items: anchor-center' instances.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should detect two warnings across different rules',
  code: `
    
  .box-one {
    display: flex;
    align-items: anchor-center;
  }
  .box-two {
    display: grid;
    align-items: anchor-center;
  }
  .box-three {
    align-items: center; /* safe */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Checks for 'align-items: anchor-center' within an @media query.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should detect align-items: anchor-center in @media query',
  code: `
    
  @media (min-width: 400px) {
    .foo {
      display: flex;
      align-items: anchor-center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks for a mix of unprefixed and vendor-prefixed `align-items: anchor-center` declarations.
 */
testRule({
  featureId: 'properties.align-items.anchor-center',
  description: 'should detect mixed prefixed and unprefixed instances',
  code: `
    
  .foo {
    display: flex;
    align-items: anchor-center;
  }
  .bar {
    display: grid;
    -webkit-align-items: anchor-center;
  }
  .baz {
    display: flex;
    -ms-flex-align: anchor-center;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 1 },
});
