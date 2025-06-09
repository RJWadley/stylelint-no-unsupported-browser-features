/* AUTO_GENERATED: true */

/* 
feature: properties.animation-range-end
docs: https://developer.mozilla.org/docs/Web/CSS/animation-range-end
spec: https://drafts.csswg.org/scroll-animations/#animation-range-end
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the basic usage of animation-range-end with 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: "should flag animation-range-end with 'normal' value",
  code: `
    a { animation-range-end: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end with a percentage value.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range-end with percentage value',
  code: `
    a { animation-range-end: 50%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end with a pixel length value.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range-end with length value',
  code: `
    a { animation-range-end: 100px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end with the 'cover' named timeline range.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: "should flag animation-range-end with 'cover' named range",
  code: `
    a { animation-range-end: cover; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end with 'contain' named timeline range and a percentage offset.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: "should flag animation-range-end with 'contain' named range and percentage",
  code: `
    a { animation-range-end: contain 25%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end with 'exit' named timeline range and a pixel length offset.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: "should flag animation-range-end with 'exit' named range and length",
  code: `
    a { animation-range-end: exit 75px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests -webkit-prefixed version of animation-range-end.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag -webkit-animation-range-end',
  code: `
    a { -webkit-animation-range-end: normal; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -moz-prefixed version of animation-range-end.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag -moz-animation-range-end',
  code: `
    a { -moz-animation-range-end: 10%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -ms-prefixed version of animation-range-end.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag -ms-animation-range-end',
  code: `
    a { -ms-animation-range-end: contain; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -o-prefixed version of animation-range-end.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag -o-animation-range-end',
  code: `
    a { -o-animation-range-end: entry 50%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests a combination of unprefixed and prefixed animation-range-end properties.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag all animation-range-end usages including prefixed and unprefixed',
  code: `
    
        .foo {
          animation-range-end: normal;
          -webkit-animation-range-end: 10%;
          -moz-animation-range-end: cover;
        }
      
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-range shorthand when both start and end ranges are provided, which implies animation-range-end.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range shorthand implying animation-range-end with two values',
  code: `
    a { animation-range: entry 10% exit 90%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-range shorthand with only the start range, where animation-range-end defaults to 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description:
    'should flag animation-range shorthand implying animation-range-end with one value (start only)',
  code: `
    a { animation-range: 10%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-range shorthand with only a named range, where animation-range-end defaults to 100% of that named range.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description:
    'should flag animation-range shorthand implying animation-range-end with named range only',
  code: `
    a { animation-range: entry; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-range shorthand with two named ranges, where animation-range-end is explicitly set by the second named range.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range shorthand with two named ranges',
  code: `
    a { animation-range: entry exit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end with the 'initial' CSS-wide keyword. This property itself is the feature.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: "should flag animation-range-end with 'initial' keyword",
  code: `
    a { animation-range-end: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end with the 'unset' CSS-wide keyword. This property itself is the feature.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: "should flag animation-range-end with 'unset' keyword",
  code: `
    a { animation-range-end: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end when its value is a CSS variable, as the property itself is the feature.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range-end with a CSS variable',
  code: `
    
        .foo {
          --my-range: 100px;
          animation-range-end: var(--my-range);
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end with an invalid keyword, which should result in a parsing error, hence no feature count.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: "should not flag animation-range-end with an unknown keyword as it's invalid CSS",
  code: `
    a { animation-range-end: foo; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-range-end with an invalid unit (e.g., degrees), which should result in a parsing error.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: "should not flag animation-range-end with incorrect unit as it's invalid CSS",
  code: `
    a { animation-range-end: 10deg; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-range-end inside an @supports block checking for a different property, thus it should be flagged.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description:
    'should flag animation-range-end when unguarded by @supports with different property',
  code: `
    
        @supports (display: flex) {
          .foo { animation-range-end: normal; }
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end inside an @supports block with an exact matching query, thus it should not be flagged.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should not flag animation-range-end when guarded by @supports with exact match',
  code: `
    
        @supports (animation-range-end: normal) {
          .foo { animation-range-end: normal; }
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-range-end inside an @supports block with an exact matching percentage query, thus it should not be flagged.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description:
    'should not flag animation-range-end when guarded by @supports with exact percentage match',
  code: `
    
        @supports (animation-range-end: 50%) {
          .foo { animation-range-end: 50%; }
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-range-end inside an @supports block with an exact named range query, thus it should not be flagged.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description:
    'should not flag animation-range-end when guarded by @supports with exact named range match',
  code: `
    
        @supports (animation-range-end: cover) {
          .foo { animation-range-end: cover; }
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-range-end inside an @supports block with an exact named range and percentage query, thus it should not be flagged.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description:
    'should not flag animation-range-end when guarded by @supports with exact named range and percentage match',
  code: `
    
        @supports (animation-range-end: contain 10px) {
          .foo { animation-range-end: contain 10px; }
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-range-end inside an @supports block with a query for the same property but a different value, thus it should be flagged.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description:
    'should flag animation-range-end when unguarded by @supports with same property but different value',
  code: `
    
        @supports (animation-range-end: 10%) {
          .foo { animation-range-end: 50%; }
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple occurrences of animation-range-end within a single block.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag multiple instances of animation-range-end',
  code: `
    
        .foo {
          animation-range-end: normal;
          animation-range-end: 100%;
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests case insensitivity for the property name.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag mixed case ANiMAtiON-RaNgE-EnD',
  code: `
    a { ANiMAtiON-RaNgE-EnD: normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests handling of comments and various whitespace around the property and value.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range-end with comments and excessive whitespace',
  code: `
    a { /* some comment */ animation-range-end : /* another comment */ normal /* final comment */ ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that properties with similar names but not 'animation-range-end' are not flagged.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should not flag other properties with similar names',
  code: `
    
        a {
          animation-duration: 1s;
          animation-name: foo;
          animation-range-start: normal; /* This is a related but different property */
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-range-end within a nested rule. The property itself is the feature.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range-end in nested rules',
  code: `
    
        .foo {
          &:hover {
            animation-range-end: 100%;
          }
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end within a nested rule that targets a new element. The property itself is the feature.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range-end in nested rule with new element',
  code: `
    
        .foo {
          &::before {
            animation-range-end: normal;
          }
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-range shorthand when it defines multiple ranges via comma separation, each implying animation-range-end.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range shorthand with multiple comma-separated ranges',
  code: `
    
        a {
          animation: anim1 1s, anim2 1s;
          animation-range: entry, exit;
        }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests a complex animation-range shorthand that combines percentage and named range values, implying animation-range-end.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range shorthand with mixed value types',
  code: `
    a { animation-range: 10% exit 90%; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end when its value uses the calc() function.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range-end with calc() function',
  code: `
    a { animation-range-end: calc(100% - 50px); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end when its value uses the calc() function within a named range.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should flag animation-range-end with calc() function within named range',
  code: `
    a { animation-range-end: cover calc(50% + 10px); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end with a named range followed by an invalid second value.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description:
    "should not flag animation-range-end with invalid second value for named range as it's invalid CSS",
  code: `
    a { animation-range-end: cover normal; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensure no false positives for properties that sound similar but are not animation-range-end.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: 'should not flag unrelated properties that do not match the feature exactly',
  code: `
    
          .foo {
            border-image-outset: 10px;
            grid-row-end: 2;
            mask-origin: border-box;
            text-underline-offset: 5px;
          }
      
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-range-end with the 'entry' named timeline range.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: "should flag animation-range-end with 'entry' named range",
  code: `
    a { animation-range-end: entry; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end with the 'entry-crossing' named timeline range.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: "should flag animation-range-end with 'entry-crossing' named range",
  code: `
    a { animation-range-end: entry-crossing; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-range-end with the 'exit-crossing' named timeline range.
 */
testRule({
  featureId: 'properties.animation-range-end',
  description: "should flag animation-range-end with 'exit-crossing' named range",
  code: `
    a { animation-range-end: exit-crossing; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
