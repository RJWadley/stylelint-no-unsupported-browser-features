/* AUTO_GENERATED: true */

/* 
feature: properties.appearance
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui/#appearance-switching
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of appearance: none on an input element.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect unprefixed appearance with 'none' value",
  code: `
    a { appearance: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of appearance: auto on a button element.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect unprefixed appearance with 'auto' value",
  code: `
    button { appearance: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of appearance: base-select on a select element.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect unprefixed appearance with 'base-select' value on select",
  code: `
    select { appearance: base-select; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of appearance: button on a button element, which is a compat-auto value.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect unprefixed appearance with 'button' compat-auto value",
  code: `
    button { appearance: button; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of appearance: checkbox on an input checkbox element.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect unprefixed appearance with 'checkbox' compat-auto value",
  code: `
    input[type="checkbox"] { appearance: checkbox; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of appearance: textfield on an input text element.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect unprefixed appearance with 'textfield' compat-special value",
  code: `
    input[type="text"] { appearance: textfield; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of -webkit-appearance: none, which is a legacy alias.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect -webkit-appearance with 'none' value",
  code: `
    input { -webkit-appearance: none; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of -webkit-appearance with a non-standard value 'inner-spin-button'.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect -webkit-appearance with non-standard 'inner-spin-button' value",
  code: `
    input[type="number"] { -webkit-appearance: inner-spin-button; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of -moz-appearance with a non-standard value 'button-bevel'.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect -moz-appearance with non-standard 'button-bevel' value",
  code: `
    button { -moz-appearance: button-bevel; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of -moz-appearance with a non-standard value 'meterbar'.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect -moz-appearance with non-standard 'meterbar' value",
  code: `
    progress { -moz-appearance: meterbar; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of -ms-appearance with a non-standard value 'scrollbarthumb-vertical'.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect -ms-appearance with non-standard 'scrollbarthumb-vertical' value",
  code: `
    div { -ms-appearance: scrollbarthumb-vertical; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests appearance property with 'initial' keyword.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect appearance with CSS-wide keyword 'initial'",
  code: `
    textarea { appearance: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests appearance property with 'unset' keyword.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect appearance with CSS-wide keyword 'unset'",
  code: `
    a { appearance: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests appearance property with 'inherit' keyword.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect appearance with CSS-wide keyword 'inherit'",
  code: `
    .foo { appearance: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests appearance property when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.appearance',
  description: 'should not flag appearance inside @supports query for exact match',
  code: `
    @supports (appearance: none) { input { appearance: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests appearance property when guarded by an @supports query for a different value.
 */
testRule({
  featureId: 'properties.appearance',
  description: 'should flag appearance inside @supports query for different value',
  code: `
    @supports (appearance: auto) { input { appearance: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests appearance property with a CSS variable, as the resolved value is unknown statically.
 */
testRule({
  featureId: 'properties.appearance',
  description: 'should flag appearance property when using a CSS variable',
  code: `
    .foo { --my-app: none; appearance: var(--my-app); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple appearance declarations, including prefixed and unprefixed, in a single rule.
 */
testRule({
  featureId: 'properties.appearance',
  description: 'should detect multiple appearance declarations in one rule',
  code: `
    a { -webkit-appearance: none; -moz-appearance: button-bevel; appearance: none; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the usage of appearance: base-select on the ::picker pseudo-element.
 */
testRule({
  featureId: 'properties.appearance',
  description: 'should detect appearance: base-select on ::picker(select) pseudo-element',
  code: `
    ::picker(select) { appearance: base-select; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that appearance: none is detected when used to remove native styling and custom styles are applied.
 */
testRule({
  featureId: 'properties.appearance',
  description: 'should detect appearance: none combined with custom styles on checkbox',
  code: `
    input[type="checkbox"] {\n  appearance: none;\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  background: red;\n}\ninput[type="checkbox"]:checked {\n  border-radius: 50%;\n  background: green;\n}
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests appearance property on a div element, which is not typically a widget.
 */
testRule({
  featureId: 'properties.appearance',
  description: 'should detect appearance on a non-widget element like div',
  code: `
    div { appearance: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of appearance: none on an input element with varied line/column position.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect unprefixed appearance with 'none' value at different position",
  code: `
      .foo {\n    appearance: none;\n  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of -webkit-appearance: none with varied line/column position.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect -webkit-appearance with 'none' value at different position",
  code: `
      .bar {\n    -webkit-appearance: none;\n  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests a rule with both unprefixed and -moz-prefixed appearance declarations.
 */
testRule({
  featureId: 'properties.appearance',
  description: 'should detect unprefixed and -moz-prefixed appearance, resulting in two warnings',
  code: `
    \n.foo {\n  appearance: auto;\n  -moz-appearance: textfield;\n}\n
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of appearance property on a textarea element.
 */
testRule({
  featureId: 'properties.appearance',
  description: 'should detect unprefixed appearance on a textarea',
  code: `
    textarea { appearance: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests -webkit-appearance with a non-standard value 'attachment'.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect -webkit-appearance with non-standard 'attachment' value",
  code: `
    a { -webkit-appearance: attachment; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -moz-appearance with a non-standard value 'checkbox-container'.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect -moz-appearance with non-standard 'checkbox-container' value",
  code: `
    div { -moz-appearance: checkbox-container; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -webkit-appearance with a non-standard value 'media-slider'.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect -webkit-appearance with non-standard 'media-slider' value",
  code: `
    input[type="range"] { -webkit-appearance: media-slider; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -moz-appearance with a non-standard value 'progressbar-vertical'.
 */
testRule({
  featureId: 'properties.appearance',
  description: "should detect -moz-appearance with non-standard 'progressbar-vertical' value",
  code: `
    progress { -moz-appearance: progressbar-vertical; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests multiple appearance declarations on different lines, including prefixed and unprefixed, in a single rule.
 */
testRule({
  featureId: 'properties.appearance',
  description:
    'should detect multiple appearance declarations on different lines with different prefixes',
  code: `
    \n.foo {\n  -webkit-appearance: none;\n  appearance: auto;\n  -ms-appearance: none;\n}\n
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 1 },
});
