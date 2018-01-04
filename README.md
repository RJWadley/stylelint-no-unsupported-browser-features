# stylelint-no-unsupported-browser-features

[![npm version][version-badge]][version-url]
[![build status][build-badge]][build-url]
[![greenkeeper status][greenkeeper-badge]][greenkeeper-url]
[![downloads][downloads-badge]][downloads-url]

> disallow features that aren't supported by your target browser audience

![screenshot](https://i.imgur.com/YVrqG6P.png)

This plugin checks if the CSS you're using is supported by the browsers you're targeting.
It uses [doiuse](https://github.com/anandthakker/doiuse) to detect browser support. Doiuse itself
checks your code against the [caniuse](http://caniuse.com/) database and uses
[browserslist](https://github.com/ai/browserslist) to get the list of browsers you want to support. 
Doiuse and this plugin are only compatible with standard css syntax, so syntaxes like `scss`,
`less` and others aren't supported.

## install

```shell
npm i -D stylelint-no-unsupported-browser-features stylelint
```

Stylelint is a [peerdependency](https://nodejs.org/en/blog/npm/peer-dependencies/) of this plugin,
so you'll have to install stylelint as well.

## usage

1. Add `"stylelint-no-unsupported-browser-features"` to your stylelint config plugins array
2. Add `"plugin/no-unsupported-browser-features"` to your stylelint config rules
3. Enable the rule by setting it to `true`, or pass optional extra configuration

## options

* `browsers` (optional): accepts an array of browsers you want to support. For example
  `['> 1%', 'Last 2 versions']`. See [browserslist](https://github.com/ai/browserslist) for documentation.
* `ignore` (optional): accept an array of features to ignore. For example: `['rem', 'css-table']`.
  Feature names can be found in the error messages.

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

## recommendations

This is a good rule to use with "warning"-level severity, because its primary purpose is to warn you
that you are using features not all browsers fully support and therefore ought to provide fallbacks.
But the warning will continue even if you have a fallback in place (it doesn't know); so you
probably do not want this rule to break your build. Instead, consider it a friendly reminder to
double-check certain spots for fallbacks.

Also, doiuse uses browserslist to get the list of browsers you want to support. Browserslist accepts a
`browserslist` file at the root of your project with a list of browsers that you want to support. Since
there are other projects that can use this file (like [autoprefixer](https://github.com/postcss/autoprefixer)
or [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)) the simplest solution
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

## license

[MIT](http://ismay.mit-license.org/)

[build-badge]: https://travis-ci.org/ismay/stylelint-no-unsupported-browser-features.svg?branch=master
[build-url]: https://travis-ci.org/ismay/stylelint-no-unsupported-browser-features
[greenkeeper-badge]: https://badges.greenkeeper.io/ismay/stylelint-no-unsupported-browser-features.svg
[greenkeeper-url]: https://greenkeeper.io/
[downloads-badge]: https://img.shields.io/npm/dm/stylelint-no-unsupported-browser-features.svg
[downloads-url]: https://www.npmjs.com/package/stylelint-no-unsupported-browser-features
[version-badge]: https://img.shields.io/npm/v/stylelint-no-unsupported-browser-features.svg
[version-url]: https://www.npmjs.com/package/stylelint-no-unsupported-browser-features
