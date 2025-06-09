/* AUTO_GENERATED: true */

/* 
feature: properties.animation-name
docs: https://developer.mozilla.org/docs/Web/CSS/animation-name
spec: https://drafts.csswg.org/css-animations/#animation-name
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of animation-name with a valid custom identifier.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag a single unprefixed animation-name with custom-ident',
  code: `
    a { animation-name: slidein; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of animation-name with a valid string identifier.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag a single unprefixed animation-name with string',
  code: `
    a { animation-name: "my-animation"; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple animation names in a comma-separated list.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag multiple unprefixed animation-names',
  code: `
    a { animation-name: fade, bounce, 'spin'; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name set to 'none', which is a valid value.
 */
testRule({
  featureId: 'properties.animation-name',
  description: "should flag animation-name with 'none' keyword",
  code: `
    a { animation-name: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests a mix of valid animation names and the 'none' keyword.
 */
testRule({
  featureId: 'properties.animation-name',
  description: "should flag animation-name with a mix of custom-ident and 'none'",
  code: `
    a { animation-name: myAnimation, none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests -webkit-prefixed animation-name.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag -webkit-prefixed animation-name',
  code: `
    a { -webkit-animation-name: slidein; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -moz-prefixed animation-name.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag -moz-prefixed animation-name',
  code: `
    a { -moz-animation-name: fadeout; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -ms-prefixed animation-name.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag -ms-prefixed animation-name',
  code: `
    a { -ms-animation-name: grow; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -o-prefixed animation-name.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag -o-prefixed animation-name',
  code: `
    a { -o-animation-name: shrink; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests a combination of unprefixed and vendor-prefixed animation-name properties.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag animation-name with mixed prefixes and unprefixed',
  code: `
    
          a {
            animation-name: myAnim;
            -webkit-animation-name: webkitAnim;
            -moz-animation-name: mozAnim;
          }
          
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name inside a rule that sets a display context.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag animation-name within a rule with display context',
  code: `
    
          .foo {
            display: block;
            animation-name: show;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name inside an @supports query that exactly matches the property and value, expecting it to be guarded (count: 0).
 */
testRule({
  featureId: 'properties.animation-name',
  description:
    'should flag animation-name within @supports query with exact match (should be guarded)',
  code: `
    
          @supports (animation-name: fadein) {
            .foo {
              animation-name: fadein;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-name inside an @supports query for a different property, expecting it to be flagged (count: 1).
 */
testRule({
  featureId: 'properties.animation-name',
  description:
    'should flag animation-name within @supports query with different property (not guarded)',
  code: `
    
          @supports (display: flex) {
            .foo {
              animation-name: slide;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name inside an @supports query for the same property but a different value, expecting it to be flagged (count: 1).
 */
testRule({
  featureId: 'properties.animation-name',
  description:
    'should flag animation-name within @supports query with different value (not guarded)',
  code: `
    
          @supports (animation-name: otherAnim) {
            .foo {
              animation-name: myAnim;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name with a CSS variable as its value. Since the property is flagged in general, this should count.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag animation-name when value is a CSS variable',
  code: `
    
          .foo {
            --my-animation: slide;
            animation-name: var(--my-animation);
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name with 'initial' keyword used as an unquoted custom-ident, which is invalid syntax for a custom-ident.
 */
testRule({
  featureId: 'properties.animation-name',
  description: "should flag animation-name with 'initial' as unquoted custom-ident",
  code: `
    a { animation-name: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name with 'unset' keyword used as an unquoted custom-ident, which is invalid syntax for a custom-ident.
 */
testRule({
  featureId: 'properties.animation-name',
  description: "should flag animation-name with 'unset' as unquoted custom-ident",
  code: `
    a { animation-name: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name with 'inherit' keyword used as an unquoted custom-ident, which is invalid syntax for a custom-ident.
 */
testRule({
  featureId: 'properties.animation-name',
  description: "should flag animation-name with 'inherit' as unquoted custom-ident",
  code: `
    a { animation-name: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name with 'initial' as a quoted string, which is valid syntax.
 */
testRule({
  featureId: 'properties.animation-name',
  description: "should NOT flag animation-name with 'initial' as a quoted string",
  code: `
    a { animation-name: "initial"; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name with 'unset' as a quoted string, which is valid syntax.
 */
testRule({
  featureId: 'properties.animation-name',
  description: "should NOT flag animation-name with 'unset' as a quoted string",
  code: `
    a { animation-name: "unset"; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name with 'inherit' as a quoted string, which is valid syntax.
 */
testRule({
  featureId: 'properties.animation-name',
  description: "should NOT flag animation-name with 'inherit' as a quoted string",
  code: `
    a { animation-name: "inherit"; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name with a custom identifier that starts with a digit, which is invalid.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag animation-name with invalid custom-ident (starts with digit)',
  code: `
    a { animation-name: 123slide; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name with a custom identifier that starts with two dashes, which is invalid.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag animation-name with invalid custom-ident (starts with two dashes)',
  code: `
    a { animation-name: --my-anim; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name with a custom identifier that starts with an underscore, which is invalid because the first non-dash character must be a letter.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag animation-name with invalid custom-ident (starts with underscore)',
  code: `
    a { animation-name: _foo; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-name within a CSS comment is not flagged.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should not flag animation-name in comment',
  code: `
    /* animation-name: hidden; */
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-name with excessive whitespace is still flagged.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag animation-name with extra whitespace',
  code: `
    a { animation-name :  myAnim  ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name with a mixed-case custom identifier, which is valid as names are case-sensitive.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag animation-name with mixed case (case-sensitive)',
  code: `
    a { animation-name: MyAnimation; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name within a nested pseudo-class, which is considered the same display context.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag animation-name within nested rule (pseudo-class)',
  code: `
    
          .foo {
            display: flex;
            &:hover {
              animation-name: hoverAnim;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name within a nested child selector, which introduces a new element and should not inherit the parent's display context.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should NOT flag animation-name within nested rule (child selector)',
  code: `
    
          .foo {
            display: flex;
            & .bar {
              animation-name: childAnim;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-name within a nested pseudo-element, which is a new element and should not inherit the parent's display context.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should NOT flag animation-name within nested rule (pseudo-element)',
  code: `
    
          .foo {
            display: flex;
            &::before {
              animation-name: beforeAnim;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests a rule with two animation-name declarations to ensure two warnings are generated if both are detected as problems.
 */
testRule({
  featureId: 'properties.animation-name',
  description: 'should flag two animation-name properties in one rule (two warnings)',
  code: `
    
      .multi-anim {
        animation-name: anim1;
        -webkit-animation-name: anim2;
      }
      
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
