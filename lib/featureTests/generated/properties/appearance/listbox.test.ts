/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.listbox
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-listbox
*/

import { testRule } from 'lib/testRule';

/**
 * Detects the use of 'listbox' value with the 'appearance' property without a vendor prefix.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect unprefixed appearance: listbox',
  code: `
    a { appearance: listbox; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the use of 'listbox' value with the '-webkit-appearance' property.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect -webkit- appearance: listbox',
  code: `
    a { -webkit-appearance: listbox; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects the use of 'listbox' value with the '-moz-appearance' property.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect -moz- appearance: listbox',
  code: `
    a { -moz-appearance: listbox; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects the use of 'listbox' value with the '-ms-appearance' property.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect -ms- appearance: listbox',
  code: `
    a { -ms-appearance: listbox; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects the use of 'listbox' value with the '-o-appearance' property.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect -o- appearance: listbox',
  code: `
    a { -o-appearance: listbox; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Detects multiple instances of 'listbox' value with 'appearance' property, including prefixed and unprefixed, in a single rule.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect multiple appearance: listbox in one rule',
  code: `
    a { appearance: listbox; -webkit-appearance: listbox; -moz-appearance: listbox; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'listbox' value with 'appearance' property across different selectors and prefixes.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect appearance: listbox in different selectors',
  code: `
    .foo { appearance: listbox; } #bar { -moz-appearance: listbox; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures 'appearance: listbox' is not flagged when guarded by an exact '@supports (appearance: listbox)' query.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should not detect appearance: listbox guarded by exact @supports',
  code: `
    @supports (appearance: listbox) { a { appearance: listbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures '-webkit-appearance: listbox' is not flagged when guarded by an exact '@supports (-webkit-appearance: listbox)' query.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should not detect -webkit-appearance: listbox guarded by exact @supports',
  code: `
    @supports (-webkit-appearance: listbox) { a { -webkit-appearance: listbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects 'appearance: listbox' even when guarded by an '@supports' query checking a different property.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect appearance: listbox guarded by incorrect @supports property',
  code: `
    @supports (display: flex) { a { appearance: listbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'appearance: listbox' even when guarded by an '@supports' query checking the same property but a different value.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect appearance: listbox guarded by incorrect @supports value',
  code: `
    @supports (appearance: auto) { a { appearance: listbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures 'appearance: listbox' is not flagged when 'listbox' is part of a CSS variable, as the resolved value is unknown.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should not detect appearance: listbox when value is a variable',
  code: `
    a { --my-appearance: listbox; appearance: var(--my-appearance); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'appearance: listbox' is not flagged when it's a fallback value in a CSS variable.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should not detect appearance: listbox as fallback in variable',
  code: `
    a { appearance: var(--unknown-var, listbox); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures standard and other compatibility appearance values are not flagged.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should not detect standard appearance values',
  code: `
    a { appearance: auto; } b { appearance: none; } c { appearance: menulist-button; } d { appearance: textfield; } e { appearance: base-select; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures CSS-wide keywords like 'initial', 'unset', 'inherit', 'revert', 'revert-layer' are not flagged for appearance.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should not detect CSS-wide keywords for appearance',
  code: `
    a { appearance: initial; } b { appearance: unset; } c { appearance: inherit; } d { appearance: revert; } e { appearance: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects 'appearance: listbox' even with comments and varied whitespace.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect appearance: listbox with comments and whitespace',
  code: `
    a { appearance /* test */ : /* more comments */ listbox /* end comment */ ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'appearance: listbox' when the code spans multiple lines.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect appearance: listbox in multi-line code',
  code: `
    a {
    appearance:
      listbox;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'appearance: listbox' when used within a nested pseudo-class rule, which shares the parent's context.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect appearance: listbox in nested pseudo-class',
  code: `
    .foo { display: flex; &:hover { appearance: listbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'appearance: listbox' when used within a nested rule targeting a child element.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect appearance: listbox in nested child selector',
  code: `
    .foo { & .bar { appearance: listbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'appearance: listbox' when used within a nested rule targeting a pseudo-element.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect appearance: listbox in nested pseudo-element',
  code: `
    .foo { &::before { appearance: listbox; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects two separate instances of 'appearance: listbox' in different rules, resulting in two warnings.
 */
testRule({
  featureId: 'properties.appearance.listbox',
  description: 'should detect two instances of appearance: listbox',
  code: `
    a { appearance: listbox; } b { -webkit-appearance: listbox; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
