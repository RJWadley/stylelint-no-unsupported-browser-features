/* AUTO_GENERATED: true */

/* 
feature: properties.animation-play-state
docs: https://developer.mozilla.org/docs/Web/CSS/animation-play-state
spec: https://drafts.csswg.org/css-animations/#animation-play-state
*/

import { testRule } from 'lib/testRule';

/**
 * Tests the basic 'running' value for animation-play-state, which is widely supported.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state: running',
  code: `
    a { animation-play-state: running; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the basic 'paused' value for animation-play-state, which is widely supported.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state: paused',
  code: `
    a { animation-play-state: paused; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests comma-separated values for animation-play-state, which are supported.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for multiple animation-play-state values',
  code: `
    a { animation-play-state: paused, running; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the CSS-wide keyword 'initial' for animation-play-state.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state: initial',
  code: `
    a { animation-play-state: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the CSS-wide keyword 'unset' for animation-play-play-state.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state: unset',
  code: `
    a { animation-play-state: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the CSS-wide keyword 'inherit' for animation-play-state.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state: inherit',
  code: `
    a { animation-play-state: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state used with a CSS variable. The property is fully supported, so var() should not cause a warning.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state with var()',
  code: `
    .foo { --my-state: running; animation-play-state: var(--my-state); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state guarded by @supports',
  code: `
    @supports (animation-play-state: running) { a { animation-play-state: running; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-play-state when not guarded by a relevant @supports query (different property). Should be counted as present, but not warned.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description:
    'should not warn for animation-play-state not guarded by @supports (different property)',
  code: `
    @supports (display: flex) { a { animation-play-state: paused; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state when not guarded by a relevant @supports query (same property, different value). Should be counted as present, but not warned.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description:
    'should not warn for animation-play-state not guarded by @supports (different value)',
  code: `
    @supports (animation-play-state: initial) { a { animation-play-state: running; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests hypothetical vendor-prefixed versions of animation-play-state for counting purposes.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should count hypothetical vendor-prefixed animation-play-state',
  code: `
    
  a {
              -webkit-animation-play-state: running;
              -moz-animation-play-state: paused;
              -ms-animation-play-state: running;
              -o-animation-play-state: paused;
              animation-play-state: running;
          }
          
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 1 },
});

/**
 * Tests case insensitivity of the animation-play-state property and its values.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for case-insensitive animation-play-state',
  code: `
    a { ANIMATION-PLAY-STATE: RUNNING; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state with varied whitespace and punctuation.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state with varied whitespace',
  code: `
    a { animation-play-state :  paused ,  running  ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state inside an empty rule.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state in an empty rule',
  code: `
    a {}
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests animation-play-state in a nested pseudo-class, which is considered the same context.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state in a nested pseudo-class',
  code: `
    .foo { animation-name: slide; &:hover { animation-play-state: running; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state in a nested child selector; should not be counted by context rules if the rule is context-dependent.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not count animation-play-state in a nested child selector',
  code: `
    .foo { display: block; & .bar { animation-play-state: running; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state in a nested pseudo-element; should not be counted by context rules if the rule is context-dependent.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not count animation-play-state in a nested pseudo-element',
  code: `
    .foo { display: block; &::before { animation-play-state: paused; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state in conjunction with other animation properties.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state combined with other animation properties',
  code: `
    a { animation: slide 2s ease-in-out infinite alternate running; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation shorthand with multiple animations and their respective play states.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation shorthand with multiple animation play states',
  code: `
    a { animation: slide 2s ease-in-out running, fade 1s linear paused; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests animation-play-state with a comment inside its value.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not warn for animation-play-state with comment inside value',
  code: `
    a { animation-play-state: running /* comment */; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state with an invalid string value. Still counts as an attempt to use the feature.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should count animation-play-state even with an invalid string value',
  code: `
    a { animation-play-state: 'running'; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state with an invalid url() value. Still counts as an attempt to use the feature.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should count animation-play-state even with an invalid url() value',
  code: `
    a { animation-play-state: url(running.svg); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state with an invalid empty function. Still counts as an attempt to use the feature.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should count animation-play-state even with an invalid empty function',
  code: `
    a { animation-play-state: (); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-play-state with no value. Still counts as an attempt to use the feature.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should count animation-play-state even with no value',
  code: `
    a { animation-play-state: ; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that animation-play-state is ignored and not counted when used within an @keyframes rule, as per spec.
 */
testRule({
  featureId: 'properties.animation-play-state',
  description: 'should not count animation-play-state inside @keyframes rule',
  code: `
    @keyframes foo { from { animation-play-state: running; } to { animation-play-state: paused; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
