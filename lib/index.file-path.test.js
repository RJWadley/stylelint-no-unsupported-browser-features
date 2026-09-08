/* global test, expect */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import stylelint from 'stylelint';

import plugin from './index.js';

const { ruleName } = plugin;
const fixturesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '__fixtures__');
const monorepoRoot = path.join(fixturesDir, 'monorepo');
const packageCss = path.join(monorepoRoot, 'packages', 'app', 'style.css');

/**
 * Regression for https://github.com/RJWadley/stylelint-no-unsupported-browser-features/issues/311
 *
 * 8.1.0+ cached `browserslist()` once from `process.cwd()` at import time. When Stylelint
 * runs from a monorepo root (lint-staged's default) that has no browserslist config,
 * doiuse falls back to browserslist `defaults` (Opera Mini / KaiOS) and false-positives
 * `css-grid` even though the linted package has its own `.browserslistrc`.
 *
 * This test must not rely on the `BROWSERSLIST='IE 8'` env used by the other suites.
 */
test('resolves browserslist from the linted file path when cwd has no config', async () => {
  const originalBrowserslist = process.env.BROWSERSLIST;
  delete process.env.BROWSERSLIST;

  try {
    expect(path.relative(monorepoRoot, packageCss)).toBe(path.join('packages', 'app', 'style.css'));
    expect(process.cwd()).not.toBe(path.dirname(packageCss));

    const { results } = await stylelint.lint({
      files: [packageCss],
      cwd: monorepoRoot,
      config: {
        plugins: [plugin],
        rules: {
          [ruleName]: true,
        },
      },
    });

    expect(results).toHaveLength(1);
    expect(results[0].warnings.filter((warning) => warning.rule === ruleName)).toEqual([]);
  } finally {
    if (originalBrowserslist === undefined) {
      delete process.env.BROWSERSLIST;
    } else {
      process.env.BROWSERSLIST = originalBrowserslist;
    }
  }
});
