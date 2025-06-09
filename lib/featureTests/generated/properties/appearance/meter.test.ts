/* AUTO_GENERATED: true */

/* 
feature: properties.appearance.meter
docs: https://developer.mozilla.org/docs/Web/CSS/appearance
spec: https://drafts.csswg.org/css-ui-4/#valdef-appearance-meter
*/

import { testRule } from 'lib/testRule';

/**
 * Should detect unprefixed `appearance: meter` on a `<meter>` element.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should detect appearance: meter on meter element',
  code: `
    meter {
    appearance: meter;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not detect `appearance: meter` on a non-`<meter>` element as it doesn't apply the 'meter' appearance.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should not detect appearance: meter on non-meter element',
  code: `
    div {
    appearance: meter;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect `-webkit-appearance: meter` on a `<meter>` element.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should detect -webkit-appearance: meter on meter element',
  code: `
    meter {
    -webkit-appearance: meter;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect `-moz-appearance: meter` for the `properties.appearance.meter` feature, as 'meter' is not a standard or widely supported `-moz-appearance` value for the 'meter' widget.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should not detect -moz-appearance: meter for meter feature',
  code: `
    meter {
    -moz-appearance: meter;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect `appearance: auto` on a `<meter>` element as `meter` is equivalent to `auto`.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should detect appearance: auto on meter element (equivalent to meter)',
  code: `
    meter {
    appearance: auto;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not detect `appearance: none` on a `<meter>` element.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should not detect appearance: none on meter element',
  code: `
    meter {
    appearance: none;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect `appearance: initial` on a `<meter>` element (resolves to `none`).
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should not detect appearance: initial on meter element',
  code: `
    meter {
    appearance: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect `appearance` with `var()` as value, as the specific value `meter` is being tested.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should not detect appearance with var() for specific value',
  code: `
    meter {
    --my-appearance: meter;
    appearance: var(--my-appearance);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should be guarded by `@supports (appearance: meter)`.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should be guarded by exact @supports query',
  code: `
    @supports (appearance: meter) {
    meter {
      appearance: meter;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should NOT be guarded by `@supports (appearance: auto)`.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should not be guarded by non-exact @supports query',
  code: `
    @supports (appearance: auto) {
    meter {
      appearance: meter;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should be guarded by `@supports (-webkit-appearance: meter)`.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should be guarded by prefixed @supports query',
  code: `
    @supports (-webkit-appearance: meter) {
    meter {
      -webkit-appearance: meter;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensure multiple appearances are counted within the same rule.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should count multiple appearances in one rule',
  code: `
    meter {
    appearance: meter;
    -webkit-appearance: meter;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensure feature is detected in nested rules that target the same element (pseudo-class).
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should detect in nested pseudo-class rule',
  code: `
    meter {
    &:hover {
      appearance: meter;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensure comments do not interfere with detection.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should detect with comments',
  code: `
    meter {
    /* a comment */
    appearance: meter; /* another comment */
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensure case insensitivity is handled.
 */
testRule({
  featureId: 'properties.appearance.meter',
  description: 'should detect with case insensitivity',
  code: `
    meter {
    Appearance: METER;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
