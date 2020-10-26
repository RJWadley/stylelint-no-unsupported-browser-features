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
