/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.base-select
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui/#appearance-switching
*/

import { testRule } from 'lib/testRule';

/**
 * Tests flagging of 'appearance: base-select' on a <select> element and the ::picker(select) pseudo-element, which are not standard values according to the CSS UI Level 4 spec.
 */
testRule({
  featureId: 'properties.appearance.base-select',
  description: 'should flag appearance: base-select on select and ::picker(select) with 2 warnings',
  code: `
    select { appearance: base-select; } ::picker(select) { appearance: base-select; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests flagging of vendor-prefixed 'appearance: base-select' values, as 'base-select' is an unsupported value for the 'appearance' property in the spec.
 */
testRule({
  featureId: 'properties.appearance.base-select',
  description: 'should flag vendor-prefixed appearance: base-select',
  code: `
    a { -webkit-appearance: base-select; } b { -moz-appearance: base-select; } c { -ms-appearance: base-select; } d { -o-appearance: base-select; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests that 'appearance: base-select' is not flagged when explicitly guarded by a matching @supports query, following the strict guarding heuristic.
 */
testRule({
  featureId: 'properties.appearance.base-select',
  description: 'should not flag appearance: base-select when guarded by exact @supports',
  code: `
    @supports (appearance: base-select) { select { appearance: base-select; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'appearance: base-select' is flagged when @supports checks a different property, as this is not considered a valid guard.
 */
testRule({
  featureId: 'properties.appearance.base-select',
  description: 'should flag appearance: base-select when @supports checks different property',
  code: `
    @supports (display: flex) { select { appearance: base-select; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'appearance: base-select' is flagged when @supports checks the same property but a different value, as this is not considered a valid guard.
 */
testRule({
  featureId: 'properties.appearance.base-select',
  description:
    'should flag appearance: base-select when @supports checks same property, different value',
  code: `
    @supports (appearance: none) { select { appearance: base-select; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'appearance' with a CSS variable potentially resolving to 'base-select' is not flagged, as the static analysis cannot determine the resolved value for a specific value check.
 */
testRule({
  featureId: 'properties.appearance.base-select',
  description: 'should not flag appearance with var() for base-select',
  code: `
    .foo { --my-appearance: base-select; appearance: var(--my-appearance); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that standard CSS-wide keywords ('initial', 'unset') for 'appearance' are not flagged, as they are not the 'base-select' value.
 */
testRule({
  featureId: 'properties.appearance.base-select',
  description: 'should not flag appearance with CSS-wide keywords',
  code: `
    select { appearance: initial; } a { appearance: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests flagging of 'appearance: base-select' when the value is provided with different casing.
 */
testRule({
  featureId: 'properties.appearance.base-select',
  description: 'should flag case-insensitive appearance: base-select',
  code: `
    select { appearance: bAsE-SeLeCt; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests flagging of 'appearance: base-select' inside a nested selector targeting the same element.
 */
testRule({
  featureId: 'properties.appearance.base-select',
  description: 'should flag appearance: base-select inside nested selector',
  code: `
    select { &:hover { appearance: base-select; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
