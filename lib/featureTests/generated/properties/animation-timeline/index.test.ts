/* AUTO_GENERATED: true */

/* 
feature: properties.animation-timeline
docs: https://developer.mozilla.org/docs/Web/CSS/animation-timeline
spec: https://drafts.csswg.org/css-animations-2/#animation-timeline
*/

import { testRule } from 'lib/testRule';

/**
 * Verify that the 'animation-timeline' property with 'auto' value is flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: "should detect animation-timeline with 'auto' value",
  code: `
    a { animation-timeline: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that the 'animation-timeline' property with 'none' value is flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: "should detect animation-timeline with 'none' value",
  code: `
    a { animation-timeline: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that the 'animation-timeline' property with a '--dashed-ident' named timeline is flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline with a named timeline',
  code: `
    a { animation-timeline: --my-scroll-timeline; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that the 'animation-timeline' property with 'scroll()' function is flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline with scroll() function',
  code: `
    a { animation-timeline: scroll(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that the 'animation-timeline' property with 'scroll(block nearest)' function is flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline with scroll(scroller axis) function',
  code: `
    a { animation-timeline: scroll(block nearest); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that the 'animation-timeline' property with 'view()' function is flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline with view() function',
  code: `
    a { animation-timeline: view(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that the 'animation-timeline' property with 'view(inline 50%)' function is flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline with view(axis inset) function',
  code: `
    a { animation-timeline: view(inline 50%); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that multiple values for 'animation-timeline' are all flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect multiple animation-timeline values',
  code: `
    a { animation-timeline: --t1, scroll(), view(block end); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Verify that 'animation-timeline: initial' is flagged as a usage of the property.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: "should detect animation-timeline with 'initial' keyword",
  code: `
    a { animation-timeline: initial; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that 'animation-timeline: unset' is flagged as a usage of the property.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: "should detect animation-timeline with 'unset' keyword",
  code: `
    a { animation-timeline: unset; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that 'animation-timeline: inherit' is flagged as a usage of the property.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: "should detect animation-timeline with 'inherit' keyword",
  code: `
    a { animation-timeline: inherit; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that 'animation-timeline: revert' is flagged as a usage of the property.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: "should detect animation-timeline with 'revert' keyword",
  code: `
    a { animation-timeline: revert; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that 'animation-timeline: revert-layer' is flagged as a usage of the property.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: "should detect animation-timeline with 'revert-layer' keyword",
  code: `
    a { animation-timeline: revert-layer; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that 'animation-timeline: var(--my-timeline)' is flagged as it uses the property.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline with a CSS variable',
  code: `
    a { animation-timeline: var(--my-timeline); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that 'ANIMATION-TIMELINE: AUTO;' is flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect case-insensitive animation-timeline property',
  code: `
    a { ANIMATION-TIMELINE: AUTO; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that 'animation-timeline: auto' is NOT flagged when precisely guarded by @supports.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should NOT detect animation-timeline when guarded by exact @supports',
  code: `
    @supports (animation-timeline: auto) { a { animation-timeline: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verify that 'animation-timeline: --foo' IS flagged when guarded by @supports for a different value.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline when guarded by @supports with different value',
  code: `
    @supports (animation-timeline: auto) { a { animation-timeline: --foo; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that 'animation-timeline: auto' IS flagged when guarded by @supports for a different property.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline when guarded by @supports for different property',
  code: `
    @supports (display: flex) { a { animation-timeline: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that CSS without 'animation-timeline' is not flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should NOT detect animation-timeline when not present',
  code: `
    a { color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verify that 'animation-timeline' inside a comment is not flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should NOT detect animation-timeline when commented out',
  code: `
    a { /* animation-timeline: auto; */ color: red; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verify that an attempt to set `animation-timeline` via `animation` shorthand with a named timeline is not flagged for animation-timeline usage, as it's a reset-only value.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description:
    'should NOT detect animation-timeline when used in animation shorthand with named timeline',
  code: `
    a { animation: myAnimation 1s linear --foo; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verify that an attempt to set `animation-timeline` via `animation` shorthand with `scroll()` is not flagged for animation-timeline usage, as it's a reset-only value.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description:
    'should NOT detect animation-timeline when used in animation shorthand with scroll()',
  code: `
    a { animation: myAnimation 1s linear scroll(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verify that an attempt to set `animation-timeline` via `animation` shorthand with `view()` is not flagged for animation-timeline usage, as it's a reset-only value.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should NOT detect animation-timeline when used in animation shorthand with view()',
  code: `
    a { animation: myAnimation 1s linear view(); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verify that multiple 'animation-timeline' declarations in one rule are flagged individually.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect multiple animation-timeline declarations in a single rule',
  code: `
    a { animation-timeline: auto; animation-timeline: --bar; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Verify that 'animation-timeline' in a pseudo-class (same element context) is flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline in a pseudo-class',
  code: `
    a:hover { animation-timeline: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that 'animation-timeline' in a nested selector (different element context) is flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline in a nested selector',
  code: `
    a { & .bar { animation-timeline: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that 'animation-timeline' in a pseudo-element (new element context) is flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline in a pseudo-element',
  code: `
    a::before { animation-timeline: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that multiple explicit usages of animation-timeline are all flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect multiple instances in a complex scenario',
  code: `
    
          .box {
            animation-timeline: scroll(); /* Flagged */
            @supports (animation-timeline: none) {
              animation-timeline: --timeline-one; /* Not guarded, flagged */
            }
          }
          .item {
            animation: fade 2s; /* Not flagged for animation-timeline */
            animation-timeline: view(block end); /* Flagged */
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Verify that an empty rule does not trigger detection.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should not detect in an empty rule',
  code: `
    a {}
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verify detection handles extra whitespace and comments correctly.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline with varied whitespace and comments',
  code: `
    a {  animation-timeline  :  /* comment */  auto  ; /* another comment */ }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Verify that two separate instances of the feature are flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should produce two warnings for two instances',
  code: `
    a { animation-timeline: auto; }
  b { animation-timeline: none; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Verify detection for various forms of scroll() and view() values.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline with specific valid values',
  code: `
    
          a {
            animation-timeline: scroll(root block);
          }
          b {
            animation-timeline: view(cover);
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensure detection works for nested rules, even if display context isn't relevant to this property.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline in a nested rule without display context',
  code: `
    div { & p { animation-timeline: auto; } }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * The 'animation-timeline' property is not animatable and should be ignored within @keyframes, thus not flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should NOT detect animation-timeline when specified within a @keyframes rule',
  code: `
    
          @keyframes my-animation {
            from {
              animation-timeline: auto;
            }
            to {
              animation-timeline: none;
            }
          }
          .foo {
            animation-name: my-animation;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verify that the `animation` shorthand, which resets `animation-timeline` to `auto`, is not flagged as a usage of `animation-timeline` feature.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should NOT detect animation-timeline implicitly set to auto by animation shorthand',
  code: `
    a { animation: myAnim 1s; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verify that CSS without any animation-timeline related properties is not flagged.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should not detect animation-timeline in unrelated CSS',
  code: `
    
          .container {
              height: 300px;
              overflow-y: scroll;
              scroll-timeline-name: --squareTimeline;
              position: relative;
          }
          #square {
              animation-name: rotateAnimation;
              animation-duration: 1ms;
              animation-direction: alternate;
              position: absolute;
              bottom: 0;
          }
          @keyframes rotateAnimation {
              from {
                  transform: rotate(0deg);
              }
              to {
                  transform: rotate(360deg);
              }
          }
          #stretcher {
              height: 600px;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Verify that a complex list of timeline values is correctly detected.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline with complex multiple values',
  code: `
    a { animation-timeline: --t1, scroll(x nearest), view(cover 10% auto); }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Verify that `animation-timeline` is detected even when defined in a separate rule.
 */
testRule({
  featureId: 'properties.animation-timeline',
  description: 'should detect animation-timeline in a different rule',
  code: `
    p { color: blue; } a { animation-timeline: auto; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});
