/* AUTO_GENERATED: true */

/* 
feature: properties.animation-duration
docs: https://developer.mozilla.org/docs/Web/CSS/animation-duration
spec: https://drafts.csswg.org/css-animations/#animation-duration
*/

import { testRule } from 'lib/testRule';

/**
 * Tests basic usage of animation-duration with 's' unit.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect valid animation-duration with seconds',
  code: `
    a { animation-duration: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests basic usage of animation-duration with 'ms' unit.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect valid animation-duration with milliseconds',
  code: `
    a { animation-duration: 500ms; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-duration set to 0s, which is valid and triggers events.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration of 0s',
  code: `
    a { animation-duration: 0s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple comma-separated animation-duration values.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect multiple animation-durations',
  code: `
    a { animation-duration: 1s, 200ms, 0s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests usage of 'auto' keyword for animation-duration as per MDN documentation.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: "should detect animation-duration with 'auto' keyword",
  code: `
    a { animation-duration: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that negative animation-duration values are not detected, as they are invalid and ignored by browsers.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should not detect negative animation-duration (invalid)',
  code: `
    a { animation-duration: -1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-duration without a unit is not detected (invalid).
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should not detect animation-duration without unit',
  code: `
    a { animation-duration: 1; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-duration with an invalid unit (e.g., px) is not detected.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should not detect animation-duration with invalid unit',
  code: `
    a { animation-duration: 1px; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -webkit- prefixed animation-duration.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect -webkit-animation-duration',
  code: `
    a { -webkit-animation-duration: 1s; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -moz- prefixed animation-duration.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect -moz-animation-duration',
  code: `
    a { -moz-animation-duration: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -ms- prefixed animation-duration.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect -ms-animation-duration',
  code: `
    a { -ms-animation-duration: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 1, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests -o- prefixed animation-duration.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect -o-animation-duration',
  code: `
    a { -o-animation-duration: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 1, unprefixed: 0 },
});

/**
 * Tests multiple prefixed and unprefixed animation-duration properties.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect mix of prefixed and unprefixed animation-duration',
  code: `
    a { -webkit-animation-duration: 1s; animation-duration: 2s; -moz-animation-duration: 3s; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-duration set to 'initial' keyword.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration with initial keyword',
  code: `
    a { animation-duration: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-duration set to 'inherit' keyword.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration with inherit keyword',
  code: `
    a { animation-duration: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-duration set to 'unset' keyword.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration with unset keyword',
  code: `
    a { animation-duration: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-duration set to 'revert' keyword.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration with revert keyword',
  code: `
    a { animation-duration: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-duration set to 'revert-layer' keyword.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration with revert-layer keyword',
  code: `
    a { animation-duration: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-duration used with a CSS variable, which should be flagged as it's a general property feature.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration with CSS variable',
  code: `
    .foo { --duration: 1s; animation-duration: var(--duration); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-duration with comments within the declaration.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration with comments',
  code: `
    a { animation-duration: /* comment */ 1s /* another comment */; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests an empty rule, ensuring no detection.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should not detect animation-duration in an empty rule',
  code: `
    a {}
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-duration when explicitly guarded by a matching @supports query, which should prevent detection.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should not detect animation-duration when guarded by @supports',
  code: `
    @supports (animation-duration: 1s) { a { animation-duration: 1s; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-duration when @supports guards a different value, which should not prevent detection.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration when @supports guards different value',
  code: `
    @supports (animation-duration: 2s) { a { animation-duration: 1s; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-duration when @supports guards a different property, which should not prevent detection.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration when @supports guards different property',
  code: `
    @supports (display: flex) { a { animation-duration: 1s; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-duration is ignored and thus not detected when used directly within @keyframes rules, as per spec.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should not detect animation-duration when used directly within @keyframes rule',
  code: `
    @keyframes foo { from { animation-duration: 1s; } to { animation-duration: 2s; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that animation-duration is detected when specified as part of the animation shorthand property.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration when used in animation shorthand',
  code: `
    a { animation: slide 1s ease-in; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection of multiple animation-duration values when specified in a comma-separated animation shorthand.
 */
testRule({
  featureId: 'properties.animation-duration',
  description:
    'should detect multiple animation-durations from animation shorthand with multiple animations',
  code: `
    a { animation: slide1 1s, slide2 200ms; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests a scenario with two prefixed animation-duration properties, resulting in two detections, fulfilling the '2 warnings' requirement.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect two prefixed animation-duration properties',
  code: `
    a { -webkit-animation-duration: 1s; -moz-animation-duration: 2s; }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests detection when the property name is in uppercase (case-insensitivity).
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration with uppercase property name',
  code: `
    a { ANIMATION-DURATION: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection when the units are in uppercase (case-insensitivity).
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration with uppercase units',
  code: `
    a { animation-duration: 1S; animation-duration: 500MS; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests detection with different whitespace around the colon and value.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration with varied whitespace',
  code: `
    a { animation-duration : 1s ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection within a nested pseudo-class rule, as it applies to the same element.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration in nested pseudo-class rule',
  code: `
    .foo { &:hover { animation-duration: 1s; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection within a nested child selector rule. Animation-duration is a general property, not context-dependent.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration in nested child selector rule',
  code: `
    .foo { & .bar { animation-duration: 1s; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests detection within a nested pseudo-element rule. Animation-duration is a general property, not context-dependent.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should detect animation-duration in nested pseudo-element rule',
  code: `
    .foo { &::before { animation-duration: 1s; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures no detection when the animation-duration property is not used.
 */
testRule({
  featureId: 'properties.animation-duration',
  description: 'should not detect animation-duration when not present',
  code: `
    a { color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
