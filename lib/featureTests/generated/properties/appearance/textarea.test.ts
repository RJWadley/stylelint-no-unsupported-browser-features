/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.textarea
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-textarea
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of unprefixed appearance: textarea on a textarea element.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag unprefixed appearance: textarea on textarea element',
  code: `
    textarea {
    appearance: textarea;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of unprefixed appearance: textarea on a non-textarea element. The feature refers to the property-value pair, not element type.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag unprefixed appearance: textarea on a div element',
  code: `
    div {
    appearance: textarea;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests usage of -webkit-appearance: textarea, a common vendor-prefixed form for this value.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag -webkit-appearance: textarea',
  code: `
    .foo {
    -webkit-appearance: textarea;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of -moz-appearance: textarea, for comprehensive vendor prefix coverage.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag -moz-appearance: textarea',
  code: `
    .bar {
    -moz-appearance: textarea;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of -ms-appearance: textarea, for comprehensive vendor prefix coverage.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag -ms-appearance: textarea',
  code: `
    #baz {
    -ms-appearance: textarea;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests usage of -o-appearance: textarea, for comprehensive vendor prefix coverage.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag -o-appearance: textarea',
  code: `
    a {
    -o-appearance: textarea;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests a combination of unprefixed and vendor-prefixed appearance: textarea declarations within a single rule.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag multiple prefixed and unprefixed appearances in one rule',
  code: `
    .qux {
    appearance: textarea;
    -webkit-appearance: textarea;
    -moz-appearance: textarea;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'appearance' with a CSS variable is not flagged, as the rule targets a specific keyword value 'textarea'.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should not flag when value is var()',
  code: `
    textarea {
    appearance: var(--custom-value);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the standard 'auto' keyword for 'appearance' is not flagged.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should not flag appearance: auto',
  code: `
    textarea {
    appearance: auto;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the standard 'none' keyword for 'appearance' is not flagged.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should not flag appearance: none',
  code: `
    textarea {
    appearance: none;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that other supported compatibility values for 'appearance' (e.g., 'menulist-button') are not flagged.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should not flag other valid <compat-auto> values like menulist-button',
  code: `
    select {
    appearance: menulist-button;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that other supported compatibility values for 'appearance' (e.g., 'textfield') are not flagged.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should not flag other valid <compat-auto> values like textfield',
  code: `
    input {
    appearance: textfield;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that new standard values for 'appearance' (e.g., 'base-select') are not flagged.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should not flag other standard values like base-select',
  code: `
    select {
    appearance: base-select;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'appearance: textarea' is not flagged when explicitly guarded by a matching @supports query.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should not flag when guarded by @supports for exact property and value',
  code: `
    @supports (appearance: textarea) {
    .foo {
      appearance: textarea;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that '-webkit-appearance: textarea' is not flagged when explicitly guarded by a matching @supports query.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description:
    'should not flag when -webkit-appearance is guarded by @supports for exact property and value',
  code: `
    @supports (-webkit-appearance: textarea) {
    .foo {
      -webkit-appearance: textarea;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'appearance: textarea' is flagged even when guarded by a non-matching @supports query for the same property.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag when not guarded by @supports for a different value',
  code: `
    @supports (appearance: auto) {
    .foo {
      appearance: textarea;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'appearance: textarea' is flagged when guarded by an @supports query checking an unrelated property.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag when not guarded by @supports for an irrelevant property',
  code: `
    @supports (display: flex) {
    .foo {
      appearance: textarea;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that appearance: textarea is flagged even with comments and varying indentation/line breaks.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag with comments and varying line/column positions',
  code: `
    /* top comment */
  .some-class {
    /* middle comment */
    appearance: /* inline comment */ textarea;
    -webkit-appearance: textarea; /* another inline comment */
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that appearance: textarea is flagged regardless of the case of the value.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag when property value is case-insensitive (TEXTAREA)',
  code: `
    input {
    appearance: TEXTAREA;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of two separate 'appearance: textarea' warnings within the same rule.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag two warnings in a single rule block',
  code: `
    .two-warnings {
    appearance: textarea;
    -webkit-appearance: textarea;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'appearance: textarea' is flagged when used within a pseudo-class, as it applies to the same element.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag when inside a pseudo-class selector (same element context)',
  code: `
    a:hover {
    appearance: textarea;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'appearance: textarea' is flagged when used on a pseudo-element, as the feature check is for the property-value pair.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag when inside a pseudo-element selector (new element context)',
  code: `
    a::before {
    appearance: textarea;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'appearance: textarea' is flagged when used on a descendant element, as the feature check is for the property-value pair.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should flag when inside a descendant selector (new element context)',
  code: `
    .parent .child {
    appearance: textarea;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'initial' keyword for 'appearance' is not flagged.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should not flag CSS-wide keyword initial',
  code: `
    textarea {
    appearance: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'unset' keyword for 'appearance' is not flagged.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should not flag CSS-wide keyword unset',
  code: `
    textarea {
    appearance: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'inherit' keyword for 'appearance' is not flagged.
 */
testRule({
  featureId: 'properties.appearance.textarea',
  description: 'should not flag CSS-wide keyword inherit',
  code: `
    textarea {
    appearance: inherit;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
