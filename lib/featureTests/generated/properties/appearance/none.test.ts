/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.none
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-none
*/

import { testRule } from 'lib/testRule';

/**
 * Detects the standard `appearance: none` declaration.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should detect unprefixed appearance: none',
  code: `
    .foo {
    appearance: none;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects `none` value when using the `-webkit-` prefix (alias).
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should detect -webkit-appearance: none',
  code: `
    .bar {
    -webkit-appearance: none;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects `none` value when using the `-moz-` prefix.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should detect -moz-appearance: none',
  code: `
    a {
    -moz-appearance: none;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Counts multiple instances with different prefixes across different rules.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should count multiple instances with various prefixes',
  code: `
    .foo { appearance: none; }
  .bar { -webkit-appearance: none; }
  .baz { -moz-appearance: none; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Does not detect when the value is not 'none'.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should not detect appearance: auto',
  code: `
    input { appearance: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Does not detect when the value is not 'none', even if prefixed.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should not detect non-none values with prefixes',
  code: `
    select { -webkit-appearance: menulist-button; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Correctly parses and detects `appearance: none` despite varied whitespace and comments.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should detect with comments and whitespace',
  code: `
    .foo { /* A comment */ appearance : none /* Another comment */ ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * `appearance: none` is guarded by an exact `@supports` condition.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should be guarded by @supports (appearance: none)',
  code: `
    @supports (appearance: none) { .foo { appearance: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * `-webkit-appearance: none` is guarded by an exact prefixed `@supports` condition.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should be guarded by @supports (-webkit-appearance: none)',
  code: `
    @supports (-webkit-appearance: none) { .bar { -webkit-appearance: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * `appearance: none` is not guarded by an unrelated `@supports` query.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should not be guarded by unrelated @supports',
  code: `
    @supports (display: flex) { .foo { appearance: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not detect `appearance: none` when the value is provided via a CSS variable.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should not detect when value is a CSS variable',
  code: `
    .foo { --app-none: none; appearance: var(--app-none); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect `appearance: none` when CSS-wide keywords are used as the value.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should not detect when value is a CSS-wide keyword',
  code: `
    .foo { appearance: initial; } .bar { appearance: unset; } .baz { appearance: revert; } .qux { appearance: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect `appearance: none` even on a non-widget element.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should detect on non-widget elements',
  code: `
    div { appearance: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Test case with two warnings (one for unprefixed, one for webkit prefixed).
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should include at least one test that has 2 warnings',
  code: `
    a { appearance: none; } b { -webkit-appearance: none; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not detect `appearance: none` when prefixed with unsupported vendor prefixes.
 */
testRule({
  featureId: 'properties.appearance.none',
  description: 'should not detect with unsupported vendor prefixes',
  code: `
    a { -ms-appearance: none; } b { -o-appearance: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
