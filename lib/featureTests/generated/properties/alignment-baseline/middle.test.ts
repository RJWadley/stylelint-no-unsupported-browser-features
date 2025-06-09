/* AUTO_GENERATED: true */

/* 
feature: properties.alignment-baseline.middle
docs: https://developer.mozilla.org/docs/Web/CSS/alignment-baseline
spec: https://drafts.csswg.org/css-inline/#alignment-baseline-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests alignment-baseline: middle on a display: inline-block element.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect middle value on inline-block',
  code: `
    
  .foo {
    display: inline-block;
    alignment-baseline: middle;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline: middle on a span element (inline-level by default).
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect middle value on span',
  code: `
    
  span {
    alignment-baseline: middle;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline: middle on a flex item when its parent is a flex container.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect middle value on a flex item within a flex container',
  code: `
    
  .flex-container {
    display: flex;
  }
  .flex-item {
    alignment-baseline: middle;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline: middle on a grid item when its parent is a grid container.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect middle value on a grid item within a grid container',
  code: `
    
  .grid-container {
    display: grid;
  }
  .grid-item {
    alignment-baseline: middle;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline: middle on a table cell (td).
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect middle value on a table cell',
  code: `
    
  td {
    alignment-baseline: middle;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline: middle on an SVG text element.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect middle value on SVG text element',
  code: `
    
  text {
    alignment-baseline: middle;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline: middle on an SVG tspan element.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect middle value on SVG tspan element',
  code: `
    
  tspan {
    alignment-baseline: middle;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline: middle on an SVG textPath element.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect middle value on SVG textPath element',
  code: `
    
  textPath {
    alignment-baseline: middle;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that alignment-baseline: middle is not flagged when correctly guarded by @supports (alignment-baseline: middle).
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should not flag when guarded by exact @supports query',
  code: `
    
  @supports (alignment-baseline: middle) {
    .foo {
      alignment-baseline: middle;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline: middle is flagged when guarded by @supports for a different property (display: flex).
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should flag when not guarded by relevant @supports query (different property)',
  code: `
    
  @supports (display: flex) {
    .foo {
      alignment-baseline: middle;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that alignment-baseline: middle is flagged when guarded by @supports for the same property but a different value (alignment-baseline: auto).
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should flag when not guarded by relevant @supports query (different value)',
  code: `
    
  @supports (alignment-baseline: auto) {
    .foo {
      alignment-baseline: middle;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that alignment-baseline: middle is not flagged when its value is a CSS variable, as we cannot resolve it.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should not flag when value is a CSS variable',
  code: `
    
  .foo {
    --my-baseline: middle;
    alignment-baseline: var(--my-baseline);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline: initial is not flagged as alignment-baseline: middle.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should not flag initial keyword',
  code: `
    
  .foo {
    alignment-baseline: initial;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline: unset is not flagged as alignment-baseline: middle.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should not flag unset keyword',
  code: `
    
  .foo {
    alignment-baseline: unset;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline: revert is not flagged as alignment-baseline: middle.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should not flag revert keyword',
  code: `
    
  .foo {
    alignment-baseline: revert;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline: revert-layer is not flagged as alignment-baseline: middle.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should not flag revert-layer keyword',
  code: `
    
  .foo {
    alignment-baseline: revert-layer;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline: inherit is not flagged as alignment-baseline: middle.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should not flag inherit keyword',
  code: `
    
  .foo {
    alignment-baseline: inherit;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that a misspelled value 'middlle' is not flagged.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should not flag misspelled value',
  code: `
    
  .foo {
    alignment-baseline: middlle;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that other valid alignment-baseline values like 'alphabetic' are not flagged as 'middle'.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should not flag other valid alignment-baseline values',
  code: `
    
  .foo {
    alignment-baseline: alphabetic;
    div { alignment-baseline: central; }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests multiple instances of alignment-baseline: middle to ensure all are detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect multiple instances of middle in one test',
  code: `
    
  .foo {
    alignment-baseline: middle;
  }
  .bar {
    display: flex;
    alignment-baseline: middle;
  }
  /* another declaration with a comment */
  .baz { /* comment */ alignment-baseline: middle; }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests alignment-baseline: middle on a pseudo-class (e.g., :hover) which targets the same element.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect middle value on pseudo-class (same element context)',
  code: `
    
  .foo {
    display: inline-block;
    &:hover {
      alignment-baseline: middle;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that alignment-baseline: middle on a pseudo-element (e.g., ::before) is NOT detected because it's a new element.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should not detect middle value on pseudo-element (new element context)',
  code: `
    
  .foo {
    display: inline-block;
    &::before {
      alignment-baseline: middle;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline: middle on a child element (e.g., & .bar) is NOT detected because it's a new element.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should not detect middle value on child selector (new element context)',
  code: `
    
  .foo {
    display: flex;
    & .bar {
      alignment-baseline: middle;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline: middle is detected regardless of its column and line position.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect middle value with varied positioning',
  code: `
    
  a {
    alignment-baseline: middle; /* line 2, col 3 */
  }
  b {
    alignment-baseline: /* comment */ middle; /* line 5, col 23 */
  }
          c { alignment-baseline: middle; } /* line 7, col 29 */
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests that alignment-baseline: middle is detected in an empty rule and with varied whitespace.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should handle empty rule and whitespace',
  code: `
    
  .foo { }
  .bar { alignment-baseline : middle ; }
  .baz { alignment-baseline: middle; }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that alignment-baseline: middle is detected even with CSS comments.
 */
testRule({
  featureId: 'properties.alignment-baseline.middle',
  description: 'should detect middle value with comments',
  code: `
    
  .foo {
    /* This is a comment */
    alignment-baseline: middle; /* Another comment */
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
