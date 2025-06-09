import * as PostCSS from 'postcss';
import * as fs from 'fs';

export type ApprovalFunction = (metadata: {
  featureId: string;
  prefix: '-webkit-' | '-moz-' | '-ms-' | '-o-' | 'unprefixed';
  hasFallback: boolean;
  hasSupportsQuery: boolean;
}) => void;

function getPrefixed(prop: string) {
  if (prop.startsWith('-webkit-')) {
    return { prefix: '-webkit-' as const, unprefixed: prop.substring('-webkit-'.length) };
  }
  if (prop.startsWith('-moz-')) {
    return { prefix: '-moz-' as const, unprefixed: prop.substring('-moz-'.length) };
  }
  if (prop.startsWith('-ms-')) {
    return { prefix: '-ms-' as const, unprefixed: prop.substring('-ms-'.length) };
  }
  if (prop.startsWith('-o-')) {
    return { prefix: '-o-' as const, unprefixed: prop.substring('-o-'.length) };
  }
  return { prefix: 'unprefixed' as const, unprefixed: prop };
}

export const check = (root: PostCSS.Root, detailedApproval: ApprovalFunction) => {
  const approve = (decl: PostCSS.Declaration, featureId: string) => {
    let parent: PostCSS.Container | PostCSS.Document | undefined = decl.parent;
    let hasSupportsQuery = false;

    const { unprefixed: unprefixedProp, prefix } = getPrefixed(decl.prop.toLowerCase());

    while (parent) {
      if (parent.type === 'atrule') {
        const atRule = parent as PostCSS.AtRule;
        const supportsParams = atRule.params;

        if (atRule.name === 'supports') {
          const value = decl.value.trim();
          const unprefixedDecl = `${unprefixedProp}:${value}`;
          const prefixedDecl = `${decl.prop}:${value}`;
          const params = supportsParams.toLowerCase();

          const normalizedParams = params.replace(/\s/g, '');
          const normalizedUnprefixedDecl = unprefixedDecl.toLowerCase().replace(/\s/g, '');
          const normalizedPrefixedDecl = prefixedDecl.toLowerCase().replace(/\s/g, '');

          if (
            normalizedParams.includes(normalizedUnprefixedDecl) ||
            normalizedParams.includes(normalizedPrefixedDecl)
          ) {
            hasSupportsQuery = true;
            break;
          }
        }
      }
      parent = parent.parent;
    }

    let hasFallback = false;
    if (decl.parent) {
      if (prefix !== 'unprefixed') {
        decl.parent.walkDecls(unprefixedProp, (fallbackDecl) => {
          if (decl !== fallbackDecl) {
            hasFallback = true;
            return false;
          }
        });
      } else {
        const prefixes = ['-webkit-', '-moz-', '-ms-', '-o-'];
        decl.parent.walkDecls(
          new RegExp(`^(${prefixes.join('|')})${unprefixedProp}$`),
          (fallbackDecl) => {
            if (decl !== fallbackDecl) {
              hasFallback = true;
              return false;
            }
          },
        );
      }
    }

    if (!hasSupportsQuery) {
      detailedApproval({
        featureId,
        prefix,
        hasFallback,
        hasSupportsQuery,
      });
    }
  };

  root.walkRules((rule) => {
    for (const node of rule.nodes) {
      if (node.type === 'decl') {
        const decl = node;

        if (!decl.parent) {
          continue;
        }

        // Determine context for *this* declaration
        let display = '';
        // 1. Check the declaration's own rule
        decl.parent.walkDecls(/^display$/i, (d) => {
          display = d.value.trim().toLowerCase();
        });

        // 2. Check the parent rule, if one exists (for nesting before plugins)
        if (!display && decl.parent.parent && decl.parent.parent.type === 'rule') {
          const nestedRule = decl.parent as PostCSS.Rule;
          // Only inherit context for pseudo-classes, not for pseudo-elements or child selectors.
          if (nestedRule.selector.startsWith('&:') && !nestedRule.selector.startsWith('&::')) {
            (decl.parent.parent as PostCSS.Rule).walkDecls(/^display$/i, (d) => {
              display = d.value.trim().toLowerCase();
            });
          }
        }

        const flexDisplayValues = [
          'flex',
          'inline-flex',
          '-webkit-flex',
          '-moz-box',
          '-ms-flexbox',
          '-webkit-box',
        ];
        const isFlex = flexDisplayValues.includes(display);
        const isGrid = display === 'grid' || display === 'inline-grid';
        const isBlock = display === 'block' || display === 'inline-block';

        const prop = decl.prop.toLowerCase();
        const { unprefixed: unprefixedProp } = getPrefixed(prop);
        const value = decl.value.trim().toLowerCase();
        const baselineValues = ['baseline', 'first baseline', 'last baseline'];

        if (unprefixedProp === 'align-content') {
          if (isFlex) {
            if (baselineValues.includes(value)) {
              approve(decl, 'properties.align-content.flex_context.baseline');
            }
            if (value === 'last baseline') {
              approve(decl, 'properties.align-content.flex_context.last_baseline');
            }
            if (value === 'baseline' || value === 'first baseline') {
              approve(decl, 'properties.align-content.flex_context.first_baseline');
            }
            if (['start', 'end'].includes(value)) {
              approve(decl, 'properties.align-content.flex_context.start_end');
            }
            if (value === 'space-evenly') {
              approve(decl, 'properties.align-content.flex_context.space-evenly');
            }
          }
          if (isBlock) {
            approve(decl, 'properties.align-content.block_context');
          }
          if (isGrid) {
            if (baselineValues.includes(value)) {
              approve(decl, 'properties.align-content.grid_context.baseline');
            }
          }
        }

        if (unprefixedProp === 'anchor-scope') {
          approve(decl, 'properties.anchor-scope');
          if (value === 'all') {
            approve(decl, 'properties.anchor-scope.all');
          }
        }

        if (unprefixedProp === 'accent-color') {
          approve(decl, 'properties.accent-color');
          if (value === 'auto') {
            approve(decl, 'properties.accent-color.auto');
          }
        }
      }
    }
  });
};
