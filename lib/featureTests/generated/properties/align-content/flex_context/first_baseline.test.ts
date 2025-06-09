/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.flex_context.first_baseline
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Should flag 'align-content: first baseline' when used in a flex container.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should flag align-content: first baseline in flex context',
  code: `
    .foo {
    display: flex;
    align-content: first baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'align-content: baseline' as it is equivalent to 'first baseline' in a flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should flag align-content: baseline (alias for first baseline) in flex context',
  code: `
    .foo {
    display: flex;
    align-content: baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag 'align-content: first baseline' when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should not flag align-content: first baseline when guarded by exact @supports',
  code: `
    @supports (align-content: first baseline) {
    .foo {
      display: flex;
      align-content: first baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag 'align-content: first baseline' when guarded by an @supports query for the same property but a different value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description:
    'should flag align-content: first baseline when guarded by @supports with different value',
  code: `
    @supports (align-content: center) {
    .foo {
      display: flex;
      align-content: first baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'align-content: first baseline' when guarded by an @supports query for a different property.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description:
    'should flag align-content: first baseline when guarded by @supports with different property',
  code: `
    @supports (display: grid) {
    .foo {
      display: flex;
      align-content: first baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag 'align-content: last baseline' as the feature specifically targets 'first baseline'.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should not flag align-content: last baseline in flex context',
  code: `
    .foo {
    display: flex;
    align-content: last baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'align-content: first baseline' when used in a grid container, as the feature is specific to 'flex_context'.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should not flag align-content: first baseline in grid context',
  code: `
    .foo {
    display: grid;
    align-content: first baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'align-content: first baseline' when used in a block container, as the feature is specific to 'flex_context'.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should not flag align-content: first baseline in block context',
  code: `
    .foo {
    display: block;
    align-content: first baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'align-content: var()' when the feature is for a specific value ('first baseline'), as variables are not resolved.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should not flag align-content: var() for specific value',
  code: `
    .foo {
    display: flex;
    --alignment: first baseline;
    align-content: var(--alignment);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'align-content: initial' as 'initial' resolves to 'normal', which is not 'first baseline'.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should not flag align-content: initial',
  code: `
    .foo {
    display: flex;
    align-content: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'align-content: unset' as 'unset' resolves to 'normal', which is not 'first baseline'.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should not flag align-content: unset',
  code: `
    .foo {
    display: flex;
    align-content: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag multiple instances of 'align-content: first baseline' (including 'baseline').
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should flag multiple align-content: first baseline declarations',
  code: `
    .foo {
    display: flex;
    align-content: first baseline;
    align-content: baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Should flag 'align-content: first baseline' when used within a pseudo-class selector that targets the same element in a flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should flag align-content: first baseline in pseudo-class selector',
  code: `
    .foo {
    display: flex;
    &:hover {
      align-content: first baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag 'align-content: first baseline' when used in a child selector, as it creates a new element and thus a new context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should not flag align-content: first baseline in child selector',
  code: `
    .foo {
    display: flex;
    & .bar {
      align-content: first baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'align-content: first baseline' when used in a pseudo-element selector, as it creates a new element.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should not flag align-content: first baseline in pseudo-element selector',
  code: `
    .foo {
    display: flex;
    &::before {
      align-content: first baseline;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag 'ALIGN-CONTENT: first baseline' with different casing for the property name.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should flag align-content: first baseline with uppercase property',
  code: `
    .foo {
    display: flex;
    ALIGN-CONTENT: first baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'align-content: FIRST BASELINE' with different casing for the value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description: 'should flag align-content: first baseline with uppercase value',
  code: `
    .foo {
    display: flex;
    align-content: FIRST BASELINE;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag 'align-content: first baseline' if 'display: flex' is in a different rule, as the checker only checks the same rule for display contexts.
 */
testRule({
  featureId: 'properties.align-content.flex_context.first_baseline',
  description:
    'should not flag align-content: first baseline when display: flex is in separate rule',
  code: `
    .container {
    display: flex;
  }
  .item {
    align-content: first baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
