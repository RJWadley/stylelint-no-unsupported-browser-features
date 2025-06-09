/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.flex_context.start_end
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Detect align-content: start when display: flex is present in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag unprefixed align-content: start in flex context',
  code: `
    
  .foo {
    display: flex;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detect align-content: end when display: flex is present in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag unprefixed align-content: end in flex context',
  code: `
    
  .foo {
    display: flex;
    align-content: end;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detect -webkit-align-content: start when display: -webkit-flex is present in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag -webkit-align-content: start in -webkit-flex context',
  code: `
    
  .foo {
    display: -webkit-flex;
    -webkit-align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detect -moz-align-content: end when display: -moz-box is present in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag -moz-align-content: end in -moz-box context',
  code: `
    
  .foo {
    display: -moz-box;
    -moz-align-content: end;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detect align-content: start when display: inline-flex is present in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag unprefixed align-content: start in inline-flex context',
  code: `
    
  .foo {
    display: inline-flex;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detect align-content: start in a nested pseudo-class like &:hover, as it targets the same flex element.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag align-content: start in pseudo-class of flex container',
  code: `
    
  .foo {
    display: flex;
    &:hover {
      align-content: start;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Do not flag align-content: start when display: block is present in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should NOT flag align-content: start in block context',
  code: `
    
  .foo {
    display: block;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Do not flag align-content: end when display: grid is present in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should NOT flag align-content: end in grid context',
  code: `
    
  .foo {
    display: grid;
    align-content: end;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Do not flag align-content: start when no explicit display property (flex or inline-flex) is set in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should NOT flag align-content: start without explicit display in rule',
  code: `
    
  .foo {
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensure align-content with values like center, space-between, normal, flex-start, flex-end are not flagged.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should NOT flag align-content with other valid values in flex context',
  code: `
    
  .foo {
    display: flex;
    align-content: center;
    align-content: space-between;
    align-content: normal;
    align-content: flex-start;
    align-content: flex-end;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensure align-content: start is not flagged when an exact @supports query exists for the property and value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should NOT flag align-content: start when guarded by exact @supports',
  code: `
    
  @supports (align-content: start) {
    .foo {
      display: flex;
      align-content: start;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Flag align-content: end even if it's within an @supports query for a different property (e.g., display: flex).
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag align-content: end when @supports is for a different property',
  code: `
    
  @supports (display: flex) {
    .bar {
      display: flex;
      align-content: end;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Flag align-content: start even if it's within an @supports query for the same property but a different value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description:
    'should flag align-content: start when @supports is for same property, different value',
  code: `
    
  @supports (align-content: center) {
    .foo {
      display: flex;
      align-content: start;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Do not flag align-content when its value is a CSS variable, as the feature targets specific values ('start' or 'end').
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should NOT flag align-content with a CSS variable as value',
  code: `
    
  .foo {
    display: flex;
    --align-value: start;
    align-content: var(--align-value);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Do not flag align-content: initial, as 'initial' for align-content resolves to 'normal', not 'start' or 'end'.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should NOT flag align-content: initial in flex context',
  code: `
    
  .foo {
    display: flex;
    align-content: initial;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Do not flag align-content: unset, as 'unset' for align-content resolves to its inherited or initial value ('normal'), not 'start' or 'end'.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should NOT flag align-content: unset in flex context',
  code: `
    
  .foo {
    display: flex;
    align-content: unset;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensure multiple instances of the feature (align-content: start and align-content: end) are flagged correctly with different line/column positions.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag two instances in a single test with varied positioning',
  code: `
    
  .foo { display: flex; align-content: start; }
  .bar {
    display: flex;
    align-content: end;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Test combinations of prefixed/unprefixed properties and display contexts, ensuring correct prefix counting.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag mixed prefixed and unprefixed align-content values correctly',
  code: `
    
  .foo {
    display: flex;
    -webkit-align-content: start;
    align-content: end;
  }
  .bar {
    display: -moz-box;
    align-content: start;
    -webkit-align-content: end;
  }
  .baz {
    display: -ms-flexbox;
    -ms-align-content: start;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 2, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 3 },
});

/**
 * Ensure that the feature is not flagged when the display context is set on a parent, but the property is in a child selector, as the child does not inherit the parent's display context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should NOT flag align-content in nested rule with child selector',
  code: `
    
  .parent {
    display: flex;
    & .child {
      align-content: start;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensure that the feature is not flagged when the display context is set on a parent, but the property is in a pseudo-element selector, as pseudo-elements are considered new elements and do not inherit the parent's display context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should NOT flag align-content in nested rule with pseudo-element',
  code: `
    
  .parent {
    display: flex;
    &::before {
      content: "";
      align-content: end;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensure comments and varied whitespace do not prevent detection of the feature.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag align-content: start with comments and varied whitespace',
  code: `
    
  .foo /* comment */ {
    display: /* another comment */ flex /* yet another comment */;
    align-content /* prop comment */ : /* colon comment */ start /* value comment */ ;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detect align-content: start when display: -ms-flexbox is present in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag align-content: start in -ms-flexbox context',
  code: `
    
  .foo {
    display: -ms-flexbox;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detect align-content: start when display: -webkit-box is present in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag align-content: start in -webkit-box context',
  code: `
    
  .foo {
    display: -webkit-box;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detect align-content: start when display: -moz-box is present in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag align-content: start in -moz-box context',
  code: `
    
  .foo {
    display: -moz-box;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Flag align-content: start even if it's within an @supports query for the prefixed display, as it's not an exact match for the property and value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description:
    'should flag unprefixed property with prefixed display in @supports (not exact match)',
  code: `
    
  @supports (display: -webkit-flex) {
    .foo {
      display: -webkit-flex;
      align-content: start;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Flag -webkit-align-content: start even if it's within an @supports query for the unprefixed display, as it's not an exact match for the property and value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description:
    'should flag prefixed property with unprefixed display in @supports (not exact match)',
  code: `
    
  @supports (display: flex) {
    .foo {
      display: flex;
      -webkit-align-content: start;
    }
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensure that if both a prefixed and unprefixed property declaration trigger the feature, they are both counted correctly.
 */
testRule({
  featureId: 'properties.align-content.flex_context.start_end',
  description: 'should flag multiple warnings from one declaration with different prefixes',
  code: `
    
  .foo {
    display: flex;
    -webkit-align-content: start;
    align-content: start;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
