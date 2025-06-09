/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.menulist
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-menulist
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of the unsupported `menulist` value for the `appearance` property without a vendor prefix.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn when appearance: menulist is used (unprefixed)',
  code: `
    a { appearance: menulist; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of the `menulist` value with the `-webkit-` vendor prefix for the `appearance` property.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn when -webkit-appearance: menulist is used',
  code: `
    a { -webkit-appearance: menulist; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of the `menulist` value with the `-moz-` vendor prefix for the `appearance` property.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn when -moz-appearance: menulist is used',
  code: `
    a { -moz-appearance: menulist; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of the `menulist` value with the `-ms-` vendor prefix for the `appearance` property.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn when -ms-appearance: menulist is used',
  code: `
    a { -ms-appearance: menulist; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of the `menulist` value with the `-o-` vendor prefix for the `appearance` property.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn when -o-appearance: menulist is used',
  code: `
    a { -o-appearance: menulist; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests multiple instances of `appearance: menulist` including vendor prefixes within a single rule.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn for multiple vendor-prefixed and unprefixed menulist values',
  code: `
    a { appearance: menulist; -webkit-appearance: menulist; -moz-appearance: menulist; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `appearance: menulist` is not flagged when explicitly guarded by an `@supports` query checking the exact property and value.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should not warn when appearance: menulist is guarded by @supports',
  code: `
    @supports (appearance: menulist) { a { appearance: menulist; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `appearance: menulist` is flagged when guarded by an `@supports` query checking a different value of the same property.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description:
    'should warn when appearance: menulist is not guarded by @supports with different value',
  code: `
    @supports (appearance: none) { a { appearance: menulist; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `appearance: menulist` is flagged when guarded by an `@supports` query checking a different property.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description:
    'should warn when appearance: menulist is not guarded by @supports with different property',
  code: `
    @supports (display: flex) { a { appearance: menulist; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `appearance: menulist` is not flagged when `menulist` is provided via a CSS variable, as the checker cannot resolve its value. This applies when the feature is for a specific value.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should not warn when using CSS variable for appearance: menulist',
  code: `
    a { --menulist-val: menulist; appearance: var(--menulist-val); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `appearance: auto`, `appearance: none`, and `appearance: menulist-button` do not trigger a warning for `properties.appearance.menulist`.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should not warn for other valid appearance values (auto, none, menulist-button)',
  code: `
    a { appearance: auto; appearance: none; appearance: menulist-button; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that CSS-wide keywords like `initial`, `unset`, `revert`, `revert-layer` do not trigger a warning for `properties.appearance.menulist`.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should not warn for CSS-wide keywords',
  code: `
    a { appearance: initial; } b { appearance: unset; } c { appearance: revert; } d { appearance: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `appearance: menulist` is flagged regardless of case for the value.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn for appearance: MENULIST (case-insensitive)',
  code: `
    a { appearance: MENULIST; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `appearance: menulist` is flagged even when `!important` is used.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn for appearance: menulist !important',
  code: `
    a { appearance: menulist !important; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that two separate rules using `appearance: menulist` each generate a warning, resulting in two warnings.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn twice for two rules with appearance: menulist',
  code: `
    a { appearance: menulist; } b { appearance: menulist; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that `appearance: menulist` within a CSS comment is not flagged.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should not warn when appearance: menulist is commented out',
  code: `
    a { /* appearance: menulist; */ }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `appearance: menulist` is still flagged even if the overall declaration syntax is invalid, as the specific value is present.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn when appearance: menulist is part of an invalid declaration',
  code: `
    a { appearance: none menulist; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `appearance: menulist` is flagged when used in a nested rule targeting the same element (pseudo-class), as the property itself is checked.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn when appearance: menulist is used in a nested rule with pseudo-class',
  code: `
    a { &:hover { appearance: menulist; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `appearance: menulist` is flagged when used in a nested rule targeting a new element (child selector), as the `menulist` value is detected for the `appearance` property.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn when appearance: menulist is used in a nested rule with child selector',
  code: `
    .foo { display: flex; & .bar { appearance: menulist; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `appearance: menulist` is flagged when used in a nested rule targeting a new element (pseudo-element), as the `menulist` value is detected for the `appearance` property.
 */
testRule({
  featureId: 'properties.appearance.menulist',
  description: 'should warn when appearance: menulist is used in a nested rule with pseudo-element',
  code: `
    .foo { display: flex; &::before { appearance: menulist; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
