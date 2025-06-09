/* AUTO_GENERATED: true */

/* 
feature: properties.alignment-baseline.baseline
docs: https://developer.mozilla.org/docs/Web/CSS/alignment-baseline
spec: https://drafts.csswg.org/css-inline/#alignment-baseline-property
*/

import { testRule } from 'lib/testRule';

/**
 * Verifies that the 'alignment-baseline: baseline' property-value pair is detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should detect alignment-baseline: baseline',
  code: `
    a {
    alignment-baseline: baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies that other valid values for alignment-baseline, like 'alphabetic', are not detected since the feature is specifically for 'baseline'.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: alphabetic',
  code: `
    a { alignment-baseline: alphabetic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'central' is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: central',
  code: `
    a { alignment-baseline: central; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'ideographic' is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: ideographic',
  code: `
    a { alignment-baseline: ideographic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'mathematical' is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: mathematical',
  code: `
    a { alignment-baseline: mathematical; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'middle' is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: middle',
  code: `
    a { alignment-baseline: middle; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'text-bottom' is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: text-bottom',
  code: `
    a { alignment-baseline: text-bottom; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'text-top' is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: text-top',
  code: `
    a { alignment-baseline: text-top; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that deprecated values like 'auto' are not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect deprecated alignment-baseline: auto',
  code: `
    a { alignment-baseline: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that deprecated 'hanging' is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect deprecated alignment-baseline: hanging',
  code: `
    a { alignment-baseline: hanging; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that deprecated alias 'text-before-edge' is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect deprecated alignment-baseline: text-before-edge alias',
  code: `
    a { alignment-baseline: text-before-edge; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that deprecated alias 'text-after-edge' is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect deprecated alignment-baseline: text-after-edge alias',
  code: `
    a { alignment-baseline: text-after-edge; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'alignment-baseline: baseline' is not detected when safely guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: baseline when guarded by @supports',
  code: `
    
  @supports (alignment-baseline: baseline) {
    .foo {
      alignment-baseline: baseline;
      line-height: 1.5; /* Add another property to vary line/col */
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that `alignment-baseline: var()` is not flagged because we don't resolve CSS variables for specific value features.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: var()',
  code: `
    
  .foo {
    --align-base: baseline;
    alignment-baseline: var(--align-base);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'initial' keyword is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: initial',
  code: `
    a { alignment-baseline: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'unset' keyword is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: unset',
  code: `
    a { alignment-baseline: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'inherit' keyword is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: inherit',
  code: `
    a { alignment-baseline: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'revert' keyword is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: revert',
  code: `
    a { alignment-baseline: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that 'revert-layer' keyword is not detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should not detect alignment-baseline: revert-layer',
  code: `
    a { alignment-baseline: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies detection when alignment-baseline is used within a display: flex rule.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should detect alignment-baseline: baseline in a flex context',
  code: `
    
  .flex-container {
    display: flex;
    alignment-baseline: baseline;
    width: 100px; /* Vary column/line */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies detection when alignment-baseline is used within a display: grid rule.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should detect alignment-baseline: baseline in a grid context',
  code: `
    
  .grid-container {
    display: grid;
    alignment-baseline: baseline;
    height: 50px; /* Vary column/line */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies detection when alignment-baseline is used within a display: table-cell rule.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should detect alignment-baseline: baseline in a table-cell context',
  code: `
    
  .table-cell-element {
    display: table-cell;
    alignment-baseline: baseline;
    padding: 10px; /* Vary column/line */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies detection for an inline-level element.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should detect alignment-baseline: baseline on an inline element',
  code: `
    
  span.foo {
    color: red;
    alignment-baseline: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies multiple instances are detected in a single CSS block.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should have 2 warnings in one test',
  code: `
    
  .foo {
    alignment-baseline: baseline;
    top: 0;
    alignment-baseline: baseline;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Verifies detection with varied line and column positions for the property-value pair.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should detect alignment-baseline: baseline with varied positions',
  code: `
    
  .bar {
    display: flex; /* Line 2, Column 3 */
    /* some comment */
    alignment-baseline: baseline; /* Line 4, Column 3 */
    margin: 5px;
  }
  .baz {
    font-size: 16px;
    alignment-baseline: baseline; /* Line 8, Column 3 */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Verifies that the feature is detected in a pseudo-class of the same element, as the context is inherited.
 */
testRule({
  featureId: 'properties.alignment-baseline.baseline',
  description: 'should detect alignment-baseline: baseline within a pseudo-class (same context)',
  code: `
    
  .foo {
    display: flex;
    &:hover {
      alignment-baseline: baseline;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
