/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.menulist-button
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-menulist-button
*/

import { testRule } from 'lib/testRule';

/**
 * Should flag the standard 'appearance' property with the 'menulist-button' value.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should flag standard appearance: menulist-button',
  code: `
    .foo {
    appearance: menulist-button;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag the '-webkit-appearance' property with the 'menulist-button' value.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should flag -webkit-appearance: menulist-button',
  code: `
    .foo {
    -webkit-appearance: menulist-button;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag the '-moz-appearance' property with the 'menulist-button' value.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should flag -moz-appearance: menulist-button',
  code: `
    .foo {
    -moz-appearance: menulist-button;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'appearance: menulist-button;' when exactly guarded by an @supports query.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should not flag when guarded by exact @supports',
  code: `
    @supports (appearance: menulist-button) {
    .foo {
      appearance: menulist-button;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag 'appearance: menulist-button;' when guarded by an @supports query for a different property.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should flag when guarded by unrelated @supports',
  code: `
    @supports (display: flex) {
    .foo {
      appearance: menulist-button;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'appearance: menulist-button;' when guarded by an @supports query for the same property but a different value.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should flag when guarded by same property, different value @supports',
  code: `
    @supports (appearance: auto) {
    .foo {
      appearance: menulist-button;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag 'appearance: var(--my-appearance);' when the feature is for a specific value and a CSS variable is used.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should not flag with CSS variable (specific value check)',
  code: `
    .foo {
    --my-appearance: menulist-button;
    appearance: var(--my-appearance);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'appearance: initial;' as it does not resolve to 'menulist-button'.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: "should not flag with CSS-wide keyword 'initial'",
  code: `
    .foo {
    appearance: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'appearance: unset;' as it does not resolve to 'menulist-button'.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: "should not flag with CSS-wide keyword 'unset'",
  code: `
    .foo {
    appearance: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'appearance: revert;' as it does not resolve to 'menulist-button'.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: "should not flag with CSS-wide keyword 'revert'",
  code: `
    .foo {
    appearance: revert;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'appearance: revert-layer;' as it does not resolve to 'menulist-button'.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: "should not flag with CSS-wide keyword 'revert-layer'",
  code: `
    .foo {
    appearance: revert-layer;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag 'appearance: menulist-button;' even when applied to a non-select element, as the value itself is used.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should flag appearance: menulist-button on div element',
  code: `
    div {
    appearance: menulist-button;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'appearance: menulist-button;' when used in a nested rule targeting the same element (pseudo-class).
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should flag appearance: menulist-button in same element nested rule',
  code: `
    .foo {
    appearance: auto;
    &:hover {
      appearance: menulist-button;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'appearance: menulist-button;' when used in a nested rule targeting a different element.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should flag appearance: menulist-button in different element nested rule',
  code: `
    .foo {
    display: flex;
    & .bar {
      appearance: menulist-button;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should count multiple instances of 'menulist-button' with various prefixes.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should count multiple prefixed and unprefixed instances',
  code: `
    .foo {
    appearance: menulist-button;
    -webkit-appearance: menulist-button;
    -moz-appearance: menulist-button;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should count the instance of 'menulist-button' even if other valid appearance values are present in the same rule.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should count appearance: menulist-button when other appearance values are present',
  code: `
    .foo {
    appearance: none;
    appearance: menulist-button;
    appearance: auto;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should include at least one test that has 2 warnings.
 */
testRule({
  featureId: 'properties.appearance.menulist-button',
  description: 'should have 2 warnings',
  code: `
    .two-warnings {
    appearance: menulist-button; /* first warning */
    color: red;
    -webkit-appearance: menulist-button; /* second warning */
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
