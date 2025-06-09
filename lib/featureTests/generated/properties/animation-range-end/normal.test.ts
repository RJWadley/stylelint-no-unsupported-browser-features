
/* AUTO_GENERATED: true */

/* 
feature: properties.animation-range-end.normal
docs: https://developer.mozilla.org/docs/Web/CSS/animation-range-end
spec: https://drafts.csswg.org/scroll-animations/#valdef-animation-range-end-normal
*/
            
import { testRule } from "lib/testRule";


/**
 * Tests basic usage of 'animation-range-end: normal;'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect animation-range-end with normal keyword",
  code: `
    .foo { animation-range-end: normal; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range: normal;' which implies 'animation-range-end: normal;'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect normal when set via animation-range shorthand with a single normal value",
  code: `
    .foo { animation-range: normal; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range: entry normal;'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect normal when set as the second value in animation-range shorthand with named range start",
  code: `
    .foo { animation-range: entry normal; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range: 10% normal;'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect normal when set as the second value in animation-range shorthand with length-percentage start",
  code: `
    .foo { animation-range: 10% normal; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range-end: 100px;' is not 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should not detect when animation-range-end is a length value",
  code: `
    .foo { animation-range-end: 100px; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":0},
});
            


/**
 * Tests 'animation-range-end: 50%;' is not 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should not detect when animation-range-end is a percentage value",
  code: `
    .foo { animation-range-end: 50%; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":0},
});
            


/**
 * Tests 'animation-range-end: cover;' is not 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should not detect when animation-range-end is a timeline range name",
  code: `
    .foo { animation-range-end: cover; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":0},
});
            


/**
 * Tests 'animation-range-end: contain 70%;' is not 'normal'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should not detect when animation-range-end is a timeline range name with a percentage",
  code: `
    .foo { animation-range-end: contain 70%; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":0},
});
            


/**
 * Tests 'animation-range-end: normal;' when guarded by '@supports (animation-range-end: normal)'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should be guarded by @supports with exact property and value",
  code: `
    @supports (animation-range-end: normal) { .foo { animation-range-end: normal; } }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":0},
});
            


/**
 * Tests 'animation-range-end: normal;' when unguarded by '@supports (animation-range-end: 10px)'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should not be guarded by @supports with different value",
  code: `
    @supports (animation-range-end: 10px) { .foo { animation-range-end: normal; } }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests that 'animation-range-end: var(--my-value);' is not flagged for 'normal' as the value is dynamic.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should not detect when using a CSS variable",
  code: `
    .foo { --my-value: normal; animation-range-end: var(--my-value); }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":0},
});
            


/**
 * Tests that two distinct declarations of 'animation-range-end: normal;' are detected.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should report multiple instances of animation-range-end normal",
  code: `
    .foo { animation-range-end: normal; } .bar { animation-range-end: normal; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":2},
});
            


/**
 * Tests that vendor-prefixed properties like -webkit-animation-range-end are not detected.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should not detect vendor prefixed animation-range-end with normal value",
  code: `
    .foo { -webkit-animation-range-end: normal; -moz-animation-range-end: normal; -ms-animation-range-end: normal; -o-animation-range-end: normal; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":0},
});
            


/**
 * Tests that 'animation-range-end: NORMAL;' is detected.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect normal keyword regardless of case",
  code: `
    .foo { animation-range-end: NORMAL; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range-end : normal ;'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect normal keyword with varying whitespace",
  code: `
    .foo { animation-range-end : normal ; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests that 'animation-range-end: /* comment *\/ normal;' is not detected as it's an invalid value.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should not detect when comment breaks the normal keyword",
  code: `
    .foo { animation-range-end: /* comment */ normal; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":0},
});
            


/**
 * Tests that 'animation-range-end: normal /* foo *\/;' is detected.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect when comment is after the normal keyword",
  code: `
    .foo { animation-range-end: normal /* foo */; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range-end: initial;'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect initial keyword as it resolves to normal",
  code: `
    .foo { animation-range-end: initial; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range-end: unset;'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect unset keyword as it resolves to normal",
  code: `
    .foo { animation-range-end: unset; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range-end: revert;'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect revert keyword as it resolves to normal",
  code: `
    .foo { animation-range-end: revert; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range-end: revert-layer;'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect revert-layer keyword as it resolves to normal",
  code: `
    .foo { animation-range-end: revert-layer; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range-end: normal;' within '&:hover { ... }'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect normal inside a nested rule targeting the same element",
  code: `
    .foo { &:hover { animation-range-end: normal; } }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range-end: normal;' within '& .bar { ... }'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect normal inside a nested rule targeting a child element",
  code: `
    .foo { & .bar { animation-range-end: normal; } }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Tests 'animation-range-end: normal;' within '&::before { ... }'.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should detect normal inside a nested rule targeting a pseudo-element",
  code: `
    .foo { &::before { animation-range-end: normal; } }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":1},
});
            


/**
 * Each explicit declaration of 'animation-range-end: normal;' should be counted, even if overridden.
 */
testRule({
  featureId: 'properties.animation-range-end.normal',
  description: "should count multiple animation-range-end normal declarations in the same rule",
  code: `
    .foo { animation-range-end: normal; animation-range-end: 10%; animation-range-end: normal; }
  `,
  featureCount: {"-webkit-":0,"-moz-":0,"-ms-":0,"-o-":0,"unprefixed":2},
});
            