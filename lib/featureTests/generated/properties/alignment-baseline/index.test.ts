/* AUTO_GENERATED: true */

/* 
feature: properties.alignment-baseline
docs: https://developer.mozilla.org/docs/Web/CSS/alignment-baseline
spec: https://drafts.csswg.org/css-inline/#alignment-baseline-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests if the 'baseline' value for alignment-baseline property is flagged when unsupported.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with value baseline',
  code: `
    a { alignment-baseline: baseline; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the 'alphabetic' value for alignment-baseline property is flagged when unsupported.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with value alphabetic',
  code: `
    a { alignment-baseline: alphabetic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the 'central' value for alignment-baseline property is flagged when unsupported.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with value central',
  code: `
    a { alignment-baseline: central; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the 'ideographic' value for alignment-baseline property is flagged when unsupported.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with value ideographic',
  code: `
    a { alignment-baseline: ideographic; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the 'mathematical' value for alignment-baseline property is flagged when unsupported.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with value mathematical',
  code: `
    a { alignment-baseline: mathematical; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the 'middle' value for alignment-baseline property is flagged when unsupported.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with value middle',
  code: `
    a { alignment-baseline: middle; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the 'text-bottom' value for alignment-baseline property is flagged when unsupported.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with value text-bottom',
  code: `
    a { alignment-baseline: text-bottom; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the 'text-top' value for alignment-baseline property is flagged when unsupported.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with value text-top',
  code: `
    a { alignment-baseline: text-top; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the alignment-baseline property is flagged when used with a CSS-wide keyword 'initial', assuming the property is unsupported in general.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with CSS-wide keyword initial',
  code: `
    a { alignment-baseline: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the alignment-baseline property is flagged when used with a CSS-wide keyword 'inherit', assuming the property is unsupported in general.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with CSS-wide keyword inherit',
  code: `
    a { alignment-baseline: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the alignment-baseline property is flagged when used with a CSS-wide keyword 'unset', assuming the property is unsupported in general.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with CSS-wide keyword unset',
  code: `
    a { alignment-baseline: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the alignment-baseline property is flagged when used with a CSS-wide keyword 'revert', assuming the property is unsupported in general.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with CSS-wide keyword revert',
  code: `
    a { alignment-baseline: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the alignment-baseline property is flagged when used with a CSS-wide keyword 'revert-layer', assuming the property is unsupported in general.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with CSS-wide keyword revert-layer',
  code: `
    a { alignment-baseline: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests if the alignment-baseline property is flagged when its value is a CSS variable, as the property itself is generally unsupported in the target browser.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with a CSS variable',
  code: `
    
      .foo {
          --my-baseline: baseline;
          alignment-baseline: var(--my-baseline);
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that alignment-baseline with an invalid keyword is not flagged by this rule (it's a syntax error, not a browser support issue for this specific feature).
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should not flag alignment-baseline with an invalid value',
  code: `
    a { alignment-baseline: invalid-value; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the deprecated 'auto' value (not in current CSS spec for this property) is not flagged as an unsupported feature, but rather as a syntax error for the property itself.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description:
    "should not flag deprecated 'auto' value for alignment-baseline (considered invalid for CSS prop)",
  code: `
    a { alignment-baseline: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the deprecated 'hanging' value (not in current CSS spec for this property, belongs to dominant-baseline) is not flagged as an unsupported feature.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description:
    "should not flag deprecated 'hanging' value for alignment-baseline (not in CSS spec for this prop)",
  code: `
    a { alignment-baseline: hanging; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that the legacy SVG 'text-before-edge' value is not flagged as an unsupported CSS feature.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description:
    "should not flag legacy SVG 'text-before-edge' value (not in CSS spec for this prop)",
  code: `
    a { alignment-baseline: text-before-edge; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that a -webkit-prefixed alignment-baseline is not flagged (it's not a standard property and should be ignored or linted by other rules).
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should not flag -webkit-alignment-baseline',
  code: `
    a { -webkit-alignment-baseline: baseline; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that a -moz-prefixed alignment-baseline is not flagged.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should not flag -moz-alignment-baseline',
  code: `
    a { -moz-alignment-baseline: baseline; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that a -ms-prefixed alignment-baseline is not flagged.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should not flag -ms-alignment-baseline',
  code: `
    a { -ms-alignment-baseline: baseline; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that an -o-prefixed alignment-baseline is not flagged.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should not flag -o-alignment-baseline',
  code: `
    a { -o-alignment-baseline: baseline; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline is not flagged when explicitly guarded by a matching @supports query.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should not flag alignment-baseline when guarded by exact @supports',
  code: `
    
      @supports (alignment-baseline: baseline) {
          a { alignment-baseline: baseline; }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that alignment-baseline is flagged when guarded by @supports for a different property.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline when @supports guards different property',
  code: `
    
      @supports (display: flex) {
          a { alignment-baseline: baseline; }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that alignment-baseline is flagged when guarded by @supports for the same property but a different value.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description:
    'should flag alignment-baseline when @supports guards same property but different value',
  code: `
    
      @supports (alignment-baseline: alphabetic) {
          a { alignment-baseline: baseline; }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline within a flex container rule.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline in display: flex context',
  code: `
    
      .foo {
          display: flex;
          alignment-baseline: middle;
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline within a grid container rule.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline in display: grid context',
  code: `
    
      .bar {
          display: grid;
          alignment-baseline: central;
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline within an inline-block rule.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline in display: inline-block context',
  code: `
    
      .baz {
          display: inline-block;
          alignment-baseline: text-top;
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline within a table-cell rule.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline in display: table-cell context',
  code: `
    
      .qux {
          display: table-cell;
          alignment-baseline: text-bottom;
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline within a nested pseudo-class, which should retain the parent's context.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline within nested pseudo-class (same element)',
  code: `
    
      .foo {
          display: flex;
          &:hover {
              alignment-baseline: alphabetic;
          }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests alignment-baseline within a nested child selector, which creates a new element and does not inherit the parent's context.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should not flag alignment-baseline within nested child selector (new element)',
  code: `
    
      .foo {
          display: flex;
          & .bar {
              alignment-baseline: alphabetic;
          }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests alignment-baseline within a nested pseudo-element, which creates a new element and does not inherit the parent's context.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should not flag alignment-baseline within nested pseudo-element (new element)',
  code: `
    
      .foo {
          display: flex;
          &::before {
              alignment-baseline: alphabetic;
          }
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that multiple alignment-baseline declarations in one rule are flagged correctly.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag multiple alignment-baseline declarations',
  code: `
    
      a {
          alignment-baseline: baseline;
          alignment-baseline: alphabetic;
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that alignment-baseline property is flagged even with comments present.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should flag alignment-baseline with comments',
  code: `
    a { /* comment */ alignment-baseline: middle; /* another comment */ }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that two separate instances of the alignment-baseline property in different rules are both flagged.
 */
testRule({
  featureId: 'properties.alignment-baseline',
  description: 'should have two warnings for two alignment-baseline properties in different rules',
  code: `
    
      .one {
          alignment-baseline: baseline;
      }
      .two {
          alignment-baseline: alphabetic;
      }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});
