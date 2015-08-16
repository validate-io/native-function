Native Function
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a native function.


## Installation

``` bash
$ npm install validate.io-native-function
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isNative = require( 'validate.io-native-function' );
```

#### isNative( value )

Validates if a `value` is a native `function`.

``` javascript
var bool = isNative( Math.sqrt );
// returns true
```


## Examples

``` javascript
var isNative = require( 'validate.io-native-function' );

console.log( isNative( Math.sqrt ) );
// returns true

console.log( isNative( String ) );
// returns true

console.log( isNative( Object.prototype.toString ) );
// returns true

console.log( isNative( Int16Array ) );
// returns true

console.log( isNative( function(){} ) );
// returns false

console.log( isNative( null ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-native-function.svg
[npm-url]: https://npmjs.org/package/validate.io-native-function

[travis-image]: http://img.shields.io/travis/validate-io/native-function/master.svg
[travis-url]: https://travis-ci.org/validate-io/native-function

[codecov-image]: https://img.shields.io/codecov/c/github/validate-io/native-function/master.svg
[codecov-url]: https://codecov.io/github/validate-io/native-function?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/native-function.svg
[dependencies-url]: https://david-dm.org/validate-io/native-function

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/native-function.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/native-function

[github-issues-image]: http://img.shields.io/github/issues/validate-io/native-function.svg
[github-issues-url]: https://github.com/validate-io/native-function/issues
