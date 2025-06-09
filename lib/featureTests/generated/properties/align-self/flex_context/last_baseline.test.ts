/* AUTO_GENERATED: true */

/* 
feature: properties.align-self.flex_context.last_baseline
docs: https://developer.mozilla.org/docs/Web/CSS/align-self
spec: https://drafts.csswg.org/css-align/#align-self-property
*/

import { testRule } from 'lib/testRule';

/**
 * Ensures `align-self: last baseline` is detected when the element is a flex item within a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should detect last baseline in flex context',
  code: `
    .flex-container {
    display: flex;
  }
  .flex-item {
    align-self: last baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies detection when `align-self: last baseline` is used within a pseudo-class selector of a flex item, as it's considered the same context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should detect last baseline in nested flex context (pseudo-class)',
  code: `
    .foo {
    display: flex;
  }
  .bar {
    align-self: auto;
    &:hover {
      align-self: last baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures `align-self: last baseline` is not detected when used in a grid context, as the feature is specific to flex context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should NOT detect last baseline in grid context',
  code: `
    .grid-container {
    display: grid;
  }
  .grid-item {
    align-self: last baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `align-self: last baseline` is not detected when used in a block context (explicitly set display), as the feature is specific to flex context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should NOT detect last baseline in block context',
  code: `
    .block-container {
    display: block;
  }
  .block-item {
    align-self: last baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `align-self: last baseline` is not detected when used on a child element, even if the parent is a flex container, as the context is not inherited by children.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should NOT detect last baseline for child selector in flex parent',
  code: `
    .foo {
    display: flex;
    & .bar {
      align-self: last baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `align-self: last baseline` is not detected when used on a pseudo-element, even if the parent is a flex container, as pseudo-elements are considered new elements.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should NOT detect last baseline for pseudo-element in flex parent',
  code: `
    .foo {
    display: flex;
    &::before {
      align-self: last baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Confirms that `align-self: last baseline` is detected within an `@supports` block when the query exactly matches the property-value pair.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should detect last baseline when guarded by exact @supports query',
  code: `
    @supports (align-self: last baseline) {
    .flex-container {
      display: flex;
    }
    .flex-item {
      align-self: last baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `align-self: last baseline` is flagged even if guarded by an `@supports` query for a different property (`display: flex`), as the checker does not infer relationships.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should NOT detect last baseline when @supports query is for different property',
  code: `
    @supports (display: flex) {
    .flex-container {
      display: flex;
    }
    .flex-item {
      align-self: last baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures `align-self: last baseline` is flagged even if guarded by an `@supports` query for the same property but a different value (`align-self: start`), as the checker requires exact match.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description:
    'should NOT detect last baseline when @supports query is for same property different value',
  code: `
    @supports (align-self: start) {
    .flex-container {
      display: flex;
    }
    .flex-item {
      align-self: last baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * For features targeting a specific value like `last baseline`, a `var()` usage should not be flagged as its resolved value is unknown.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should NOT detect last baseline with var() for specific value feature',
  code: `
    .flex-container {
    display: flex;
  }
  .flex-item {
    --my-align: last baseline;
    align-self: var(--my-align);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-self: initial` is not flagged, as it does not represent the `last baseline` value.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should NOT detect last baseline with initial keyword',
  code: `
    .flex-container {
    display: flex;
  }
  .flex-item {
    align-self: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-self: unset` is not flagged, as it does not represent the `last baseline` value.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should NOT detect last baseline with unset keyword',
  code: `
    .flex-container {
    display: flex;
  }
  .flex-item {
    align-self: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of multiple `align-self: last baseline` usages within the same stylesheet, including different line and column positions.
 */
testRule({
  featureId: 'properties.align-self.flex_context.last_baseline',
  description: 'should detect multiple instances of last baseline with varying positions',
  code: `
    .flex-container {
    display: flex;
  }
  .item-one {
    align-self: last baseline;
  }
  .item-two {
    color: red;
    align-self: last baseline;
  }
  /* another flex container */
  .another-flex-container {
    display: flex;
  }
  .item-three {
    /* Some comment */
    align-self: last baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});
