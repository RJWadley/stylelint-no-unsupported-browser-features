/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.flex_context.baseline
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Should flag align-content: baseline in a flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: baseline in flex context',
  code: `
    .test-flex-container {
    display: flex;
    align-content: baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag align-content: first baseline in a flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: first baseline in flex context',
  code: `
    .test-flex-container {
    display: flex;
    align-content: first baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag align-content: last baseline in a flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: last baseline in flex context',
  code: `
    .test-flex-container {
    display: flex;
    align-content: last baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag align-content: baseline when display context is not explicitly flex or grid in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: baseline in implicit block context',
  code: `
    .test-block-context {
    align-content: baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag align-content: baseline in an explicit block context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: baseline in explicit block context',
  code: `
    .test-explicit-block {
    display: block;
    align-content: baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag align-content: baseline when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: baseline guarded by exact @supports',
  code: `
    @supports (align-content: baseline) {
    .foo {
      display: flex;
      align-content: baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag align-content: baseline when guarded by a @supports query for a different property.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: baseline guarded by different @supports',
  code: `
    @supports (display: flex) {
    .foo {
      display: flex;
      align-content: baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag align-content when its value is a CSS variable, as the feature targets a specific value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content with var() for specific value',
  code: `
    .foo {
    display: flex;
    --baseline-val: baseline;
    align-content: var(--baseline-val);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag align-content: baseline within a pseudo-class on a flex container (same element).
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: baseline in pseudo-class (same element)',
  code: `
    .foo {
    display: flex;
    &:hover {
      align-content: baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag align-content: baseline within a child selector, as the context is not inherited.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: baseline in child selector (new element)',
  code: `
    .foo {
    display: flex;
    & .bar {
      align-content: baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag align-content: initial in a flex context, as initial resolves to normal, not baseline.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: initial in flex context',
  code: `
    .foo {
    display: flex;
    align-content: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag align-content: unset in a flex context, as unset resolves to normal, not baseline.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: unset in flex context',
  code: `
    .foo {
    display: flex;
    align-content: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag align-content: baseline in a grid context, as this feature is specific to flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.baseline',
  description: 'align-content: baseline in grid context',
  code: `
    .test-grid-container {
    display: grid;
    align-content: baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
