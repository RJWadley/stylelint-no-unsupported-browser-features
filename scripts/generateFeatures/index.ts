import bcd, { type Identifier } from '@mdn/browser-compat-data';
import { google } from '@ai-sdk/google';
import dedent from 'dedent';
import { z } from 'zod';
import { queueTestGeneration } from './generateTest';
import { fetchSpec } from './fetchSpec';

const getFirstSpec = (spec_url: string | [string, string, ...string[]] | undefined) => {
  if (typeof spec_url === 'string') return spec_url;
  if (Array.isArray(spec_url)) return spec_url[0];
  return undefined;
};

/**
 * iterate over bcd.css and generate a test stub for each __compat entry
 * note that stuff is nested here, so we need to recurse
 * write the test stub to ../src/featureTests/untriaged/${id}.css
 * the id, by the way, is the path to the feature in bcd.css using periods, such as at-rules.container.with_style_rules
 */
const recurseFeatures = async (
  {
    data = bcd.css,
    pathSoFar,
    lastKnownMDNLink,
    lastKnownSpecLink,
  }: {
    data?: Identifier;
    pathSoFar: undefined | string;
    lastKnownMDNLink: undefined | string;
    lastKnownSpecLink: undefined | string;
  } = {
    pathSoFar: undefined,
    lastKnownMDNLink: undefined,
    lastKnownSpecLink: undefined,
  },
) => {
  const thisCompat = data.__compat;

  // we want to recurse into any nested features
  for (const key in data) {
    if (key === '__compat') continue;
    const possibleMDNLink = data.__compat?.mdn_url || lastKnownMDNLink;
    const possibleSpecLink = getFirstSpec(data.__compat?.spec_url) || lastKnownSpecLink;

    const nextPath = pathSoFar ? `${pathSoFar}.${key}` : key;
    const nextData = data[key];

    if (nextData)
      recurseFeatures({
        data: nextData,
        pathSoFar: nextPath,
        lastKnownMDNLink: possibleMDNLink,
        lastKnownSpecLink: possibleSpecLink,
      });
  }

  // if we're seeing the compat key, we've reached an entry we need to test
  if (thisCompat && pathSoFar && pathSoFar.startsWith('properties.a')) {
    const hasNestedFeatures = Object.keys(data).some((key) => key !== '__compat');

    const { mdn_url: raw_mdn_url, spec_url: raw_spec_url } = thisCompat;
    const spec_url = getFirstSpec(raw_spec_url) || lastKnownSpecLink;
    const mdn_url = raw_mdn_url || lastKnownMDNLink;
    const parsedLink = mdn_url ? new URL(mdn_url) : undefined;
    const relevantDoc = parsedLink
      ? Bun.file(
          `${parsedLink.pathname.replace(
            '/docs/Web/',
            './node_modules/@mdn/content/files/en-us/web/',
          )}/index.md`
            .toLowerCase()
            .replaceAll('::', '_doublecolon_')
            .replaceAll(':', '_colon_')
            .replaceAll('*', '_star_'),
        )
      : null;
    const docText = await relevantDoc?.text();
    const getSpecText = spec_url ? () => fetchSpec(spec_url) : undefined;

    // create a test
    {
      const path = `./lib/featureTests/generated/${pathSoFar.replace(
        /\./g,
        '/',
      )}${hasNestedFeatures ? '/index' : ''}.test.ts`;
      queueTestGeneration({
        id: pathSoFar,
        filePath: path,
        docsLink: mdn_url,
        docsText: docText,
        specLink: spec_url,
        getSpecText,
      });
    }
    // stub out feature detection
    // {
    //   const detectionStub = await createDetectionStub({
    //     id: pathSoFar,
    //     docs: await relevantDoc?.text(),
    //     description,
    //   });
    //   const path = `./src/detection/generated/${pathSoFar.replace(
    //     /\./g,
    //     '/',
    //   )}${hasNestedFeatures ? '/index' : ''}.json`;
    //   if (detectionStub) {
    //     console.log(`writing ${path}`);
    //     await Bun.write(path, detectionStub);
    //   }
    // }
  }
};

recurseFeatures();
