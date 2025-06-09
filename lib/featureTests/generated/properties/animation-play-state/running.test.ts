/* AUTO_GENERATED: true */

/* 
feature: properties.animation-play-state.running
docs: https://developer.mozilla.org/docs/Web/CSS/animation-play-state
spec: https://drafts.csswg.org/css-animations/#valdef-animation-play-state-running
*/

import { testRule } from 'lib/testRule';

/**
 * Detects the basic usage of animation-play-state with the value 'running'.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should flag animation-play-state: running',
  code: `
    a { animation-play-state: running; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures detection works with varied CSS structure.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should flag animation-play-state: running with different selector and positions',
  code: `
    
          .foo {
            top: 0;
            animation-play-state: running; /* line 4, col 27 */
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Checks detection when 'running' is part of a multiple-value animation-play-state property.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: "should flag 'running' in a comma-separated list",
  code: `
    a { animation-play-state: paused, running, paused; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures only 'running' is flagged, not 'paused'.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should not flag animation-play-state: paused',
  code: `
    a { animation-play-state: paused; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Detects 'running' for all common vendor prefixes.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should flag all vendor prefixed animation-play-state: running',
  code: `
    
          a {
            -webkit-animation-play-state: running;
            -moz-animation-play-state: running;
            -ms-animation-play-state: running;
            -o-animation-play-state: running;
            animation-play-state: running;
          }
          
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 1, unprefixed: 1 },
});

/**
 * Ensures CSS-wide keywords are not flagged as 'running'.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should not flag CSS-wide keywords',
  code: `
    
          a {
            animation-play-state: initial;
            animation-play-state: unset;
            animation-play-state: inherit;
            animation-play-state: revert;
            animation-play-state: revert-layer;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'running' is not flagged when explicitly guarded by a matching @supports query.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should not flag when guarded by @supports (exact property and value)',
  code: `
    
          @supports (animation-play-state: running) {
            a {
              animation-play-state: running;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures 'running' is flagged when @supports query is for a different property.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should flag when unguarded by @supports (different property)',
  code: `
    
          @supports (display: flex) {
            a {
              animation-play-state: running;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures 'running' is flagged when @supports query is for the same property but a different value.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should flag when unguarded by @supports (same property, different value)',
  code: `
    
          @supports (animation-play-state: paused) {
            a {
              animation-play-state: running;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures properties with var() are not flagged when testing for a specific value.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should not flag animation-play-state with var()',
  code: `
    
          .foo {
            --play-state: running;
            animation-play-state: var(--play-state);
          }
          .bar {
            animation-play-state: var(--any-value);
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures case-insensitive matching for property and value.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should flag with case insensitive property and value',
  code: `
    
          a {
            Animation-Play-State: RUNNING;
            animation-play-state: Running;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Ensures whitespace variations don't prevent detection.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should flag with varied whitespace',
  code: `
    a {
    animation-play-state : running ;
  }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Animation properties are ignored within @keyframes rules.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should not flag animation-play-state inside @keyframes rule',
  code: `
    
          @keyframes foo {
            from {
              animation-play-state: running;
            }
            to {
              -webkit-animation-play-state: running;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures comments don't prevent detection.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should flag with comments within declaration',
  code: `
    a { animation-play-state: /* comment */ running; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Comprehensive test to ensure multiple instances are flagged.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should include at least two warnings',
  code: `
    
          .foo {
            animation-play-state: running;
          }
          #bar {
            -webkit-animation-play-state: running;
          }
          
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Ensures the feature is only flagged for the specific 'running' value.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: "should not flag if value is not 'running'",
  code: `
    a { animation-play-state: paused; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Ensures the feature is only flagged for the 'animation-play-state' property.
 */
testRule({
  featureId: 'properties.animation-play-state.running',
  description: 'should not flag if property is not animation-play-state',
  code: `
    a { animation-direction: running; }
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
