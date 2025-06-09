/* AUTO_GENERATED: true */

/* 
feature: properties.alignment-baseline.central
docs: https://developer.mozilla.org/docs/Web/CSS/alignment-baseline
spec: https://drafts.csswg.org/css-inline/#alignment-baseline-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests if `alignment-baseline: central` is correctly detected when used without prefixes.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should detect unprefixed central value',
  code: `
    .foo { alignment-baseline: central; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that values other than 'central' for `alignment-baseline` are not flagged as this feature.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should not detect other valid alignment-baseline values',
  code: `
    .foo { alignment-baseline: alphabetic; alignment-baseline: ideographic; alignment-baseline: mathematical; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that CSS-wide keywords like 'initial', 'unset', 'inherit', and 'revert' are not flagged when used with `alignment-baseline` as the feature targets a specific value ('central').
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should not detect CSS-wide keywords',
  code: `
    .foo { alignment-baseline: initial; alignment-baseline: unset; alignment-baseline: revert; alignment-baseline: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `var()` is not flagged when used with `alignment-baseline` as the feature targets a specific value ('central') and we cannot resolve variables statically.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should not detect var() usage',
  code: `
    .foo { --baseline-value: central; alignment-baseline: var(--baseline-value); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `alignment-baseline: central` is not flagged when explicitly guarded by an `@supports` rule checking for the exact property-value pair.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should not detect when exactly guarded by @supports',
  code: `
    @supports (alignment-baseline: central) { .foo { alignment-baseline: central; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `alignment-baseline: central` is flagged when guarded by an `@supports` rule checking a different property.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should detect when not guarded by @supports (different property)',
  code: `
    @supports (display: flex) { .foo { alignment-baseline: central; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `alignment-baseline: central` is flagged when guarded by an `@supports` rule checking the same property with a different value.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should detect when not guarded by @supports (different value)',
  code: `
    @supports (alignment-baseline: alphabetic) { .foo { alignment-baseline: central; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detecting multiple instances of `alignment-baseline: central` within a single rule.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should detect multiple unprefixed usages in one rule',
  code: `
    .foo { alignment-baseline: central; border: 1px solid red; alignment-baseline: central; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that only the 'central' value is detected when `alignment-baseline` is used with other valid values in the same block.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should only detect central when mixed with other valid values',
  code: `
    .foo { alignment-baseline: central; alignment-baseline: alphabetic; alignment-baseline: text-bottom; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the `central` value is detected regardless of case (e.g., `CENTRAL`).
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should detect case insensitivity',
  code: `
    .foo { alignment-baseline: CENTRAL; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of `alignment-baseline: central` within a nested pseudo-class, which is considered the same display context.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should detect in nested pseudo-class (same element)',
  code: `
    .foo { display: block; &:hover { alignment-baseline: central; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of `alignment-baseline: central` within a nested child selector. The context is not inherited, but the property-value pair itself is still valid for detection.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should detect in nested child selector (new element)',
  code: `
    .foo { display: block; & .bar { alignment-baseline: central; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of `alignment-baseline: central` within a nested pseudo-element. The context is not inherited, but the property-value pair itself is still valid for detection.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should detect in nested pseudo-element (new element)',
  code: `
    .foo { display: block; &::before { alignment-baseline: central; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `central` is detected even with comments within the value.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should detect with comments in value',
  code: `
    .foo { alignment-baseline: /* comment */ central /* another comment */; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that a test case includes at least two instances of the feature to be flagged.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should include at least two warnings',
  code: `
    .foo { alignment-baseline: central; } .bar { alignment-baseline: central; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures that an invalid value for `alignment-baseline` is not flagged as a usage of `central`.
 */
testRule({
  featureId: 'properties.alignment-baseline.central',
  description: 'should not detect when value is invalid',
  code: `
    .foo { alignment-baseline: invalid-value; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
