/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.textfield
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-textfield
*/

import { testRule } from 'lib/testRule';

/**
 * should detect unprefixed appearance: textfield on an input element
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'basic unprefixed appearance: textfield',
  code: `
    input { appearance: textfield; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * should detect unprefixed appearance: textfield even on a non-input element, as the rule checks for the property-value pair
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'unprefixed appearance: textfield on a non-input element',
  code: `
    div { appearance: textfield; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * should not detect textfield when other valid appearance values are used
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'unprefixed appearance with different valid values',
  code: `
    input { appearance: none; } .foo { appearance: auto; } .bar { appearance: menulist-button; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should detect -webkit-appearance: textfield
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'vendor-prefixed -webkit-appearance: textfield',
  code: `
    input { -webkit-appearance: textfield; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should detect -moz-appearance: textfield
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'vendor-prefixed -moz-appearance: textfield',
  code: `
    textarea { -moz-appearance: textfield; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should detect both prefixed and unprefixed appearance: textfield in the same rule
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'mix of prefixed and unprefixed appearance: textfield',
  code: `
    .foo { -webkit-appearance: textfield; appearance: textfield; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * should not detect appearance: textfield when guarded by an exact @supports query
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'appearance: textfield guarded by @supports (appearance: textfield)',
  code: `
    @supports (appearance: textfield) { .foo { appearance: textfield; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should detect appearance: textfield when guarded by a non-matching @supports query
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'appearance: textfield with non-matching @supports',
  code: `
    @supports (display: flex) { .foo { appearance: textfield; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * should not detect appearance: textfield when using a CSS variable for the value
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'appearance: textfield with CSS variable',
  code: `
    .foo { --text-field: textfield; appearance: var(--text-field); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should not detect textfield when appearance property uses CSS-wide keywords
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'appearance property with CSS-wide keywords',
  code: `
    input { appearance: initial; appearance: unset; } .bar { appearance: revert; } .baz { appearance: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should not detect textfield inside a comment
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'textfield value in comments',
  code: `
    /* appearance: textfield; */
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should detect textfield value regardless of casing
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'textfield value with different casing',
  code: `
    input { appearance: TextField; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * should detect multiple instances of textfield and its prefixes across different rules
 */
testRule({
  featureId: 'properties.appearance.textfield',
  description: 'multiple warnings in a single test',
  code: `
    input.foo { appearance: textfield; -webkit-appearance: textfield; } textarea.bar { appearance: textfield; -moz-appearance: textfield; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});
