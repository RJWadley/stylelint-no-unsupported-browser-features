/* AUTO_GENERATED: true */

/* 
feature: properties.align-items.flex_context.safe_unsafe
docs: https://developer.mozilla.org/docs/Web/CSS/align-items
spec: https://drafts.csswg.org/css-align/#align-items-property
*/

import { testRule } from 'lib/testRule';

/**
 * Tests that 'align-items: safe <value>' is flagged when in a flex context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag align-items with safe keyword in flex context',
  code: `
    
          .foo {
            display: flex;
            align-items: safe center;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-items: unsafe <value>' is flagged when in a flex context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag align-items with unsafe keyword in flex context',
  code: `
    
          .foo {
            display: flex;
            align-items: unsafe flex-end;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-items: safe self-start' is flagged when in a flex context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag align-items with safe keyword and self-start in flex context',
  code: `
    
          .foo {
            display: flex;
            align-items: safe self-start;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-items: safe <value>' is flagged in a pseudo-class within a flex context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag align-items with safe keyword in nested flex pseudo-class context',
  code: `
    
          .foo {
            display: flex;
            &:hover {
              align-items: unsafe start;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-items: safe <value>' is NOT flagged when in a grid context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should not flag align-items with safe keyword in grid context',
  code: `
    
          .foo {
            display: grid;
            align-items: safe center;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-items: unsafe <value>' is NOT flagged when in an explicit block context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should not flag align-items with unsafe keyword in block context',
  code: `
    
          .foo {
            display: block;
            align-items: unsafe start;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-items: safe <value>' is NOT flagged when no explicit display context is given (assumed block).
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should not flag align-items with safe keyword without explicit display context',
  code: `
    
          .foo {
            align-items: safe end;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-items: safe center' is NOT flagged when guarded by an exact @supports query.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should not flag align-items with safe keyword when exactly guarded by @supports',
  code: `
    
          @supports (align-items: safe center) {
            .foo {
              display: flex;
              align-items: safe center;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-items: safe center' IS flagged when guarded by an irrelevant @supports query (display: flex).
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag align-items with safe keyword when guarded by irrelevant @supports',
  code: `
    
          @supports (display: flex) {
            .foo {
              display: flex;
              align-items: safe center;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-items: unsafe center' IS flagged when guarded by an @supports query with a different value (align-items: center).
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description:
    'should flag align-items with unsafe keyword when guarded by same property different value @supports',
  code: `
    
          @supports (align-items: center) {
            .foo {
              display: flex;
              align-items: unsafe center;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-items: safe center' IS flagged when guarded by an @supports query with the other overflow keyword (align-items: unsafe center).
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description:
    'should flag align-items with safe keyword when guarded by different overflow keyword @supports',
  code: `
    
          @supports (align-items: unsafe center) {
            .foo {
              display: flex;
              align-items: safe center;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-items: var(--value)' is flagged when the feature is about the property with safe/unsafe keywords in general.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag align-items with var() for safe/unsafe in flex context',
  code: `
    
          .foo {
            display: flex;
            --my-alignment: safe center;
            align-items: var(--my-alignment);
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-items: initial' is NOT flagged in a flex context, as it doesn't use 'safe' or 'unsafe'.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should not flag align-items with initial keyword in flex context',
  code: `
    
          .foo {
            display: flex;
            align-items: initial;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-items: unset' is NOT flagged in a flex context, as it doesn't use 'safe' or 'unsafe'.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should not flag align-items with unset keyword in flex context',
  code: `
    
          .foo {
            display: flex;
            align-items: unset;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-items: normal' is NOT flagged in a flex context, as it doesn't use 'safe' or 'unsafe'.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should not flag align-items with normal keyword in flex context',
  code: `
    
          .foo {
            display: flex;
            align-items: normal;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Includes multiple instances of the feature in one test.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should include at least two warnings for safe/unsafe in flex context',
  code: `
    
          .foo {
            display: flex;
            align-items: safe start;
            flex-direction: column;
            align-items: unsafe end;
          }
          .bar {
            display: flex;
            align-items: safe flex-start;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests that -webkit-align-items: safe center is flagged as the feature is unprefixed in its value.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag align-items with prefixed property and safe keyword in flex context',
  code: `
    
          .foo {
            display: -webkit-box; /* old flexbox syntax */
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: safe center;
            -moz-align-items: safe flex-start;
            -ms-align-items: unsafe end;
            align-items: safe start;
          }
          
  `,
  featureCount: { '-webkit-': 1, '-moz-': 1, '-ms-': 1, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-items: safe flex-start' is flagged.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag align-items with safe flex-start',
  code: `
    
          .foo {
            display: flex;
            align-items: safe flex-start;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-items: unsafe self-end' is flagged.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag align-items with unsafe self-end',
  code: `
    
          .foo {
            display: flex;
            align-items: unsafe self-end;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests multiple instances of the feature at different line/column positions.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag multiple safe/unsafe align-items declarations with varied positions',
  code: `
    
          .container {
            display: flex;
            align-items: safe center; /* Line 3, Col 11 */
          }
          .item {
            display: flex;
            align-items: unsafe start; /* Line 6, Col 11 */
          }
          .another-container {
            display: flex;
            align-items: safe flex-end;
            display: -webkit-box;
            -webkit-align-items: unsafe flex-start;
          }
          
  `,
  featureCount: { '-webkit-': 1, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 3 },
});

/**
 * Tests that 'align-items: SAFE CENTER' is flagged when in a flex context.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag align-items with uppercase safe keyword in flex context',
  code: `
    
          .foo {
            display: flex;
            align-items: SAFE CENTER;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that 'align-items: safe <value>' is NOT flagged when in a nested child selector context (new element).
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should not flag align-items with safe keyword in nested child selector context',
  code: `
    
          .foo {
            display: flex;
            & .bar {
              align-items: safe center;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-items: safe <value>' is NOT flagged when in a nested pseudo-element context (new element).
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should not flag align-items with safe keyword in nested pseudo-element context',
  code: `
    
          .foo {
            display: flex;
            &::before {
              align-items: safe center;
            }
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that 'align-items: safe  center ;' is flagged with extra whitespace.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should flag align-items with safe keyword and extra whitespace in flex context',
  code: `
    
          .foo {
            display: flex;
            align-items :   safe    center  ;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that justify-content: safe center is NOT flagged, as the feature is specific to align-items.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should not flag justify-content with safe keyword in flex context',
  code: `
    
          .foo {
            display: flex;
            justify-content: safe center;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-self: safe center is NOT flagged, as the feature is specific to align-items.
 */
testRule({
  featureId: 'properties.align-items.flex_context.safe_unsafe',
  description: 'should not flag align-self with safe keyword in flex item',
  code: `
    
          .foo {
            display: flex;
          }
          .foo > div {
            align-self: safe center;
          }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
