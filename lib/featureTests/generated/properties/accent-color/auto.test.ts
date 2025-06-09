/* AUTO_GENERATED: true */

/* 
feature: properties.accent-color.auto
docs: https://developer.mozilla.org/docs/Web/CSS/accent-color
spec: https://drafts.csswg.org/css-ui/#widget-accent
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the basic detection of `accent-color: auto` on a standard input checkbox.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should detect `accent-color: auto` on an input element',
  code: `
    input[type="checkbox"] { accent-color: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of `accent-color: auto` on a standard input radio button.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should detect `accent-color: auto` on a radio input',
  code: `
    input[type="radio"] { accent-color: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the detection of `accent-color: auto` on a progress element.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should detect `accent-color: auto` on a progress element',
  code: `
    progress { accent-color: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `accent-color: auto` when it's part of a rule with other properties.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should detect `accent-color: auto` alongside other declarations',
  code: `
    input { color: blue; accent-color: auto; border: 1px solid black; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that `accent-color` with a specific color value (e.g., `red`) is not flagged as `accent-color: auto`.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should not flag `accent-color` with a color value',
  code: `
    input[type="checkbox"] { accent-color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `accent-color` with the `initial` keyword. This should not be flagged as `auto`.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should not flag `accent-color: initial`',
  code: `
    input { accent-color: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `accent-color` with a CSS variable. Since `auto` is a specific value, `var()` should not be flagged.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should not flag `accent-color` with `var()`',
  code: `
    input { --accent: auto; accent-color: var(--accent); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks if multiple occurrences of `accent-color: auto` are correctly counted.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should detect multiple instances of `accent-color: auto`',
  code: `
    input { accent-color: auto; } div { accent-color: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests `accent-color: auto` inside a `@supports` rule that exactly matches the property and value, ensuring it's not flagged.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should not flag `accent-color: auto` when guarded by `@supports`',
  code: `
    @supports (accent-color: auto) { input { accent-color: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests `accent-color: auto` inside a `@supports` rule that checks for the same property but a different value, ensuring it is flagged.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should flag `accent-color: auto` when `@supports` checks for a different value',
  code: `
    @supports (accent-color: red) { input { accent-color: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `accent-color: auto` inside a `@supports` rule that checks for a different property, ensuring it is flagged.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should flag `accent-color: auto` when `@supports` checks for a different property',
  code: `
    @supports (display: flex) { input { accent-color: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests `accent-color: auto` in a nested rule using a pseudo-class (e.g., `:hover`), which is considered the same context.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should detect `accent-color: auto` in a nested pseudo-class rule',
  code: `
    .foo { accent-color: auto; &:hover { accent-color: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests `accent-color: auto` in a nested rule using a child selector (e.g., `& .bar`), which is considered a new element and different context.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should detect `accent-color: auto` in a nested child selector rule',
  code: `
    .foo { accent-color: auto; & .bar { accent-color: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests `accent-color: auto` in a nested rule using a pseudo-element (e.g., `&::before`), which is considered a new element and different context.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should detect `accent-color: auto` in a nested pseudo-element rule',
  code: `
    .foo { accent-color: auto; &::before { accent-color: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests `accent-color: auto` with different whitespace around the value.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should detect `accent-color: auto` with varying whitespace',
  code: `
    input { accent-color:auto; } div { accent-color: auto ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures that `accent-color: auto` declarations within comments are ignored.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should not flag `accent-color: auto` inside a CSS comment',
  code: `
    /* input { accent-color: auto; } */
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that the rule does nothing when `accent-color` is not used at all.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should not flag when `accent-color` is not present',
  code: `
    div { color: blue; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests a scenario with two instances of `accent-color: auto` to ensure both are reported.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should have two warnings for two distinct usages',
  code: `
    a { accent-color: auto; } b { accent-color: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that the checker is case-insensitive for property and value names.
 */
testRule({
  featureId: 'properties.accent-color.auto',
  description: 'should detect `ACCENT-COLOR: AUTO` (case-insensitive)',
  code: `
    input { ACCENT-COLOR: AUTO; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
