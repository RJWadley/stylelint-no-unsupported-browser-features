# stylelint-no-unsupported-browser-features

[![build status][build-badge]][build-url]
[![coverage status][coverage-badge]][coverage-url]
[![greenkeeper][greenkeeper-badge]][greenkeeper-url]

> disallow features that aren't supported by your target browser audience

![screenshot](https://i.imgur.com/YVrqG6P.png)

This plugin checks if the CSS you're using is supported by the browsers you're targeting.
It uses [doiuse](https://github.com/anandthakker/doiuse) to detect browser support. Doiuse itself
checks your code against the [caniuse](http://caniuse.com/) database and uses
[browserslist](https://github.com/ai/browserslist) to get the list of browsers you want to support. 
Doiuse and this plugin are only compatible with standard css syntax, so syntaxes like `scss`,
`less` and others aren't supported.

## Installation

```bash
$ npm install stylelint-no-unsupported-browser-features
```

Stylelint is a [peerdependency](https://nodejs.org/en/blog/npm/peer-dependencies/) of this plugin,
so you'll have to install stylelint as well:

```bash
$ npm install stylelint
```

## Usage

1. Add `"stylelint-no-unsupported-browser-features"` to your stylelint config plugins array
2. Add `"plugin/no-unsupported-browser-features"` to your stylelint config rules
3. Enable the rule by setting it to `true`, or pass optional extra configuration

## Options

* `browsers`: optional. Accepts an array of browsers you want to support. For example `['> 1%', 'Last 2 versions']`. See [browserslist](https://github.com/ai/browserslist) for documentation.
* `ignore`: optional. Accepts an array of features to ignore. For example: `['rem', 'css-table']`. Feature names can be found in the error messages.

So for example, in a `.stylelintrc`:

```json
{
  "plugins": [
    "stylelint-no-unsupported-browser-features"
  ],
  "rules": {
    "plugin/no-unsupported-browser-features": [true, {
      "browsers": ["> 1%", "Last 2 versions"],
      "ignore": ["rem"]
    }]
  }
}
```

## Recommendations

This is a good rule to use with "warning"-level severity, because its primary purpose is to warn you
that you are using features not all browsers fully support and therefore ought to provide fallbacks.
But the warning will continue even if you have a fallback in place (it doesn't know); so you
probably do not want this rule to break your build. Instead, consider it a friendly reminder to
double-check certain spots for fallbacks.

Also, doiuse uses browserslist to get the list of browsers you want to support. Browserslist accepts a `browserslist` file at the root of your project with a list of browsers that you want to support. Since there are other projects that can use this file (like [autoprefixer](https://github.com/postcss/autoprefixer) or [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)) the simplest solution
is to just define your intended browser support there (note that there are a lot of different ways
to define this list, so check out the browserslist documentation for more options).

For the above setup you could use the following config:

`./.stylelintrc`

```json
{
  "plugins": [
    "stylelint-no-unsupported-browser-features"
  ],
  "rules": {
    "plugin/no-unsupported-browser-features": [true, {
      "severity": "warning"
    }]
  }
}
```

`./browserslist`:

```text
> 5%
Last 2 versions
```

## License

[MIT](http://ismay.mit-license.org/)

[build-badge]: https://travis-ci.com/ismay/stylelint-no-unsupported-browser-features.svg?branch=master
[build-url]: https://travis-ci.com/ismay/stylelint-no-unsupported-browser-features
[greenkeeper-badge]: https://badges.greenkeeper.io/ismay/stylelint-no-unsupported-browser-features.svg
[greenkeeper-url]: https://greenkeeper.io/
[coverage-badge]: https://coveralls.io/repos/github/ismay/stylelint-no-unsupported-browser-features/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/ismay/stylelint-no-unsupported-browser-features?branch=master
