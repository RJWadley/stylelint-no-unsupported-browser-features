/* AUTO_GENERATED: true */

/* 
feature: properties.align-self.grid_context
docs: https://developer.mozilla.org/docs/Web/CSS/align-self
spec: https://drafts.csswg.org/css-align/#align-self-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests detection of `align-self` with `start`, `end`, `center`, `stretch`, `normal`, and `auto` values when the `display` property of the same rule is set to `grid`. `normal` and `auto` should implicitly resolve to `stretch` for grid items.
 */
testRule({
  featureId: 'properties.align-self.grid_context',
  description: 'should detect align-self with basic positional keywords in grid context',
  code: `
    .grid-container-basic {
    display: grid;
    align-self: start;
  }
  .grid-container-basic-2 {
    display: grid;
    align-self: end;
  }
  .grid-container-basic-3 {
    display: grid;
    align-self: center;
  }
  .grid-container-basic-4 {
    display: grid;
    align-self: stretch;
  }
  .grid-container-basic-5 {
    display: grid;
    align-self: normal;
  }
  .grid-container-basic-6 {
    display: grid;
    align-self: auto;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 6 },
});

/**
 * Tests detection of `align-self` with CSS-wide keywords (`initial`, `inherit`, `unset`, `revert`, `revert-layer`) when the `display` property of the same rule is set to `grid`.
 */
testRule({
  featureId: 'properties.align-self.grid_context',
  description: 'should detect align-self with CSS-wide keywords in grid context',
  code: `
    .grid-container-keywords {
    display: grid;
    align-self: initial;
  }
  .grid-container-keywords-2 {
    display: grid;
    align-self: inherit;
  }
  .grid-container-keywords-3 {
    display: grid;
    align-self: unset;
  }
  .grid-container-keywords-4 {
    display: grid;
    align-self: revert;
  }
  .grid-container-keywords-5 {
    display: grid;
    align-self: revert-layer;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 5 },
});

/**
 * Tests detection of vendor-prefixed `align-self` properties used within explicitly defined grid contexts (both prefixed and unprefixed `display: grid`). This accounts for potential historical prefixed implementations.
 */
testRule({
  featureId: 'properties.align-self.grid_context',
  description: 'should detect prefixed align-self in grid contexts',
  code: `
    .grid-container-prefixed-1 {
    display: -webkit-grid;
    -webkit-align-self: start;
  }
  .grid-container-prefixed-2 {
    display: grid;
    -webkit-align-self: end;
  }
  .grid-container-prefixed-3 {
    display: -ms-grid;
    -ms-align-self: center;
  }
  .grid-container-prefixed-4 {
    display: grid;
    -ms-align-self: stretch;
  }
  `,
  featureCount: { '-webkit-': 2, '-moz-': 0, '-ms-': 2, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of `align-self` with `baseline`, `first baseline`, `last baseline`, `safe`, and `unsafe` keywords when the `display` property of the same rule is set to `grid`.
 */
testRule({
  featureId: 'properties.align-self.grid_context',
  description:
    'should detect align-self with baseline and overflow-position keywords in grid context',
  code: `
    .grid-container-complex-1 {
    display: grid;
    align-self: baseline;
  }
  .grid-container-complex-2 {
    display: grid;
    align-self: first baseline;
  }
  .grid-container-complex-3 {
    display: grid;
    align-self: last baseline;
  }
  .grid-container-complex-4 {
    display: grid;
    align-self: safe start;
  }
  .grid-container-complex-5 {
    display: grid;
    align-self: unsafe center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 5 },
});

/**
 * Tests detection of `align-self` when its value is a CSS variable (`var()`), in a grid context. As the feature is for the property in general, `var()` should be flagged.
 */
testRule({
  featureId: 'properties.align-self.grid_context',
  description: 'should detect align-self with CSS variables in grid context',
  code: `
    .grid-container-var {
    display: grid;
    --align-self-val: center;
    align-self: var(--align-self-val);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `align-self` is correctly guarded by `@supports` queries checking for the exact property and value. It should not be detected if guarded, and detected otherwise.
 */
testRule({
  featureId: 'properties.align-self.grid_context',
  description: 'should handle align-self within @supports rules in grid context',
  code: `
    .grid-container-supports-guarded {
    display: grid;
    @supports (align-self: start) {
      align-self: start; /* Guarded: count 0 */
    }
  }
  .grid-container-supports-unguarded-prop {
    display: grid;
    @supports (display: flex) {
      align-self: center; /* Unguarded: count 1 (wrong @supports property) */
    }
  }
  .grid-container-supports-unguarded-value {
    display: grid;
    @supports (align-self: flex-end) {
      align-self: end; /* Unguarded: count 1 (wrong @supports value) */
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests detection of `align-self` on a grid item within a nested pseudo-class (`&:hover`) which refers to the same element, thus inheriting the `grid` context.
 */
testRule({
  featureId: 'properties.align-self.grid_context',
  description: 'should detect align-self in grid context with nested pseudo-classes',
  code: `
    .grid-item-nested-pseudo {
    display: grid;
    align-self: start;
    &:hover {
      align-self: end;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that `align-self` is NOT detected when the `display: grid` property is on a parent selector or not present in the current rule, as the context cannot be reliably determined.
 */
testRule({
  featureId: 'properties.align-self.grid_context',
  description: 'should not detect align-self when display: grid is not in the same rule',
  code: `
    .parent-grid-container {
    display: grid;
  }
  .child-item {
    align-self: start; /* Should not count: 0 (display: grid is on parent rule) */
  }
  .some-element-no-grid {
    align-self: center; /* Should not count: 0 (no display: grid in this rule) */
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-self` is NOT detected when the `display` property of the same rule is explicitly set to `flex`, as this is not a `grid` context.
 */
testRule({
  featureId: 'properties.align-self.grid_context',
  description: 'should not detect align-self in non-grid contexts (e.g. flex)',
  code: `
    .flex-item-test {
    display: flex;
    align-self: start; /* Should not count: 0 (flex context) */
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Provides a test case with multiple `align-self` detections within a grid context, including unprefixed and prefixed, to ensure the warning count is correctly aggregated. This test fulfills the 'at least one test that has 2 warnings' requirement.
 */
testRule({
  featureId: 'properties.align-self.grid_context',
  description: 'should include a test with multiple detections to check warning count',
  code: `
    .multi-warning-grid-item-1 {
    display: grid;
    align-self: start; /* Warning 1 */
    -webkit-align-self: center; /* Warning 2 */
  }
  .multi-warning-grid-item-2 {
    display: grid;
    align-self: end; /* Warning 3 */
    -ms-align-self: stretch; /* Warning 4 */
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 2 },
});
