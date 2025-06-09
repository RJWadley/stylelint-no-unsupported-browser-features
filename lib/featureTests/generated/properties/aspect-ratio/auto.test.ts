/* AUTO_GENERATED: true */

/* 
feature: properties.aspect-ratio.auto
docs: https://developer.mozilla.org/docs/Web/CSS/aspect-ratio
spec: https://drafts.csswg.org/css-sizing-4/#valdef-aspect-ratio-auto
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the basic usage of 'aspect-ratio: auto' on a standard block element where width and height are implicitly 'auto'.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should detect aspect-ratio: auto on a non-replaced element',
  code: `
    .foo {
    aspect-ratio: auto;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests 'aspect-ratio: auto' specifically on an '<img>' element, which is a replaced element and behaves differently with 'auto'.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should detect aspect-ratio: auto on an img element',
  code: `
    img {
    aspect-ratio: auto;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests 'aspect-ratio: auto 1/1' on a non-replaced element where the ratio should be applied.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description:
    'should detect aspect-ratio: auto when combined with a ratio on a non-replaced element',
  code: `
    .foo {
    aspect-ratio: auto 1 / 1;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests 'aspect-ratio: auto 3/4' on an '<img>' element, where 'auto' might take precedence if the image has a natural aspect ratio.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should detect aspect-ratio: auto when combined with a ratio on an img element',
  code: `
    img {
    aspect-ratio: auto 3 / 4;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that only the 'auto' keyword is detected, not just any usage of the 'aspect-ratio' property.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should not detect when aspect-ratio has only a ratio value',
  code: `
    .bar {
    aspect-ratio: 16 / 9;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verifies that the checker correctly identifies and ignores usage within an exact '@supports' query.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should not flag aspect-ratio: auto when exactly guarded by @supports',
  code: `
    @supports (aspect-ratio: auto) {
    .foo {
      aspect-ratio: auto;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Checks for detection when the '@supports' query is for a different property, thus not guarding 'aspect-ratio: auto'.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description:
    'should flag aspect-ratio: auto when unguarded by irrelevant @supports (different property)',
  code: `
    @supports (display: flex) {
    .foo {
      aspect-ratio: auto;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Confirms detection when the '@supports' query is for the same property but a different value, which does not guard 'aspect-ratio: auto'.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should flag aspect-ratio: auto when unguarded by @supports (different value)',
  code: `
    @supports (aspect-ratio: 1 / 1) {
    .foo {
      aspect-ratio: auto;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that 'aspect-ratio' values using 'var()' are not flagged, as the resolved value cannot be determined statically for specific values.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should not flag aspect-ratio with a var() value',
  code: `
    .foo {
    --ar: auto;
    aspect-ratio: var(--ar);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * 'initial' keyword should not be flagged as it's not the literal 'auto' keyword, even if it resolves to 'auto'.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should not flag aspect-ratio: initial',
  code: `
    .foo {
    aspect-ratio: initial;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * 'unset' keyword should not be flagged.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should not flag aspect-ratio: unset',
  code: `
    .foo {
    aspect-ratio: unset;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests multiple 'aspect-ratio: auto' declarations within the same rule, ensuring all are counted and results in 2 warnings.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description:
    'should detect multiple occurrences in one rule at different positions and have 2 warnings',
  code: `
    .foo {
    aspect-ratio: auto;
    width: 100%;
    aspect-ratio: auto 1 / 1;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests multiple 'aspect-ratio: auto' declarations across separate rules, ensuring all are counted.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should detect multiple occurrences across different rules',
  code: `
    .foo { aspect-ratio: auto; }
  .bar { aspect-ratio: auto 16 / 9; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Verifies that the 'auto' keyword is detected regardless of its casing.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should detect aspect-ratio with mixed case for auto',
  code: `
    .foo {
    aspect-ratio: AuTo;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection when 'aspect-ratio: auto' is used within a pseudo-class, which shares the parent's context.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should detect aspect-ratio: auto inside a pseudo-class',
  code: `
    .foo {
    &:hover {
      aspect-ratio: auto;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection when 'aspect-ratio: auto' is used within a pseudo-element. The detection should occur as 'auto' applies based on being a replaced element or not, rather than a display context.
 */
testRule({
  featureId: 'properties.aspect-ratio.auto',
  description: 'should detect aspect-ratio: auto inside a pseudo-element',
  code: `
    .foo {
    &::before {
      content: "";
      aspect-ratio: auto;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
