/* AUTO_GENERATED: true */

/* 
feature: properties.align-items.flex_context.start_end
docs: https://developer.mozilla.org/docs/Web/CSS/align-items
spec: https://drafts.csswg.org/css-align/#align-items-property
*/

import { testRule } from 'lib/testRule';

/**
 * Ensures `align-items: start` is flagged when explicitly in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should flag align-items: start in flex context',
  code: `
    .foo {
    display: flex;
    align-items: start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures `align-items: end` is flagged when `display` is vendor-prefixed flex, as the `align-items` value is unprefixed.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should flag align-items: end with prefixed display',
  code: `
    .bar {
    display: -webkit-flex;
    align-items: end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Flags both `start` and `end` values, including a vendor-prefixed `align-items` property, within a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should flag align-items: start and -webkit-align-items: end in flex context',
  code: `
    .baz {
    display: flex;
    align-items: start;
    -webkit-align-items: end;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Does not flag `align-items: start` when no explicit display context (flex, grid, or block) is defined in the same rule.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should not flag align-items: start without explicit display context',
  code: `
    a {
    align-items: start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: end` when in a `display: grid` context, as the feature is specific to `flex_context`.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should not flag align-items: end in grid context',
  code: `
    @media (min-width: 500px) {
    .grid-container {
      display: grid;
      align-items: end;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: start` when in an explicit `display: block` context, as the feature is specific to `flex_context`.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should not flag align-items: start in block context',
  code: `
    .block-container {
    display: block;
    align-items: start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: flex-start` in a flex context, as the feature specifically targets `start` and `end` values, not `flex-start`.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should not flag align-items: flex-start in flex context',
  code: `
    .flex-item {
    display: flex;
    align-items: flex-start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag vendor-prefixed `align-items: flex-end` in a prefixed flex context, as the feature specifically targets `start` and `end` values.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should not flag -moz-align-items: flex-end with prefixed display',
  code: `
    .flex-item-prefixed {
    display: -moz-flex;
    -moz-align-items: flex-end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Flags `align-items: start` within a pseudo-class selector when the parent is a flex container, as it refers to the same element's state.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should flag align-items: start in pseudo-class of flex parent',
  code: `
    .parent-flex {
    display: flex;
    &:hover {
      align-items: start;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Does not flag `align-items: end` within a child selector, as the child element does not inherit the parent's display context for this check.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should not flag align-items: end in child selector of flex parent',
  code: `
    .parent-flex-child {
    display: flex;
    & > span {
      align-items: end;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: start` within a pseudo-element selector, as the pseudo-element is a new element and does not inherit the parent's display context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should not flag align-items: start in pseudo-element of flex parent',
  code: `
    .parent-flex-before {
    display: flex;
    &::before {
      align-items: start;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items: start` when it is guarded by an exact `@supports` query.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should not flag guarded align-items: start in supports query',
  code: `
    @supports (align-items: start) {
    .supported-flex-start {
      display: flex;
      align-items: start;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Flags `align-items: end` when it is not guarded by an exact `@supports` query (different property check).
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should flag align-items: end with inexact supports query (different property)',
  code: `
    @supports (display: grid) {
    .unguarded-flex-end {
      display: flex; /* Intentionally different from @supports condition */
      align-items: end;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Flags `align-items: start` when it is not guarded by an exact `@supports` query (different value check).
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should flag align-items: start with inexact supports query (different value)',
  code: `
    @supports (align-items: center) {
    .unguarded-flex-start-value {
      display: flex;
      align-items: start;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Does not flag `align-items` when its value is a CSS variable, as the specific value (`start`) cannot be resolved at static analysis time.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should not flag align-items with CSS variable value',
  code: `
    .var-flex {
    display: flex;
    --align-val: start;
    align-items: var(--align-val);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag vendor-prefixed `align-items` when its value is a CSS variable, as the specific value (`end`) cannot be resolved at static analysis time.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should not flag prefixed align-items with CSS variable value',
  code: `
    .var-flex-prefixed {
    display: -webkit-flex;
    --align-val: end;
    -webkit-align-items: var(--align-val);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not flag `align-items` when its value is a CSS-wide keyword or `normal`/`stretch`, as these are not explicitly `start` or `end` values.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should not flag align-items with CSS-wide keywords or normal/stretch',
  code: `
    .keywords-flex {
    display: flex;
    align-items: initial;
    align-items: unset;
    align-items: revert;
    align-items: revert-layer;
    align-items: normal;
    align-items: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Generates multiple warnings for different instances of `align-items: start` and `align-items: end` in flex contexts, including vendor-prefixed usage.
 */
testRule({
  featureId: 'properties.align-items.flex_context.start_end',
  description: 'should flag multiple instances of align-items: start/end',
  code: `
    .multiple-warnings-a {
    display: flex;
    align-items: start;
  }
  .multiple-warnings-b {
    display: -webkit-flex;
    -webkit-align-items: end;
  }
  .multiple-warnings-c {
    display: flex;
    align-items: end;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});
