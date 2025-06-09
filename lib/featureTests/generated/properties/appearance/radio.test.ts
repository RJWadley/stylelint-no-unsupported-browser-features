/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.radio
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-radio
*/

import { testRule } from 'lib/testRule';

/**
 * Should detect unprefixed appearance: radio.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should detect basic unprefixed usage',
  code: `
    .foo { appearance: radio; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect -webkit-appearance: radio.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should detect basic -webkit-prefixed usage',
  code: `
    .foo { -webkit-appearance: radio; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect -moz-appearance: radio.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should detect basic -moz-prefixed usage',
  code: `
    .foo { -moz-appearance: radio; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect -ms-appearance: radio and -o-appearance: radio.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should detect -ms- and -o-prefixed usage',
  code: `
    .foo { -ms-appearance: radio; -o-appearance: radio; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 1, unprefixed: 0 },
});

/**
 * Should not flag appearance: radio when guarded by exact @supports.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should not flag guarded usage with exact @supports',
  code: `
    @supports (appearance: radio) { .foo { appearance: radio; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag appearance: radio when guarded by incorrect @supports (wrong property).
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should flag usage with incorrect @supports (wrong property)',
  code: `
    @supports (display: flex) { .foo { appearance: radio; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag appearance: radio when guarded by incorrect @supports (same property, different value).
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should flag usage with incorrect @supports (different value)',
  code: `
    @supports (appearance: auto) { .foo { appearance: radio; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag appearance: radio when its value is a CSS variable.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should not flag usage with css variable',
  code: `
    .foo { appearance: var(--radio-val); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag other appearance values for appearance: radio.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should not flag other appearance values',
  code: `
    .foo { appearance: auto; appearance: none; appearance: button; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag CSS-wide keywords for appearance: radio.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should not flag usage with CSS-wide keywords',
  code: `
    .foo { appearance: initial; appearance: unset; appearance: inherit; appearance: revert; appearance: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect both prefixed and unprefixed in one rule.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should detect multiple declarations in one rule',
  code: `
    .foo { -webkit-appearance: radio; appearance: radio; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect appearance: radio across multiple rules.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should detect usage across multiple rules',
  code: `
    .foo { appearance: radio; } .bar { -moz-appearance: radio; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should handle comments and extra whitespace correctly.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should handle comments and whitespace',
  code: `
    .foo { /* Some comment */ appearance : radio /* inline comment */ ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect appearance: radio on an input[type=radio] element.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should detect usage on radio input element',
  code: `
    input[type="radio"] { appearance: radio; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should generate two warnings for two separate instances.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should have two warnings',
  code: `
    .foo { appearance: radio; } .bar { -webkit-appearance: radio; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensure detection works in a block context.
 */
testRule({
  featureId: 'properties.appearance.radio',
  description: 'should detect in block context',
  code: `
    .foo { appearance: radio; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
