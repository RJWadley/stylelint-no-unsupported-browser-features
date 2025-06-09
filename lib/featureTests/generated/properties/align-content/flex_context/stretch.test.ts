/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.flex_context.stretch
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Detects basic usage of align-content: stretch in a flex container.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should flag align-content: stretch in modern flex context',
  code: `
    .foo {
    display: flex;
    align-content: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects prefixed usage of -webkit-align-content: stretch with -webkit-flex.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should flag -webkit-align-content: stretch in webkit flex context',
  code: `
    .foo {
    display: -webkit-flex;
    -webkit-align-content: stretch;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects prefixed usage of -moz-align-content: stretch with -moz-flex.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should flag -moz-align-content: stretch in moz flex context',
  code: `
    .foo {
    display: -moz-flex;
    -moz-align-content: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures the feature is detected when used within a pseudo-class that inherits the flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should flag align-content: stretch within a pseudo-class of a flex container',
  code: `
    .foo {
    display: flex;
    &:hover {
      align-content: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'normal' value is correctly interpreted as 'stretch' in a flex container.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should flag align-content: normal in flex context (behaves as stretch)',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: normal;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'initial' value is correctly interpreted as 'normal' and then 'stretch' in a flex container.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should flag align-content: initial in flex context (resolves to normal/stretch)',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'unset' value is correctly interpreted as 'initial', then 'normal', then 'stretch' in a flex container.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description:
    'should flag align-content: unset in flex context (resolves to initial/normal/stretch)',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'revert' value is correctly interpreted as 'normal' and then 'stretch' in a flex container (assuming UA stylesheet default).
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should flag align-content: revert in flex context (can resolve to normal/stretch)',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: revert;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'revert-layer' value is correctly interpreted as 'normal' and then 'stretch' in a flex container (assuming lower cascade layer default).
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description:
    'should flag align-content: revert-layer in flex context (can resolve to normal/stretch)',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: revert-layer;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures align-content: stretch is not flagged when display is block.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should not flag align-content: stretch in non-flex (block) context',
  code: `
    .foo {
    display: block;
    align-content: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures align-content: stretch is not flagged for a child element as context is not inherited.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should not flag align-content: stretch for a child element in flex container',
  code: `
    .foo {
    display: flex;
    & .bar {
      align-content: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures align-content: stretch is not flagged for a pseudo-element as context is not inherited.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should not flag align-content: stretch for a pseudo-element in flex container',
  code: `
    .foo {
    display: flex;
    &::before {
      align-content: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures other values for align-content are not flagged.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should not flag align-content with different value in flex context',
  code: `
    .foo {
    display: flex;
    align-content: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that the feature is not flagged when an exact @supports query is present.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should not flag align-content: stretch when guarded by exact @supports',
  code: `
    @supports (align-content: stretch) {
    .foo {
      display: flex;
      align-content: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks that the feature is flagged when @supports checks a different property.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description:
    'should flag align-content: stretch when guarded by non-exact @supports (different property)',
  code: `
    @supports (display: flex) {
    .foo {
      display: flex;
      align-content: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks that the feature is flagged when @supports checks the same property but a different value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description:
    'should flag align-content: stretch when guarded by non-exact @supports (different value)',
  code: `
    @supports (align-content: center) {
    .foo {
      display: flex;
      align-content: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that CSS variables are not flagged for specific value features.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should not flag align-content: var(--value) in flex context',
  code: `
    .foo {
    display: flex;
    align-content: var(--my-stretch-value);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Confirms that the feature is detected even if flex-wrap prevents its visual effect.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should flag align-content: stretch in flex context with flex-wrap: nowrap',
  code: `
    .foo {
    display: flex;
    flex-wrap: nowrap;
    align-content: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of multiple instances of the feature on the same line.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should flag multiple instances on the same line',
  code: `
    .foo { display: flex; align-content: stretch; /* comment */ align-content: stretch; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests detection of multiple instances of the feature across different lines.
 */
testRule({
  featureId: 'properties.align-content.flex_context.stretch',
  description: 'should flag multiple instances across different lines',
  code: `
    .foo { display: flex; align-content: stretch; }
  .bar { display: flex; align-content: stretch; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});
