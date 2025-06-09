/* AUTO_GENERATED: true */

/* 
feature: properties.alignment-baseline.ideographic
docs: https://developer.mozilla.org/docs/Web/CSS/alignment-baseline
spec: https://drafts.csswg.org/css-inline/#alignment-baseline-property
*/

import { testRule } from 'lib/testRule';

/**
 * Should flag `alignment-baseline: ideographic` in a standard rule.
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'basic usage',
  code: `
    .foo { alignment-baseline: ideographic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `alignment-baseline: ideographic` in an ID selector.
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'usage with ID selector',
  code: `
    #bar { alignment-baseline: ideographic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag vendor-prefixed versions of `alignment-baseline: ideographic`.
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'usage with vendor prefixes',
  code: `
    a { -webkit-alignment-baseline: ideographic; -moz-alignment-baseline: ideographic; -ms-alignment-baseline: ideographic; -o-alignment-baseline: ideographic; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 0 },
});

/**
 * Should NOT flag `alignment-baseline: ideographic` when guarded by an exact `@supports` query.
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'guarded by @supports',
  code: `
    @supports (alignment-baseline: ideographic) { a { alignment-baseline: ideographic; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag `alignment-baseline: ideographic` when `@supports` is for a different property.
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'not guarded by @supports (different property)',
  code: `
    @supports (display: flex) { a { alignment-baseline: ideographic; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `alignment-baseline: ideographic` when `@supports` is for the same property but a different value.
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'not guarded by @supports (different value)',
  code: `
    @supports (alignment-baseline: alphabetic) { a { alignment-baseline: ideographic; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `alignment-baseline` when its value is `var()` because the feature applies to the property in general (conservative check for specific value).
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'usage with var()',
  code: `
    .foo { alignment-baseline: var(--my-baseline); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should NOT flag other valid `alignment-baseline` values.
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'other valid alignment-baseline values',
  code: `
    a { alignment-baseline: baseline; } b { alignment-baseline: alphabetic; } c { alignment-baseline: central; } d { alignment-baseline: mathematical; } e { alignment-baseline: middle; } f { alignment-baseline: text-bottom; } g { alignment-baseline: text-top; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT flag CSS-wide keywords for `alignment-baseline` as the feature is for a specific value (`ideographic`).
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'usage with CSS-wide keywords',
  code: `
    a { alignment-baseline: initial; } b { alignment-baseline: unset; } c { alignment-baseline: inherit; } d { alignment-baseline: revert; } e { alignment-baseline: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag `alignment-baseline: ideographic` inside a pseudo-class nested rule.
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'nested pseudo-class selector',
  code: `
    .foo { &:hover { alignment-baseline: ideographic; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should NOT flag `ideographic` when used as a value for a different property.
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'ideographic as value for another property',
  code: `
    a { display: ideographic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag multiple instances of `alignment-baseline: ideographic` in one rule.
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'multiple instances in one rule',
  code: `
    .foo { alignment-baseline: ideographic; background-color: red; alignment-baseline: ideographic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Should flag `alignment-baseline: ideographic` when mixed with a supported value (even if it's overridden later).
 */
testRule({
  featureId: 'properties.alignment-baseline.ideographic',
  description: 'mixed ideographic and other valid values',
  code: `
    .foo { alignment-baseline: ideographic; alignment-baseline: alphabetic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
