/* AUTO_GENERATED: true */

/* 
feature: properties.align-items
docs: https://developer.mozilla.org/docs/Web/CSS/align-items
spec: https://drafts.csswg.org/css-align/#align-items-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests a widely supported value for align-items in a flex container.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should not warn for supported align-items in flex context',
  code: `
    a {
    display: flex;
    align-items: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests a widely supported value for align-items in a grid container.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should not warn for supported align-items in grid context',
  code: `
    a {
    display: grid;
    align-items: start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests a very new and likely unsupported value 'anchor-center' for align-items.
 */
testRule({
  featureId: 'properties.align-items',
  description: "should warn for unsupported align-items value 'anchor-center'",
  code: `
    a {
    display: flex;
    align-items: anchor-center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-items applied to an element with display: block, where it generally has no effect and is considered unsupported by browsers in this context.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should warn for align-items in explicit block context',
  code: `
    a {
    display: block;
    align-items: end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-items applied to an element without an explicit display property, where it behaves as block and has no effect.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should warn for align-items in implicit block context',
  code: `
    a {
    align-items: flex-end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests a rule containing two problematic usages of align-items: one with an unsupported value and one in an unsupported context.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should warn for two align-items problems in one rule',
  code: `
    a {
    display: block;
    align-items: center; /* This should be a warning: align-items has no effect on block elements */
    align-items: anchor-center; /* This should be a warning: 'anchor-center' is an unsupported value */
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that an unsupported align-items usage is not flagged when an exact @supports query is present.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should not warn when align-items is guarded by exact @supports',
  code: `
    @supports (align-items: anchor-center) {
    .foo {
      display: flex;
      align-items: anchor-center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that an unsupported align-items usage is still flagged when @supports checks a different property.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should warn when align-items is not guarded by different property @supports',
  code: `
    @supports (display: flex) {
    .foo {
      align-items: anchor-center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that an unsupported align-items usage is still flagged when @supports checks the same property with a different value.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should warn when align-items is not guarded by different value @supports',
  code: `
    @supports (align-items: stretch) {
    .foo {
      align-items: anchor-center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-items with the 'initial' keyword. This is generally supported and should not cause a warning.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should not warn for align-items with CSS-wide keyword initial',
  code: `
    a {
    display: flex;
    align-items: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-items with a CSS variable. This should be flagged because the exact value cannot be determined at static analysis time, and the property in general is being checked.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should warn for align-items with var() function',
  code: `
    a {
    display: grid;
    align-items: var(--align-value);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests correct counting of a vendor-prefixed align-items property.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should count a vendor-prefixed align-items',
  code: `
    .foo {
    -webkit-align-items: center;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-items on a pseudo-element, which is a new element and does not inherit the parent's display context, typically not a flex or grid container.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should warn for align-items on a pseudo-element (different context)',
  code: `
    .parent-flex {
    display: flex;
    &::before {
      content: '';
      align-items: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-items on a child element via nested selector, which is a new element and does not inherit the parent's display context.
 */
testRule({
  featureId: 'properties.align-items',
  description: 'should warn for align-items on a child element (different context)',
  code: `
    .parent-grid {
    display: grid;
    & .child-bar {
      align-items: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-items with flex-start in a flex context, which is fully supported.
 */
testRule({
  featureId: 'properties.align-items',
  description:
    'should not warn for align-items with logical keywords like flex-start/flex-end in their specific context',
  code: `
    a {
    display: flex;
    align-items: flex-start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
