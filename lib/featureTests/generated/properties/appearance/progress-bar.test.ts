/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.progress-bar
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-progress-bar
*/

import { testRule } from 'lib/testRule';

/**
 * Detects the standard `appearance` property with the `progress-bar` value.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should detect unprefixed appearance progress-bar',
  code: `
    a { appearance: progress-bar; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the `-webkit-` prefixed `appearance` property with the `progress-bar` value.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should detect -webkit-appearance progress-bar',
  code: `
    a { -webkit-appearance: progress-bar; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects the `-moz-` prefixed `appearance` property with the `progressbar` value, as indicated in MDN.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should detect -moz-appearance progressbar',
  code: `
    a { -moz-appearance: progressbar; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects unprefixed `appearance: progress-bar`, `-webkit-appearance: progress-bar`, and `-moz-appearance: progressbar`.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should detect both prefixed and unprefixed appearance progress-bar and progressbar',
  code: `
    a { appearance: progress-bar; -webkit-appearance: progress-bar; -moz-appearance: progressbar; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that `appearance: auto` is not mistakenly flagged as `properties.appearance.progress-bar`.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should not detect appearance auto',
  code: `
    a { appearance: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that `appearance: none` is not mistakenly flagged as `properties.appearance.progress-bar`.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should not detect appearance none',
  code: `
    a { appearance: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures other `<compat-auto>` values like `button` are not flagged as `properties.appearance.progress-bar`.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should not detect other compat-auto values like button',
  code: `
    a { appearance: button; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that `appearance` with a `var()` function is not flagged, as `properties.appearance.progress-bar` is for a specific value.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should not detect appearance with a CSS variable',
  code: `
    a { --foo: progress-bar; appearance: var(--foo); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that `appearance: initial` is not flagged as `properties.appearance.progress-bar`.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should not detect appearance initial',
  code: `
    a { appearance: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that `appearance: unset` is not flagged as `properties.appearance.progress-bar`.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should not detect appearance unset',
  code: `
    a { appearance: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects `appearance: progress-bar` in a nested rule for the same element (e.g., pseudo-class).
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should detect in nested rule in the same context',
  code: `
    a { display: block; &:hover { appearance: progress-bar; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures `appearance: progress-bar` is not detected in a nested rule targeting a different element (child selector).
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should not detect in nested rule for a different element',
  code: `
    a { display: block; & .bar { appearance: progress-bar; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `appearance: progress-bar` is not detected in a nested rule targeting a pseudo-element.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should not detect in nested rule for a pseudo-element',
  code: `
    a { display: block; &::before { appearance: progress-bar; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `appearance: progress-bar` is not flagged when guarded by an exact `@supports` query.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should not detect when exactly guarded by @supports',
  code: `
    @supports (appearance: progress-bar) { a { appearance: progress-bar; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `appearance: progress-bar` is flagged when guarded by a `@supports` query for a different property.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should detect when guarded by @supports for a different property',
  code: `
    @supports (display: flex) { a { appearance: progress-bar; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures `appearance: progress-bar` is flagged when guarded by a `@supports` query for the same property but a different value.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should detect when guarded by @supports for a different value',
  code: `
    @supports (appearance: auto) { a { appearance: progress-bar; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that multiple instances of the feature are correctly reported for unprefixed and -webkit-.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should have two warnings for multiple instances',
  code: `
    a { appearance: progress-bar; } b { -webkit-appearance: progress-bar; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that multiple instances of the feature are correctly reported for unprefixed, -webkit-, and -moz-.
 */
testRule({
  featureId: 'properties.appearance.progress-bar',
  description: 'should have three warnings for multiple instances including -moz-',
  code: `
    a { appearance: progress-bar; } b { -webkit-appearance: progress-bar; } c { -moz-appearance: progressbar; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
