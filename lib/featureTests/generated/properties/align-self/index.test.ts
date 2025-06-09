/* AUTO_GENERATED: true */

/* 
feature: properties.align-self
docs: https://developer.mozilla.org/docs/Web/CSS/align-self
spec: https://drafts.csswg.org/css-align/#align-self-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests detection of align-self with various common and flex-specific values in a flex container context.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should detect align-self with common values in flex context',
  code: `
    .foo {
    display: flex;
    align-self: center;
    align-self: stretch;
    align-self: flex-start;
    align-self: flex-end;
    align-self: self-start;
    align-self: self-end;
    align-self: auto;
    align-self: normal;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 8 },
});

/**
 * Tests detection of align-self with various common values in a grid container context.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should detect align-self with common values in grid context',
  code: `
    .foo {
    display: grid;
    align-self: center;
    align-self: stretch;
    align-self: start;
    align-self: end;
    align-self: auto;
    align-self: normal;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 6 },
});

/**
 * Tests detection of align-self with various common values for an absolutely-positioned box.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should detect align-self with common values for absolutely-positioned boxes',
  code: `
    .foo {
    position: absolute;
    align-self: center;
    align-self: stretch;
    align-self: start;
    align-self: end;
    align-self: auto;
    align-self: normal;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 6 },
});

/**
 * Verifies that align-self is NOT detected when applied to block-level boxes (explicit or implicit), as the property does not apply in this context.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should not detect align-self on block-level boxes',
  code: `
    .foo {
    display: block; /* Explicit block context */
    align-self: center;
  }
  .bar { /* Implicit block context */
    align-self: end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection of align-self with 'baseline', 'first baseline', and 'last baseline' values.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should detect align-self with baseline alignment values',
  code: `
    .foo {
    display: flex;
    align-self: baseline;
    align-self: first baseline;
    align-self: last baseline;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests detection of align-self with 'safe' and 'unsafe' positional keywords.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should detect align-self with safe and unsafe keywords',
  code: `
    .foo {
    display: grid;
    align-self: safe center;
    align-self: unsafe start;
    align-self: safe end;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests detection of align-self with various vendor prefixes and an unprefixed fallback.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should detect align-self with vendor prefixes',
  code: `
    .foo {
    display: flex;
    -webkit-align-self: center;
    -moz-align-self: flex-start;
    -ms-align-self: end;
    -o-align-self: stretch;
    align-self: auto;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 1 },
});

/**
 * Verifies that align-self is NOT detected when it is exactly guarded by an @supports query with the same property and value, including prefixed versions.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should not detect align-self when exactly guarded by @supports',
  code: `
    @supports (align-self: center) {
    .foo {
      display: flex;
      align-self: center;
    }
  }
  @supports (-webkit-align-self: flex-start) {
    .bar {
      display: flex;
      -webkit-align-self: flex-start;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-self is detected when the @supports query is for a different property, or the same property with a different value or prefix.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should detect align-self when not exactly guarded by @supports',
  code: `
    @supports (display: flex) {
    .foo {
      align-self: center; /* should be detected, different property in @supports */
    }
  }
  @supports (align-self: start) {
    .bar {
      align-self: end; /* should be detected, different value in @supports */
    }
  }
  @supports (-moz-align-self: flex-end) {
    .baz {
      -webkit-align-self: stretch; /* should be detected, different prefix/value in @supports */
    }
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Verifies that align-self is detected when its value is a CSS variable, as the feature being tested is the property itself.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should detect align-self when value is a CSS variable',
  code: `
    .foo {
    display: flex;
    --align-value: center;
    align-self: var(--align-value);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-self with CSS-wide keywords are NOT detected, as these are universally supported and do not indicate a problem with the property itself.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should not detect align-self with CSS-wide keywords',
  code: `
    .foo {
    display: flex;
    align-self: initial;
    align-self: inherit;
    align-self: unset;
    align-self: revert;
    align-self: revert-layer;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests multiple instances of align-self across different rules and contexts, ensuring all applicable usages are detected with varying line/column positions.
 */
testRule({
  featureId: 'properties.align-self',
  description: 'should detect multiple align-self instances with varying positions and contexts',
  code: `
    .container-grid {
    display: grid;
    align-self: start; /* first detection */
  }
  .container-flex {
    display: flex;
    align-self: end; /* second detection on new line */
  }
  .item-center {
    position: absolute;
    align-self: center;
  }
  .item-stretch { align-self: stretch;
  }
  
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 4 },
});
