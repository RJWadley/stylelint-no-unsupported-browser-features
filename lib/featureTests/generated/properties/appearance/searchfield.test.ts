/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.searchfield
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-searchfield
*/

import { testRule } from 'lib/testRule';

/**
 * Detects the use of the unprefixed 'appearance: searchfield' property value.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description: 'should detect unprefixed appearance: searchfield',
  code: `
    a { appearance: searchfield; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the use of the -webkit-prefixed 'appearance: searchfield' property value.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description: 'should detect -webkit-appearance: searchfield',
  code: `
    a { -webkit-appearance: searchfield; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures both unprefixed and -webkit-prefixed 'appearance: searchfield' are detected when present in the same rule.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description:
    'should detect both unprefixed and -webkit-prefixed appearance: searchfield in the same rule',
  code: `
    a { appearance: searchfield; -webkit-appearance: searchfield; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'appearance: searchfield' when applied to an 'input' element.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description: 'should detect appearance: searchfield on an input element',
  code: `
    input { appearance: searchfield; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures 'appearance: searchfield' is not detected when it's correctly guarded by an @supports rule.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description:
    'should not detect appearance: searchfield when guarded by @supports with exact match',
  code: `
    @supports (appearance: searchfield) { a { appearance: searchfield; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects 'appearance: searchfield' when guarded by an @supports rule checking a different property.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description:
    'should detect appearance: searchfield when guarded by @supports with different property',
  code: `
    @supports (display: flex) { a { appearance: searchfield; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'appearance: searchfield' when guarded by an @supports rule checking the same property but a different value.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description:
    'should detect appearance: searchfield when guarded by @supports with different value',
  code: `
    @supports (appearance: none) { a { appearance: searchfield; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures 'appearance: searchfield' is not detected when the value is set via a CSS variable, as static analysis cannot resolve it.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description: 'should not detect appearance: searchfield when value is a CSS variable',
  code: `
    a { --my-appearance: searchfield; appearance: var(--my-appearance); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures CSS-wide keywords like 'initial' are not detected as 'appearance: searchfield'.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description: 'should not detect appearance: searchfield when using a CSS-wide keyword',
  code: `
    a { appearance: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures other standard 'appearance' values like 'auto' are not detected as 'appearance: searchfield'.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description: 'should not detect other standard appearance values',
  code: `
    a { appearance: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'appearance: searchfield' is detected regardless of casing.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description: 'should detect appearance: searchfield with case-insensitivity',
  code: `
    a { APPEARANCE: SEARCHFIELD; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects multiple instances of 'appearance: searchfield' across different rules.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description: 'should detect multiple instances of appearance: searchfield (two warnings)',
  code: `
    .foo { appearance: searchfield; } .bar { -webkit-appearance: searchfield; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that values that only contain 'searchfield' as a substring are not incorrectly flagged.
 */
testRule({
  featureId: 'properties.appearance.searchfield',
  description: "should not detect values that contain 'searchfield' as a substring",
  code: `
    a { appearance: my-searchfield-value; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
