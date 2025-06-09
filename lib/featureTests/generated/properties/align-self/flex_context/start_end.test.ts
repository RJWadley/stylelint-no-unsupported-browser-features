/* AUTO_GENERATED: true */

/* 
feature: properties.align-self.flex_context.start_end
docs: https://developer.mozilla.org/docs/Web/CSS/align-self
spec: https://drafts.csswg.org/css-align/#align-self-property
*/

import { testRule } from 'lib/testRule';

/**
 * Checks direct usage of align-self: start within a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect unprefixed align-self: start in flex context',
  code: `
    
  .foo {
    display: flex;
    align-self: start;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks usage of align-self: start with a pseudo-class nested under a flex container (same element).
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect unprefixed align-self: start with pseudo-class in flex context',
  code: `
    
  .foo {
    display: flex;
    &:hover {
      align-self: start;
    }
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks that align-self: start is not detected when used in a child selector under a flex container (new element).
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect unprefixed align-self: start with child selector in flex context',
  code: `
    
  .foo {
    display: flex;
    & .bar {
      align-self: start;
    }
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: start is not detected when used with a pseudo-element under a flex container (new element).
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect unprefixed align-self: start with pseudo-element in flex context',
  code: `
    
  .foo {
    display: flex;
    &::before {
      align-self: start;
    }
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that extra whitespace around the value is handled correctly.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect unprefixed align-self: start with extra whitespace in flex context',
  code: `
    
  .foo {
    display: flex;
    align-self:  start ;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks direct usage of align-self: end within a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect unprefixed align-self: end in flex context',
  code: `
    
  .bar {
    display: flex;
    align-self: end;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks usage of align-self: end with a pseudo-class nested under a flex container (same element).
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect unprefixed align-self: end with pseudo-class in flex context',
  code: `
    
  .bar {
    display: flex;
    &:active {
      align-self: end;
    }
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks case insensitivity for 'end' value.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: "should detect unprefixed align-self with 'End' casing in flex context",
  code: `
    
  .baz {
    display: flex;
    align-self: End;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks detection of -webkit- prefixed align-self: start.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect -webkit-align-self: start in flex context',
  code: `
    
  .foo {
    display: flex;
    -webkit-align-self: start;
  }
      
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks detection of -moz- prefixed align-self: end.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect -moz-align-self: end in flex context',
  code: `
    
  .bar {
    display: flex;
    -moz-align-self: end;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks detection of -ms- prefixed align-self: start.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect -ms-align-self: start in flex context',
  code: `
    
  .baz {
    display: flex;
    -ms-align-self: start;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks detection of -o- prefixed align-self: end.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect -o-align-self: end in flex context',
  code: `
    
  .qux {
    display: flex;
    -o-align-self: end;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Checks that align-self: start is not detected in a grid context (feature is flex_context).
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect align-self: start in grid context',
  code: `
    
  .foo {
    display: grid;
    align-self: start;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: end is not detected in a block context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect align-self: end in block context',
  code: `
    
  .bar {
    display: block;
    align-self: end;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: start is not detected when no explicit display context is given.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect align-self: start without explicit context',
  code: `
    
  .baz {
    align-self: start;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: start is guarded when the @supports query matches exactly.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect guarded align-self: start with exact match in supports',
  code: `
    
  @supports (align-self: start) {
    .foo {
      display: flex;
      align-self: start;
    }
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: end is guarded when the @supports query matches exactly.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect guarded align-self: end with exact match in supports',
  code: `
    
  @supports (align-self: end) {
    .foo {
      display: flex;
      align-self: end;
    }
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: start is not guarded when the @supports query is for a different property.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect unguarded align-self: start with different property in supports',
  code: `
    
  @supports (display: flex) {
    .foo {
      display: flex;
      align-self: start;
    }
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks that align-self: end is not guarded when the @supports query is for the same property but a different value.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect unguarded align-self: end with different value in supports',
  code: `
    
  @supports (align-self: center) {
    .foo {
      display: flex;
      align-self: end;
    }
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks that align-self using a CSS variable for 'start' value is not detected (specific value feature).
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: "should not detect align-self with var() for 'start' value",
  code: `
    
  .foo {
    display: flex;
    --align: start;
    align-self: var(--align);
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self using a CSS variable for 'end' value is not detected (specific value feature).
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: "should not detect align-self with var() for 'end' value",
  code: `
    
  .bar {
    display: flex;
    --align: end;
    align-self: var(--align);
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: initial is not flagged as 'start' or 'end'.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect align-self: initial in flex context',
  code: `
    
  .foo {
    display: flex;
    align-self: initial;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: unset is not flagged as 'start' or 'end'.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect align-self: unset in flex context',
  code: `
    
  .bar {
    display: flex;
    align-self: unset;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: auto is not flagged as 'start' or 'end'.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect align-self: auto in flex context',
  code: `
    
  .baz {
    display: flex;
    align-self: auto;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: normal is not flagged as 'start' or 'end'.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect align-self: normal in flex context',
  code: `
    
  .qux {
    display: flex;
    align-self: normal;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests multiple detections in a single block.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect two warnings with different properties and values in flex context',
  code: `
    
  .foo {
    display: flex;
    align-self: start;
    align-self: end;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests mixed prefixed and unprefixed declarations.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect mixed prefixed and unprefixed values in flex context',
  code: `
    
  .foo {
    display: flex;
    -webkit-align-self: start;
    align-self: end;
    -moz-align-self: start;
  }
      
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures column and line positions are varied.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should handle different column and line positions',
  code: `
    
  .a { display: flex; align-self: start; }
    .b {
      display: flex;
      align-self: end;
    }
  .c { display: flex;
    align-self: start; }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Checks usage of align-self: safe start within a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect unprefixed align-self: safe start in flex context',
  code: `
    
  .foo {
    display: flex;
    align-self: safe start;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks usage of align-self: unsafe end within a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect unprefixed align-self: unsafe end in flex context',
  code: `
    
  .foo {
    display: flex;
    align-self: unsafe end;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks usage of prefixed align-self: safe end within a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect prefixed align-self: safe end in flex context',
  code: `
    
  .foo {
    display: flex;
    -webkit-align-self: safe end;
  }
      
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: safe start is guarded when the @supports query matches exactly.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect guarded align-self: safe start in supports',
  code: `
    
  @supports (align-self: safe start) {
    .foo {
      display: flex;
      align-self: safe start;
    }
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that align-self: unsafe end is guarded when the @supports query matches exactly.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect guarded align-self: unsafe end in supports',
  code: `
    
  @supports (align-self: unsafe end) {
    .foo {
      display: flex;
      align-self: unsafe end;
    }
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests a rule with both 'start' and 'end' values for align-self.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect two warnings for different align-self values in one rule',
  code: `
    
  .foo {
    display: flex;
    align-self: start;
    align-self: end;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests multiple rules with align-self: start and end.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect multiple warnings across different rules',
  code: `
    
  .foo {
    display: flex;
    align-self: start;
  }
  .bar {
    display: flex;
    align-self: end;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Checks detection in a complex nested pseudo-class chain where the context is inherited.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should detect align-self: start in nested pseudo-class chain with flex context',
  code: `
    
  .foo {
    display: flex;
    &:is(:hover, :focus) {
      &:not(.active) {
        align-self: start;
      }
    }
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks that an invalid value for align-self does not trigger feature detection for start/end.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect align-self: invalid-value in flex context',
  code: `
    
  .foo {
    display: flex;
    align-self: invalid-value;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that other valid align-self values like 'center', 'stretch', 'baseline' are not detected.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect other align-self values in flex context',
  code: `
    
  .foo {
    display: flex;
    align-self: center;
    align-self: stretch;
    align-self: baseline;
    align-self: first baseline;
    align-self: last baseline;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that vendor prefixed align-self: start is not detected in a grid context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect align-self: start in grid context with vendor prefix',
  code: `
    
  .foo {
    display: grid;
    -webkit-align-self: start;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks detection for multiple flex items with relevant align-self values.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: "should detect align-self with 'start' and 'end' values for multiple flex items",
  code: `
    
  .container {
    display: flex;
  }
  .item1 {
    align-self: start;
  }
  .item2 {
    align-self: end;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Checks that place-self: start is not detected as it's not align-self.
 */
testRule({
  featureId: 'properties.align-self.flex_context.start_end',
  description: 'should not detect place-self: start in flex context',
  code: `
    
  .foo {
    display: flex;
    place-self: start;
  }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
