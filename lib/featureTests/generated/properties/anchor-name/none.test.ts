/* AUTO_GENERATED: true */

/* 
feature: properties.anchor-name.none
docs: https://developer.mozilla.org/docs/Web/CSS/anchor-name
spec: https://drafts.csswg.org/css-anchor-position-1/#valdef-anchor-name-none
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of `anchor-name: none`.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should detect anchor-name: none',
  code: `
    a { anchor-name: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures `anchor-name` with a custom identifier like `--myAnchor` is not flagged for `none`.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should not detect anchor-name with a custom identifier',
  code: `
    a { anchor-name: --myAnchor; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `anchor-name: none` with various whitespace around the value.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should detect anchor-name: none with extra whitespace',
  code: `
    a { anchor-name : none ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple instances of `anchor-name: none` in the same rule, expecting multiple detections.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should detect multiple anchor-name: none in one rule',
  code: `
    a { anchor-name: none; margin-top: 10px; anchor-name: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures `anchor-name: none` is not flagged when explicitly guarded by a matching `@supports` query.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should not detect anchor-name: none when guarded by @supports (anchor-name: none)',
  code: `
    @supports (anchor-name: none) { a { anchor-name: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `anchor-name: none` is flagged when the `@supports` query checks for a different value.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should detect anchor-name: none when not guarded by @supports (anchor-name: --foo)',
  code: `
    @supports (anchor-name: --foo) { a { anchor-name: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures `anchor-name: none` is flagged when the `@supports` query checks for an unrelated property.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should detect anchor-name: none when not guarded by @supports (display: block)',
  code: `
    @supports (display: block) { a { anchor-name: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `anchor-name` with the `initial` keyword. Even though `initial` for this property resolves to `none`, the rule is conservative and should not flag it as it's not the literal `none` value.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should not detect anchor-name: initial',
  code: `
    a { anchor-name: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `anchor-name` with the `unset` keyword. `unset` might resolve to `initial` (which is `none`), but the rule should be conservative.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should not detect anchor-name: unset',
  code: `
    a { anchor-name: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `anchor-name` with the `inherit` keyword. The property is not inherited, so this acts like `initial`, but it should still be conservative.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should not detect anchor-name: inherit',
  code: `
    a { anchor-name: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `anchor-name` with the `revert` keyword. Should not be flagged as it's not the literal `none` value.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should not detect anchor-name: revert',
  code: `
    a { anchor-name: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `anchor-name` with the `revert-layer` keyword. Should not be flagged as it's not the literal `none` value.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should not detect anchor-name: revert-layer',
  code: `
    a { anchor-name: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `anchor-name` with a CSS variable. Since `none` is a specific value, `var()` should not be flagged.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should not detect anchor-name with a CSS variable',
  code: `
    a { --anchor: none; anchor-name: var(--anchor); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `anchor-name: none` with a CSS comment before the value.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should detect anchor-name: none with a comment before value',
  code: `
    a { anchor-name: /* this is none */ none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `anchor-name: none` with a CSS comment after the value.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should detect anchor-name: none with a comment after value',
  code: `
    a { anchor-name: none /* this is none */; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `anchor-name: none` in a nested pseudo-class rule, which is considered the same context.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should detect anchor-name: none in a nested pseudo-class rule',
  code: `
    a { &:hover { anchor-name: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `anchor-name: none` in a nested child selector rule. The property itself applies globally, so it should be detected.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should detect anchor-name: none in a nested child selector rule',
  code: `
    a { & .bar { anchor-name: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `anchor-name: none` in a nested pseudo-element rule. The property itself applies globally, so it should be detected.
 */
testRule({
  featureId: 'properties.anchor-name.none',
  description: 'should detect anchor-name: none in a nested pseudo-element rule',
  code: `
    a { &::before { anchor-name: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
