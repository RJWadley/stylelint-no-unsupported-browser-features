/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.auto
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-auto
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of appearance: auto on a class selector, with varying whitespaces and comments.
 */
testRule({
  featureId: 'properties.appearance.auto',
  description: 'should detect appearance: auto correctly',
  code: `
    
  .foo {
    appearance: auto; /* A basic detection */
  }
  .bar {
    appearance : auto ;
  }
  /* A comment before the declaration */
  .baz {
    appearance: /* another comment */ auto;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests detection of appearance: auto with vendor prefixes, assuming they are tracked by the featureCount object.
 */
testRule({
  featureId: 'properties.appearance.auto',
  description: 'should detect vendor-prefixed appearance: auto',
  code: `
    
  .foo {
    -webkit-appearance: auto;
    -moz-appearance: auto;
    -ms-appearance: auto;
    -o-appearance: auto;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests that appearance: auto is not detected when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.appearance.auto',
  description: 'should not detect appearance: auto when guarded by @supports',
  code: `
    
  @supports (appearance: auto) {
    .foo {
      appearance: auto;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that appearance: auto is detected when guarded by a @supports query for a different property.
 */
testRule({
  featureId: 'properties.appearance.auto',
  description:
    'should detect appearance: auto when guarded by incorrect @supports (different property)',
  code: `
    
  @supports (display: flex) {
    .foo {
      appearance: auto;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that appearance: auto is detected when guarded by a @supports query for the same property but a different value.
 */
testRule({
  featureId: 'properties.appearance.auto',
  description:
    'should detect appearance: auto when guarded by incorrect @supports (different value)',
  code: `
    
  @supports (appearance: none) {
    .foo {
      appearance: auto;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that appearance: auto is not detected when using a CSS variable, as the value is not statically resolvable to 'auto'.
 */
testRule({
  featureId: 'properties.appearance.auto',
  description: 'should not detect appearance: auto with var()',
  code: `
    
  .foo {
    --app-val: auto;
    appearance: var(--app-val);
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that appearance: auto is not detected when using CSS-wide keywords like initial, unset, inherit, revert, or revert-layer.
 */
testRule({
  featureId: 'properties.appearance.auto',
  description: 'should not detect appearance: auto with CSS-wide keywords',
  code: `
    
  .foo {
    appearance: initial;
  }
  .bar {
    appearance: unset;
  }
  .baz {
    appearance: inherit;
  }
  .qux {
    appearance: revert;
  }
  .quux {
    appearance: revert-layer;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests a scenario with multiple declarations of appearance: auto to ensure all are detected.
 */
testRule({
  featureId: 'properties.appearance.auto',
  description: 'should detect multiple instances of appearance: auto',
  code: `
    
  .foo {
    appearance: auto;
  }
  .bar {
    appearance: auto;
  }
  .baz {
    -webkit-appearance: auto;
  }
  
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests detection of appearance: auto regardless of case and within nested rules (same element context).
 */
testRule({
  featureId: 'properties.appearance.auto',
  description: 'should detect appearance: auto with case insensitivity and in nested rules',
  code: `
    
  .foo {
    APPEARANCE: AUTO; /* Uppercase */
    &.is-active {
      appearance: auto; /* Nested pseudo-class, same element context */
    }
  }
  a {
    &:hover {
      appearance: auto; /* Nested pseudo-class */
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests detection of appearance: auto within nested rules that target different elements (child selector, pseudo-element).
 */
testRule({
  featureId: 'properties.appearance.auto',
  description: 'should detect appearance: auto in different element nesting contexts',
  code: `
    
  .parent {
    appearance: auto;
    & .child {
      appearance: auto;
    }
    &::before {
      appearance: auto;
    }
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests that only `appearance: auto` is detected, not other valid values like `none` or `menulist-button`.
 */
testRule({
  featureId: 'properties.appearance.auto',
  description: 'should not detect appearance: auto for other appearance values',
  code: `
    
  .foo {
    appearance: none;
  }
  .bar {
    appearance: menulist-button;
  }
  .baz {
    appearance: textfield;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'auto' as a value for other properties (e.g., outline-color) is not mistakenly counted as appearance: auto.
 */
testRule({
  featureId: 'properties.appearance.auto',
  description: "should not detect 'auto' value for other properties as appearance: auto",
  code: `
    
  .foo {
    outline-color: auto;
  }
  .bar {
    cursor: auto;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
