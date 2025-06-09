/* AUTO_GENERATED: true */

/* 
feature: properties.align-items.grid_context
docs: https://developer.mozilla.org/docs/Web/CSS/align-items
spec: https://drafts.csswg.org/css-align/#align-items-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests common align-items values (stretch, center, start, end, flex-start, flex-end, baseline, first baseline, last baseline, normal, safe center, unsafe center) within a display: grid rule. Includes multiple declarations in one rule and multiple separate rules, and a pseudo-class on the grid container.
 */
testRule({
  featureId: 'properties.align-items.grid_context',
  description: 'should detect various valid align-items values in grid context',
  code: `
    .container-one {
    display: grid;
    align-items: stretch; /* 1 */
  }
  .container-two {
    display: grid;
    align-items: center; /* 1 */
    align-items: start; /* 1 */
  }
  .container-three {
    display: grid;
    align-items: end; /* 1 */
  }
  .container-four {
    display: grid;
    align-items: flex-start; /* 1 */
    &:hover {
      align-items: flex-end; /* 1 */
    }
  }
  .container-five {
    display: grid;
    align-items: baseline; /* 1 */
  }
  .container-six {
    display: grid;
    align-items: first baseline; /* 1 */
    /* comment here */
    align-items: last baseline; /* 1 */
  }
  .container-seven {
    display: grid;
    align-items: normal; /* 1 */
  }
  .container-eight {
    display: grid;
    align-items: safe center; /* 1 */
  }
  .container-nine {
    display: grid;
    align-items: unsafe center; /* 1 */
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 12 },
});

/**
 * Tests that align-items is not detected when display: grid is not present in the same rule, or when the display is flex or block, or within child selectors/pseudo-elements that do not inherit the grid context.
 */
testRule({
  featureId: 'properties.align-items.grid_context',
  description: 'should not detect align-items usage outside of grid context',
  code: `
    .foo {
    align-items: center; /* not grid context */
  }
  .bar {
    display: flex;
    align-items: stretch; /* flex context */
  }
  .baz {
    display: block;
    align-items: start; /* block context */
  }
  .qux {
    display: grid;
    & .child { /* child selector, loses context */
      align-items: end;
    }
  }
  .corge {
    display: grid;
    &::before { /* pseudo-element, loses context */
      align-items: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests @supports guarding for align-items. The feature should not be flagged if the @supports query exactly matches the property and value used. It should be flagged if the query is for a different value or a different property, or if the context is not fully specified in the @supports condition.
 */
testRule({
  featureId: 'properties.align-items.grid_context',
  description: 'should respect exact @supports queries for align-items in grid context',
  code: `
    @supports (display: grid) and (align-items: center) {
    .guarded-exact {
      display: grid;
      align-items: center; /* 0 - exactly guarded */
    }
  }
  @supports (display: grid) and (align-items: stretch) {
    .not-guarded-value {
      display: grid;
      align-items: center; /* 1 - different value */
    }
  }
  @supports (grid-template-rows: 1fr) {
    .not-guarded-property {
      display: grid;
      align-items: start; /* 1 - different property */
    }
  }
  @supports (align-items: center) { /* Missing display: grid in @supports */
    .not-guarded-missing-context {
      display: grid;
      align-items: center; /* 1 - context not fully specified in @supports */
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests detection of align-items when its value is a CSS variable or a CSS-wide keyword (initial, inherit, unset, revert, revert-layer). CSS variables for general property usage should be flagged. CSS-wide keywords are considered usage of the property.
 */
testRule({
  featureId: 'properties.align-items.grid_context',
  description: 'should detect align-items with CSS variables and CSS-wide keywords in grid context',
  code: `
    .foo {
    display: grid;
    --align-val: center;
    align-items: var(--align-val); /* 1 - var() is flagged for general property usage */
  }
  .bar {
    display: grid;
    align-items: initial; /* 1 */
  }
  .baz {
    display: grid;
    align-items: inherit; /* 1 */
  }
  .qux {
    display: grid;
    align-items: unset; /* 1 */
  }
  .corge {
    display: grid;
    align-items: revert; /* 1 */
  }
  .grault {
    display: grid;
    align-items: revert-layer; /* 1 */
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 6 },
});
