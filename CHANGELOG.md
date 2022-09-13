## [5.0.4](https://github.com/ismay/stylelint-no-unsupported-browser-features/compare/v5.0.3...v5.0.4) (2022-09-13)


### Bug Fixes

* **postcss:** upgrade postcss to latest to address user upgrade errors ([a4dce08](https://github.com/ismay/stylelint-no-unsupported-browser-features/commit/a4dce08f49b2edba86806ed145fa65c688ff8320))

## [5.0.3](https://github.com/ismay/stylelint-no-unsupported-browser-features/compare/v5.0.2...v5.0.3) (2022-02-19)


### Bug Fixes

* fix detecting a mix of supported/unsupported rules ([9c63dd0](https://github.com/ismay/stylelint-no-unsupported-browser-features/commit/9c63dd04d93ad64acd52b28b66a6cddd5ce22dc0))

## [5.0.2](https://github.com/ismay/stylelint-no-unsupported-browser-features/compare/v5.0.1...v5.0.2) (2021-09-13)


### Bug Fixes

* **deps:** increment postcss version ([b50dc11](https://github.com/ismay/stylelint-no-unsupported-browser-features/commit/b50dc11dac853e73f91c8d5bf26439110c90e0f0))

## [5.0.1](https://github.com/ismay/stylelint-no-unsupported-browser-features/compare/v5.0.0...v5.0.1) (2021-05-22)


### Bug Fixes

* **installation:** remove husky lifecycle script ([cb081ab](https://github.com/ismay/stylelint-no-unsupported-browser-features/commit/cb081ab84c3deaacd2713264b23360c269342150))

# [5.0.0](https://github.com/ismay/stylelint-no-unsupported-browser-features/compare/v4.1.4...v5.0.0) (2021-05-22)


### Bug Fixes

* **dependencies:** fix doiuse warning ([c79336f](https://github.com/ismay/stylelint-no-unsupported-browser-features/commit/c79336fb1418d793a1d9887272c6faae791ae8d6)), closes [#149](https://github.com/ismay/stylelint-no-unsupported-browser-features/issues/149)


### Code Refactoring

* **support:** drop support for node 10 ([72e07bc](https://github.com/ismay/stylelint-no-unsupported-browser-features/commit/72e07bca6918775bd8795cc4f220d9b3cdc9b119))
* **support:** drop support for stylelint v11 and v12 ([4d5a108](https://github.com/ismay/stylelint-no-unsupported-browser-features/commit/4d5a1083cd512e0a775e5e5b8ab82097979d417f))


### BREAKING CHANGES

* **support:** support for node 10 dropped
* **support:** support for stylelint v11, v12 dropped

### 4.1.4

* update doiuse to fix yargs vulnerability warning

### 4.1.3

* update ignorePartialSupport option validation

### 4.1.2

* fix ignorePartialSupport type error when secondary options were omitted

### 4.1.1

* patch: bump postcss from 7.0.35 to 8.1.4

### 4.1.0

* feature `ignorePartialSupport` added (default: `false`). When enabled: 
  * Rules that only trigger partial violations will be ignored.
  * Rules that trigger both partial and full violations will only report on the full support violations.
  * Rules that trigger only full support violations will not be affected.

### 4.0.0

* upgrade dependencies
* BREAKING: dropped support for node 6 and 8

### 3.0.2

* update doiuse to v4.2.0

### 3.0.1

* update postcss to v7.0.0

### 3.0.0
* breaking: dropped node 4 support
* breaking: updated doiuse to 4.1.0 (underlying browserslist update might break builds)
* moved to stylelint 9 for testing

### 2.0.0
* move stylelint to peerdependencies

### 1.0.1
* bugfix: choked on parsing less with import statements, fixed by upgrading to doiuse 4.0.0

### 1.0.0
* update to doiuse 3.0.0

### 0.1.1
* update to postcss 6.0.1

### 0.1.0
* initial release
