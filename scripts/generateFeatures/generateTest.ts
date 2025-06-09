import { google } from '@ai-sdk/google';
import { asyncQueue, queue } from '@tanstack/pacer';
import { generateText, type GenerateObjectResult } from 'ai';
import { $, sleep } from 'bun';
import { z } from 'zod';
import { dedent, wrapToWidth } from './dedent';
import TurndownService from 'turndown';
import logUpdate from 'log-update';

const STOP_FOR_TESTS = true;

const inProgressLogs = new Map<string, string>();
const finishedLogs: string[] = [];
let totalCost = 0;

function updateScreen() {
  const progressLines = Array.from(inProgressLogs.entries()).map(
    ([id, status]) => `[IN PROGRESS] ${id}: ${status.replaceAll('\n', ' ')}`,
  );

  const totalCostLine = `\nTotal cost: $${totalCost.toFixed(3)}`;

  logUpdate([...finishedLogs, ...progressLines, totalCostLine].join('\n'));
}

function logProgress(id: string, message: string) {
  inProgressLogs.set(id, message);
  updateScreen();
}

function logFinished(id: string, cost: number) {
  const status = inProgressLogs.get(id) || 'Unknown status';
  finishedLogs.push(`[SUCCESS] ${id}: ${status.replaceAll('\n', ' ')} ($${cost.toFixed(3)})`);
  inProgressLogs.delete(id);
  totalCost += cost;
  updateScreen();
}

function logFailed(id: string, error: Error) {
  const status = inProgressLogs.get(id) || 'Unknown status';
  finishedLogs.push(
    `[FAILED] ${id}: ${status.replaceAll('\n', ' ')}. Error: ${error.message.replaceAll('\n', ' ')}`,
  );
  inProgressLogs.delete(id);
  updateScreen();
}

var turndownService = new TurndownService();

let priceTotal = 0;

const modelInfo = {
  model: google('gemini-2.5-flash-preview-05-20'),
  inputPerMillionTokens: 0.15,
  outputPerMillionTokens: 0.6,
};

const ruleAdvice = `### Write tests

You should add test cases for all patterns that are:

- considered problems
- _not_ considered problems

You should use:

- realistic CSS, avoiding the use of ellipses
- the minimum amount of code possible, e.g. use an empty rule if targeting selectors
- \`{}\` for empty rules, rather than \`{ }\`
- the \`a\` type selector by default
- the \`@media\` at-rules by default
- the \`color\` property by default
- the \`red\` value by default
- the \`(min-)width\` media feature by default
- the \`example.org\` URL by default
- _foo_, _bar_ and _baz_ for names, e.g. \`.foo\`, \`#bar\`, \`--baz\`

You should:

- vary column and line positions across your tests
- include at least one test that has 2 warnings
- test non-standard syntax in the \`isStandardSyntax*\` utilities, not in the rule itself

#### Commonly overlooked edge-cases

You should ask yourself how does your rule handle:

- variables (e.g. \`var(--custom-property)\`)?
- CSS-wide keywords (e.g. \`initial\`)?
- CSS strings (e.g. \`content: "anything goes";\`)?
- CSS comments (e.g. \`/* anything goes */\`)?
- empty functions (e.g. \`var()\`)?
- \`url()\` functions, including data URIs (e.g. \`url(anything/goes.jpg)\`)?
- vendor prefixes (e.g. \`@-webkit-keyframes name {}\`)?
- case sensitivity (e.g. \`@KEYFRAMES name {}\`)?
- a pseudo-class _combined_ with a pseudo-element (e.g. \`a:hover::before\`)?
- nesting (e.g. do you resolve \`& a {}\`, or check it as is?)?
- whitespace and punctuation (e.g. comparing \`rgb(0,0,0)\` with \`rgb(0, 0, 0)\`)?
`;

const testSchema = z.object({
  tests: z.array(
    z.object({
      test_name: z.string().describe('e.g. "should blah blah blah"'),
      description: z
        .string()
        .describe('describe what you are testing and any edge cases it could catch'),
      code: z.string(),
      featureCount: z.object({
        '-webkit-': z.number(),
        '-moz-': z.number(),
        '-ms-': z.number(),
        '-o-': z.number(),
        unprefixed: z.number(),
      }),
    }),
  ),
  happyWithTests: z
    .boolean()
    .describe(
      'if true, will save tests and continue. if false, will let you rewrite these tests from scratch. are you happy with the tests? do you see any mistakes or missed edge cases?',
    ),
});

const generateTest = async ({
  filePath,
  id,
  docsLink,
  docsText,
  specLink,
  getSpecText,
}: {
  // where this test will be written
  filePath: string;
  // the feature id
  id: string;
  // mdn details
  docsLink: string | undefined;
  docsText: string | undefined;
  // spec details
  specLink: string | undefined;
  getSpecText: undefined | (() => Promise<string | undefined>);
}) => {
  const spec = await getSpecText?.().then((html) =>
    html ? turndownService.turndown(html) : undefined,
  );

  const result = await generateText({
    seed: 420_69_69,
    maxRetries: 0,
    prompt: dedent`
      You are writing tests for @rjwadley/stylelint-no-unsupported-browser-features.
    
      The feature you will be testing is ${id}.
    
      # Rule Documentation
      Here is the MDN documentation for the feature you are testing:
      ${docsText || 'MDN does not have documentation for this feature.'}
    
      # Relevant Spec
      Here is the relevant spec for the feature you are testing:
      ${spec || 'No spec is available.'}
    
      # Generic Stylelint Advice
      Here is stylelint's advice for writing tests:
      ${ruleAdvice}
    
      # Testing Utility
      Each test has multiple parameters: a test name, a clear description of what you are hoping to catch, the CSS code to test, and a \`featureCount\` object. The \`featureCount\` object specifies the expected number of times a feature is detected, broken down by vendor prefix.
    
      # An Important Note
      Some features are targeted to specific property-value-pairs. Others apply to any value for the property.
      Make sure you are specific enough to catch all the cases correctly.
      be sure to include a clear description of what you are hoping to catch
    
      # Counting Prefixes
      The \`featureCount\` object tracks the number of times a feature is detected for each vendor prefix.
      For example, if we had a test for transitions:
      \`\`\`css
      -webkit-transition: all 4s ease;
      -moz-transition: all 4s ease;
      transition: all 4s ease;
      \`\`\`
      In this case, the total feature count would be 3.
      The \`featureCount\` object would be:
      {
        "-webkit-": 1,
        "-moz-": 1,
        "-ms-": 0,
        "-o-": 0,
        "unprefixed": 1
      }
      \`\`\`
    
      # Display Contexts
      Some features have different meanings in different display contexts.
      For example, \`align-items: start\` has different support in flex and grid contexts.
      Be sure to include tests for relevant display contexts. 
      CAVEAT: This plugin intentionally only checks the same rule for display contexts.
      This, for example, would treat align-items as part of a flex context:
      \`\`\`css
      .foo {
        display: flex;
        align-items: start; /* detected in flex context, note how this is in the same rule */
      }
      \`\`\`
      However, a selector starting with '&' that refers to a **pseudo-class** (a different state of the same element) **is** considered to be in the same context:
      \`\`\`css
      .foo {
        display: flex;
        &:hover { /* targets the same element */
          align-items: start; /* detected */
        }
      }
      \`\`\`
      Conversely, a selector that introduces a **new element** (like a child selector or a pseudo-element) does **not** inherit the parent's context:
      \`\`\`css
      .foo {
        display: flex;
        & .bar { /* targets a child, not the parent */
          align-content: start; /* undetected */
        }
        &::before { /* this is a new element */
          align-content: start; /* undetected */
        }
      }
      \`\`\`
      Although the default context is usually \`block\`, it is impossible to reliably determine this for certain at check time.
      So we only report \`block\` context when it is defined explicitly:
      \`\`\`css
      .foo {
        display: block;
        align-items: center; /* detected in block context */
      }
      .bar {
        align-items: center; /* not detected */
      }
      \`\`\`
      This does make it impossible to determine a context for some properties.
      For example, \`place-self\` affects grid/flex items, which means we could never determine a context for it.
      In those cases, simply test the property as a whole:
      \`\`\`css
      .foo {
        place-self: start; /* should report regardless of context */
      }
      \`\`\`
    
      # Testing with @supports
      Be sure to include tests within a \`@supports\` query. Our checker uses a very strict, conservative heuristic: it only considers a feature "guarded" if the \`@supports\` query checks for the **exact property and value** being used. It does not attempt to understand contextual or indirect relationships.
    
      If we were testing \`align-content: stretch\`:
    
      *   **This IS guarded (count: 0):** The \`@supports\` query is an exact match for the declaration.
          \`\`\`css
          @supports (align-content: stretch) {
            .foo {
              align-content: stretch;
            }
          }
          \`\`\`
    
      *   **This is NOT guarded (count: 1):** The \`@supports\` query is for a different property (\`display: flex\`). Our checker does not infer that \`display: flex\` "enables" \`align-content\`.
          \`\`\`css
          @supports (display: flex) {
            .foo {
              align-content: stretch;
            }
          }
          \`\`\`
    
      *   **This is NOT guarded (count: 1):** The \`@supports\` query is for the same property but a *different value*.
          \`\`\`css
          @supports (align-content: center) {
            .foo {
              align-content: stretch;
            }
          }
          \`\`\`
    
      # Handling Special Values (CSS Variables and Keywords)
      Our checker handles special CSS values like variables (\`var()\`) and keywords (\`initial\`, \`unset\`) very conservatively because we cannot determine their resolved value at static analysis time. Your tests must reflect this.

      **Rule for \`var()\`:** We NEVER resolve CSS variables. How you test \`var()\` depends on the feature being tested:

      *   **If the feature is for a specific *value* (e.g., \`align-content: start\` or \`anchor-scope: all\`):**
          *   A declaration using \`var()\` should NOT be flagged. We cannot know if the variable contains the specific value.
          *   **Correct Test (count: 0):**
              \`\`\`css
              .foo {
                --my-value: all;
                anchor-scope: var(--my-value);
              }
              \`\`\`

      *   **If the feature is for a property *in general* (e.g., any usage of the \`anchor-scope\` property):**
          *   A declaration using \`var()\` SHOULD be flagged. The variable *could* resolve to an unsupported value, so we must be conservative and report it.
          *   **Correct Test (count: 1):**
              \`\`\`css
              .foo {
                --my-value: all;
                anchor-scope: var(--my-value);
              }
              \`\`\`

      **Rule for Keywords (\`initial\`, \`unset\`, etc.):**
      *   These are handled on a case-by-case basis. For some features, they might be equivalent to a value we check for. For others, they might not be. Your tests should include cases for these keywords to ensure they are handled correctly, but you will need to infer the expected behavior from the documentation.

      # Non-CSS features
      Although I've done my best to only provide CSS features, there are a few non-CSS features that I've missed.
      I've provided a function you can call if you encounter one.
    
      Be as exhaustive as possible in your tests. Good luck!
    `,
    model: modelInfo.model,
    toolChoice: 'required',
    tools: {
      notACSSFeature: {
        // write a stub file
        parameters: z.object({
          justification: z
            .string()
            .describe('what is this feature? why cant you write tests for it?'),
          isTestableCSSFeature: z.boolean(),
        }),
        execute: async ({
          justification,
          isTestableCSSFeature,
        }: {
          justification: string;
          isTestableCSSFeature: boolean;
        }) => {
          // if the model called this before realizing it should be tested, we want to continue generating
          if (isTestableCSSFeature) return;

          await Bun.write(
            filePath,
            wrapToWidth(dedent`
              /* AUTO_GENERATED: true */
              
              /* 
              feature: ${id}

              docs: ${docsLink ?? 'no link provided'}
              spec: ${specLink ?? 'no link provided'}
              */

              // not-a-css-feature

              /*
              ${justification}
              */

              import { expect, test } from 'vitest';

              test('no tests', () => {
                expect(true).toBe(true);
              });
            `),
          );

          return 'success';
        },
      },
      updateTests: {
        parameters: testSchema,
        execute: async ({ tests, happyWithTests }: z.infer<typeof testSchema>) => {
          if (!happyWithTests) {
            logProgress(id, 'model was not happy with tests, retrying...');
            return;
          }

          const code =
            'import { testRule } from "lib/testRule";\n\n' +
            tests
              .map(
                ({ code, description, featureCount, test_name }) => dedent`
              /**
               * ${description}
               */
              testRule({
                featureId: '${id}',
                description: ${JSON.stringify(test_name)},
                code: \`
                  ${code.replaceAll('\n', '\n                ').replaceAll('`', "'")}
                \`,
                featureCount: ${JSON.stringify(featureCount)},
              });
            `,
              )
              .join('\n\n');

          await Bun.write(
            filePath,
            dedent`
              /* AUTO_GENERATED: true */

              /* 
              feature: ${id}
              docs: ${docsLink ?? 'no link provided'}
              spec: ${specLink ?? 'no link provided'}
              */
            ` +
              '\n' +
              dedent`${code}`,
          );

          return 'success';
        },
      },
    },
    continueUntil: ({ steps }) => {
      return steps.at(-1)?.toolResults.at(-1)?.result === 'success';
    },
  });

  try {
    await $`bunx prettier --write ${filePath}`;
  } catch {}

  if (STOP_FOR_TESTS) {
    await $`bun run test`.catch(() => {
      process.exit(1);
    });
  }

  const inputPricePerToken = modelInfo.inputPerMillionTokens / 1_000_000;
  const outputPricePerToken = modelInfo.outputPerMillionTokens / 1_000_000;

  const outputTokens = result.totalUsage.outputTokens ?? 0;
  const inputTokens = result.totalUsage.inputTokens ?? 0;

  const cost = outputTokens * outputPricePerToken + inputTokens * inputPricePerToken;
  priceTotal += cost;

  logProgress(id, `generated, which cost $${cost.toFixed(3)}`);

  return cost;
};

const generateTestWithFallback = async (
  ...args: Parameters<typeof generateTest>
): Promise<number> => {
  const id = args[0].id;
  return generateTest(...args).catch(async (e) => {
    if (e instanceof Error) {
      if ('statusCode' in e && e.statusCode === 429) {
        logProgress(id, `Rate limited, waiting 10s... (${new Date().toLocaleTimeString()})`);
        await sleep(10_000);
        return generateTestWithFallback(...args);
      }
      if (e.name === 'AI_APICallError') {
        logProgress(id, `Generation failed: ${e.message}, retrying...`);
        return generateTestWithFallback(...args);
      }
    }

    throw e;
  });
};

const initiateGeneration = async (...args: Parameters<typeof generateTest>) => {
  // first things first! check if the file already exists
  // if it does, we don't need to generate it
  const file = Bun.file(args[0].filePath);
  if (await file.exists()) return;

  const id = args[0].id;

  logProgress(id, 'starting test generation...');
  try {
    const cost = await generateTestWithFallback(...args);
    logFinished(id, cost);
  } catch (e) {
    if (e instanceof Error) {
      logFailed(id, e);
    } else {
      logFailed(id, new Error(String(e)));
    }
  }
};

export const queueTestGeneration = asyncQueue(initiateGeneration, {
  concurrency: STOP_FOR_TESTS ? 1 : 5,
});
