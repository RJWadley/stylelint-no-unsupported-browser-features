/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.flex_context
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of `align-content` with `center` in a flex container (`display: flex`). Catches simple declarations of the property in the intended context.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'unprefixed align-content in flex container',
  code: `
    .foo {
    display: flex;
    align-content: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of `-webkit-align-content` within a `-webkit-flex` container. Ensures vendor-prefixed properties are caught correctly in their respective prefixed contexts.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'vendor-prefixed align-content in -webkit-flex container',
  code: `
    .foo {
    display: -webkit-flex;
    -webkit-align-content: stretch;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of `-moz-align-content` within an unprefixed `flex` container. Confirms detection of prefixed properties even if the display is unprefixed.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'vendor-prefixed align-content in unprefixed flex container (-moz-)',
  code: `
    .foo {
    display: flex;
    -moz-align-content: space-between;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `align-content` used with the `initial` CSS-wide keyword in a flex context. Ensures CSS-wide keywords trigger detection for the property in general.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content with CSS-wide keyword initial',
  code: `
    .foo {
    display: flex;
    align-content: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content` used with a CSS variable (`var()`). Since the feature is for the property in general in this context, it should be flagged.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content with CSS variable',
  code: `
    .foo {
    display: flex;
    align-content: var(--my-align);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content` within a pseudo-class (`:hover`) on the same flex element. Confirms that pseudo-classes retain the parent's context for detection.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content within pseudo-class in flex context',
  code: `
    .foo {
    display: flex;
    &:hover {
      align-content: end;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `align-content` in a flex container even when `flex-wrap` is `nowrap`. The property is still parsed and present in a flex context, thus should be detected despite its functional 'no effect'.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content in flex container with flex-wrap: nowrap',
  code: `
    .foo {
    display: flex;
    flex-wrap: nowrap;
    align-content: space-around;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that multiple independent declarations of `align-content` in flex contexts are all detected, resulting in two warnings.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'multiple align-content usages in different flex rules (2 warnings)',
  code: `
    .foo {
    display: flex;
    align-content: center;
  }
  .bar {
    display: flex;
    align-content: start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests `align-content` is detected when the `@supports` query checks a different property (`display: flex`), as it doesn't guard this specific feature.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content unguarded by @supports (different property)',
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
 * Tests `align-content` is detected when the `@supports` query checks the same property but a different value (`align-content: start`), as it doesn't provide an exact guard.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content unguarded by @supports (different value)',
  code: `
    @supports (align-content: start) {
    .foo {
      display: flex;
      align-content: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures `align-content` is not detected when its `display` is explicitly set to `block`, as the feature is specific to flex contexts.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content in explicitly block context',
  code: `
    .foo {
    display: block;
    align-content: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `align-content` is not detected when its `display` is `grid`, as the feature is specific to flex contexts.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content in grid context',
  code: `
    .foo {
    display: grid;
    align-content: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `align-content` is not detected when no `display` property is present to establish a flex context in the same rule.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content without explicit display context',
  code: `
    .foo {
    align-content: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that `align-content` is correctly guarded and not detected when an exact `@supports` query is present.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content correctly guarded by @supports',
  code: `
    @supports (align-content: center) {
    .foo {
      display: flex;
      align-content: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `align-content` is not detected in a pseudo-element (`::before`), as it does not inherit the parent's flex context for detection.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content in pseudo-element context',
  code: `
    .foo {
    display: flex;
    &::before {
      align-content: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `align-content` is not detected when applied to a child selector (`.bar`), as it does not inherit the parent's flex context for detection.
 */
testRule({
  featureId: 'properties.align-content.flex_context',
  description: 'align-content in child selector context',
  code: `
    .foo {
    display: flex;
    & .bar {
      align-content: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
