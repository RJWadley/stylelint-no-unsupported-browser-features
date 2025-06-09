import { asyncQueue } from '@tanstack/pacer';

const cache: Record<string, string> = {};

const queue = asyncQueue(
  async ({
    resolve,
    spec_url,
  }: {
    resolve: (value: string | undefined) => void;
    spec_url: string;
  }) => {
    const baseSpecURL = spec_url.split('#')[0];

    if (!baseSpecURL) return resolve(undefined);
    if (cache[baseSpecURL]) return resolve(cache[baseSpecURL]);

    const response = await fetch(baseSpecURL);
    const text = await response.text();
    cache[baseSpecURL] = text;
    resolve(text);
  },
  { wait: 1000 },
);

export const fetchSpec = async (spec_url: string) => {
  const { promise, resolve } = Promise.withResolvers<string>();
  queue({ resolve, spec_url });
  return promise;
};
