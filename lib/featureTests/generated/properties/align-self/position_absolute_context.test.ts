/* AUTO_GENERATED: true */

/* 
feature: properties.align-self.position_absolute_context
docs: https://developer.mozilla.org/docs/Web/CSS/align-self
spec: https://drafts.csswg.org/css-align/#align-self-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of align-self: start on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (start)',
  code: `
    .foo { position: absolute; align-self: start; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of align-self: end on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (end)',
  code: `
    .foo { position: absolute; align-self: end; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of align-self: center on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (center)',
  code: `
    .foo { position: absolute; align-self: center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-self: self-start on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (self-start)',
  code: `
    .foo { position: absolute; align-self: self-start; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-self: flex-start on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (flex-start)',
  code: `
    .foo { position: absolute; align-self: flex-start; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-self: auto on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (auto)',
  code: `
    .foo { position: absolute; align-self: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-self: normal on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (normal)',
  code: `
    .foo { position: absolute; align-self: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-self: stretch on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (stretch)',
  code: `
    .foo { position: absolute; align-self: stretch; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-self: baseline on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (baseline)',
  code: `
    .foo { position: absolute; align-self: baseline; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-self: first baseline on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (first baseline)',
  code: `
    .foo { position: absolute; align-self: first baseline; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-self: safe center on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (safe center)',
  code: `
    .foo { position: absolute; align-self: safe center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-self: unsafe end on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (unsafe end)',
  code: `
    .foo { position: absolute; align-self: unsafe end; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of align-self: initial on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute (initial)',
  code: `
    .foo { position: absolute; align-self: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests prefixed version of align-self on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag -webkit-align-self with position: absolute',
  code: `
    .foo { position: absolute; -webkit-align-self: center; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests prefixed version of align-self on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag -moz-align-self with position: absolute',
  code: `
    .foo { position: absolute; -moz-align-self: center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self with a CSS variable when applied to an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with var() and position: absolute',
  code: `
    .foo { position: absolute; align-self: var(--align-value); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self without position: absolute, should not be flagged for this context.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should not flag align-self without position: absolute',
  code: `
    .foo { align-self: center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self with position: relative, should not be flagged for this context.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should not flag align-self with position: relative',
  code: `
    .foo { position: relative; align-self: center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self in a nested pseudo-class, which is considered the same element and thus the same context.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self in nested pseudo-class with position: absolute',
  code: `
    .foo { position: absolute; &:hover { align-self: center; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self in a nested child selector, which is a new element and thus a different context.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should not flag align-self in nested child selector with position: absolute',
  code: `
    .foo { position: absolute; & .bar { align-self: center; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self in a nested pseudo-element, which is a new element and thus a different context.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should not flag align-self in nested pseudo-element with position: absolute',
  code: `
    .foo { position: absolute; &::before { align-self: center; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests multiple align-self properties in the same rule with position: absolute for correct counting.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag two align-self properties in the same rule with position: absolute',
  code: `
    .foo { position: absolute; align-self: start; align-self: end; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests align-self inside an @supports query that exactly matches the property and value.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self inside @supports (guarded)',
  code: `
    @supports (align-self: center) { .foo { position: absolute; align-self: center; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests align-self inside an @supports query for a different property.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self inside @supports (unguarded - different property)',
  code: `
    @supports (display: flex) { .foo { position: absolute; align-self: center; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self inside an @supports query for the same property but a different value.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self inside @supports (unguarded - different value)',
  code: `
    @supports (align-self: start) { .foo { position: absolute; align-self: center; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests align-self with comments and extra whitespace for robustness.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with comments and extra whitespace',
  code: `
    /* comment */ .foo { /* another comment */ position: absolute; align-self: /* value */ center /* end value */ ; /* more comments */ }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests a scenario with two instances of the feature.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag two warnings in one test',
  code: `
    .foo { position: absolute; align-self: start; } .bar { position: absolute; align-self: end; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures order of properties in a rule doesn't affect detection.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute when position property comes after',
  code: `
    .foo { align-self: center; position: absolute; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures order of properties in a rule doesn't affect detection.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag align-self with position: absolute when position property is before',
  code: `
    .foo { position: absolute; align-self: center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * If position changes in the same rule, should only count for the final position (absolute).
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description:
    'should not flag align-self if position: relative and then position: absolute in same rule',
  code: `
    .foo { position: relative; align-self: center; position: absolute; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * If position changes in the same rule, should not count if final position is not absolute.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description:
    'should not flag align-self if position: absolute and then position: static in same rule',
  code: `
    .foo { position: absolute; align-self: center; position: static; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests place-self shorthand where align-self is implicitly set on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag place-self on absolutely positioned element (single value)',
  code: `
    .foo { position: absolute; place-self: center; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests place-self shorthand where align-self is explicitly set as the first value on an absolutely positioned element.
 */
testRule({
  featureId: 'properties.align-self.position_absolute_context',
  description: 'should flag place-self on absolutely positioned element (two values)',
  code: `
    .foo { position: absolute; place-self: start end; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
