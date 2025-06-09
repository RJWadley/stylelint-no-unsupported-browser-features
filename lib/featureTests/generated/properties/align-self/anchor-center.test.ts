/* AUTO_GENERATED: true */

/* 
feature: properties.align-self.anchor-center
docs: https://developer.mozilla.org/docs/Web/CSS/align-self
spec: https://drafts.csswg.org/css-anchor-position-1/#anchor-center
*/

import { testRule } from 'lib/testRule';

/**
 * Should not flag a supported align-self value.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should not flag align-self: center',
  code: `
    a { align-self: center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag the unsupported 'anchor-center' value for align-self.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag align-self: anchor-center',
  code: `
    a { align-self: anchor-center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'safe anchor-center' as unsupported.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag align-self: safe anchor-center',
  code: `
    a { align-self: safe anchor-center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'unsafe anchor-center' as unsupported.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag align-self: unsafe anchor-center',
  code: `
    a { align-self: unsafe anchor-center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'anchor-center' in a flex context, as the value is new.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag align-self: anchor-center in flex context',
  code: `
    a { display: flex; align-self: anchor-center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'anchor-center' in a grid context, as the value is new.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag align-self: anchor-center in grid context',
  code: `
    a { display: grid; align-self: anchor-center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag -webkit-align-self with 'anchor-center' due to the value, counting towards -webkit-.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag -webkit-align-self: anchor-center',
  code: `
    a { -webkit-align-self: anchor-center; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag -moz-align-self with 'anchor-center' due to the value, counting towards -moz-.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag -moz-align-self: anchor-center',
  code: `
    a { -moz-align-self: anchor-center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag 'anchor-center' case-insensitively.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag align-self: anchor-center (case-insensitive)',
  code: `
    a { ALIGN-SELF: ANCHOR-CENTER; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not flag CSS variable for value-specific feature.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should not flag align-self with var()',
  code: `
    a { align-self: var(--my-align); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'initial' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should not flag align-self: initial',
  code: `
    a { align-self: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'unset' CSS-wide keyword.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should not flag align-self: unset',
  code: `
    a { align-self: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag commented out code.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should not flag align-self: anchor-center in a comment',
  code: `
    /* a { align-self: anchor-center; } */
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag when guarded by exact @supports query.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should not flag align-self: anchor-center when guarded by exact @supports',
  code: `
    @supports (align-self: anchor-center) { a { align-self: anchor-center; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag when guarded by different property in @supports query.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description:
    'should flag align-self: anchor-center when guarded by different property in @supports',
  code: `
    @supports (display: flex) { a { align-self: anchor-center; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag when guarded by same property but different value in @supports query.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description:
    'should flag align-self: anchor-center when guarded by same property but different value in @supports',
  code: `
    @supports (align-self: center) { a { align-self: anchor-center; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'anchor-center' alongside other properties.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag align-self: anchor-center with other properties',
  code: `
    a { align-self: anchor-center; color: red; width: 100px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag 'anchor-center' in a nested pseudo-class, which is same element context.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag align-self: anchor-center in nested pseudo-class',
  code: `
    .foo { display: flex; &:hover { align-self: anchor-center; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag multiple instances in different rules, two warnings expected.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag multiple align-self: anchor-center instances',
  code: `
    .foo { align-self: anchor-center; } .bar { align-self: anchor-center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Should flag the unsupported value, even if followed by a supported one.
 */
testRule({
  featureId: 'properties.align-self.anchor-center',
  description: 'should flag align-self: anchor-center even if overridden',
  code: `
    a { align-self: anchor-center; align-self: stretch; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
