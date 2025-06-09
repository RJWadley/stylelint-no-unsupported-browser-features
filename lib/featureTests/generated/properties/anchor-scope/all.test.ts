/* AUTO_GENERATED: true */

/* 
feature: properties.anchor-scope.all
docs: no link provided
spec: https://drafts.csswg.org/css-anchor-position-1/#valdef-anchor-scope-all
*/

import { testRule } from 'lib/testRule';

/**
 * Should flag basic usage of anchor-scope: all.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should flag anchor-scope: all',
  code: `
    a {
    anchor-scope: all;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag anchor-scope: none as it's not the 'all' value.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should not flag anchor-scope: none',
  code: `
    a {
    anchor-scope: none;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope with a custom dashed ident as it's not the 'all' value.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should not flag anchor-scope: --my-anchor',
  code: `
    a {
    anchor-scope: --my-anchor;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: all when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should not flag anchor-scope: all when guarded by exact @supports',
  code: `
    @supports (anchor-scope: all) {
    a {
      anchor-scope: all;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag anchor-scope: all when @supports query is for a different property.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description:
    'should flag anchor-scope: all when not guarded by relevant @supports (different property)',
  code: `
    @supports (display: flex) {
    a {
      anchor-scope: all;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag anchor-scope: all when @supports query is for the same property but a different value.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description:
    'should flag anchor-scope: all when not guarded by relevant @supports (different value)',
  code: `
    @supports (anchor-scope: none) {
    a {
      anchor-scope: all;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag anchor-scope with a CSS variable, as the feature targets a specific value ('all') and variables are not resolved.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should not flag anchor-scope with var() for specific value',
  code: `
    a {
    --my-value: all;
    anchor-scope: var(--my-value);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: initial, as it resolves to 'none'.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should not flag anchor-scope: initial',
  code: `
    a {
    anchor-scope: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: unset, as it resolves to 'none'.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should not flag anchor-scope: unset',
  code: `
    a {
    anchor-scope: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag anchor-scope: all when mixed with other declarations.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should flag anchor-scope: all in a rule with other declarations',
  code: `
    a {
    color: red;
    anchor-scope: all;
    display: block;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should handle comments and whitespace around anchor-scope: all.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should flag anchor-scope: all with comments and whitespace',
  code: `
    a {
    /* comment before */
    anchor-scope /* comment in middle */ : all /* comment after */ ;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag anchor-scope: all within a nested pseudo-class rule.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should flag anchor-scope: all in nested pseudo-class',
  code: `
    .foo {
    &:hover {
      anchor-scope: all;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag anchor-scope: all within a nested child selector.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should flag anchor-scope: all in nested child selector',
  code: `
    .foo {
    & .bar {
      anchor-scope: all;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag anchor-scope: all within a nested pseudo-element rule.
 */
testRule({
  featureId: 'properties.anchor-scope.all',
  description: 'should flag anchor-scope: all in nested pseudo-element',
  code: `
    .foo {
    &::before {
      anchor-scope: all;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
