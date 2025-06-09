/* AUTO_GENERATED: true */

/* 
feature: properties.anchor-scope
docs: no link provided
spec: https://drafts.csswg.org/css-anchor-position-1/#propdef-anchor-scope
*/

import { testRule } from 'lib/testRule';

/**
 * Tests that the 'anchor-scope' property with the 'all' keyword is correctly flagged as an unsupported feature.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: "should flag basic usage of anchor-scope with 'all'",
  code: `
    a { anchor-scope: all; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the 'anchor-scope' property with a single dashed-ident value is correctly flagged as an unsupported feature.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: 'should flag basic usage of anchor-scope with a dashed ident',
  code: `
    a { anchor-scope: --foo; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the 'anchor-scope' property with multiple dashed-ident values is correctly flagged as an unsupported feature.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: 'should flag usage of anchor-scope with multiple dashed idents',
  code: `
    a { anchor-scope: --foo, --bar; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the 'anchor-scope' property with the 'none' keyword is correctly flagged as an unsupported feature.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: "should flag usage of anchor-scope with 'none'",
  code: `
    a { anchor-scope: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the 'anchor-scope' property is not flagged when used within a @supports rule checking for 'anchor-scope: all'.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: "should not flag anchor-scope when correctly guarded by @supports with 'all'",
  code: `
    @supports (anchor-scope: all) { a { anchor-scope: all; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the 'anchor-scope' property is not flagged when used within a @supports rule checking for 'anchor-scope: --test-scope'.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: 'should not flag anchor-scope when correctly guarded by @supports with dashed ident',
  code: `
    @supports (anchor-scope: --test-scope) { a { anchor-scope: --test-scope; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the 'anchor-scope' property is flagged when the @supports condition is for a different value of the same property.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: 'should flag anchor-scope when @supports condition is for a different value',
  code: `
    @supports (anchor-scope: --other-scope) { a { anchor-scope: --foo; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the 'anchor-scope' property is flagged when its value is a CSS variable, as the property in general is the feature.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: 'should flag anchor-scope when its value is a CSS variable',
  code: `
    a { --my-scope: all; anchor-scope: var(--my-scope); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the 'anchor-scope' property is flagged when its value is the CSS-wide keyword 'initial'.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: "should flag anchor-scope when its value is 'initial'",
  code: `
    a { anchor-scope: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the 'anchor-scope' property is flagged when its value is the CSS-wide keyword 'unset'.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: "should flag anchor-scope when its value is 'unset'",
  code: `
    a { anchor-scope: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the 'anchor-scope' property is flagged when used within a nested rule targeting a new element (e.g., a child selector).
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: 'should flag anchor-scope within a nested rule targeting a new element',
  code: `
    .foo { & .bar { anchor-scope: all; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that the 'anchor-scope' property is flagged when used within a nested rule targeting the same element (e.g., a pseudo-class).
 */
testRule({
  featureId: 'properties.anchor-scope',
  description:
    'should flag anchor-scope within a nested rule targeting the same element (pseudo-class)',
  code: `
    a { &:hover { anchor-scope: --foo; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that two distinct declarations of 'anchor-scope' are both flagged.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: 'should flag two instances of anchor-scope',
  code: `
    a { anchor-scope: all; } b { anchor-scope: --bar; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that unrelated CSS properties are not flagged for the anchor-scope feature.
 */
testRule({
  featureId: 'properties.anchor-scope',
  description: 'should not flag non-anchor-scope properties',
  code: `
    a { color: red; font-size: 16px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
