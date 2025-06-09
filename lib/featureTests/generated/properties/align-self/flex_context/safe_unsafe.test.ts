/* AUTO_GENERATED: true */

/* 
feature: properties.align-self.flex_context.safe_unsafe
docs: https://developer.mozilla.org/docs/Web/CSS/align-self
spec: https://drafts.csswg.org/css-align/#align-self-property
*/

import { testRule } from 'lib/testRule';

/**
 * Should flag 'align-self: safe center' in a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag align-self: safe center in flex context',
  code: `
    .foo {
    display: flex;
    align-self: safe center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'align-self: unsafe center' in a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag align-self: unsafe center in flex context',
  code: `
    .foo {
    display: flex;
    align-self: unsafe center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'align-self: safe flex-start' in a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag align-self: safe flex-start in flex context',
  code: `
    .foo {
    display: flex;
    align-self: safe flex-start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'align-self: unsafe flex-end' in a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag align-self: unsafe flex-end in flex context',
  code: `
    .foo {
    display: flex;
    align-self: unsafe flex-end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'align-self: safe start' in a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag align-self: safe start in flex context',
  code: `
    .foo {
    display: flex;
    align-self: safe start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'align-self: unsafe end' in a flex container.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag align-self: unsafe end in flex context',
  code: `
    .foo {
    display: flex;
    align-self: unsafe end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag both 'safe' and 'unsafe' declarations in the same flex rule.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag multiple safe/unsafe align-self in flex context',
  code: `
    .foo {
    display: flex;
    align-self: safe center;
    align-self: unsafe flex-end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Should flag -webkit-prefixed 'align-self: safe' when 'display' is -webkit-flex.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag -webkit-align-self: safe in -webkit-flex context',
  code: `
    .foo {
    display: -webkit-flex;
    -webkit-align-self: safe center;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag -moz-prefixed 'align-self: unsafe' in old flex syntax.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag -moz-align-self: unsafe in -moz-box context',
  code: `
    .foo {
    display: -moz-box;
    -moz-align-self: unsafe start;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT flag 'align-self: safe center' when exactly guarded by @supports.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should not flag align-self: safe center when exactly guarded by @supports',
  code: `
    @supports (align-self: safe center) {
    .foo {
      display: flex;
      align-self: safe center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT flag 'align-self: unsafe flex-end' when exactly guarded by @supports.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should not flag align-self: unsafe flex-end when exactly guarded by @supports',
  code: `
    @supports (align-self: unsafe flex-end) {
    .foo {
      display: flex;
      align-self: unsafe flex-end;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag 'align-self: safe center' in a nested pseudo-class within a flex context.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag align-self: safe center in nested pseudo-class (flex context)',
  code: `
    .foo {
    display: flex;
    &:hover {
      align-self: safe center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag 'align-self: safe center' when display context is not explicitly flex.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should not flag align-self: safe center without explicit flex context',
  code: `
    .foo {
    align-self: safe center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'align-self: unsafe center' in a grid context for this feature.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should not flag align-self: unsafe center in grid context',
  code: `
    .bar {
    display: grid;
    align-self: unsafe center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'align-self: safe center' in a pseudo-element context (new element).
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should not flag align-self: safe center in pseudo-element (new element)',
  code: `
    .foo {
    display: flex;
    &::before {
      align-self: safe center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'align-self' with 'var()' for 'safe_unsafe' feature.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should not flag align-self with var() for safe_unsafe',
  code: `
    .foo {
    display: flex;
    --align-val: safe center;
    align-self: var(--align-val);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'align-self' with 'initial' or 'unset' keywords.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should not flag align-self with initial or unset keywords',
  code: `
    .foo {
    display: flex;
    align-self: initial;
    align-self: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag 'align-self: safe center' when @supports is for a different property.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag align-self: safe center when @supports is for a different property',
  code: `
    @supports (display: flex) {
    .foo {
      display: flex;
      align-self: safe center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'align-self: safe center' when @supports is for the same property but different value.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description:
    'should flag align-self: safe center when @supports is for same property but different value',
  code: `
    @supports (align-self: center) {
    .foo {
      display: flex;
      align-self: safe center;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag 'align-self: center' as it doesn't use 'safe' or 'unsafe'.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should not flag align-self with only positional values',
  code: `
    .foo {
    display: flex;
    align-self: center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag 'safe center' in flex context but not 'unsafe center' without explicit flex in the same rule.
 */
testRule({
  featureId: 'properties.align-self.flex_context.safe_unsafe',
  description: 'should flag only align-self in flex context when multiple rules are present',
  code: `
    .foo {
    display: flex;
    align-self: safe center;
  }
  .bar {
    align-self: unsafe center;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
