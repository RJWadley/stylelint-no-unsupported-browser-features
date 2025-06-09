/* AUTO_GENERATED: true */

/* 
feature: properties.anchor-scope.none
docs: no link provided
spec: https://drafts.csswg.org/css-anchor-position-1/#valdef-anchor-scope-none
*/

import { testRule } from 'lib/testRule';

/**
 * Should not flag basic usage of anchor-scope: none as it is the initial value and always supported.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag anchor-scope: none',
  code: `
    a {
    anchor-scope: none;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: none with extra whitespace as it is the initial value and always supported.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag anchor-scope: none with extra whitespace',
  code: `
    a {
    anchor-scope : none ;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: initial as it resolves to none, which is always supported.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag anchor-scope: initial',
  code: `
    a {
    anchor-scope: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: unset as it resolves to none, which is always supported.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag anchor-scope: unset',
  code: `
    a {
    anchor-scope: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: revert as it resolves to none, which is always supported.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag anchor-scope: revert',
  code: `
    a {
    anchor-scope: revert;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: revert-layer as it resolves to none, which is always supported.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag anchor-scope: revert-layer',
  code: `
    a {
    anchor-scope: revert-layer;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope when its value is a variable, as we conservatively do not flag specific values when variables are used.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag anchor-scope with variable',
  code: `
    a {
    --scope-value: none;
    anchor-scope: var(--scope-value);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: none when guarded by an exact @supports query, as the value is always supported.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag guarded anchor-scope: none',
  code: `
    @supports (anchor-scope: none) {
    a {
      anchor-scope: none;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: none when guarded by a different @supports query, as the value is always supported.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag anchor-scope: none with unrelated @supports',
  code: `
    @supports (display: flex) {
    a {
      anchor-scope: none;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: none when guarded by @supports for a different value of the same property, as the value is always supported.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag anchor-scope: none with @supports for different value',
  code: `
    @supports (anchor-scope: all) {
    a {
      anchor-scope: none;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: none with comments, as the value is always supported.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag anchor-scope: none with comments',
  code: `
    a {
    /* a comment */ anchor-scope: none; /* another comment */
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag anchor-scope: none within a rule with other declarations.
 */
testRule({
  featureId: 'properties.anchor-scope.none',
  description: 'should not flag anchor-scope: none in a multi-declaration rule',
  code: `
    a {
    color: red;
    anchor-scope: none;
    width: 100%;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
