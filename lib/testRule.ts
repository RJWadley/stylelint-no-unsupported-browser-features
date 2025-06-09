import { check } from './checker';
import * as PostCSS from 'postcss';
import { test, expect } from 'vitest';

export const testRule = ({
  featureId,
  code,
  description,
  featureCount,
}: {
  featureId: string;
  code: string;
  description: string;
  featureCount: {
    '-webkit-': number;
    '-moz-': number;
    '-ms-': number;
    '-o-': number;
    unprefixed: number;
  };
}) => {
  test(description, () => {
    const actualFeatureCount = {
      '-webkit-': 0,
      '-moz-': 0,
      '-ms-': 0,
      '-o-': 0,
      unprefixed: 0,
    };

    const root = PostCSS.parse(code);

    check(root, ({ featureId: reportedId, prefix }) => {
      if (reportedId === featureId) actualFeatureCount[prefix]++;
    });

    expect(actualFeatureCount).toEqual(featureCount);
  });
};
