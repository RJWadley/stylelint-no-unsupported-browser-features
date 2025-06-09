/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.button
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-button
*/

import { testRule } from 'lib/testRule';

/**
 * should not warn for supported unprefixed appearance: button
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'basic supported unprefixed usage',
  code: `
    .foo { appearance: button; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should warn for -webkit-appearance: button as it's unsupported in modern Chrome/Edge
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'unsupported -webkit- prefixed usage',
  code: `
    .foo { -webkit-appearance: button; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should warn for -moz-appearance: button as it's unsupported in modern Firefox
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'unsupported -moz- prefixed usage',
  code: `
    .foo { -moz-appearance: button; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should warn for both -webkit- and -moz- prefixed appearance: button, but not unprefixed
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'combined supported and unsupported prefixed usage',
  code: `
    .foo { appearance: button; -webkit-appearance: button; -moz-appearance: button; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should not warn when unprefixed appearance: button is guarded by @supports
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'unprefixed usage guarded by @supports',
  code: `
    @supports (appearance: button) { .foo { appearance: button; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should not warn when -webkit-appearance: button is guarded by @supports
 */
testRule({
  featureId: 'properties.appearance.button',
  description: '-webkit- prefixed usage guarded by @supports',
  code: `
    @supports (-webkit-appearance: button) { .foo { -webkit-appearance: button; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should not warn when -moz-appearance: button is guarded by @supports
 */
testRule({
  featureId: 'properties.appearance.button',
  description: '-moz- prefixed usage guarded by @supports',
  code: `
    @supports (-moz-appearance: button) { .foo { -moz-appearance: button; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should not warn when appearance: button is used with a CSS variable (specific value)
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'CSS variable for appearance: button (specific value)',
  code: `
    .foo { --my-appearance: button; appearance: var(--my-appearance); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should not warn when -webkit-appearance: button is used with a CSS variable (specific value)
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'CSS variable for -webkit-appearance: button (specific value)',
  code: `
    .foo { --webkit-app: button; -webkit-appearance: var(--webkit-app); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should not warn for appearance: initial as it's not appearance: button
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'CSS-wide keyword initial',
  code: `
    .foo { appearance: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should not warn for appearance: none as it's not appearance: button
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'appearance: none',
  code: `
    .foo { appearance: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should not warn for appearance: auto as it's not appearance: button
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'appearance: auto',
  code: `
    .foo { appearance: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should warn for multiple unsupported prefixed usages across different rules
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'multiple warnings',
  code: `
    .foo { -webkit-appearance: button; } .bar { -moz-appearance: button; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * should warn for unsupported prefixed usages with case-insensitive value
 */
testRule({
  featureId: 'properties.appearance.button',
  description: 'case insensitive value',
  code: `
    .foo { appearance: BUTTON; -webkit-appearance: BUTTON; -moz-appearance: BUTTON; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
