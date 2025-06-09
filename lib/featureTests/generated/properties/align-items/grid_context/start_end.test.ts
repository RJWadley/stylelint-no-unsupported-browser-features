/* AUTO_GENERATED: true */

/* 
feature: properties.align-items.grid_context.start_end
docs: https://developer.mozilla.org/docs/Web/CSS/align-items
spec: https://drafts.csswg.org/css-align/#align-items-property
*/

import { testRule } from 'lib/testRule';

/**
 * Flags `align-items: start` when used in a grid container.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should flag unprefixed align-items: start in grid context',
  code: `
    .container {
    display: grid;
    align-items: start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Flags `align-items: end` when used in a grid container.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should flag unprefixed align-items: end in grid context',
  code: `
    .container {
    display: grid;
    align-items: end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Flags `-webkit-align-items: start` when used in a grid container.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should flag -webkit-align-items: start in grid context',
  code: `
    .container {
    display: grid;
    -webkit-align-items: start;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Flags `-ms-align-items: end` when used in a grid container.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should flag -ms-align-items: end in grid context',
  code: `
    .container {
    display: grid;
    -ms-align-items: end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: start` when used in a flex container, as this feature is specific to grid context.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should not flag align-items: start in flex context',
  code: `
    .container {
    display: flex;
    align-items: start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: start` when used in an explicitly defined block container, as this feature is specific to grid context.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should not flag align-items: start in block context',
  code: `
    .container {
    display: block;
    align-items: start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: center` in a grid container, as the feature targets `start` and `end` values.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should not flag align-items: center in grid context',
  code: `
    .container {
    display: grid;
    align-items: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: start` when correctly guarded by `@supports (align-items: start)`.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should not flag align-items: start in grid context when guarded by exact supports',
  code: `
    @supports (align-items: start) {
    .container {
      display: grid;
      align-items: start;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: end` when correctly guarded by `@supports (align-items: end)`.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should not flag align-items: end in grid context when guarded by exact supports',
  code: `
    @supports (align-items: end) {
    .container {
      display: grid;
      align-items: end;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Flags `align-items: start` even when guarded by an unrelated `@supports (display: grid)` query.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should flag align-items: start in grid context when guarded by unrelated supports',
  code: `
    @supports (display: grid) {
    .container {
      display: grid;
      align-items: start;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Does not flag `align-items` when its value is a CSS variable, as the feature targets specific literal values.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should not flag align-items with a CSS variable in grid context',
  code: `
    .container {
    display: grid;
    --val: start;
    align-items: var(--val);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: initial` in a grid container, as `initial` resolves to `normal` which is not `start` or `end`.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should not flag align-items: initial in grid context',
  code: `
    .container {
    display: grid;
    align-items: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: unset` in a grid container, as `unset` resolves to `normal` which is not `start` or `end`.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should not flag align-items: unset in grid context',
  code: `
    .container {
    display: grid;
    align-items: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Flags `align-items: start` within a pseudo-class on the same element, as the grid context is maintained.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should flag align-items: start in grid context within a pseudo-class',
  code: `
    .container {
    display: grid;
    &:hover {
      align-items: start;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Does not flag `align-items: start` on a child element, as its context is not necessarily a grid context.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should not flag align-items: start on a child element within a grid container',
  code: `
    .container {
    display: grid;
    & .item {
      align-items: start;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: start` on a pseudo-element, as it does not inherit the parent's grid context.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should not flag align-items: start on a pseudo-element within a grid container',
  code: `
    .container {
    display: grid;
    &::before {
      content: '';
      align-items: start;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Flags both unprefixed `align-items: start` and `-webkit-align-items: end` in a grid context.
 */
testRule({
  featureId: 'properties.align-items.grid_context.start_end',
  description: 'should flag multiple align-items values in one test',
  code: `
    .container {
    display: grid;
    align-items: start;
    -webkit-align-items: end;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
