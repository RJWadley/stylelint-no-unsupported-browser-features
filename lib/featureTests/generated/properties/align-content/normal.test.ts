/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.normal
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#valdef-justify-content-normal
*/

import { testRule } from 'lib/testRule';

/**
 * Should flag `align-content: normal` in a flex container if `normal` is an unsupported value for the property.
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'basic usage - flex context',
  code: `
    a { display: flex; align-content: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `align-content: normal` in a grid container if `normal` is an unsupported value for the property.
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'basic usage - grid context',
  code: `
    a { display: grid; align-content: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `align-content: normal` in a block container if `normal` is an unsupported value for the property.
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'basic usage - block context',
  code: `
    a { display: block; align-content: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag `align-content: normal` when precisely guarded by `@supports`.
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'guarded by @supports (exact match)',
  code: `
    @supports (align-content: normal) { a { display: flex; align-content: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag `align-content: normal` when guarded by `@supports` for a different property (`display: flex`).
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'unguarded by @supports (different property)',
  code: `
    @supports (display: flex) { a { display: flex; align-content: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `align-content: normal` when guarded by `@supports` for the same property but a different value (`align-content: center`).
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'unguarded by @supports (different value)',
  code: `
    @supports (align-content: center) { a { display: flex; align-content: normal; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag `align-content` when its value is a CSS variable, as the resolved value is unknown and `normal` is a specific value.
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'CSS variable usage',
  code: `
    a { display: flex; --my-align: normal; align-content: var(--my-align); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag `align-content: initial` as `initial` resolves to `normal` for `align-content`.
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'CSS-wide keyword: initial',
  code: `
    a { display: flex; align-content: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `align-content: unset` as `unset` resolves to `normal` for `align-content`.
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'CSS-wide keyword: unset',
  code: `
    a { display: flex; align-content: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `align-content: revert` as `revert` likely resolves to `normal` for `align-content`.
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'CSS-wide keyword: revert',
  code: `
    a { display: flex; align-content: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `align-content: revert-layer` as `revert-layer` likely resolves to `normal` for `align-content`.
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'CSS-wide keyword: revert-layer',
  code: `
    a { display: flex; align-content: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag multiple instances of `align-content: normal` across different contexts and vendor prefixes.
 */
testRule({
  featureId: 'properties.align-content.normal',
  description: 'multiple warnings across contexts and prefixes',
  code: `
    a { display: flex; align-content: normal; } b { display: grid; -webkit-align-content: normal; } .foo { display: block; align-content: normal; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});
