/* AUTO_GENERATED: true */

/* 
feature: properties.animation
docs: https://developer.mozilla.org/docs/Web/CSS/animation
spec: https://drafts.csswg.org/css-animations/#animation
*/

import { testRule } from 'lib/testRule';

/**
 * Tests a full animation shorthand definition.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation shorthand with full properties',
  code: `
    a { animation: 3s ease-in 1s infinite reverse both running slide-in; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple comma-separated animation definitions in the shorthand.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect multiple comma-separated animations in shorthand',
  code: `
    a { animation: slide-in 3s, fade-out 1s linear; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-name longhand property.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation-name longhand property',
  code: `
    a { animation-name: slide-in; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-duration longhand property.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation-duration longhand property',
  code: `
    a { animation-duration: 2s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-timing-function longhand property.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation-timing-function longhand property',
  code: `
    a { animation-timing-function: linear; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-delay longhand property.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation-delay longhand property',
  code: `
    a { animation-delay: 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-iteration-count longhand property with 'infinite'.
 */
testRule({
  featureId: 'properties.animation',
  description: "should detect animation-iteration-count longhand property with 'infinite'",
  code: `
    a { animation-iteration-count: infinite; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-direction longhand property.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation-direction longhand property',
  code: `
    a { animation-direction: alternate; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-fill-mode longhand property.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation-fill-mode longhand property',
  code: `
    a { animation-fill-mode: forwards; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-play-state longhand property.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation-play-state longhand property',
  code: `
    a { animation-play-state: paused; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation shorthand property with various vendor prefixes and unprefixed.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation shorthand property with vendor prefixes and unprefixed',
  code: `
    a {
    -webkit-animation: slide 1s;
    -moz-animation: slide 1s;
    -ms-animation: slide 1s;
    -o-animation: slide 1s;
    animation: slide 1s;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 1 },
});

/**
 * Tests the @keyframes at-rule with various vendor prefixes and unprefixed.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect @keyframes at-rule with vendor prefixes and unprefixed',
  code: `
    @-webkit-keyframes slide {}
  @-moz-keyframes slide {}
  @-ms-keyframes slide {}
  @-o-keyframes slide {}
  @keyframes slide {}
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 1 },
});

/**
 * Tests animation-name property explicitly set to 'none'. This is a valid use of the feature.
 */
testRule({
  featureId: 'properties.animation',
  description: "should detect animation-name property explicitly set to 'none'",
  code: `
    a { animation-name: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-duration set to 0s. This is a valid use of the feature.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation-duration set to 0s',
  code: `
    a { animation-duration: 0s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation-delay with a negative value. This is a valid use of the feature.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation-delay with a negative value',
  code: `
    a { animation-delay: -1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation property with CSS-wide keywords (initial, inherit, unset, revert).
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation property with CSS-wide keywords',
  code: `
    a { animation: initial; }
  b { animation: inherit; }
  c { animation: unset; }
  d { animation: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 4 },
});

/**
 * Tests animation shorthand property with a CSS variable.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation shorthand with a CSS variable',
  code: `
    a { animation: var(--my-animation-props); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests an animation longhand property with a CSS variable.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation-duration longhand with a CSS variable',
  code: `
    a { animation-duration: var(--anim-duration); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation property within a guarded @supports rule (exact match).
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation property within a guarded @supports rule',
  code: `
    @supports (animation: slide 1s) {
    a {
      animation: slide 1s;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation property within an unguarded @supports rule (different property in query).
 */
testRule({
  featureId: 'properties.animation',
  description:
    'should detect animation property within an unguarded @supports rule (different property)',
  code: `
    @supports (display: flex) {
    a {
      animation: slide 1s;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation property within an unguarded @supports rule (same property, different value in query).
 */
testRule({
  featureId: 'properties.animation',
  description:
    'should detect animation property within an unguarded @supports rule (different value)',
  code: `
    @supports (animation: other 2s) {
    a {
      animation: slide 1s;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation property with comments and varied whitespace for parsing robustness.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation property with comments and varied whitespace',
  code: `
    a {
    /* comment */
    animation :  3s   /* another comment */  ease-in   1s   infinite   reverse   both   running   slide-in ;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation property and @keyframes with uppercase names for case sensitivity.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation property and @keyframes with uppercase names',
  code: `
    a {
    ANIMATION: SLIDE 1S;
  }
  @KEYFRAMES BAR {}
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests an empty @keyframes rule.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect an empty @keyframes rule',
  code: `
    @keyframes empty {}
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Includes two instances of the animation feature (shorthand and longhand).
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect multiple instances of animation features in one test',
  code: `
    a {
    animation: slide 1s;
  }
  b {
    animation-duration: 2s;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests animation on a pseudo-class (:hover) of an element within a display context. This targets the same element.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation on a pseudo-class within a display context',
  code: `
    .container {
    display: flex;
    &:hover {
      animation: bounce 0.5s;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation on a child selector (& .item). Animation is not context-dependent, so it should still be detected.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation on a child selector',
  code: `
    .container {
    display: flex;
    & .item {
      animation: fade-in 1s;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests animation on a pseudo-element (&::before). Animation is not context-dependent, so it should still be detected.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation on a pseudo-element',
  code: `
    .container {
    display: flex;
    &::before {
      animation: grow 2s;
    }
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests the animation-timeline longhand property.
 */
testRule({
  featureId: 'properties.animation',
  description: 'should detect animation-timeline longhand property',
  code: `
    a { animation-timeline: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests a mix of prefixed longhand and unprefixed shorthand animation properties.
 */
testRule({
  featureId: 'properties.animation',
  description:
    'should detect a mix of prefixed longhand and unprefixed shorthand animation properties',
  code: `
    .foo {
    -webkit-animation-name: slide;
    animation-duration: 2s;
    animation: fade 1s;
  }
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});
