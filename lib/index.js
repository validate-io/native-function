'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' ),
	re = require( 'regex-native-function' );


// FUNCTIONS //

var fcn2str = Function.prototype.toString;


// NATIVE FUNCTION //

/**
* FUNCTION: isNative( value )
*	Validates if a value is a native function.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if an input value is a native function
*/
function isNative( value ) {
	if ( !isFunction( value ) ) {
		return false;
	}
	// Using `Function#toString` bypasses a value's own `toString` method to provide an extra, but not security proof, precaution to prevent a provided function from impersonating a native function...
	return re.test( fcn2str.call( value ) );
} // end FUNCTION isNative()


// EXPORTS //

module.exports = isNative;
