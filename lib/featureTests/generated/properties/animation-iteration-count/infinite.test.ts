/* AUTO_GENERATED: true */

/* 
feature: properties.animation-iteration-count.infinite
docs: https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
spec: https://drafts.csswg.org/css-animations/#valdef-animation-iteration-count-infinite
*/

import { testRule } from 'lib/testRule';

/**
 * Should detect animation-iteration-count: infinite in a basic case.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description: 'should detect animation-iteration-count: infinite',
  code: `
    .foo { animation-iteration-count: infinite; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect animation-iteration-count: infinite with all vendor prefixes and unprefixed.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description: 'should detect animation-iteration-count: infinite with vendor prefixes',
  code: `
    .foo { -webkit-animation-iteration-count: infinite; -moz-animation-iteration-count: infinite; -ms-animation-iteration-count: infinite; -o-animation-iteration-count: infinite; animation-iteration-count: infinite; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 1 },
});

/**
 * Should detect 'infinite' when used in a comma-separated list of values.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description: 'should detect animation-iteration-count: infinite with multiple values',
  code: `
    .foo { animation-iteration-count: 2, infinite, 0.5; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect 'infinite' when used within the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description: 'should detect animation-iteration-count: infinite in animation shorthand',
  code: `
    @keyframes slide { from { left: 0; } to { left: 100px; } } .foo { animation: slide 1s infinite; } .bar { animation: 2s ease-in slide infinite; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Should not flag animation-iteration-count: infinite when properly guarded by @supports.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description: 'should not flag animation-iteration-count: infinite when guarded by @supports',
  code: `
    @supports (animation-iteration-count: infinite) { .foo { animation-iteration-count: infinite; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag animation-iteration-count: infinite when @supports is for a different property.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description:
    'should flag animation-iteration-count: infinite when @supports is for a different property',
  code: `
    @supports (animation-duration: 1s) { .foo { animation-iteration-count: infinite; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag animation-iteration-count: infinite when @supports is for the same property but a different value.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description:
    'should flag animation-iteration-count: infinite when @supports is for the same property, different value',
  code: `
    @supports (animation-iteration-count: 2) { .foo { animation-iteration-count: infinite; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag animation-iteration-count when its value is a CSS variable, as the feature targets a specific keyword value.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description: 'should not flag animation-iteration-count with var() for specific value',
  code: `
    .foo { --iter-count: infinite; animation-iteration-count: var(--iter-count); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag animation-iteration-count when its value is a CSS-wide keyword, as 'infinite' is a specific keyword value.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description: 'should not flag animation-iteration-count with CSS-wide keywords',
  code: `
    .foo { animation-iteration-count: initial; animation-iteration-count: unset; animation-iteration-count: revert; animation-iteration-count: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect 'infinite' regardless of case sensitivity.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description: 'should detect animation-iteration-count: infinite case-insensitively',
  code: `
    .foo { animation-iteration-count: INFINITE; } .bar { animation-iteration-count: InFiNiTe; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Should detect 'infinite' even when surrounded by comments.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description: 'should detect animation-iteration-count: infinite with comments',
  code: `
    .foo { animation-iteration-count: /* comment */ infinite /* another comment */; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag numeric animation-iteration-count values.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description: 'should not flag animation-iteration-count with numeric value',
  code: `
    .foo { animation-iteration-count: 5; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should include at least one test with 2 warnings.
 */
testRule({
  featureId: 'properties.animation-iteration-count.infinite',
  description: 'should report two warnings for multiple occurrences',
  code: `
    .foo { animation-iteration-count: infinite; } .bar { -webkit-animation-iteration-count: infinite; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
