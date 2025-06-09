/* AUTO_GENERATED: true */

/* 
feature: properties.align-self.flex_context.stretch
docs: https://developer.mozilla.org/docs/Web/CSS/align-self
spec: https://drafts.csswg.org/css-align/#align-self-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of `align-self: stretch` when the parent or self is `display: flex`.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect unprefixed align-self: stretch in flex context',
  code: `
    .foo {
    display: flex;
    align-self: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of `align-self: stretch` when the parent or self is `display: inline-flex`.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect unprefixed align-self: stretch in inline-flex context',
  code: `
    .foo {
    display: inline-flex;
    align-self: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of `-webkit-align-self: stretch` in a flex context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect -webkit-align-self: stretch in flex context',
  code: `
    .foo {
    display: flex;
    -webkit-align-self: stretch;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of `-moz-align-self: stretch` in a flex context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect -moz-align-self: stretch in flex context',
  code: `
    .foo {
    display: flex;
    -moz-align-self: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of `-ms-align-self: stretch` in a flex context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect -ms-align-self: stretch in flex context',
  code: `
    .foo {
    display: flex;
    -ms-align-self: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of `-o-align-self: stretch` in a flex context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect -o-align-self: stretch in flex context',
  code: `
    .foo {
    display: flex;
    -o-align-self: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Ensures `align-self: stretch` is not detected when `display: flex` or `display: inline-flex` is not explicitly set in the same rule.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description:
    'should not detect align-self: stretch when no display context is explicitly defined',
  code: `
    .foo {
    align-self: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `align-self: stretch` is not detected in a `display: grid` context, as the feature targets `flex_context`.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should not detect align-self: stretch in a grid context',
  code: `
    .foo {
    display: grid;
    align-self: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-self: stretch` is not flagged when an exact matching `@supports` query is present.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should not detect align-self: stretch when guarded by exact @supports query',
  code: `
    @supports (align-self: stretch) {
    .foo {
      display: flex;
      align-self: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that `align-self: stretch` is still flagged when the `@supports` query is for a different property, even if related (e.g., `display: flex`).
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect align-self: stretch when @supports query is for a different property',
  code: `
    @supports (display: flex) {
    .foo {
      display: flex;
      align-self: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `align-self: stretch` is still flagged when the `@supports` query is for the same property but a different value.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description:
    'should detect align-self: stretch when @supports query is for the same property but different value',
  code: `
    @supports (align-self: center) {
    .foo {
      display: flex;
      align-self: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of `align-self: initial` in a flex context. As `align-self` is not inherited and its initial value (`auto`) behaves as `normal`, which in turn behaves as `stretch` for flex items, it should be detected.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect align-self: initial in flex context as it resolves to stretch',
  code: `
    .foo {
    display: flex;
    align-self: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of `align-self: unset` in a flex context. As `align-self` is not inherited, `unset` behaves like `initial`, which resolves to `stretch` for flex items.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect align-self: unset in flex context as it resolves to stretch',
  code: `
    .foo {
    display: flex;
    align-self: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of `align-self: revert` in a flex context. `revert` resets the property to its user-agent default, which for `align-self` in flex context, typically behaves as `stretch`.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect align-self: revert in flex context as it resolves to stretch',
  code: `
    .foo {
    display: flex;
    align-self: revert;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `align-self: normal` is detected in a flex context because it behaves as `stretch` for flex items according to the spec.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect align-self: normal in flex context as it behaves as stretch',
  code: `
    .foo {
    display: flex;
    align-self: normal;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `align-self` is not flagged when its value is a `var()` function, as the feature is for a specific value (`stretch`) and `var()` is never resolved at static analysis time.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should not detect align-self when value is a var() function',
  code: `
    .foo {
    display: flex;
    --my-align: stretch;
    align-self: var(--my-align);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection when `align-self: stretch` is present alongside other declarations and has a different line/column position.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect align-self: stretch with other declarations and varying positions',
  code: `
    .foo {
    color: red;
    display: flex;
    font-size: 16px;
    align-self: stretch;
    margin: 10px;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of `align-self: stretch` within a pseudo-class (`&:hover`) that refers to the same element, inheriting the flex context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description:
    'should detect align-self: stretch in flex context within a pseudo-class for the same element',
  code: `
    .foo {
    display: flex;
    &:hover {
      align-self: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures `align-self: stretch` is not detected when applied to a child element (`& .bar`), as the display context is not inherited by new elements.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description:
    'should not detect align-self: stretch in flex context within a nested child selector',
  code: `
    .foo {
    display: flex;
    & .bar {
      align-self: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures `align-self: stretch` is not detected when applied to a pseudo-element (`&::before`), as it's a new element and does not inherit the parent's context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should not detect align-self: stretch in flex context within a pseudo-element',
  code: `
    .foo {
    display: flex;
    &::before {
      content: '';
      align-self: stretch;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that multiple instances of `align-self: stretch` are detected within different flex contexts in the same CSS block.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect multiple instances of align-self: stretch in flex contexts',
  code: `
    .foo {
    display: flex;
    align-self: stretch;
  }
  .bar {
    display: inline-flex;
    align-self: stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that `ALIGN-SELF: STRETCH` is detected in a flex context, ensuring case insensitivity.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect case-insensitive ALIGN-SELF: STRETCH in flex context',
  code: `
    .foo {
    display: flex;
    ALIGN-SELF: STRETCH;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that `align-self: stretch` is detected even with extra whitespace around the property and value.
 */
testRule({
  featureId: 'properties.align-self.flex_context.stretch',
  description: 'should detect align-self with various whitespaces around value in flex context',
  code: `
    .foo {
    display: flex;
    align-self :  stretch ;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
