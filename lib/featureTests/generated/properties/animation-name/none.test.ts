/* AUTO_GENERATED: true */

/* 
feature: properties.animation-name.none
docs: https://developer.mozilla.org/docs/Web/CSS/animation-name
spec: https://drafts.csswg.org/css-animations/#valdef-animation-name-none
*/

import { testRule } from 'lib/testRule';

/**
 * Should detect unprefixed animation-name with value 'none'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'basic detection of animation-name: none;',
  code: `
    a { animation-name: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect -webkit- prefixed animation-name with value 'none'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'detection of -webkit-animation-name: none;',
  code: `
    a { -webkit-animation-name: none; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect -moz- prefixed animation-name with value 'none'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'detection of -moz-animation-name: none;',
  code: `
    a { -moz-animation-name: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect -ms- prefixed animation-name with value 'none'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'detection of -ms-animation-name: none;',
  code: `
    a { -ms-animation-name: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect -o- prefixed animation-name with value 'none'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'detection of -o-animation-name: none;',
  code: `
    a { -o-animation-name: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Should not detect animation-name when its value is a custom-ident other than 'none'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'no detection for animation-name with custom-ident',
  code: `
    a { animation-name: foo; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect animation-name when its value is a string other than 'none'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'no detection for animation-name with string',
  code: `
    a { animation-name: "foo"; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect 'none' when it's part of a comma-separated list of animation names.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: "detection of 'none' in a list (second item)",
  code: `
    a { animation-name: foo, none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect 'none' when it's the first item in a comma-separated list of animation names.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: "detection of 'none' in a list (first item)",
  code: `
    a { animation-name: none, foo; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect 'none' when used as the animation-name in the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: "detection of 'none' in animation shorthand (first value)",
  code: `
    a { animation: none 1s ease; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect 'none' when used as the animation-name in the animation shorthand property and not the first value.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: "detection of 'none' in animation shorthand (middle value)",
  code: `
    a { animation: 1s none ease; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not detect 'animation-name: none;' when it is guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'no detection when guarded by exact @supports',
  code: `
    @supports (animation-name: none) { a { animation-name: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect 'animation-name: none;' when it is unguarded by a different property in @supports.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'detection when unguarded by different property in @supports',
  code: `
    @supports (display: flex) { a { animation-name: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect 'animation-name: none;' when it is unguarded by the same property but a different value in @supports.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'detection when unguarded by different value in @supports',
  code: `
    @supports (animation-name: foo) { a { animation-name: none; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not detect animation-name when its value is a CSS variable, as we cannot resolve it to 'none'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'no detection for animation-name with CSS variable',
  code: `
    a { animation-name: var(--animation-value); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect animation-name with the CSS-wide keyword 'initial'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'no detection for animation-name: initial;',
  code: `
    a { animation-name: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect animation-name with the CSS-wide keyword 'unset'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'no detection for animation-name: unset;',
  code: `
    a { animation-name: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect animation-name with the CSS-wide keyword 'revert'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'no detection for animation-name: revert;',
  code: `
    a { animation-name: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should not detect animation-name with the CSS-wide keyword 'inherit'.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'no detection for animation-name: inherit;',
  code: `
    a { animation-name: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect 'animation-name: none;' with extra whitespace around the value and property.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'detection with extra whitespace',
  code: `
    a { animation-name :  none  ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should detect 'animation-name: none;' with a comment between the property and value.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'detection with comment',
  code: `
    a { animation-name: /* comment */ none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Should not detect anything when the animation-name property is not present.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'no detection when property is absent',
  code: `
    .foo {}
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Should detect both prefixed and unprefixed 'none' for animation-name in a single rule.
 */
testRule({
  featureId: 'properties.animation-name.none',
  description: 'multiple detections for different prefixes',
  code: `
    a { -webkit-animation: none 1s; animation-name: none; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
