/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.flex_context.space-evenly
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Should detect align-content: space-evenly when used directly in a flex container.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should detect unprefixed usage',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: space-evenly;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect align-content: space-evenly with various vendor prefixes and unprefixed version in a single rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should detect mixed prefixed and unprefixed usage',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    -webkit-align-content: space-evenly;
    -moz-align-content: space-evenly;
    -ms-align-content: space-evenly;
    -o-align-content: space-evenly;
    align-content: space-evenly;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 1 },
});

/**
 * Should detect align-content: space-evenly when used within a nested pseudo-class, as it targets the same element.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should detect usage within nested pseudo-class',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    &:hover {
      align-content: space-evenly;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies detection of multiple instances (unprefixed and one prefixed) within a single test.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should detect multiple warnings',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: space-evenly;
  }
  .bar {
    display: flex;
    flex-wrap: wrap;
    -webkit-align-content: space-evenly;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect align-content: space-evenly when @supports condition is for a different property.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should not be guarded by incorrect @supports (different property)',
  code: `
    @supports (display: flex) {
    .foo {
      display: flex;
      flex-wrap: wrap;
      align-content: space-evenly;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect align-content: space-evenly when @supports condition is for the same property but a different value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should not be guarded by incorrect @supports (different value)',
  code: `
    @supports (align-content: center) {
    .foo {
      display: flex;
      flex-wrap: wrap;
      align-content: space-evenly;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect align-content: space-evenly regardless of case.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should detect case insensitivity',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: SPACE-EVENLY;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not detect align-content: space-evenly when correctly guarded by @supports.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should be guarded by correct @supports',
  code: `
    @supports (align-content: space-evenly) {
    .foo {
      display: flex;
      flex-wrap: wrap;
      align-content: space-evenly;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect other supported align-content values.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should not detect other valid align-content values',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-content: flex-start;
    align-content: space-between;
    align-content: space-around;
    align-content: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect the feature in a grid context, as the feature is specific to flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should not detect in grid context',
  code: `
    .foo {
    display: grid;
    align-content: space-evenly;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect the feature in an explicitly defined block context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should not detect in explicit block context',
  code: `
    .foo {
    display: block;
    align-content: space-evenly;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect the feature when no display context is explicitly given in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should not detect without explicit display context',
  code: `
    .foo {
    align-content: space-evenly;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect the feature when nested under a child selector, as it creates a new element context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should not detect in nested child selector',
  code: `
    .foo {
    display: flex;
    & .bar {
      align-content: space-evenly;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect the feature when applied to a pseudo-element, as it is a new element.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should not detect in nested pseudo-element',
  code: `
    .foo {
    display: flex;
    &::before {
      content: "";
      align-content: space-evenly;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag align-content with var() when the feature targets a specific value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should not flag with CSS variable (specific value feature)',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    --my-value: space-evenly;
    align-content: var(--my-value);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag align-content when using CSS-wide keywords as they do not resolve to 'space-evenly'.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should not flag with CSS-wide keywords',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: initial;
  }
  .bar {
    display: flex;
    flex-wrap: wrap;
    align-content: unset;
  }
  .baz {
    display: flex;
    flex-wrap: wrap;
    align-content: inherit;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect the feature when it is commented out.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should not detect commented out usage',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    /* align-content: space-evenly; */
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect align-content: space-evenly even if there's a comment within the value, assuming it still parses correctly.
 */
testRule({
  featureId: 'properties.align-content.flex_context.space-evenly',
  description: 'should detect with comment in value',
  code: `
    .foo {
    display: flex;
    flex-wrap: wrap;
    align-content: /* comment */ space-evenly;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
