/* AUTO_GENERATED: true */

/* 
feature: properties.animation-timing-function.jump
docs: https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
spec: https://drafts.csswg.org/css-animations/#animation-timing-function
*/

import { testRule } from 'lib/testRule';

/**
 * Detects the 'jump-start' keyword within the 'steps()' function.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect unprefixed animation-timing-function with steps(..., jump-start)',
  code: `
    a { animation-timing-function: steps(4, jump-start); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'jump-end' keyword within the 'steps()' function.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect unprefixed animation-timing-function with steps(..., jump-end)',
  code: `
    a { animation-timing-function: steps(10, jump-end); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'jump-none' keyword within the 'steps()' function.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect unprefixed animation-timing-function with steps(..., jump-none)',
  code: `
    a { animation-timing-function: steps(20, jump-none); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'jump-both' keyword within the 'steps()' function.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect unprefixed animation-timing-function with steps(..., jump-both)',
  code: `
    a { animation-timing-function: steps(5, jump-both); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'jump-start' keyword within the 'steps()' function for vendor-prefixed properties.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description:
    'should detect vendor prefixed animation-timing-function with steps(..., jump-start)',
  code: `
    
          a {
              -webkit-animation-timing-function: steps(4, jump-start);
              -moz-animation-timing-function: steps(4, jump-start);
              animation-timing-function: steps(4, jump-start);
          }
          
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'jump-start' keyword when specified via the 'animation' shorthand property.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect jump value in animation shorthand',
  code: `
    a { animation: slide 3s steps(4, jump-start) infinite; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects the 'jump-end' keyword when specified inside an @keyframes rule.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect jump value in @keyframes animation-timing-function',
  code: `
    
          @keyframes foo {
              from {
                  opacity: 0;
                  animation-timing-function: steps(5, jump-end);
              }
              to {
                  opacity: 1;
              }
          }
          a { animation-name: foo; }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects multiple 'jump' keywords when comma-separated in animation-timing-function.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect multiple jump values in a single declaration',
  code: `
    a { animation-timing-function: steps(4, jump-start), steps(5, jump-both); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Detects multiple 'jump' keywords when comma-separated in animation shorthand.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect multiple jump values in animation shorthand',
  code: `
    a { animation: foo 1s steps(4, jump-start), bar 2s steps(5, jump-end); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Detects 'JuMp-sTaRt' keyword, assuming timing function keywords are case-insensitive.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect jump value with mixed casing',
  code: `
    a { animation-timing-function: steps(4, JUMp-sTaRt); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that 'start' is not flagged as a 'jump' value.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: "should not detect steps() with 'start' keyword (not a jump value)",
  code: `
    a { animation-timing-function: steps(6, start); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'end' is not flagged as a 'jump' value.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: "should not detect steps() with 'end' keyword (not a jump value)",
  code: `
    a { animation-timing-function: steps(8, end); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'linear' is not flagged.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should not detect linear animation-timing-function',
  code: `
    a { animation-timing-function: linear; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'step-start' is not flagged as a 'jump' value within steps().
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should not detect step-start (not a jump value in steps())',
  code: `
    a { animation-timing-function: step-start; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'step-end' is not flagged as a 'jump' value within steps().
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should not detect step-end (not a jump value in steps())',
  code: `
    a { animation-timing-function: step-end; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'jump' values are not flagged when used via a CSS variable, as the value cannot be resolved statically.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should not detect jump value when used with var()',
  code: `
    
          .foo {
              --jump-timing: jump-start;
              animation-timing-function: steps(4, var(--jump-timing));
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'initial' is not flagged as a 'jump' value within steps().
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should not detect initial keyword in steps() function',
  code: `
    a { animation-timing-function: steps(4, initial); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'jump-start' is not flagged when explicitly guarded by @supports (animation-timing-function: steps(4, jump-start)).
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should not detect jump value when guarded by exact @supports query',
  code: `
    
          @supports (animation-timing-function: steps(4, jump-start)) {
              a { animation-timing-function: steps(4, jump-start); }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures that 'jump-start' is flagged when the @supports query is for a different property.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect jump value when not guarded by non-matching @supports query',
  code: `
    
          @supports (display: flex) {
              a { animation-timing-function: steps(4, jump-start); }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures that 'jump-start' is only flagged when used as a value in the steps() function.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: "should not detect 'jump-start' keyword used directly (invalid syntax)",
  code: `
    a { animation-timing-function: jump-start; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects 'jump-end' keyword within comments and with varying whitespace.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect jump value with comments and varied whitespace',
  code: `
    
          /* Test comment */
          a {
              animation-timing-function: steps( /* steps function */ 10,  jump-end  ); /* end jump */
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Detects 'jump-none' in an empty rule.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should detect jump value in an empty rule',
  code: `
    .foo { animation-timing-function: steps(1, jump-none); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verifies two detections for 'jump-start' and 'jump-both' in separate rules.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: 'should include two warnings for different jump values in different rules',
  code: `
    
          .foo {
              animation-timing-function: steps(3, jump-start);
          }
          .bar {
              animation-timing-function: steps(7, jump-both);
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures that steps() without a second argument (which defaults to 'end') is not flagged for 'jump' feature.
 */
testRule({
  featureId: 'properties.animation-timing-function.jump',
  description: "should not detect steps() without explicit jump value (defaults to 'end')",
  code: `
    a { animation-timing-function: steps(5); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
