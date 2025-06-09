/* AUTO_GENERATED: true */

/* 
feature: properties.alignment-baseline.mathematical
docs: https://developer.mozilla.org/docs/Web/CSS/alignment-baseline
spec: https://drafts.csswg.org/css-inline/#alignment-baseline-property
*/

import { testRule } from 'lib/testRule';

/**
 * Should detect alignment-baseline: mathematical as unsupported in a basic rule.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should detect basic problematic usage',
  code: `
    a {
    alignment-baseline: mathematical;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect multiple instances of alignment-baseline: mathematical in a single rule.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should detect multiple problematic usages in one rule',
  code: `
    .foo {
    alignment-baseline: mathematical;
    color: red;
    alignment-baseline: mathematical; /* duplicate */
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Should detect alignment-baseline: mathematical with an ID selector and different property order.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should detect problematic usage with different selector and property order',
  code: `
    #bar {
    color: red;
    alignment-baseline: mathematical;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect alignment-baseline: mathematical inside a media query.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should detect problematic usage within @media query',
  code: `
    @media (min-width: 400px) {
    a {
      alignment-baseline: mathematical;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect alignment-baseline: mathematical in a pseudo-class.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should detect problematic usage in a pseudo-class (same element context)',
  code: `
    a:hover {
    alignment-baseline: mathematical;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect alignment-baseline: mathematical in a child selector.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should detect problematic usage in a child selector (new element context)',
  code: `
    .foo {
    & .bar {
      alignment-baseline: mathematical;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect alignment-baseline: mathematical in a pseudo-element.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should detect problematic usage in a pseudo-element (new element context)',
  code: `
    .foo {
    &::before {
      alignment-baseline: mathematical;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should produce two warnings for separate rules.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should detect two warnings in one file',
  code: `
    a { alignment-baseline: mathematical; }
  b { alignment-baseline: mathematical; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Should not flag other valid alignment-baseline values.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should not flag other valid alignment-baseline values',
  code: `
    .foo {
    alignment-baseline: baseline;
  }
  .bar {
    alignment-baseline: alphabetic;
  }
  .baz {
    alignment-baseline: middle;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag alignment-baseline: mathematical when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should not flag guarded usage in @supports',
  code: `
    @supports (alignment-baseline: mathematical) {
    .foo {
      alignment-baseline: mathematical;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag alignment-baseline when its value is a CSS variable (specific value feature).
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should not flag usage with CSS variables',
  code: `
    .foo {
    --align-base: mathematical;
    alignment-baseline: var(--align-base);
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag alignment-baseline: mathematical within CSS comments.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should not flag usage in comments',
  code: `
    /* alignment-baseline: mathematical; */
  .foo { /* alignment-baseline: mathematical; */ }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag CSS-wide keywords for alignment-baseline.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should not flag CSS-wide keywords',
  code: `
    .foo {
    alignment-baseline: initial;
  }
  .bar {
    alignment-baseline: unset;
  }
  .baz {
    alignment-baseline: revert;
  }
  .qux {
    alignment-baseline: revert-layer;
  }
  .corge {
    alignment-baseline: inherit;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag an empty rule.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should not flag an empty rule',
  code: `
    .foo {}
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not flag 'mathematical' if it's not on the alignment-baseline property.
 */
testRule({
  featureId: 'properties.alignment-baseline.mathematical',
  description: 'should not flag non-matching property',
  code: `
    .foo {
    foo-bar-baz: mathematical;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
