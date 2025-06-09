/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.flex_context.safe_unsafe
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Should detect 'safe center' in a standard flex container.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should detect unprefixed safe keyword in flex context',
  code: `
    .foo {
    display: flex;
    align-content: safe center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect 'unsafe flex-start' in a standard flex container.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should detect unprefixed unsafe keyword in flex context',
  code: `
    .foo {
    display: flex;
    align-content: unsafe flex-start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect 'safe end' with a -webkit- prefixed align-content in a flex container.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should detect safe keyword with -webkit- prefix',
  code: `
    .foo {
    display: flex;
    -webkit-align-content: safe end;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect 'unsafe space-around' with a -moz- prefixed align-content in a flex container.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should detect unsafe keyword with -moz- prefix',
  code: `
    .foo {
    display: flex;
    -moz-align-content: unsafe space-around;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect 'safe stretch' with a -ms- prefixed align-content in an -ms-flexbox container.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should detect safe keyword with -ms- prefix in ms-flexbox context',
  code: `
    .foo {
    display: -ms-flexbox;
    -ms-align-content: safe stretch;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should not detect when guarded by @supports',
  code: `
    @supports (align-content: safe start) {
    .foo {
      display: flex;
      align-content: safe start;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect 'safe center' in a block context (not flex).
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should not detect in block context',
  code: `
    .foo {
    display: block;
    align-content: safe center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect 'safe center' in a grid context (not flex).
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should not detect in grid context',
  code: `
    .foo {
    display: grid;
    align-content: safe center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect when using a CSS variable for the value.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should not detect when value is a CSS variable',
  code: `
    .foo {
    display: flex;
    --my-align: safe center;
    align-content: var(--my-align);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect when using 'initial' keyword.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: "should not detect when value is 'initial'",
  code: `
    .foo {
    display: flex;
    align-content: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect multiple instances across different rules and with prefixes.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should detect multiple instances with various prefixes',
  code: `
    .foo {
    display: flex;
    align-content: safe center;
  }
  .bar {
    display: flex;
    -webkit-align-content: unsafe end;
  }
  .baz {
    display: -moz-box;
    -moz-align-content: safe flex-start;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect in a nested pseudo-class, which inherits the flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should detect in nested pseudo-class inheriting flex context',
  code: `
    .foo {
    display: flex;
    &:hover {
      align-content: safe center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should NOT detect in a nested pseudo-element, which does not inherit the flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should not detect in nested pseudo-element (new element)',
  code: `
    .foo {
    display: flex;
    &::before {
      content: '';
      align-content: safe center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect in a nested child selector, which does not inherit the flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should not detect in nested child selector (new element)',
  code: `
    .foo {
    display: flex;
    & .bar {
      align-content: safe center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT detect when 'safe' or 'unsafe' keywords are not used, even in flex context.
 */
testRule({
  featureId: 'properties.align-content.flex_context.safe_unsafe',
  description: 'should not detect align-content without safe/unsafe keywords',
  code: `
    .foo {
    display: flex;
    align-content: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
