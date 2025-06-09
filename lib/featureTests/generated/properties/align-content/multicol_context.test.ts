/* AUTO_GENERATED: true */

/* 
feature: properties.align-content.multicol_context
docs: https://developer.mozilla.org/docs/Web/CSS/align-content
spec: https://drafts.csswg.org/css-align/#align-justify-content
*/

import { testRule } from 'lib/testRule';

/**
 * Tests that align-content with content-distribution values (like space-between) is flagged when used on a multi-column container, due to its fallback alignment behavior.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should flag align-content with space-between in multicol context',
  code: `
    
  .foo {
    column-count: 2;
    align-content: space-between;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content with 'stretch' value is flagged when used on a multi-column container, as it will use fallback alignment.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should flag align-content with stretch in multicol context',
  code: `
    
  .bar {
    columns: 3;
    align-content: stretch;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content with a positional value (like center) is NOT flagged when used on a multi-column container, as positional alignment is expected to work.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should NOT flag align-content with positional value in multicol context',
  code: `
    
  .baz {
    column-width: 150px;
    align-content: center;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-content with content-distribution values (like space-around) is flagged when used on a prefixed multi-column container.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should flag align-content with space-around in prefixed multicol context',
  code: `
    
  .qux {
    -webkit-column-count: 2;
    align-content: space-around;
  }
  .xyz {
    -moz-column-count: 3;
    align-content: space-evenly;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that align-content with content-distribution values is not flagged if the container is not a multi-column container, as this feature specifically targets multicol_context.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should NOT flag align-content with space-between in non-multicol context',
  code: `
    
  .test-block {
    display: block;
    align-content: space-between;
  }
  .test-flex {
    display: flex;
    align-content: space-between; /* This would be handled by flexbox feature if it existed, not this one. */
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-content is flagged when its value is a CSS variable within a multi-column context, as the checker cannot determine its resolved value and applies a conservative rule for property-in-general features.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should flag align-content with var() in multicol context',
  code: `
    
  .var-test {
    column-count: 2;
    --align-val: space-between;
    align-content: var(--align-val);
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content with 'initial' keyword is flagged when used in a multicol context, as 'initial' resolves to 'normal' which behaves as 'stretch' in multicol, leading to fallback alignment.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should flag align-content with initial keyword in multicol context',
  code: `
    
  .initial-test {
    column-count: 2;
    align-content: initial;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content with content-distribution values is not flagged when explicitly guarded by a matching @supports query.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should NOT flag align-content in multicol context when guarded by exact @supports',
  code: `
    
  @supports (align-content: space-between) {
    .guarded-test {
      column-count: 2;
      align-content: space-between;
    }
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-content is flagged even within a @supports block if the query does not exactly match the property and value, as the checker does not infer contextual relationships.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description:
    'should flag align-content in multicol context when @supports query is for different property',
  code: `
    
  @supports (display: flex) {
    .unguarded-display {
      column-count: 2;
      align-content: space-between;
    }
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content is flagged even within a @supports block if the query is for the same property but a different value.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description:
    'should flag align-content in multicol context when @supports query is for different value',
  code: `
    
  @supports (align-content: center) {
    .unguarded-value {
      column-count: 2;
      align-content: space-around;
    }
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content is flagged when used in a multicol context within a pseudo-class on the same element.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should flag align-content in multicol context when combined with pseudo-class',
  code: `
    
  .pseudo-test {
    column-count: 2;
    &:hover {
      align-content: space-between;
    }
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content is not flagged if it's applied to a new element (like a child) within a multicol parent, as the context is not inherited.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should NOT flag align-content in new element selector within multicol parent',
  code: `
    
  .parent {
    column-count: 2;
    & .child {
      align-content: space-between; /* This should not be flagged by this feature */
    }
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-content is not flagged if it's applied to a pseudo-element within a multicol parent, as the context is not inherited.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should NOT flag align-content on pseudo-element within multicol parent',
  code: `
    
  .parent {
    column-count: 2;
    &::before {
      align-content: space-between; /* This should not be flagged by this feature */
    }
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests two instances of align-content with content-distribution values in multicol contexts.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should include at least one test that has 2 warnings',
  code: `
    
  .foo {
    column-count: 2;
    align-content: space-between;
  }
  .bar {
    columns: 3;
    align-content: stretch;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 2 },
});

/**
 * Tests that align-content with 'normal' keyword is flagged when used in a multicol context, as 'normal' resolves to 'stretch' which leads to fallback alignment.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should flag align-content with normal in multicol context',
  code: `
    
  .normal-test {
    column-count: 2;
    align-content: normal;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content with 'unset' keyword is flagged when used in a multicol context, as 'unset' resolves to 'normal' which leads to fallback alignment.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should flag align-content with unset keyword in multicol context',
  code: `
    
  .unset-test {
    column-count: 2;
    align-content: unset;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content with 'inherit' keyword is flagged when used in a multicol context, as it's not inherited and resolves to 'normal' (initial) which leads to fallback alignment.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should flag align-content with inherit keyword in multicol context',
  code: `
    
  .inherit-test {
    column-count: 2;
    align-content: inherit;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content with 'safe space-between' is flagged when used in a multicol context, as the underlying content-distribution still causes fallback behavior.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should flag align-content with safe space-between in multicol context',
  code: `
    
  .safe-test {
    column-count: 2;
    align-content: safe space-between;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 1 },
});

/**
 * Tests that align-content with 'unsafe center' is NOT flagged in multicol context, as positional alignment (center) is generally supported.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should NOT flag align-content with unsafe center in multicol context',
  code: `
    
  .unsafe-test {
    column-count: 2;
    align-content: unsafe center;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-content with 'baseline' keyword is NOT flagged when used in a multicol context, as it's not explicitly noted to have fallback behavior for this context in the spec.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should NOT flag align-content with baseline in multicol context',
  code: `
    
  .baseline-test {
    column-count: 2;
    align-content: baseline;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-content with 'first baseline' keyword is NOT flagged when used in a multicol context.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should NOT flag align-content with first baseline in multicol context',
  code: `
    
  .first-baseline-test {
    column-count: 2;
    align-content: first baseline;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});

/**
 * Tests that align-content with 'last baseline' keyword is NOT flagged when used in a multicol context.
 */
testRule({
  featureId: 'properties.align-content.multicol_context',
  description: 'should NOT flag align-content with last baseline in multicol context',
  code: `
    
  .last-baseline-test {
    column-count: 2;
    align-content: last baseline;
  }
          
  `,
  featureCount: { '-webkit-': 0, '-moz-': 0, '-ms-': 0, '-o-': 0, unprefixed: 0 },
});
