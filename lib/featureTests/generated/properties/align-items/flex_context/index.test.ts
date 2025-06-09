/* AUTO_GENERATED: true */

/* 
feature: properties.align-items.flex_context
docs: https://developer.mozilla.org/docs/Web/CSS/align-items
spec: https://drafts.csswg.org/css-align/#align-items-property
*/

import { testRule } from 'lib/testRule';

/**
 * Should detect unprefixed align-items: center in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: center in flex context',
  code: `
    .foo {
    display: flex;
    align-items: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect unprefixed align-items: start in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: start in flex context',
  code: `
    .foo {
    display: flex;
    align-items: start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect unprefixed align-items: flex-start in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: flex-start in flex context',
  code: `
    .foo {
    display: flex;
    align-items: flex-start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect unprefixed align-items: stretch in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: stretch in flex context',
  code: `
    .foo {
    display: flex;
    align-items: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect unprefixed align-items: normal in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: normal in flex context',
  code: `
    .foo {
    display: flex;
    align-items: normal;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect unprefixed align-items: baseline in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: baseline in flex context',
  code: `
    .foo {
    display: flex;
    align-items: baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect unprefixed align-items: first baseline in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: first baseline in flex context',
  code: `
    .foo {
    display: flex;
    align-items: first baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect unprefixed align-items: last baseline in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: last baseline in flex context',
  code: `
    .foo {
    display: flex;
    align-items: last baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect unprefixed align-items: safe center in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: safe center in flex context',
  code: `
    .foo {
    display: flex;
    align-items: safe center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect unprefixed align-items: unsafe end in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: unsafe end in flex context',
  code: `
    .foo {
    display: flex;
    align-items: unsafe end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect -webkit-align-items in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect -webkit-align-items in flex context',
  code: `
    .foo {
    display: flex;
    -webkit-align-items: center;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect -moz-align-items in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect -moz-align-items in flex context',
  code: `
    .foo {
    display: flex;
    -moz-align-items: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect align-items: initial in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: initial in flex context',
  code: `
    .foo {
    display: flex;
    align-items: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect align-items: unset in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: unset in flex context',
  code: `
    .foo {
    display: flex;
    align-items: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect align-items: inherit in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items: inherit in flex context',
  code: `
    .foo {
    display: flex;
    align-items: inherit;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect align-items with a CSS variable as its value in a flex container.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items with var() in flex context',
  code: `
    .foo {
    display: flex;
    align-items: var(--my-align-value);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should NOT detect align-items: center when perfectly guarded by @supports.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should not detect guarded align-items: center in flex context',
  code: `
    @supports (align-items: center) {
    .foo {
      display: flex;
      align-items: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect align-items: center when guarded by @supports with a different value.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description:
    'should detect align-items: center when imperfectly guarded by @supports (different value)',
  code: `
    @supports (align-items: flex-start) {
    .foo {
      display: flex;
      align-items: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect align-items: center when guarded by @supports with a different property.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description:
    'should detect align-items: center when imperfectly guarded by @supports (different property)',
  code: `
    @supports (display: flex) {
    .foo {
      display: flex;
      align-items: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect align-items: center inside a pseudo-class selector (same element context).
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items in flex context with pseudo-class',
  code: `
    .foo {
    display: flex;
    &:hover {
      align-items: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should NOT detect align-items: center when display is grid.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should not detect align-items in grid context',
  code: `
    .foo {
    display: grid;
    align-items: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect align-items: center when display is explicitly block.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should not detect align-items in block context',
  code: `
    .foo {
    display: block;
    align-items: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect align-items: center when no explicit display context is provided.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should not detect align-items without explicit display context',
  code: `
    .foo {
    align-items: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect align-items in a child selector, as it's a new element context.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should not detect align-items in a child selector',
  code: `
    .foo {
    display: flex;
    & .bar {
      align-items: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect align-items in a pseudo-element selector, as it's a new element.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should not detect align-items in a pseudo-element',
  code: `
    .foo {
    display: flex;
    &::before {
      align-items: center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should correctly count multiple align-items declarations in the same flex container rule.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should count multiple align-items declarations in the same rule',
  code: `
    .foo {
    display: flex;
    align-items: center;
    align-items: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Should correctly count multiple align-items declarations with different prefixes in the same flex container rule.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should count multiple align-items declarations with different prefixes',
  code: `
    .foo {
    display: flex;
    -webkit-align-items: center;
    align-items: stretch;
    -moz-align-items: flex-start;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect align-items in both parent and nested flex containers.
 */
testRule({
  featureId: 'properties.align-items.flex_context',
  description: 'should detect align-items in nested flex contexts',
  code: `
    .parent {
    display: flex;
    align-items: center;
    .child {
      display: flex;
      align-items: flex-end;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});
