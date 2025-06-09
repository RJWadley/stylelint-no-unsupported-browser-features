/* AUTO_GENERATED: true */

/* 
feature: properties.anchor-name
docs: https://developer.mozilla.org/docs/Web/CSS/anchor-name
spec: https://drafts.csswg.org/css-anchor-position-1/#name
*/

import { testRule } from 'lib/testRule';

/**
 * Tests `anchor-name` with a single identifier and multiple comma-separated identifiers.
 */
testRule({
  featureId: 'properties.anchor-name',
  description: 'should flag basic usage with single and multiple anchor names',
  code: `
    
  .foo { anchor-name: --my-anchor; }
  .bar { anchor-name: --first-anchor, --second-anchor; }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests `anchor-name: none;`.
 */
testRule({
  featureId: 'properties.anchor-name',
  description: 'should flag anchor-name when set to none',
  code: `
    .foo { anchor-name: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `anchor-name` with `initial`, `inherit`, `unset`, `revert`, and `revert-layer`.
 */
testRule({
  featureId: 'properties.anchor-name',
  description: 'should flag anchor-name with CSS-wide keywords',
  code: `
    
  .foo { anchor-name: initial; }
  .bar { anchor-name: inherit; }
  .baz { anchor-name: unset; }
  .qux { anchor-name: revert; }
  .corge { anchor-name: revert-layer; }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 5 },
});

/**
 * Tests `anchor-name` applied to `::before` and `::after` pseudo-elements.
 */
testRule({
  featureId: 'properties.anchor-name',
  description: 'should flag anchor-name on pseudo-elements',
  code: `
    
  a::before { anchor-name: --pseudo-before; }
  a::after { anchor-name: --pseudo-after; }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests `anchor-name` with vendor prefixes; expecting no flags as it's an unprefixed feature.
 */
testRule({
  featureId: 'properties.anchor-name',
  description: 'should not flag vendor prefixed anchor-name',
  code: `
    
  .foo { -webkit-anchor-name: --webkit-anchor; }
  .bar { -moz-anchor-name: --moz-anchor; }
  .baz { -ms-anchor-name: --ms-anchor; }
  .qux { -o-anchor-name: --o-anchor; }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `anchor-name` within an `@supports` rule that checks for the exact property and value.
 */
testRule({
  featureId: 'properties.anchor-name',
  description: 'should not flag anchor-name when exactly guarded by @supports',
  code: `
    
  @supports (anchor-name: --test-anchor) {
    .foo { anchor-name: --test-anchor; }
  }
  @supports (anchor-name: none) {
    .bar { anchor-name: none; }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `anchor-name` within `@supports` queries checking for a different property or a different value for the same property.
 */
testRule({
  featureId: 'properties.anchor-name',
  description: 'should flag anchor-name when not guarded by @supports (different property/value)',
  code: `
    
  @supports (display: flex) {
    .foo { anchor-name: --flex-anchor; }
  }
  @supports (anchor-name: --another-value) {
    .bar { anchor-name: --different-value; }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that `anchor-name` is flagged when its value is a CSS variable, as the feature is for the property in general.
 */
testRule({
  featureId: 'properties.anchor-name',
  description: 'should flag anchor-name when using a var() function',
  code: `
    
  .foo {
    --dynamic-name: --my-dynamic-anchor;
    anchor-name: var(--dynamic-name);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `anchor-name` using various letter cases (uppercase, mixed case).
 */
testRule({
  featureId: 'properties.anchor-name',
  description: 'should flag anchor-name regardless of case',
  code: `
    
  .foo { ANCHOR-NAME: --upper-case; }
  .bar { Anchor-Name: --mixed-case; }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests `anchor-name` with different spacing around comma-separated identifiers.
 */
testRule({
  featureId: 'properties.anchor-name',
  description: 'should handle various whitespace and punctuation in multiple names',
  code: `
    
  .foo { anchor-name: --a, --b; }
  .bar { anchor-name: --c ,--d; }
  .baz { anchor-name:  --e  ,  --f  ; }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests cases where `anchor-name` is declared but has no value or an invalid one.
 */
testRule({
  featureId: 'properties.anchor-name',
  description: 'should not flag anchor-name if declaration is empty or invalid (missing value)',
  code: `
    
  .foo { anchor-name: ; } /* Invalid declaration */
  .bar { anchor-name: --; } /* Invalid dashed-ident */
  .baz { anchor-name: 123; } /* Invalid value type */
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
