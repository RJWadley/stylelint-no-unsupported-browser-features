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
    // Determine context once per rule for efficiency.
    let display = '';
    rule.walkDecls(/^display$/i, (d) => {
      display = d.value.toLowerCase();
    });

    const isFlex = display === 'flex' || display === 'inline-flex';
    const isGrid = display === 'grid' || display === 'inline-grid';
    const isBlock = display === 'block' || display === 'inline-block';

    for (const node of rule.nodes) {
      if (node.type === 'decl') {
        const decl = node;
        const prop = decl.prop.toLowerCase();
        const value = decl.value.toLowerCase().trim();

        if (prop === 'anchor-scope') {
          approve(decl, 'properties.anchor-scope');
          if (value === 'all') {
            approve(decl, 'properties.anchor-scope.all');
          }
        }
      }
    }
  });
};
