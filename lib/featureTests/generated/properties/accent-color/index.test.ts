/* AUTO_GENERATED: true */

/* 
feature: properties.accent-color
docs: https://developer.mozilla.org/docs/Web/CSS/accent-color
spec: https://drafts.csswg.org/css-ui/#widget-accent
*/

import { testRule } from 'lib/testRule';

/**
 * Should flag `accent-color` with a basic color keyword.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with color keyword',
  code: `
    a { accent-color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with a hex color value.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with hex color',
  code: `
    a { accent-color: #74992e; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with an rgb color value.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with rgb color',
  code: `
    a { accent-color: rgb(255, 255, 128); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with an hsl color value.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with hsl color',
  code: `
    a { accent-color: hsl(250, 100%, 34%); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with an rgba color value.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with rgba color',
  code: `
    a { accent-color: rgba(0, 0, 0, 0.5); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with the `transparent` keyword.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with transparent keyword',
  code: `
    a { accent-color: transparent; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with the `auto` keyword.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with auto keyword',
  code: `
    a { accent-color: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with the CSS-wide keyword `initial`.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with initial keyword',
  code: `
    a { accent-color: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with the CSS-wide keyword `inherit`.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with inherit keyword',
  code: `
    a { accent-color: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with the CSS-wide keyword `unset`.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with unset keyword',
  code: `
    a { accent-color: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with the CSS-wide keyword `revert`.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with revert keyword',
  code: `
    a { accent-color: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with the CSS-wide keyword `revert-layer`.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with revert-layer keyword',
  code: `
    a { accent-color: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag multiple `accent-color` declarations in a single rule, ignoring comments.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag multiple accent-color declarations',
  code: `
    a { accent-color: red; /* comment */ accent-color: blue; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Should not flag `accent-color` when it is correctly guarded by an `@supports` query with an exact property-value match.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should not flag guarded accent-color in @supports (exact match)',
  code: `
    @supports (accent-color: red) { a { accent-color: red; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should flag `accent-color` when it is guarded by an `@supports` query for a different property.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag unguarded accent-color in @supports (different property)',
  code: `
    @supports (display: flex) { a { accent-color: red; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` when it is guarded by an `@supports` query for the same property but a different value.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag unguarded accent-color in @supports (different value)',
  code: `
    @supports (accent-color: blue) { a { accent-color: red; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` when its value is a CSS variable, as the feature is for the property in general.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with CSS variable',
  code: `
    a { --my-color: red; accent-color: var(--my-color); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` when used on `<input type="checkbox">`.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color on input[type=checkbox]',
  code: `
    input[type="checkbox"] { accent-color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` when used on `<input type="radio">`.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color on input[type=radio]',
  code: `
    input[type="radio"] { accent-color: blue; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` when used on `<input type="range">`.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color on input[type=range]',
  code: `
    input[type="range"] { accent-color: green; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` when used on `<progress>`.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color on progress element',
  code: `
    progress { accent-color: purple; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` even when used on an unsupported element, as the property itself is the feature.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color on unsupported element',
  code: `
    div { accent-color: orange; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with an uppercase property name (case-insensitivity).
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with uppercase property name',
  code: `
    a { ACCENT-COLOR: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` with a mixed-case property name (case-insensitivity).
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color with mixed-case property name',
  code: `
    a { Accent-Color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` within a nested pseudo-class for the same element.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color within pseudo-class (same element)',
  code: `
    a { &:hover { accent-color: red; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` within a nested child selector, as it's still usage of the property.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color within child selector (new element)',
  code: `
    a { & .foo { accent-color: red; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` within a nested pseudo-element, as it's still usage of the property.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color within pseudo-element (new element)',
  code: `
    a { &::before { accent-color: red; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should flag `accent-color` in different rules to vary line and column positions.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should flag accent-color in different rules',
  code: `
    .foo { accent-color: red; } .bar { accent-color: blue; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Should not flag any feature when `accent-color` is not used.
 */
testRule({
  featureId: 'properties.accent-color',
  description: 'should not flag when accent-color is not used',
  code: `
    a { color: black; background-color: white; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
