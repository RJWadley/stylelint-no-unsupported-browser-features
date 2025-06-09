/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.checkbox
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-checkbox
*/

import { testRule } from 'lib/testRule';

/**
 * Detects standard `appearance: checkbox` used on an `input` element with `type="checkbox"`.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect unprefixed appearance: checkbox on input type checkbox',
  code: `
    input[type="checkbox"] { appearance: checkbox; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects standard `appearance: checkbox` used on a `div` element, as the rule checks for the property-value pair regardless of the element type.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect unprefixed appearance: checkbox on a div',
  code: `
    div { appearance: checkbox; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects vendor-prefixed `-webkit-appearance: checkbox`.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect -webkit-appearance: checkbox',
  code: `
    a { -webkit-appearance: checkbox; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects both `-webkit-appearance: checkbox` and standard `appearance: checkbox`.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect both prefixed and unprefixed appearance: checkbox',
  code: `
    a { -webkit-appearance: checkbox; appearance: checkbox; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that `-moz-appearance: checkbox` is not detected, as the specific `checkbox` value is not listed as supported for the `-moz-` prefix in the provided documentation.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description:
    'should not detect -moz-appearance: checkbox (value not listed as supported for prefix)',
  code: `
    a { -moz-appearance: checkbox; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects `appearance: checkbox` when `!important` is used.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect appearance: checkbox with !important',
  code: `
    a { appearance: checkbox !important; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures `appearance: checkbox` is not detected when exactly guarded by an `@supports` query.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should not detect when guarded by @supports (appearance: checkbox)',
  code: `
    @supports (appearance: checkbox) { a { appearance: checkbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects `appearance: checkbox` even when inside an `@supports` query that checks for a different property.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect when unguarded by @supports (display: flex)',
  code: `
    @supports (display: flex) { a { appearance: checkbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects `appearance: checkbox` even when inside an `@supports` query that checks for the same property but a different value.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect when unguarded by @supports (appearance: auto)',
  code: `
    @supports (appearance: auto) { a { appearance: checkbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures `appearance: checkbox` is not detected when the value is a CSS variable, as the rule cannot resolve its exact value.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should not detect when value is a CSS variable',
  code: `
    .foo { --my-appearance: checkbox; appearance: var(--my-appearance); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that other valid `appearance` values like `none` and `auto` are not mistakenly flagged as `appearance: checkbox`.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should not detect other appearance values',
  code: `
    a { appearance: none; } b { appearance: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects `appearance: checkbox` when used within a nested pseudo-class rule (same element context).
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect appearance: checkbox in a nested pseudo-class rule',
  code: `
    .foo { appearance: none; &:checked { appearance: checkbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects `appearance: checkbox` when used within a nested child selector rule (different element, so context is not inherited, but the property-value pair is still present).
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect appearance: checkbox in a nested child selector rule',
  code: `
    .foo { & .bar { appearance: checkbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects `appearance: checkbox` even when a comment is present within the declaration.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect appearance: checkbox with a comment in declaration',
  code: `
    a { appearance /* comment */: checkbox; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies that multiple instances of the unsupported feature are detected within a single test case.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should have two warnings for multiple instances',
  code: `
    a { appearance: checkbox; } b { -webkit-appearance: checkbox; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that `appearance: CHECKBOX` is detected, demonstrating case insensitivity for the value.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect with case-insensitive value',
  code: `
    a { appearance: CHECKBOX; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that `appearance` property and its `checkbox` value are detected regardless of case.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description: 'should detect with mixed case property and value',
  code: `
    a { ApPeArAnCe: cHeCkBoX; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that commented-out `appearance: checkbox` declarations are ignored, while active prefixed declarations are detected.
 */
testRule({
  featureId: 'properties.appearance.checkbox',
  description:
    'should not detect when declaration is commented out but detect other active declarations',
  code: `
    a { /* appearance: checkbox; */ -webkit-appearance: checkbox; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
