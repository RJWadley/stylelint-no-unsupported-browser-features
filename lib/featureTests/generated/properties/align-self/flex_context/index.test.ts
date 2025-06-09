/* AUTO_GENERATED: true */

/* 
feature: properties.align-self.flex_context
docs: https://developer.mozilla.org/docs/Web/CSS/align-self
spec: https://drafts.csswg.org/css-align/#align-self-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests align-self with center, flex-start, flex-end, stretch, auto, normal, start, end, self-start, self-end, baseline, first baseline, last baseline, safe center, unsafe center when the parent is display: flex.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should detect align-self with basic values in flex context',
  code: `
    
  .foo {
    display: flex;
  }
  .foo > div {
    align-self: center;
    align-self: flex-start;
    align-self: flex-end;
    align-self: stretch;
    align-self: auto;
    align-self: normal; /* behaves as stretch for flex items */
    align-self: start; /* behaves as flex-start in flex context */
    align-self: end;   /* behaves as flex-end in flex context */
    align-self: self-start;
    align-self: self-end;
    align-self: baseline;
    align-self: first baseline;
    align-self: last baseline;
    align-self: safe center;
    align-self: unsafe center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 15 },
});

/**
 * Tests align-self with center, flex-start, flex-end, stretch, auto, normal, start, end, self-start, self-end, baseline, first baseline, last baseline, safe center, unsafe center when the parent is display: inline-flex.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should detect align-self with basic values in inline-flex context',
  code: `
    
  .foo {
    display: inline-flex;
  }
  .foo > div {
    align-self: center;
    align-self: flex-start;
    align-self: flex-end;
    align-self: stretch;
    align-self: auto;
    align-self: normal; /* behaves as stretch for flex items */
    align-self: start; /* behaves as flex-start in flex context */
    align-self: end;   /* behaves as flex-end in flex context */
    align-self: self-start;
    align-self: self-end;
    align-self: baseline;
    align-self: first baseline;
    align-self: last baseline;
    align-self: safe center;
    align-self: unsafe center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 15 },
});

/**
 * Tests align-self with a CSS variable in a flex context. The property 'align-self' in general applies, so it should be flagged.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should detect align-self with var() in flex context',
  code: `
    
  .foo {
    display: flex;
    --my-align-self: center;
  }
  .foo > div {
    align-self: var(--my-align-self);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self with initial, inherit, and unset keywords in a flex context. These should be flagged as the property is used.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should detect align-self with CSS-wide keywords in flex context',
  code: `
    
  .foo {
    display: flex;
  }
  .foo > div {
    align-self: initial;
    align-self: inherit;
    align-self: unset;
    align-self: revert;
    align-self: revert-layer;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 5 },
});

/**
 * Tests align-self when it is guarded by an @supports query that exactly matches the property and value.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should not detect align-self when guarded by exact @supports query',
  code: `
    
  .foo {
    display: flex;
  }
  @supports (align-self: center) {
    .foo > div {
      align-self: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self when it is NOT guarded by an @supports query checking a different property (display: flex).
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should detect align-self when not guarded by different @supports property',
  code: `
    
  .foo {
    display: flex;
  }
  @supports (display: flex) {
    .foo > div {
      align-self: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self when it is NOT guarded by an @supports query checking the same property but a different value.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should detect align-self when not guarded by different @supports value',
  code: `
    
  .foo {
    display: flex;
  }
  @supports (align-self: flex-end) {
    .foo > div {
      align-self: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self in a grid context. This feature is specific to flex context, so it should not be detected.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should not detect align-self in non-flex (grid) context',
  code: `
    
  .foo {
    display: grid;
  }
  .foo > div {
    align-self: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self in a block context. This feature is specific to flex context, so it should not be detected.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should not detect align-self in non-flex (block) context',
  code: `
    
  .foo {
    display: block;
  }
  .foo > div {
    align-self: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self where display property is not set in the same rule. The checker cannot determine context, so it should not be detected.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description:
    'should not detect align-self when display context is not explicitly set in the same rule',
  code: `
    
  .foo {
    align-self: center; /* No display context in this rule */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self with vendor prefixes in a flex context. Each prefix should be counted correctly.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should detect align-self with vendor prefixes in flex context',
  code: `
    
  .foo {
    display: flex;
  }
  .foo > div {
    -webkit-align-self: center;
    -moz-align-self: flex-start;
    -ms-align-self: flex-end;
    -o-align-self: stretch;
    align-self: auto;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 1 },
});

/**
 * Tests align-self inside a pseudo-class selector (&:hover) which targets the same element and inherits context.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should detect align-self in pseudo-class (same element) in flex context',
  code: `
    
  .foo {
    display: flex;
    &:hover {
      align-self: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self inside a child selector (& .bar) which targets a new element and does not inherit context. Should not be detected for flex_context.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should not detect align-self in child selector in flex context',
  code: `
    
  .foo {
    display: flex;
    & .bar {
      align-self: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self inside a pseudo-element selector (&::before) which targets a new element and does not inherit context. Should not be detected for flex_context.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should not detect align-self in pseudo-element in flex context',
  code: `
    
  .foo {
    display: flex;
    &::before {
      align-self: center;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self with comments and varied whitespace. Should still be detected.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should detect align-self ignoring comments and whitespace in flex context',
  code: `
    
  .foo { /* comment */
    display: /* another comment */ flex; /* yet another */
  }
  .foo > div { /* test div */
    align-self /* one more */ : /* and one more */ center /* this is the value */ ;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self with uppercase property and value. Should still be detected.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should detect align-self with case insensitivity in flex context',
  code: `
    
  .foo {
    DISPLAY: FLEX;
  }
  .foo > DIV {
    ALIGN-SELF: CENTER;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple instances of align-self in a flex container to ensure multiple warnings are caught.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description:
    'should include at least one test with 2 warnings for different align-self values in flex context',
  code: `
    
  .foo {
    display: flex;
  }
  .bar {
    align-self: flex-start;
  }
  .baz {
    align-self: center;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests a scenario where align-self is used but not within a flex context, ensuring no flags are raised.
 */
testRule({
  featureId: 'properties.align-self.flex_context',
  description: 'should not flag align-self when not in flex context',
  code: `
    
  .foo {
    display: block;
    align-self: center;
  }
  .bar {
    display: grid;
    align-self: center;
  }
  .baz {
    width: 100px;
    height: 100px;
    align-self: center; /* no display property in this rule */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
