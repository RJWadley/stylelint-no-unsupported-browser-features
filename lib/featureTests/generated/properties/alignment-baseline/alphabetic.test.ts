/* AUTO_GENERATED: true */

/* 
feature: properties.alignment-baseline.alphabetic
docs: https://developer.mozilla.org/docs/Web/CSS/alignment-baseline
spec: https://drafts.csswg.org/css-inline/#alignment-baseline-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of alignment-baseline with the alphabetic value.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should detect unprefixed alignment-baseline: alphabetic',
  code: `
    .foo { alignment-baseline: alphabetic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that alignment-baseline: alphabetic is not detected when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should not detect alignment-baseline: alphabetic when guarded by @supports',
  code: `
    @supports (alignment-baseline: alphabetic) { .foo { alignment-baseline: alphabetic; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection when the property is used within a pseudo-class nested rule, which shares the same context.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should detect alignment-baseline: alphabetic in a pseudo-class nested rule',
  code: `
    .foo { &:hover { alignment-baseline: alphabetic; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that alignment-baseline: alphabetic is not detected when used in a child selector nested rule, as it creates a new context.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should not detect alignment-baseline: alphabetic in a child selector nested rule',
  code: `
    .foo { & .bar { alignment-baseline: alphabetic; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline: alphabetic is not detected when used in a pseudo-element nested rule, as it creates a new element and thus a new context.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should not detect alignment-baseline: alphabetic in a pseudo-element nested rule',
  code: `
    .foo { &::before { alignment-baseline: alphabetic; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that other valid alignment-baseline values are not incorrectly flagged as 'alphabetic'.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should not detect other alignment-baseline values',
  code: `
    a { alignment-baseline: baseline; alignment-baseline: central; alignment-baseline: ideographic; alignment-baseline: mathematical; alignment-baseline: middle; alignment-baseline: text-bottom; alignment-baseline: text-top; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that legacy SVG values text-before-edge and text-after-edge are not incorrectly flagged as 'alphabetic'.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should not detect legacy SVG alignment-baseline values',
  code: `
    svg { alignment-baseline: text-before-edge; alignment-baseline: text-after-edge; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline using a CSS variable is not flagged when the feature is value-specific.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should not detect alignment-baseline with var() for specific value',
  code: `
    .foo { --align-val: alphabetic; alignment-baseline: var(--align-val); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline with 'initial' keyword is not flagged as 'alphabetic'.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should not detect alignment-baseline with initial keyword',
  code: `
    .foo { alignment-baseline: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline with 'inherit' keyword is not flagged as 'alphabetic'.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should not detect alignment-baseline with inherit keyword',
  code: `
    .foo { alignment-baseline: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline with 'unset' keyword is not flagged as 'alphabetic'.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should not detect alignment-baseline with unset keyword',
  code: `
    .foo { alignment-baseline: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that multiple instances of the feature are correctly detected.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should detect two instances of alignment-baseline: alphabetic',
  code: `
    .foo { alignment-baseline: alphabetic; color: red; } .bar { alignment-baseline: alphabetic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests detection with mixed case 'alphabetic' value, ensuring case insensitivity.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should detect alignment-baseline with mixed case alphabetic',
  code: `
    .foo { alignment-baseline: ALPHABETIC; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection with extra whitespace around the 'alphabetic' value.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should detect alignment-baseline with alphabetic and extra whitespace',
  code: `
    .foo { alignment-baseline:  alphabetic  ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection with extra whitespace around the 'alignment-baseline' property name.
 */
testRule({
  featureId: 'properties.alignment-baseline.alphabetic',
  description: 'should detect alignment-baseline with extra whitespace around property',
  code: `
    .foo {  alignment-baseline : alphabetic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
